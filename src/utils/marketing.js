// Analytics and tracking utilities
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties);
  }
  
  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: properties });
  }
};

// Social sharing utilities
export const shareContent = async (platform, content) => {
  const shareData = {
    title: content.title,
    text: content.description,
    url: content.url,
  };

  try {
    if (navigator.share && platform === 'native') {
      await navigator.share(shareData);
      return true;
    }

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title)}&url=${encodeURIComponent(content.url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(content.url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(content.url)}`
    };

    window.open(shareUrls[platform], '_blank');
    return true;
  } catch (error) {
    console.error('Error sharing content:', error);
    return false;
  }
}; 