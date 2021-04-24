import React from 'react';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';

function getDefaultToolItemComponent(image, name, usage, description) {
  return (
    <div className="ToolsComponent">
      <div className="Content">
        <div className="Intro">
          <img src={image} alt={name} loading="lazy" />
          <h3>{name}</h3>
        </div>
        <div className="Usage">
          <h3>{usage}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function getDefaultToolItemComponentRtl(image, name, usage, description) {
  return (
    <div className="ToolsComponent">
      <div className="Content">
        <div className="Usage">
          <h3>{usage}</h3>
          <p>{description}</p>
        </div>
        <div className="Intro">
          <img src={image} alt={name} loading="lazy" />
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default function SkillsComponent() {
  return (
    <PersonalPagesViewComponent>
      <div className="SkillsContainer">
        <div className="AboutContentContainer">
          <h2>Skills</h2>
          <p>
            This Page Include All Languages, Frameworks I Use Daily And What i Build In This Tools
            To Create Projects Most Of Them is Just For Fun So
            This Page Will Show The Steps, Tools To Build Projects I work on
          </p>
        </div>

        <div className="Tools">
          {getDefaultToolItemComponent(
            '/kotlin.webp',
            'Kotlin Language',
            'Kotlin Usage',
            'Kotlin Programming Language is My Favourite Language and Most Used in My Day Because'
              + ' My Primary Job is Android Developer so Im Using Kotlin Everyday in my Life To Built Tools And The '
              + 'Cool Thing About This Language is You Have KMPs Which is Kotlin Multi Platform Projects Also I can Build'
              + ' Projects On Any Device That Support JVM Like Libraries, Apps, API',
          )}

          {getDefaultToolItemComponentRtl(
            '/js.webp',
            'Javascript Language',
            'Javascript Usage',
            'Im Using Javascript With React.js, Next.js To Build Single Page Apps With Jsx Syntax',
          )}
        </div>
      </div>
    </PersonalPagesViewComponent>
  );
}
