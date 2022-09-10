import { useState, useEffect, createRef, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";


type IContextProps = {
  skill: ReactNode | any
}


const SkillsArea = ({skill}: IContextProps) => {

  const router = useRouter();
  const rootRef = createRef<HTMLDivElement>()
  const [scrolled, setScrolled] = useState(0)
  const [collapseOpen, setCollapseOpen] = useState('collapse_One')
  const [datas, setDatas] = useState([])

  const listenToScroll = () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop / height;
    setScrolled(scrolled)
  }


  useEffect(() => {
    setDatas(skill)

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [scrolled, rootRef, skill])


  console.log(scrolled);
  // window.pageYOffset


  return (
    <div id='SkillsArea'>
      <div ref={rootRef} className="Skills_Section">

        <div className="Skills_Left">
          <div className="SkillsLeft_Content">
              <div className='SkillsLeft__Images'>
                {scrolled < 0.45 && (
                  <Image src={`${router.basePath}/media/SkillsLeft__Frontend.svg`} 
                    alt={'frontend'}
                    priority
                    layout='fill'
                    objectFit='contain'
                    className={`${scrolled < 0.45 ? "blurOut" : "blurIn"}`}
                  />
                )}
                {scrolled > 0.45 && scrolled < 0.62 && (
                  <Image src={`${router.basePath}/media/SkillsLeft__Programmation.svg`} 
                    alt={'frontend'}
                    priority
                    layout='fill'
                    objectFit='contain'
                    className={`${scrolled > 0.45 && scrolled < 0.62 ? "blurOut" : "blurIn"}`}
                  />
                )}
                {scrolled > 0.62 && (
                  <Image src={`${router.basePath}/media/SkillsLeft__Backend.svg`} 
                    alt={'frontend'}
                    priority
                    layout='fill'
                    objectFit='contain'
                    className={`${scrolled > 0.62  ? "blurOut" : "blurIn"}`}
                  />
                )}
              </div>
                            
              <svg className='circleBack'  xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 300 300">
              <g id="SkillesLeft__Background">
                <circle className={`Skills_st2 ${scrolled > 0.45 ? 'Skills_st2__Violet':'Skills_st2__Bleu'} ${scrolled > 0.62 ? 'Skills_st2__Magenta':'Skills_st2__Bleu'}`} cx="130" cy="170" r="120"/>
                <linearGradient id="skillsGrad_1_" gradientUnits="userSpaceOnUse" x1='0' y1="5" x2="15" y2="15">
                  <stop  offset="0.8" style={{stopColor:'#0e0e0e'}}/>
                  <stop  offset="1" style={{stopColor:'#0785F2'}}/>
                </linearGradient>
                <circle className={`Skills_st1 ${scrolled > 0.45 ? 'Skills_st1__Violet':'Skills_st1__Blue'} ${scrolled > 0.62 ? 'Skills_st1__Magenta':'Skills_st1__Blue'}`} cx="150" cy="140" r="100" stroke='url(#skillsGrad_1_)'/>
              </g>
            </svg>
          </div>
        </div>

        <div className="Skills_Right">

          {/* {scrolled < 0.25 &&  */}
            <div className={`SkillsRight_Container`}>
              <div className={`${scrolled < 0.45 ? "blurOut" : "blurIn"}`}>
                {Object.values(datas).map((value: any, id: number) => 
                  value.name === "design" && 
                    Object.values(value.context).map((val: any, id: number) => 
                      <div className={`SkillsRight_Content`} key={id}>
                        <h3
                          className={`${value.name} ${collapseOpen === `${val.classe}` ? 'Collpase__Opened' : 'Collpase__Closed'}`} 
                          onClick={() => setCollapseOpen(`${val.classe}`)} 
                        > {val.title} </h3>
                        
                        <div 
                          className={`${val.classe}`}
                          style={{height: collapseOpen === `${val.classe}` ? '110px' : '0px'}}
                        >
                          <p>{val.desc}</p>
                        </div>

                      </div>
                    )
                )}
              </div>
            </div>
          {/* } */}

          {/* {scrolled > 0.25 && scrolled < 0.45 &&  */}
            <div className={`SkillsRight_Container`}>
              <div className={`${scrolled > 0.40 && scrolled < 0.60 ? "blurOut" : "blurIn"}`}>
                {Object.values(datas).map((value: any, id: number) => 
                  value.name === "programmation" && 
                    Object.values(value.context).map((val: any, id: number) => 
                      <div className={`SkillsRight_Content`} key={id}>
                        <h3
                          className={`${value.name} ${collapseOpen === `${val.classe}` ? 'Collpase__Opened' : 'Collpase__Closed'}`} 
                          onClick={() => setCollapseOpen(`${val.classe}`)} 
                        > {val.title} </h3>
                        
                        <div 
                          className={val.classe}  
                          style={{height: collapseOpen === `${val.classe}` ? '130px' : '0px'}} 
                        >
                          <p>{val.desc}</p>
                        </div>

                      </div>
                    )
                )}
              </div>
            </div>
          {/* } */}

          {/* {scrolled > 0.45 &&  */}
            <div className={`SkillsRight_Container`}>
              <div className={`${scrolled > 0.50 ? "blurOut" : "blurIn"}`}>
                {Object.values(datas).map((value: any, id: number) => 
                  value.name === "backend" && 
                    Object.values(value.context).map((val: any, id: number) => 
                      <div className={`SkillsRight_Content`} key={id}>
                        <h3
                          className={`${value.name} ${collapseOpen === `${val.classe}` ? 'Collpase__Opened' : 'Collpase__Closed'}`} 
                          onClick={() => setCollapseOpen(`${val.classe}`)} 
                        > {val.title} </h3>
                        
                        <div 
                          className={val.classe}  
                          style={{height: collapseOpen === `${val.classe}` ? '130px' : '0px'}} 
                        >
                          <p>{val.desc}</p>
                        </div>

                      </div>
                    )
                )}
              </div>
            </div>
          {/* } */}


        </div>
      
      </div>

    </div>

    );
}
export { SkillsArea };
