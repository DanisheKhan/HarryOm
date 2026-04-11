import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoByPath = {
  '/': {
    title: 'Harryy Om | Soul Guidance by Harmeet Singh',
    description:
      'Spiritual teachings, meditation practices, and digital-age soul guidance by Harmeet Singh Chandhoke (Harryy Om).',
  },
  '/about': {
    title: 'About Harryy Om | Harmeet Singh Chandhoke',
    description:
      'Learn the journey of Harmeet Singh Chandhoke and his mission to support mental wellbeing and spirituality for modern life.',
  },
  '/soul-guide': {
    title: 'Soul Guide Book | Living Right in the Digital Age',
    description:
      'Explore the Soul Guide book, chapter insights, and practical spiritual tools for Gen Z and young professionals.',
  },
  '/quotes': {
    title: 'Quotes and Wisdom | Harryy Om',
    description:
      'Read uplifting spiritual quotes and mindful reflections from Harryy Om for clarity, peace, and daily inspiration.',
  },
  '/connect': {
    title: 'Connect with Harryy Om',
    description:
      'Contact Harryy Om for updates, collaborations, and spiritual guidance resources.',
  },
};

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setPropertyMeta(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const seo = seoByPath[path] || seoByPath['/'];
    const canonicalUrl = `${window.location.origin}${path}`;

    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('robots', 'index, follow');

    setPropertyMeta('og:type', 'website');
    setPropertyMeta('og:title', seo.title);
    setPropertyMeta('og:description', seo.description);
    setPropertyMeta('og:url', canonicalUrl);
    setPropertyMeta('og:image', `${window.location.origin}/HarryOmLogo.png`);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setMeta('twitter:image', `${window.location.origin}/HarryOmLogo.png`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
};

export default SeoManager;
