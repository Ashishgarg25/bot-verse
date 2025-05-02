export const GA_TRACKING_ID = 'G-6H7103ERNR'; // Replace with your GA ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
