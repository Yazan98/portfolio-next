import React from 'react';
import PersonalPagesComponent from '../components/layouts/PersonalPagesComponent';
import PageHeaderComponent from '../components/PageHeaderComponent';
import HomeSkillsViewComponent from '../components/HomeSkillsViewComponent';
import HomeUsedToolsComponent from '../components/HomeUsedToolsComponent';

export default function Home() {
  return (
    <PersonalPagesComponent>
      <PageHeaderComponent />
      <HomeSkillsViewComponent />
      <HomeUsedToolsComponent />
    </PersonalPagesComponent>
  );
}
