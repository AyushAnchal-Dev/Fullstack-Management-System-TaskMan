import { useEffect, useState } from 'react';

export default function useDarkMode(defaultDark = true) {
  const [dark, setDark] = useState(defaultDark);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return { dark, setDark } as const;
}