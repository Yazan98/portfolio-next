import React from 'react';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { PageHeaderViewComponent } from '../components/PageHeaderComponent';
import { HomeSkillsViewComponentView } from '../components/HomeSkillsViewComponent';
import { HomeToolsComponent } from '../components/HomeUsedToolsComponent';
import { ExperienceViewComponent } from '../components/ExperienceComponent';
import { EducationViewComponent } from '../components/EducationComponent';

export default function Home() {
  return (
    <PersonalPagesViewComponent>
      <PageHeaderViewComponent />
      <HomeSkillsViewComponentView />
      <HomeToolsComponent />
      <ExperienceViewComponent />
      <EducationViewComponent />
    </PersonalPagesViewComponent>
  );
}
