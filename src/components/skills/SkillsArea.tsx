import { useState, useEffect, createRef, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";


type IContextProps = {
  skill: ReactNode | any
}

const SkillsArea = ({skill}: IContextProps) => {

  const router = useRouter();
  const rootRef = createRef<HTMLDivElement>()
  const designRef = createRef<HTMLDivElement>()
  const progRef = createRef<HTMLDivElement>()
  const backendRef = createRef<HTMLDivElement>()
  const [scrolled, setScrolled] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [designIsVisible, setDesignIsVisible] = useState(false)
  const [progIsVisible, setProgIsVisible] = useState(false)
  const [backendisVisible, setBackendIsVisible] = useState(false)
  const [zIndex, setZIndex] = useState(0)

  const [datas, setDatas] = useState([])
  const [checkScreenW, setCheckScreenW] = useState<any>(0)
  const [switchStickyImg, setSwitchStickyImg] = useState<any>(0)
  const [switchStickyClass, setswitchStickyClass] = useState(0)
  const [datasWait, setDatasWait] = useState(false)
  const sticky_left_src = [
    `${router.basePath}/media/SkillsLeft__Frontend.svg`,
    `${router.basePath}/media/SkillsLeft__Programmation.svg`,
    `${router.basePath}/media/SkillsLeft__Backend.svg`,
  ]


  const listenToScroll = () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop / height;
    setScrolled(scrolled)
  }

  const switchImg_StickyLeft = (val: any) => {
    setswitchStickyClass(val)
    setTimeout(() => {
      setSwitchStickyImg(val)
    }, 100);
  }

  const handleZindex = (id: number) => {
    setZIndex(id)
  }





  useEffect(() => {
    if (scrolled < 0.45) switchImg_StickyLeft(0);
    if (scrolled > 0.45 && scrolled < 0.67) switchImg_StickyLeft(1);
    if (scrolled > 0.67) switchImg_StickyLeft(2);

    if (datas.length === 0 && isVisible) {
      setTimeout(() => {
        setDatas(skill)
        setDatasWait(true)
      }, 500);
    }

    if (datasWait) {
      const observerDesign = new IntersectionObserver((entries) => {
        setDesignIsVisible(entries[0].isIntersecting)
        window.addEventListener("scroll", listenToScroll);
      })
      const observerProg = new IntersectionObserver((entries) => {
        setProgIsVisible(entries[0].isIntersecting)
        window.addEventListener("scroll", listenToScroll);
      })
      const observerBackend = new IntersectionObserver((entries) => {
        setBackendIsVisible(entries[0].isIntersecting)
        window.addEventListener("scroll", listenToScroll);
      })
      observerDesign.observe(designRef.current!);
      observerProg.observe(progRef.current!);
      observerBackend.observe(backendRef.current!);
    }

    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
      window.addEventListener("scroll", listenToScroll);
    })
    observer.observe(rootRef.current!)

    setCheckScreenW(rootRef.current?.offsetWidth)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [scrolled, skill, checkScreenW, datas, isVisible, rootRef, designRef, progRef, backendRef, datasWait])

  
  

  return (
    <section ref={rootRef} id='Skills__Section'>
      <div className="Skills_Section">

        {datasWait ? 
          checkScreenW > 800 && 
          <div className="Skills_Left" style={{height: !datasWait ? '80vh' : ''}}>
            <div className="SkillsLeft_Content">
                <div className='SkillsLeft__Images'>
                  <Image 
                    src={`${sticky_left_src[switchStickyImg]}`} 
                    alt={'sticky_left_img'}
                    priority
                    layout='fill'
                    objectFit='contain'
                    className={`${switchStickyClass === switchStickyImg ? 'blurOut':'blurIn'} `}
                  />
                </div>
                              
                <svg className='circleBack'  xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 300 300">
                <g id="SkillesLeft__Background">
                  <circle className={`Skills_st2 ${scrolled > 0.45 ? 'Skills_st2__Violet':'Skills_st2__Bleu'} ${scrolled > 0.67 ? 'Skills_st2__Magenta':'Skills_st2__Bleu'}`} cx="130" cy="170" r="120"/>
                  <linearGradient id="skillsGrad_1_" gradientUnits="userSpaceOnUse" x1='0' y1="5" x2="15" y2="15">
                    <stop  offset="0.8" style={{stopColor:'#0e0e0e'}}/>
                    <stop  offset="1" style={{stopColor:'#0785F2'}}/>
                  </linearGradient>
                  <circle className={`Skills_st1 ${scrolled > 0.45 ? 'Skills_st1__Violet':'Skills_st1__Blue'} ${scrolled > 0.67 ? 'Skills_st1__Magenta':'Skills_st1__Blue'}`} cx="150" cy="140" r="100" stroke='url(#skillsGrad_1_)'/>
                </g>
              </svg>
            </div>
          </div>
        : <div className='dataWait'><div className='dataWait_picture'></div></div> 
        }

        {datasWait ? 
          <div className="Skills_Right" style={{height: !datasWait ? '80vh' : ''}}>
              <div className={`SkillsRight_Content`}>
              
                <div ref={designRef} className="SkillsRight_Text">
                    <div className='SkillsRight__Images'>
                      <Image src={`${router.basePath}/media/SkillsLeft__Frontend.svg`} 
                        alt={'Frontend_img'} priority layout='fill' objectFit='contain' />
                    </div>
                    <div className={`SkillsRight_Content`}>
                      <div className="annotation">
                        {Object.values(datas).map((value: any, id: number) => 
                        value.name === "design" && 
                        Object.values(value.context).map((val: any, id: number) => 
                          <div 
                            className={`card ${designIsVisible ? 'card__Animate' : ''}`} 
                            key={id}
                            onClick={() => handleZindex(id)} 
                            style={{zIndex: zIndex === id ? '100' : '10'}} 
                          >
                            <h3 className={`${value.name}`}>{val.title}</h3>
                            <p>{val.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
                <div ref={progRef} className="SkillsRight_Text">
                    <div className='SkillsRight__Images'>
                      <Image src={`${router.basePath}/media/SkillsLeft__Programmation.svg`} 
                        alt={'Frontend_img'} priority layout='fill' objectFit='contain' />
                    </div>
                    <div className={`SkillsRight_Content`}>
                      <div className="annotation">
                        {Object.values(datas).map((value: any, id: number) => 
                        value.name === "programmation" && 
                        Object.values(value.context).map((val: any, id: number) => 
                          <div 
                            className={`card ${progIsVisible ? 'card__Animate' : ''}`} 
                            key={id}
                            onClick={() => handleZindex(id)} 
                            style={{zIndex: zIndex === id ? '100' : '10'}} 
                            >
                            <h3 className={`${value.name}`}>{val.title}</h3>
                            <p>{val.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
                <div ref={backendRef} className="SkillsRight_Text">
                    <div className='SkillsRight__Images'>
                      <Image src={`${router.basePath}/media/SkillsLeft__Backend.svg`} 
                        alt={'Frontend_img'} priority layout='fill' objectFit='contain' />
                    </div>
                    <div className={`SkillsRight_Content`}>
                      <div className="annotation">
                        {Object.values(datas).map((value: any, id: number) => 
                        value.name === "backend" && 
                        Object.values(value.context).map((val: any, id: number) => 
                          <div 
                            className={`card ${backendisVisible ? 'card__Animate' : ''}`} 
                            key={id}
                            onClick={() => handleZindex(id)} 
                            style={{zIndex: zIndex === id ? '100' : '10'}} 
                            >
                            <h3 className={`${value.name}`}>{val.title}</h3>
                            <p>{val.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
          </div>
        : <div className='dataWait'><div className='dataWait_text'></div><div className='dataWait_text'></div><div className='dataWait_text'></div></div>
        }
      
      </div>
    </section>

    );
}
export { SkillsArea };
