import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function ProjectPreviewComponent({
  image = '', name = '', preview = '', createdAt = '',
}) {
  return (
    <ComponentLayout>
      <div className="ProjectPreviewComponent">
        <div className="Content">
          <img src={image} alt={name} loading="lazy" />
          <div className="Texts">
            <p className="Date">
              Created At :
              {createdAt}
            </p>
            <h3>{name}</h3>
            <p>{preview}</p>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}
