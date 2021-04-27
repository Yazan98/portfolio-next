import React from 'react';
import { useRouter } from 'next/router';
import { BlueLineComponent } from './BlueLineComponent';

export default function ToolbarComponent() {
  const router = useRouter();
  return (
    <div className="Toolbar_Container">
      <BlueLineComponent />
      <div className="Content">
        <h3 className>Yazan Tarifi</h3>
        <div className="Links">
          <a href="/" className={router.pathname === '/' ? 'active' : 'Link'}>Home</a>
          <a href="/projects" className={router.pathname === '/projects' ? 'active' : 'Link'}>Projects</a>
          <a href="/skills" className={router.pathname === '/skills' ? 'active' : 'Link'}>Skills</a>
          <a href="/archive" className={router.pathname === '/archive' ? 'active' : 'Link'}>Archive</a>
          <a href="/resume" id="rounded" className={router.pathname === '/resume' ? 'active' : 'Link'}>Resume</a>
        </div>
      </div>
    </div>
  );
}

export const ToolbarViewComponent = React.memo(ToolbarComponent);
