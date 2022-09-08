import { Background } from '@/components/background/Background';
import { Portfolio } from '@/components/portfolio/Portfolio';
import { TitleSection } from '@/components/background/TitleSection'


const PortfolioFeatures = () => {
  
  return (
  <Background classN="Portfolio__Wrapper" color="">
    <div className={"Portfolio__Content"}>
      
      <TitleSection title='Portfolio' text='Mes projets et mes contributions' />

      <Portfolio />

    </div>
  </Background>
)};

export { PortfolioFeatures };
