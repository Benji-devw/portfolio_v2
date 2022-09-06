import { useState, useEffect, createRef, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";

type Test = string | undefined;
const SkillsArea = () => {

  const router = useRouter();
  
  const rootRef = createRef<HTMLDivElement>()
  
  const [offset, setOffset] = useState(0);
  const [scrolled, setScrolled] = useState(0)

  const [collapseOpen, setCollapseOpen] = useState('collapse_One')



  const listenToScroll = () => {
    
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop / height;
    setScrolled(scrolled)
  }


  useEffect(() => {

    if (scrolled < 0.25) setCollapseOpen('collapse_One') 
    else if (scrolled < 0.35) setCollapseOpen('collapse_Two')
    else if (scrolled < 0.45) setCollapseOpen('collapse_Three')
    else if (scrolled < 0.55) setCollapseOpen('collapse_Four')


    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [scrolled, rootRef])


  // console.log(collapseOpen);
  // console.log(scrolled);
  // console.log(offset);
  // window.pageYOffset
  return (
    <div id='SkillsArea'>

      <div className="Skills_Wrapper">
        <div ref={rootRef} className="Skills_Container">


          <div className="Skills_Section">

            <div className="Skills_Left">
              <div className="SkillsLeft_Content">
              {scrolled < 0.55 && (
                <div className={`${scrolled < 0.15 ? "blurIn" : "blurOut"}`}>
                  <Image 
                    src={`${router.basePath}/media/test.svg`} 
                    alt={'test'}
                    priority
                    width={350}
                    height={350}
                  />
                </div>
              )}
              {scrolled > 0.55 && (
                <div className={`${scrolled < 0.54 ? "blurIn" : "blurOut"}`}>
                  <Image 
                    src={`${router.basePath}/media/accord.svg`} 
                    alt={'accord'}
                    priority
                    width={350}
                    height={350}
                  />
                </div>
              )}

              </div>
            </div>

            <div className="Skills_Right">
              {scrolled < 0.55 && (
                <div className={`SkillsRight_Content`}>

                  <div className={`${scrolled > 0.15 ? "blurOut" : "blurIn"}`}>
                    <h3 className={`${collapseOpen === 'collapse_One' ? 'Collpase__Opened' : 'Collpase__Closed'}`} onClick={() => setCollapseOpen('collapse_One')} >Prototype et conception UX</h3>
                      <div style={{height: collapseOpen ===  'collapse_One' ? '110px' : '0px'}} className="collapse_One">
                        <p>Pour la conception d’une UX efficace et accessible, je m’inspire et respect les tendances web ainsi que les bonnes pratiques afin, de rendre un prototype intéractif et intuitif.</p>
                      </div>

                    <h3 className={`${collapseOpen === 'collapse_Two' ? 'Collpase__Opened' : 'Collpase__Closed'}`} onClick={() => setCollapseOpen('collapse_Two')}>Conception UI</h3>
                      <div style={{height: collapseOpen ===  'collapse_Two' ? '150px' : '0px'}} className="collapse_Two">
                      <p>L’interface utilisateur est un point non négligable pour mettre en confiance un client. <br />Une interface épurée, légère et responsive donne immédiatement un sentiment de propreté et de professionnalisme.</p>
                      </div>

                    <h3 className={`${collapseOpen === 'collapse_Three' ? 'Collpase__Opened' : 'Collpase__Closed'}`}  onClick={() => setCollapseOpen('collapse_Three')} >Navigation et Animation</h3>
                      <div style={{height: collapseOpen ===  'collapse_Three' ? '200px' : '0px'}} className="collapse_Three">
                      <p>Un effet de perspective, un boutton animé, une réaction de l’interface avec  le curseur ou la molette de l’utilisateur... <br />Cela donne vie à l’interface et rend la navigation plus attrayante. C’est toujours un plaisir mais aussi un défi de trouver un comportement inédit/créatif, ainsi q’un style personnalisé pour chaque projet.</p>
                      </div>

                    <h3 className={`${collapseOpen === 'collapse_Four' ? 'Collpase__Opened' : 'Collpase__Closed'}`}  onClick={() => setCollapseOpen('collapse_Four')} >Mes connaissance</h3>
                      <div style={{height: collapseOpen ===  'collapse_Four' ? '50px' : '0px'}} className="collapse_Three">
                      <p>Photophop - Illutrator - XD</p>
                      </div>
                  </div>

                </div>
              )}
                  
                
              {scrolled > 0.55 && (
                <div className={`SkillsRight_Content`}>
                                    <div className={`${scrolled > 0.15 ? "blurOut" : "blurIn"}`}>
                    <h3 className={`${collapseOpen === 'collapse_One' ? 'Collpase__Opened' : 'Collpase__Closed'}`} onClick={() => setCollapseOpen('collapse_One')} >Prototype et conception UX</h3>
                      <div style={{height: collapseOpen ===  'collapse_One' ? '110px' : '0px'}} className="collapse_One">
                        <p>Pour la conception d’une UX efficace et accessible, je m’inspire et respect les tendances web ainsi que les bonnes pratiques afin, de rendre un prototype intéractif et intuitif.</p>
                      </div>

                    <h3 className={`${collapseOpen === 'collapse_Two' ? 'Collpase__Opened' : 'Collpase__Closed'}`} onClick={() => setCollapseOpen('collapse_Two')}>Conception UI</h3>
                      <div style={{height: collapseOpen ===  'collapse_Two' ? '150px' : '0px'}} className="collapse_Two">
                      <p>L’interface utilisateur est un point non négligable pour mettre en confiance un client. <br />Une interface épurée, légère et responsive donne immédiatement un sentiment de propreté et de professionnalisme.</p>
                      </div>

                    <h3 className={`${collapseOpen === 'collapse_Three' ? 'Collpase__Opened' : 'Collpase__Closed'}`}  onClick={() => setCollapseOpen('collapse_Three')} >Navigation et Animation</h3>
                      <div style={{height: collapseOpen ===  'collapse_Three' ? '200px' : '0px'}} className="collapse_Three">
                      <p>Un effet de perspective, un boutton animé, une réaction de l’interface avec  le curseur ou la molette de l’utilisateur... <br />Cela donne vie à l’interface et rend la navigation plus attrayante. C’est toujours un plaisir mais aussi un défi de trouver un comportement inédit/créatif, ainsi q’un style personnalisé pour chaque projet.</p>
                      </div>

                    <h3 className={`${collapseOpen === 'collapse_Four' ? 'Collpase__Opened' : 'Collpase__Closed'}`}  onClick={() => setCollapseOpen('collapse_Four')} >Mes connaissance</h3>
                      <div style={{height: collapseOpen ===  'collapse_Four' ? '50px' : '0px'}} className="collapse_Three">
                      <p>Photophop - Illutrator - XD</p>
                      </div>
                  </div>
                </div>
               )}
            </div>
          
          </div>

        </div>
      </div>

    </div>

    );
}
export { SkillsArea };
