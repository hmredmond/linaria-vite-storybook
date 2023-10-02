import { useEffect, useState } from 'react';

/**
 * Hook for listening to media query changes.
 *
 * @param {String} query
 * @returns {boolean}
 */
export default function useMediaQuery(query) {
  const mediaQuery = window?.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery?.matches);

  useEffect(() => {
    const handleChange = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return matches;
}
