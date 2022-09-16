import { Background } from '@/components/background/Background';
import {Hero} from '@/components/hero/Hero';


const HeroFeatures = () => {

  return (
  <Background classN="Hero__Wrapper" color="">
    <div className={"Hero__Content"}>

      <Hero 
        lastName={'NAVARRO'}
        firstName={'BENJAMIN'}
        post={'Developpeur Web'}
      />

    </div>
  </Background>
)};

export { HeroFeatures };
