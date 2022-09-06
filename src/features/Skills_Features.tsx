import { Background } from '@/components/background/Background';
import { SkillsArea } from '@/components/skills/SkillsArea';


const SkillsFeatures = () => {

  return (
  <Background classN="Skills__Wrapper" color="">
    <div className={"Skills__Content"}>

      <SkillsArea />

    </div>
  </Background>
)};

export { SkillsFeatures };
