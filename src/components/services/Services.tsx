import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";



const Services = () => {
  const router = useRouter();
  const [previewHover, setPreviewHover] = useState('')

  return (
    <div id='Services'>
      <h2>WEB AREA</h2>
      <div className="grid-container">

        <div className='Card'>
          <div 
            className={`ServicesCard__Preview`} 
            onMouseEnter={() => setPreviewHover('design')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'design' ? (
              <Image 
                className={`${previewHover === 'design' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/Illustrations/Design-Orange.jpg`} 
                alt={'test'}
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
          <div className='ServicesCard__Preview' 
            onMouseEnter={() => setPreviewHover('web')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'web' ? (
              <Image 
                className={`${previewHover === 'web' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/Web/aleph.png`} 
                alt={'test'}
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
          <div className='ServicesCard__Preview' 
          
            onMouseEnter={() => setPreviewHover('logo')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'logo' ? (
              <Image 
                className={`${previewHover === 'logo' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/logos/Logo-Vallena.svg`} 
                alt={'test'}
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
          <div className='ServicesCard__Preview' 
            onMouseEnter={() => setPreviewHover('composant')} 
            onMouseLeave={() => setPreviewHover('')}>
            {previewHover === 'composant' ? (
              <Image 
                className={`${previewHover === 'composant' ? 'blurOut': 'blurIn'}`}
                src={`${router.basePath}/media/composants/composant-Vallena.svg`} 
                alt={'test'}
                priority
                layout='fill'
                objectFit='cover'
              />
              ) : (
              <h4 className={`${previewHover === 'composant' ? 'blurIn': 'blurOut'}`} >Composants</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export { Services };
