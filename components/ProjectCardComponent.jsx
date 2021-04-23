import React from 'react';

export const ProjectCardComponent = ({
  icon, name, description, filter, icons = [], isOpenSource,
}) => (
  <div className="ProjectCardContainer">
    <img alt={name} loading="lazy" src={icon} width="40px" height="40px" />
    <label htmlFor="first-name">{name}</label>
    <p className="Description">{description}</p>
    <div className="Filters">
      <p className="Filter">{filter}</p>
      <p className="Filter">{isOpenSource ? 'Open Source' : 'Closed Source'}</p>
    </div>
    <div className="Links">
      {icons.map((item, index) => {
        let iconLink;
        if (item.type === 'Github') {
          iconLink = '/github.png';
        } else {
          iconLink = '/link.png';
        }
        return <a target="_blank" rel="noreferrer" href={item.link}><img alt="Link" height="20px" width="20px" src={iconLink} /></a>;
      })}
    </div>
  </div>
);
