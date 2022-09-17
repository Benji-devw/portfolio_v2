import { useState, useEffect, useRef } from 'react';


const LineSection = () => {
  const LineRef = useRef<HTMLDivElement>(null)
  const [iconsIsVisible, setIconsIsVisible] = useState(false)

  useEffect(() => {
    if (!LineRef.current) throw Error("divRef is not assigned");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIconsIsVisible(entry.isIntersecting)
    })
    observer.observe(LineRef.current)
  }, []);

return (
  <div ref={LineRef} className="LineSection">
    <div className={`LineSection__Line ${iconsIsVisible && 'LineSection_Anim'}`}></div>
  </div>
);
}
export { LineSection };
