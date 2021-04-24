import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function ExperienceComponent() {
  return (
    <ComponentLayout>
      <section className="HomeSkillsViewComponent">
        <div className="Title">
          <div className="Content">
            <h2>Experience</h2>
            <p className="Des">Where I’ve Worked</p>
          </div>
        </div>
        <div className="SkillsContentExps">
          <div className="Item">
            <p>Jun 2020 - Present</p>
            <h4>
              Android Developer -
              <a href="http://opensooq.com"> @Opensooq</a>
            </h4>
            <p className="ItemDes">
              Part Of Android Team Responsible On Designing Responsive
              User Interface and Write Clean Code With Good Infrastructure
              and Latest Android Technologies
            </p>
          </div>

          <div className="Item">
            <hr />
            <p>
              Jun 2018 - December 2020
            </p>
            <h4>
              Android Developer -
              <a href="http://noventapp.com"> @NoventApp</a>
            </h4>
            <p className="ItemDes">
              Android Developer Responsible On Build The Project From Scratch To Deliver The Product
              With Latest Android Technologies, Specially Logistic Applications In Products Delivery
              and Food Delivery and Maintain Backend Api's
            </p>
          </div>
        </div>
      </section>
    </ComponentLayout>
  );
}

export const ExperienceViewComponent = React.memo(ExperienceComponent);
