import { useState, useEffect, createRef, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";


type IContextProps = {
  skill: ReactNode | any
}
// interface IContextProps {
//   name: string;
//   description: string;
//   context: {
//       classe: string;
//       title: string;
//       desc: string;
//   }[];
// }

const SkillsArea = ({skill}: IContextProps) => {

  const router = useRouter();
  const rootRef = createRef<HTMLDivElement>()
  
  const [offset, setOffset] = useState(0);
  const [scrolled, setScrolled] = useState(0)

  const [collapseOpen, setCollapseOpen] = useState('collapse_One')
  const [datas, setDatas] = useState([])
  
  const [val, setVal] = useState<number | undefined>(0)


  const listenToScroll = () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop / height;
    // const scrolled = rootRef.current?.offsetHeight || document.documentElement.scrollTop / height;
    setScrolled(scrolled)
  }


  useEffect(() => {
    setDatas(skill)
    if (scrolled < 0.10) setCollapseOpen('collapse_One') 
    else if (scrolled < 0.15) setCollapseOpen('collapse_Two')
    else if (scrolled < 0.20) setCollapseOpen('collapse_Three')
    else if (scrolled < 0.25) setCollapseOpen('collapse_Four')
    else if (scrolled < 0.30) setCollapseOpen('collapse_Five') 
    else if (scrolled < 0.35) setCollapseOpen('collapse_Six')
    else if (scrolled < 0.40) setCollapseOpen('collapse_Seven')
    else if (scrolled < 0.45) setCollapseOpen('collapse_Eight')
    else if (scrolled < 0.50) setCollapseOpen('collapse_Nine')
    else if (scrolled < 0.55) setCollapseOpen('collapse_Ten')
    else if (scrolled < 0.60) setCollapseOpen('collapse_Eleven')
    else if (scrolled < 0.65) setCollapseOpen('collapse_Twelve')

    setVal(rootRef.current?.offsetHeight)

    // console.log(rootRef.current?.offsetTop);
    console.log(rootRef.current!.offsetTop);
    

    console.log(scrolled);

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [scrolled, rootRef, skill])


  // console.log(val)
  // console.log(collapseOpen);
  // console.log(scrolled);
  // window.pageYOffset
  return (
    <div  id='SkillsArea'>

          <div ref={rootRef} className="Skills_Section">

            <div className="Skills_Left">
              <div className="SkillsLeft_Content">
                {scrolled < 0.25 && (
                  <div className={`${scrolled < 0.07 ? "blurIn" : "blurOut"}`}>
                    <Image 
                      src={`${router.basePath}/media/blue_Cadre.svg`} 
                      alt={'test'}
                      priority
                      width={350}
                      height={350}
                    />
                  </div>
                )}
                {scrolled > 0.25 && scrolled < 0.45 && (
                  <div className={`${scrolled > 0.45 ? "blurIn" : "blurOut"}`}>
                    <Image 
                      src={`${router.basePath}/media/violet_Cadre.svg`} 
                      alt={'test'}
                      priority
                      width={350}
                      height={350}
                    />
                  </div>
                )}
                {scrolled > 0.45 && (
                  <div className={`${scrolled < 0.45 ? "blurIn" : "blurOut"}`}>
                    <Image 
                      src={`${router.basePath}/media/magenta_Cadre.svg`} 
                      alt={'test'}
                      priority
                      width={350}
                      height={350}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="Skills_Right">

              {scrolled < 0.25 && 
                <div className={`SkillsRight_Content`}>
                  <div className={`${scrolled > 0.07 ? "blurOut" : "blurIn"}`}>
                    {Object.values(datas).map((value: any, id: number) => 
                      value.name === "design" && 
                        Object.values(value.context).map((val: any, id: number) => 
                          <div key={id}>
                            <h3
                              className={`${value.name} ${collapseOpen === `${val.classe}` ? 'Collpase__Opened' : 'Collpase__Closed'}`} 
                              // onClick={() => setCollapseOpen(`${val.classe}`)} 
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
              }

              {scrolled > 0.25 && scrolled < 0.45 && 
                <div className={`SkillsRight_Content`}>
                  <div className={`${scrolled > 0.25 ? "blurOut" : "blurIn"}`}>
                    {Object.values(datas).map((value: any, id: number) => 
                      value.name === "programmation" && 
                        Object.values(value.context).map((val: any, id: number) => 
                          <div key={id}>
                            <h3
                              className={`${value.name} ${collapseOpen === `${val.classe}` ? 'Collpase__Opened' : 'Collpase__Closed'}`} 
                              // onClick={() => setCollapseOpen(`${val.classe}`)} 
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
              }

              {scrolled > 0.45 && 
                <div className={`SkillsRight_Content`}>
                  <div className={`${scrolled > 0.45 ? "blurOut" : "blurIn"}`}>
                    {Object.values(datas).map((value: any, id: number) => 
                      value.name === "backend" && 
                        Object.values(value.context).map((val: any, id: number) => 
                          <div key={id}>
                            <h3
                              className={`${value.name} ${collapseOpen === `${val.classe}` ? 'Collpase__Opened' : 'Collpase__Closed'}`} 
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
              }


            </div>
          
          </div>

    </div>

    );
}
export { SkillsArea };
