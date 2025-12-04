import { track } from '@vercel/analytics';

// Custom event types
export type AnalyticsEvent =
  | 'form_submitted'
  | 'form_error'
  | 'project_viewed'
  | 'project_clicked'
  | 'navigation_clicked'
  | 'theme_toggled'
  | 'language_toggled';

interface EventProperties {
  [key: string]: string | number | boolean;
}

/**
 * Track a custom analytics event
 * @param event - The event name
 * @param properties - Additional event properties
 */
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  if (typeof window === 'undefined') return;

  try {
    track(event, properties);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

/**
 * Track form submission
 */
export function trackFormSubmission(success: boolean, language: string) {
  trackEvent(success ? 'form_submitted' : 'form_error', {
    success,
    language,
    timestamp: Date.now(),
  });
}

/**
 * Track project interaction
 */
export function trackProjectView(projectName: string) {
  trackEvent('project_viewed', {
    project: projectName,
    timestamp: Date.now(),
  });
}

/**
 * Track project click (external link)
 */
export function trackProjectClick(projectName: string, url: string) {
  trackEvent('project_clicked', {
    project: projectName,
    url,
    timestamp: Date.now(),
  });
}

/**
 * Track navigation
 */
export function trackNavigation(page: string) {
  trackEvent('navigation_clicked', {
    page,
    timestamp: Date.now(),
  });
}

/**
 * Track theme toggle
 */
export function trackThemeToggle(theme: string) {
  trackEvent('theme_toggled', {
    theme,
    timestamp: Date.now(),
  });
}

/**
 * Track language toggle
 */
export function trackLanguageToggle(language: string) {
  trackEvent('language_toggled', {
    language,
    timestamp: Date.now(),
  });
}
