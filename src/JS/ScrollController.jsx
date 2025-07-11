import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollController = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Har sahifa o'zgarganda scroll tepaga
    window.scrollTo(0, 0);

    // Scroll positionni tekshirish
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      {children}
    </>
  );
};

export default ScrollController;
