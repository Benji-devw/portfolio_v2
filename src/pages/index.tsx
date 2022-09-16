import type { NextPage } from 'next';
import Layout from '@/structures/Layout';
import { HeroFeatures } from '@/features/Hero_Features';
import { ServicesFeatures } from '@/features/Services_Features';
import { SkillsFeatures } from '@/features/Skills_Features';
import { PortfolioFeatures } from '@/features/Portfolio_Features';
import { WebAreaFeatures } from '@/features/WebArea_Features';

const Index: NextPage = () => {
  return (
    <Layout>
      <HeroFeatures />
      <ServicesFeatures />
      <SkillsFeatures />
      <PortfolioFeatures />
      <WebAreaFeatures />
    </Layout>
  )
}

export default Index
