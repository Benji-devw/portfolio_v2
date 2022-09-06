import { useState, useEffect, useRef } from 'react';


const IconsArea = () => {
  const iconsRef = useRef<HTMLDivElement>(null)

  const [scrollY, setScrollY] = useState(0);  
  const [iconsIsVisible, setIconsIsVisible] = useState(false)
  
  const handleScroll = () => {
    setScrollY(window.scrollY);
  }  
  
  useEffect(() => {
    if (!iconsRef.current) throw Error("divRef is not assigned");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIconsIsVisible(entry.isIntersecting)
      // console.log('entry', entry);
    })
    observer.observe(iconsRef.current)

    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // console.log(iconsIsVisible);
  

  return (
    <div id="IconsArea">

    <div className='scrollText text-light' style={{position: 'fixed', top: '5rem'}}>{scrollY}px</div>

      <div ref={iconsRef} className="IconPath__Main">
        
        <div className="IconsArea__Item Brush">
          <svg id="Icons"  xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 300 300">
            <g id="Brush">
              <circle className={`st3 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="140" cy={150 - scrollY / 40} r="125"/>
              <circle className={`st2 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="145" cy={150 - scrollY / 60} r="125"/>
              <circle className={`st1 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="150" cy="150" r="125"/>
            </g>
            <g>
              <path className={`st_Brush ${iconsIsVisible && 'svgPath__Animate'}`} d="M77.8,205.2c0.3-2.3,8.7-0.8,20.6-13.5c7-7.5,4.8-15.8,12.3-19.6c6.7-3.4,16.3-0.8,21.9,4.6 c7.9,7.6,11.4,24.5,3.5,29.2C116.6,217.3,77.3,208.8,77.8,205.2z"/>
              <path className={`st_Brush ${iconsIsVisible && 'svgPath__Animate'}`} d="M105.6,192.3c-0.6-0.8,0.7-8.9,3.9-13.3c7.6-10.3,23,1.6,23,4.7c0,2.1-3.4,1.1-8.5,0.4 c-4.7-0.7-8.6-1.2-12.6,2.1C107.2,189.8,106.2,193,105.6,192.3z"/>
              <path className={`st_Brush ${iconsIsVisible && 'svgPath__Animate'}`} d="M221.8,88.8c-3.1-3.1-24,12.6-46.6,35.2c-10.2,10.2-19,20.1-25.4,28.1l-0.5-0.5c-0.5-0.5-1.3-0.5-1.8,0 L133,166.2c-0.5,0.5-0.5,1.3,0,1.8l10,10c0.5,0.5,1.3,0.5,1.8,0l14.6-14.6c0.5-0.5,0.5-1.3,0-1.8l-0.9-0.9 c8-6.3,17.9-15.1,28.1-25.4C209.2,112.8,224.9,91.9,221.8,88.8z"/>
              <line className={`st_Brush ${iconsIsVisible && 'svgPath__Animate'}`} x1="157.2" y1="149.4" x2="161.2" y2="153.4"/>
              <line className={`st_Brush ${iconsIsVisible && 'svgPath__Animate'}`} x1="163.7" y1="142.8" x2="167.8" y2="146.8"/>
              <line className={`st_Brush ${iconsIsVisible && 'svgPath__Animate'}`} x1="159" y1="144.7" x2="165.9" y2="151.5"/>
            </g>
          </svg>
          <code className={`textBrush__Animate ${iconsIsVisible ? 'blurOut' : 'blurIn'}`} >UI/UX <span>D</span>ESIGN</code>
        </div>



        <div className="IconsArea__Item Code">
          <svg id="Icons"  xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 300 300">
            <g id="Code">
              <g>
                <circle className={`st3 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="150" cy={150 - scrollY / 40} r="125"/>
                <circle className={`st2 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="150" cy={150 - scrollY / 60} r="125"/>
                <circle className={`st1 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="150" cy="150" r="125"/>
              </g>
              <g>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="96.3" y1="97.2" x2="121.9" y2="97.2"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="127.9" y1="97.2" x2="141.4" y2="97.2"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="101.3" y1="105.6" x2="135.1" y2="105.6"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="101.2" y1="114.4" x2="126.7" y2="114.4"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="132.7" y1="114.4" x2="146.2" y2="114.4"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="192.4" y1="114.4" x2="205.9" y2="114.4"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="107.9" y1="123.3" x2="141.8" y2="123.3"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="152.5" y1="114.4" x2="186.3" y2="114.4"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="101.2" y1="132.1" x2="140.6" y2="132.1"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="147.2" y1="132.1" x2="160.7" y2="132.1"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="181.8" y1="141.3" x2="156.3" y2="141.3"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="150" y1="141.3" x2="136.5" y2="141.3"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="96.3" y1="141.3" x2="130.1" y2="141.3"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="96.3" y1="165.2" x2="121.9" y2="165.2"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="141.4" y1="174" x2="154.9" y2="174"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="101.1" y1="174" x2="134.9" y2="174"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="152.9" y1="182.8" x2="127.4" y2="182.8"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="121.4" y1="182.8" x2="107.9" y2="182.8"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="107.9" y1="191.7" x2="141.8" y2="191.7"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="159.2" y1="182.8" x2="193" y2="182.8"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="160.5" y1="200.5" x2="121.1" y2="200.5"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="114.5" y1="200.5" x2="101" y2="200.5"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="174.1" y1="191.7" x2="148.3" y2="191.7"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="150" y1="209.3" x2="136.5" y2="209.3"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="96.2" y1="209.3" x2="130.1" y2="209.3"/>
                <path className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} d="M101.2,90.9l-4.7-4.7c-0.2-0.2-0.2-0.5,0-0.7l4.7-4.7"/>
                <path className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} d="M112.3,80.8l4.7,4.7c0.2,0.2,0.2,0.5,0,0.7l-4.7,4.7"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="104.6" y1="91.3" x2="108.8" y2="80.4"/>
                <path className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} d="M101.1,158.5l-4.7-4.7c-0.2-0.2-0.2-0.5,0-0.7l4.7-4.7"/>
                <path className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} d="M112.2,148.4l4.7,4.7c0.2,0.2,0.2,0.5,0,0.7l-4.7,4.7"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="104.5" y1="158.9" x2="108.7" y2="148"/>
                <path className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} d="M101.1,226.1l-4.7-4.7c-0.2-0.2-0.2-0.5,0-0.7l4.7-4.7"/>
                <path className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} d="M112.2,216l4.7,4.7c0.2,0.2,0.2,0.5,0,0.7l-4.7,4.7"/>
                <line className={`st_Code ${iconsIsVisible && 'svgPath__Animate'}`} x1="104.4" y1="226.5" x2="108.7" y2="215.6"/>
              </g>
            </g>
          </svg>
          <code className={`textCode__Animate ${iconsIsVisible ? 'blurOut' : 'blurIn'}`}><span>P</span>ROGRAMATION</code>
        </div>


        <div className="IconsArea__Item Network">
          <svg id="Icons"  xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 300 300">
            <g id="Network">
              <g>
                <circle className={`st3 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="160" cy={150 - scrollY / 40} r="125"/>
                <circle className={`st2 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="155" cy={150 - scrollY / 60} r="125"/>
                <circle className={`st1 ${iconsIsVisible && 'svgCircle__Animate'}`} cx="150" cy="150" r="125"/>
              </g>
              <g>
                <path className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} d="M68.4,140.7h46.8c6.3,0,12.3-2.5,16.7-6.9l6.7-6.7c4.4-4.4,10.4-6.9,16.7-6.9h44.1"/>
                <path className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} d="M93.2,120.1h22c6.3,0,12.3-2.5,16.7-6.9l6.7-6.7c4.4-4.4,10.4-6.9,16.7-6.9h44.1"/>
                <path className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} d="M68.4,159.3h46.8c6.3,0,12.3,2.5,16.7,6.9l6.7,6.7c4.4,4.4,10.4,6.9,16.7,6.9h44.1"/>
                <path className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} d="M93.2,179.9h22c6.3,0,12.3,2.5,16.7,6.9l6.7,6.7c4.4,4.4,10.4,6.9,16.7,6.9h44.1"/>
                <line className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} x1="145.9" y1="150" x2="225.7" y2="150"/>
                <circle className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} cx="205.9" cy="99.6" r="5.9"/>
                <circle className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} cx="205.9" cy="120.1" r="5.9"/>
                <circle className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} cx="232.9" cy="150" r="5.9"/>
                <circle className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} cx="206.6" cy="179.9" r="5.9"/>
                <circle className={`st_Network ${iconsIsVisible && 'svgPath__Animate'}`} cx="206.6" cy="200.4" r="5.9"/>
              </g>
            </g>
          </svg>
          <code className={`textNetwork__Animate ${iconsIsVisible ? 'blurOut' : 'blurIn'}`}><span>S</span>ERVEUR</code>
        </div>

      </div>

    </div>
    );
}
export { IconsArea };