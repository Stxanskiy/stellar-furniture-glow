import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);
  const previousPath = useRef<string>('');
  const isRestoring = useRef(false);

  const saveScrollPosition = (path: string, position: number) => {
    try {
      const positions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
      positions[path] = position;
      sessionStorage.setItem('scrollPositions', JSON.stringify(positions));
      console.log('All saved positions:', positions);
    } catch (error) {
      console.error('Error saving scroll position:', error);
    }
  };

  const getScrollPosition = (path: string): number | undefined => {
    try {
      const positions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
      return positions[path];
    } catch (error) {
      console.error('Error getting scroll position:', error);
      return undefined;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isRestoring.current) {
        return;
      }

      const currentPath = location.pathname;
      const position = window.scrollY;
      saveScrollPosition(currentPath, position);
      console.log(`Saved position for ${currentPath}:`, position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousPath.current = location.pathname;
      return;
    }

    if (previousPath.current && previousPath.current !== location.pathname) {
      const position = window.scrollY;
      saveScrollPosition(previousPath.current, position);
      console.log(`Saved position for previous page ${previousPath.current}:`, position);
    }

    previousPath.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (isInitialMount.current) {
      return;
    }

    const currentPath = location.pathname;
    const savedPosition = getScrollPosition(currentPath);

    if (savedPosition !== undefined) {
      isRestoring.current = true;
      
      const restoreScroll = () => {
        try {
          window.scrollTo({
            top: savedPosition,
            behavior: 'instant'
          });
          
          // Проверяем, сработала ли прокрутка
          requestAnimationFrame(() => {
            if (Math.abs(window.scrollY - savedPosition) > 5) {
              // Если не сработало, пробуем альтернативные способы
              document.documentElement.scrollTop = savedPosition;
              document.body.scrollTop = savedPosition;
            }
          });
          
          console.log(`Restored position for ${currentPath}:`, savedPosition);
        } catch (error) {
          console.error('Error restoring scroll position:', error);
        }
        
        setTimeout(() => {
          isRestoring.current = false;
        }, 300);
      };

      // Задержка для завершения анимаций
      setTimeout(() => {
        requestAnimationFrame(restoreScroll);
      }, 200);

    } else {
      setTimeout(() => {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
          console.log(`No saved position for ${currentPath}, scrolling to top`);
        });
      }, 200);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration; 