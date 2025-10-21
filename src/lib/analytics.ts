import { track } from '@vercel/analytics';

export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export const trackEvent = (eventName: string, properties: AnalyticsEvent) => {
  try {
    track(eventName, properties);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Menu interaction tracking
export const trackMenuClick = (item: string, path: string) => {
  trackEvent('menu_click', {
    action: 'menu_click',
    item,
    path,
    timestamp: new Date().toISOString(),
  });
};

// Property interaction tracking
export const trackPropertyView = (property: {
  price?: string;
  area?: string;
  type?: string;
  id?: string;
}) => {
  trackEvent('property_view', {
    action: 'property_view',
    price: property.price,
    area: property.area,
    type: property.type,
    id: property.id,
    timestamp: new Date().toISOString(),
  });
};

// Search interaction tracking
export const trackSearchQuery = (query: string, results?: number) => {
  trackEvent('search_query', {
    action: 'search_query',
    query,
    results_count: results,
    timestamp: new Date().toISOString(),
  });
};

// Home value form tracking
export const trackHomeValueSubmit = (address?: string) => {
  trackEvent('home_value_submit', {
    action: 'home_value_submit',
    address: address ? 'provided' : 'partial',
    timestamp: new Date().toISOString(),
  });
};

// Assessment tracking
export const trackAssessmentStart = (type: 'buyer' | 'seller') => {
  trackEvent('assessment_start', {
    action: 'assessment_start',
    type,
    timestamp: new Date().toISOString(),
  });
};

export const trackAssessmentComplete = (type: 'buyer' | 'seller', score: number) => {
  trackEvent('assessment_complete', {
    action: 'assessment_complete',
    type,
    score,
    timestamp: new Date().toISOString(),
  });
};

// Blog post tracking
export const trackBlogClick = (postTitle: string, source: 'kcm' | 'custom') => {
  trackEvent('blog_click', {
    action: 'blog_click',
    post_title: postTitle,
    source,
    timestamp: new Date().toISOString(),
  });
};

// Contact form tracking
export const trackContactForm = (source: string, formType: string) => {
  trackEvent('contact_form', {
    action: 'contact_form',
    source,
    form_type: formType,
    timestamp: new Date().toISOString(),
  });
};

// Widget interaction tracking
export const trackWidgetInteraction = (widgetType: string, action: string) => {
  trackEvent('widget_interaction', {
    action: 'widget_interaction',
    widget_type: widgetType,
    widget_action: action,
    timestamp: new Date().toISOString(),
  });
};

