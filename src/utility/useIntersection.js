import { useState, useEffect } from 'react'

function useOnScreen(ref, rootMargin) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = new IntersectionObserver(
      ([entry]) => {setIntersecting(entry.isIntersecting)}, {rootMargin}
    )
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }, [])
  
    return isIntersecting
  }

// import { useState, useEffect } from 'react'

// const useOnScreen = (element, rootMargin) => {
//     const [isVisible, setState] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setState(entry.isIntersecting);
//             }, { rootMargin }
//         );

//         observer.observe(element);

//         return () => observer.disconnect(element);
//     }, []);

//     return isVisible;
// };

export default useOnScreen;