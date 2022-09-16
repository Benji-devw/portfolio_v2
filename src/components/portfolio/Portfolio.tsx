import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { Modal } from '@/structures/Modal';
import Slider from "react-slick";
import Link from 'next/link';
import {illustrations} from '@/api/illustrationData';
import { web } from '@/api/webData';
import { formations } from '@/api/formationsData';
import { logos } from '@/api/logosData';


const Portfolio = () => {
  const router = useRouter();
  const [previewHover, setPreviewHover] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [datasForModal, setDatasForModal] = useState<any>()
  var reactSlickSettings = { infinite: true, slidesToShow: 1, slidesToScroll: 1, };

  useEffect(() => {
    if (isOpen) {
      document.getElementById("__main")?.classList.add('modal-root__Open') 
      document.body.style.overflow = 'hidden'
    } else {
       document.getElementById("__main")?.classList.remove('modal-root__Open') 
       document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // console.log(illus);
  

  return (
    <section id='Portfolio__Section'>
      <div className="grid-container">

          {isOpen && (
            <Modal>
              <div className="Modal__Close" onClick={() => {setIsOpen(false)} }>
                <svg id="Close" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none' viewBox="0 0 150 150">
                  <path className="st110" d="M91.75,15.69L15.69,91.75c-2.06,2.06-5.39,2.06-7.44,0l0,0c-2.06-2.06-2.06-5.39,0-7.44L84.31,8.25
                    c2.06-2.06,5.39-2.06,7.44,0l0,0C93.81,10.3,93.81,13.63,91.75,15.69z"/>
                  <path className="st111" d="M84.31,91.75L8.25,15.69c-2.06-2.06-2.06-5.39,0-7.44l0,0c2.06-2.06,5.39-2.06,7.44,0l76.07,76.07
                    c2.06,2.06,2.06,5.39,0,7.44l0,0C89.7,93.81,86.37,93.81,84.31,91.75z"/>
                </svg>
              </div>
              <div className="ModalSlick__Container">
              <Slider {...reactSlickSettings}>
                {datasForModal.map((item: any, id: any) => 
                <div key={id} className={`ModalSlick__SlideCard`}>
                  <Image key={id}
                    src={`${router.basePath}${item.src}`} 
                    alt={'img'}
                    priority
                    layout='fill'
                    objectFit='contain'
                  /> 
                  <div className="ModalSlick__Infos">
                      {item.link != 'false' ? <p><Link href={item.link} passHref><a target="_blank">{item.name}</a></Link></p> : item.name } 
                      <p>{item.description}</p>
                  </div>
                </div>
                )}
            </Slider>
            </div>
            </Modal>
          )}

        <div className='Card'>
          <div
            className={`PortfolioCard__Preview`} 
            onClick={() => {setIsOpen(!isOpen), setDatasForModal(illustrations)}}
            onMouseEnter={() => setPreviewHover('design')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'design' ? (
              <Image 
                className={`${previewHover === 'design' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/Illustrations/Design-Orange.jpg`} 
                alt={'Illustration'}
                priority
                layout='fill'
                objectFit='cover'
              />
              ) : (
              <h4 className={`${previewHover === 'design' ? 'blurIn': 'blurOut'}`} >Illustration</h4>
            )}
          </div>
        </div>

        <div className='Card'>
          <div 
            className='PortfolioCard__Preview' 
            onClick={() => {setIsOpen(!isOpen), setDatasForModal(web)}}
            onMouseEnter={() => setPreviewHover('web')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'web' ? (
              <Image 
                className={`${previewHover === 'web' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/Web/aleph.png`} 
                alt={'Web'}
                priority
                layout='fill'
                objectFit='cover'
              />
              ) : (
              <h4 className={`${previewHover === 'web' ? 'blurIn': 'blurOut'}`} >WEB</h4>
            )}
          </div>
        </div>

        <div className='Card'>
          <div className='PortfolioCard__Preview' 
            onClick={() => {setIsOpen(!isOpen), setDatasForModal(logos)}}
            onMouseEnter={() => setPreviewHover('logo')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'logo' ? (
              <Image 
                className={`${previewHover === 'logo' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/logos/Logo-Vallena.svg`} 
                alt={'Logo'}
                priority
                layout='fill'
                objectFit='contain'
              />
              ) : (
              <h4 className={`${previewHover === 'logo' ? 'blurIn': 'blurOut'}`} >Logo</h4>
            )}
          </div>
        </div>

        <div className='Card'>
          <div className='PortfolioCard__Preview' 
            onClick={() => {setIsOpen(!isOpen), setDatasForModal(formations)}}
            onMouseEnter={() => setPreviewHover('composant')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'composant' ? (
              <Image 
                className={`${previewHover === 'composant' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/formations/NB_Certification_Inté_FRONT.jpg`} 
                alt={'test'}
                priority
                layout='fill'
                objectFit='cover'
              />
              ) : (
              <h4 className={`${previewHover === 'composant' ? 'blurIn': 'blurOut'}`} >Formations</h4>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Portfolio };
