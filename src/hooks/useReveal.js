import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger animations when elements enter the viewport
 * using the Intersection Observer API.
 * 
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {number} options.rootMargin - Margin around the root element
 * @param {boolean} options.triggerOnce - Whether to only trigger animation once (default: true)
 * @returns {[React.RefObject, boolean]} - Ref to attach to element, isVisible state
 */
const useReveal = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already visible and should only trigger once, don't observe
    if (isVisible && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Add active class for CSS animations
          element.classList.add('active');
          
          // Stop observing if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // Optionally reset when element leaves viewport
          setIsVisible(false);
          element.classList.remove('active');
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, isVisible]);

  return [ref, isVisible];
};

export default useReveal;
