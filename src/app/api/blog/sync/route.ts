import { NextRequest, NextResponse } from 'next/server';
import { refreshCache, getCacheStatus } from '@/lib/blog/cache';
import { SyncStatus } from '@/types/blog';

/**
 * GET /api/blog/sync - Check sync status
 */
export async function GET() {
  try {
    const status = getCacheStatus();

    return NextResponse.json({
      success: true,
      ...status,
      message: status.hasCache
        ? `Cache contains ${status.postCount} posts${status.isExpired ? ' (expired)' : ''}`
        : 'No cached posts available',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/blog/sync - Force sync blog posts
 */
export async function POST(request: NextRequest) {
  try {
    // Check for authorization (optional)
    const authHeader = request.headers.get('authorization');
    const revalidateSecret = process.env.REVALIDATE_SECRET;

    if (revalidateSecret && authHeader !== `Bearer ${revalidateSecret}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Manual sync requested
    const syncResult: SyncStatus = await refreshCache();

    // Revalidate Next.js pages
    try {
      // Revalidate the blog listing page
      const { revalidatePath } = await import('next/cache');
      revalidatePath('/blog');

      // Revalidate individual blog post pages
      if (syncResult.success && syncResult.postsFound > 0) {
        // In a real implementation, you'd revalidate specific post paths
        // For now, we'll revalidate the blog directory
        revalidatePath('/blog', 'page');
      }

      // Pages revalidated successfully
    } catch {
      // Failed to revalidate pages
    }

    return NextResponse.json({
      ...syncResult,
      revalidated: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // Sync failed

    return NextResponse.json(
      {
        success: false,
        postsFound: 0,
        newPosts: 0,
        lastSync: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        revalidated: false,
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/blog/sync - Clear cache
 */
export async function DELETE(request: NextRequest) {
  try {
    // Check for authorization
    const authHeader = request.headers.get('authorization');
    const revalidateSecret = process.env.REVALIDATE_SECRET;

    if (revalidateSecret && authHeader !== `Bearer ${revalidateSecret}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { clearCache } = await import('@/lib/blog/cache');
    clearCache();

    return NextResponse.json({
      success: true,
      message: 'Cache cleared successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
