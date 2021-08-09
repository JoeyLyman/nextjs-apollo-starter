import { useState, useEffect } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
}

// _____ USAGE ______

// const DummyComponent = () => {

//   const ref = useRef()
//   const isVisible = useOnScreen(ref)

//   return <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div>
// }
