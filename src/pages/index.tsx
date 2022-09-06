import type { NextPage } from 'next';
import Layout from '@/structures/Layout';
import { HeroFeatures } from '@/features/hero_Features';
import { IconsAreaFeatures } from '@/features/iconsArea_Features';
import { SkillsArea } from '@/components/skills/SkillsArea';

const Index: NextPage = () => {
  return (
    <Layout>
      <HeroFeatures />
      <IconsAreaFeatures />
      <SkillsArea />
    </Layout>
  )
}

export default Index
