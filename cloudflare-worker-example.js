// Cloudflare Worker example using the WordPress API client
// This demonstrates how to use the WordPress client in a Cloudflare Worker

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS headers for cross-origin requests
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
      // WordPress API configuration
      const WORDPRESS_API_URL = env.WORDPRESS_API_URL || 'https://www.bhhscp.com/wp-json/wp/v2';
      
      let response;
      
      // Route handling
      if (url.pathname === '/api/posts') {
        response = await fetchPosts(WORDPRESS_API_URL, url.searchParams);
      } else if (url.pathname.startsWith('/api/posts/')) {
        const slug = url.pathname.split('/').pop();
        response = await fetchPostBySlug(WORDPRESS_API_URL, slug);
      } else if (url.pathname === '/api/categories') {
        response = await fetchCategories(WORDPRESS_API_URL);
      } else {
        response = new Response('Not Found', { status: 404 });
      }

      // Add CORS headers to response
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

// Helper functions that mirror your WordPress client functionality
async function fetchPosts(apiUrl, searchParams) {
  const params = new URLSearchParams({
    _embed: 'true',
    per_page: searchParams.get('per_page') || '10',
    page: searchParams.get('page') || '1',
    orderby: searchParams.get('orderby') || 'date',
    order: searchParams.get('order') || 'desc',
  });

  // Add optional filters
  if (searchParams.get('categories')) params.set('categories', searchParams.get('categories'));
  if (searchParams.get('tags')) params.set('tags', searchParams.get('tags'));
  if (searchParams.get('search')) params.set('search', searchParams.get('search'));

  const response = await fetch(`${apiUrl}/posts?${params}`, {
    headers: {
      'User-Agent': 'WordPress-Client/1.0 (Cloudflare-Worker)',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
  }

  return new Response(JSON.stringify(await response.json()), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function fetchPostBySlug(apiUrl, slug) {
  const response = await fetch(`${apiUrl}/posts?slug=${slug}&_embed=true`, {
    headers: {
      'User-Agent': 'WordPress-Client/1.0 (Cloudflare-Worker)',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status} ${response.statusText}`);
  }

  const posts = await response.json();
  const post = posts.length > 0 ? posts[0] : null;

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function fetchCategories(apiUrl) {
  const response = await fetch(`${apiUrl}/categories?per_page=100`, {
    headers: {
      'User-Agent': 'WordPress-Client/1.0 (Cloudflare-Worker)',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
  }

  return new Response(JSON.stringify(await response.json()), {
    headers: { 'Content-Type': 'application/json' }
  });
}
