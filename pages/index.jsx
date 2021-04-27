import React from 'react';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { PageHeaderViewComponent } from '../components/PageHeaderComponent';
import { HomeSkillsViewComponentView } from '../components/HomeSkillsViewComponent';
import { HomeToolsComponent } from '../components/HomeUsedToolsComponent';
import { ExperienceViewComponent } from '../components/ExperienceComponent';
import { EducationViewComponent } from '../components/EducationComponent';
import { getSavedTheme, setNewTheme } from '../info/ThemeState';

export default function Home() {
  console.log('Theme Info : ', getSavedTheme());
  return (
    <PersonalPagesViewComponent title="Yazan Tarifi - Android Developer Portfolio">
      <button onClick={() => setNewTheme('dark')}>TTT</button>
      <PageHeaderViewComponent />
      <HomeSkillsViewComponentView />
      <HomeToolsComponent />
      <ExperienceViewComponent />
      <EducationViewComponent />
    </PersonalPagesViewComponent>
  );
}
