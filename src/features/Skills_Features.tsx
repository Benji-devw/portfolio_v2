import { Background } from '@/components/background/Background';
import { SkillsArea } from '@/components/skills/SkillsArea';
import { TitleSection } from '@/components/background/TitleSection'
import Skillsdatas from '@/api/SkillsDatas.json'

const SkillsFeatures = () => {
  
  return (
  <Background classN="Skills__Wrapper" color="">
    <div className={"Skills__Content"}>

      <TitleSection title='Compétences' text='Mes Outils et ma vision de web' />
      
      <SkillsArea skill={Skillsdatas}/>

    </div>
  </Background>
)};

export { SkillsFeatures };
