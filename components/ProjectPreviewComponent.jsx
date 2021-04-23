import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function ProjectPreviewComponent({
  image = '', name = '', preview = '', createdAt = '', onClickCallback,
}) {
  const imageRef = React.useRef(null);
  const callback = React.useCallback((name = '') => {
    onClickCallback(name);
  }, [imageRef]);
  return (
    <ComponentLayout>
      <div className="ProjectPreviewComponent">
        <div className="Content">
          <img src={image} ref={imageRef} alt={name} loading="lazy" onClick={() => callback(name)} />
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
