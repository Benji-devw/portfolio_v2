import { Background } from '@/components/background/Background';
import {HeroTitle} from '@/components/hero/HeroTitle';


const HeroFeatures = () => {

  return (
  <Background classN="Hero__Wrapper" color="">
    <div className={"Hero__Content"}>

      <HeroTitle 
        lastName={'NAVARRO'}
        firstName={'Benjamin'}
        post={'Developpeur Fullstack'}
      />

    </div>
  </Background>
)};

export { HeroFeatures };
