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
    {/* <div className={`LineSection__CircleLeft `}></div>
    <div className={`LineSection__CircleRight `}></div> */}
    {/* <svg id="" xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 200 80">
      <circle className={`LineSection__Circle ${iconsIsVisible && 'Circle_Anim'}`} cx="17" cy="60" r="9.1"/>
      <circle className={`LineSection__Circle ${iconsIsVisible && 'Circle_Anim'}`} cx="182.6" cy="60" r="9.1"/>
    </svg> */}

    {/* <div className="Circle_Left"></div>
    <div className="Circle_Right"></div> */}
  </div>
);
}
export { LineSection };
