import { Background } from '@/components/background/Background';
import { Services } from '@/components/services/Services';
import { TitleSection } from '@/components/background/TitleSection'


const ServicesFeatures = () => {

  return (
  <Background classN="Services__Wrapper" color="">
    <div className={"Services__Content"}>

      <TitleSection id='Services' title='Services' text='Mes fonctions' />
      <Services />

    </div>
  </Background>
)};

export { ServicesFeatures };
