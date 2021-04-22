import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function HomeUsedToolsComponent() {
  return (
    <ComponentLayout>
      <section className="HomeSkillsViewComponent">
        <div className="Title">
          <div className="Content">
            <h2>Tools</h2>
            <p className="Des">That's The Tools Im Working With Daily To Manage Full Project When Combine All Of Them In One Project</p>
          </div>
        </div>
        <div className="SkillsContent">
          <div className="Item">
            <h4>Android Development</h4>
            <p>Firebase, Bintray, MVVM, Single Activity Apps, Jetpack Component, Room Database, ADB Terminal, Fragments, Custom Views, Multi Modular Apps, Google Play Console, Android Profiler, Leak Canary</p>
          </div>
          <div className="Item">
            <h4>Web Development</h4>
            <p>Eslint Code Management With Airbnb Style, Webstorm, VSCode, Reusable Components, React Hooks, Mixins Queries In SASS Styles, Material UI</p>
          </div>
          <div className="Item">
            <hr />
            <h4>Backend Development</h4>
            <p>AWS Deployment, Digital Ocean, Nginx Load Balancer, Mysql (RDS), S3 Storage, Firebase, Socket IO Via Nest.js</p>
          </div>
          <div className="Item">
            <hr />
            <h4>Tools Development</h4>
            <p>Jenkins, Fastlane, ADB, Photoshop, Design Simple Animations In After Effects To App Splash Screen, Git, Github, Gitlab, Bitbucket, Linux Terminal</p>
          </div>
        </div>
      </section>
    </ComponentLayout>
  );
}
