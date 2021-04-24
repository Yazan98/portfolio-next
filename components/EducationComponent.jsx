import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function EducationComponent() {
  return (
    <ComponentLayout>
      <section className="HomeSkillsViewComponent">
        <div className="Title">
          <div className="Content">
            <h2>Education</h2>
          </div>
        </div>
        <div className="SkillsContentExps">
          <div className="Item">
            <p>2016 - 2020</p>
            <h4>Hashmite Univeristy</h4>
            <p className="ItemDes">
              Bachelor of Software Engineering in Information Technology Interaction
              Build Software And From The Planing Phase To Deliver The Product
            </p>
          </div>
        </div>
      </section>
    </ComponentLayout>
  );
}

export const EducationViewComponent = React.memo(EducationComponent);
