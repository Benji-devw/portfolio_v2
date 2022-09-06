import { Background } from '@/components/background/Background';
import { SkillsArea } from '@/components/skills/SkillsArea';
import Skillsdatas from '@/api/SkillsDatas.json'

const SkillsFeatures = () => {
  
  return (
  <Background classN="Skills__Wrapper" color="">
    <div className={"Skills__Content"}>

      <SkillsArea skill={Skillsdatas}/>

    </div>
  </Background>
)};

export { SkillsFeatures };
