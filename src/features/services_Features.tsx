import { Background } from '@/components/background/Background';
import { Services } from '@/components/services/Services';
import { TitleSection } from '@/components/background/TitleSection'


const ServicesFeatures = () => {

  return (
  <Background classN="Services__Wrapper" color="">
    <div className={"Services__Content"}>

      <TitleSection title='Services' text='Une fonction un service' />
      <Services />

    </div>
  </Background>
)};

export { ServicesFeatures };
