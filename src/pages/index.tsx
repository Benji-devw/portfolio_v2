import type { NextPage } from 'next';
import Layout from '@/structures/Layout';
import { HeroFeatures } from '@/features/hero_Features';
import { IconsAreaFeatures } from '@/features/iconsArea_Features';
import { SkillsFeatures } from '@/features/skills_Features';
import { ServicesFeatures } from '@/features/services_Features';
import { WebAreaFeatures } from '@/features/WebArea_Features';

const Index: NextPage = () => {
  return (
    <Layout>
      <HeroFeatures />
      <IconsAreaFeatures />
      <SkillsFeatures />
      <ServicesFeatures />
      <WebAreaFeatures />
    </Layout>
  )
}

export default Index
