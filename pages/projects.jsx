import React from 'react';
import PersonalPagesComponent from '../components/layouts/PersonalPagesComponent';
import { getProjectsList, getProjectsListByFilter } from '../info/ProfileInformation';
import ProjectPreviewComponent from '../components/ProjectPreviewComponent';

export default function ProjectsComponent() {
  const [filter, setFilter] = React.useState('all');
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    if (filter === 'all') {
      setProjects(getProjectsList());
    } else {
      setProjects(getProjectsListByFilter(filter));
    }
  }, [filter]);
  return (
    <PersonalPagesComponent>
      <div className="ProjectsComponent">
        <div className="Title">
          <h2>Portfolio</h2>
          <p>This is List of Some Projects I Built</p>
          <div className="Links">
            <label className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Projects</label>
            <label className={filter === 'android' ? 'active' : ''} onClick={() => setFilter('android')}>Android Apps</label>
            <label className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>Websites</label>
            <label className={filter === 'api' ? 'active' : ''} onClick={() => setFilter('api')}>Web Apps</label>
            <label className={filter === 'opensource' ? 'active' : ''} onClick={() => setFilter('opensource')}>Opensource Projects</label>
          </div>

          <div className="ProjectsContainer">
            {projects ? projects.map((item) => (
              (<ProjectPreviewComponent image={item.previewImage} name={item.name} createdAt={item.createdAt} preview={item.typeText} />)
            )) : null}
          </div>
        </div>
      </div>
    </PersonalPagesComponent>
  );
}
