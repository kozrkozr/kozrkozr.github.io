import { useEffect } from 'react';

export default function Title() {

  useEffect(() => {
    document.title = "Healthy food blog"
  }, []);

  return null;
}
