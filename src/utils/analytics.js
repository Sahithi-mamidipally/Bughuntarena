import { AnalyticsBrowser } from '@segment/analytics-next';

// Replace YOUR_WRITE_KEY with your actual Segment write key
export const analytics = AnalyticsBrowser.load({
    writeKey: 'YOUR_WRITE_KEY'
});

// Helper functions for tracking
export const trackEvent = (eventName, properties = {}) => {
    analytics.track(eventName, properties);
};

export const identifyUser = (userId, traits = {}) => {
    analytics.identify(userId, traits);
};

export const pageView = (name, properties = {}) => {
    analytics.page(name, properties);
};