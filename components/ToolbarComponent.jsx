import React from 'react';
import Link from 'next/link';

export default function ToolbarComponent() {
  return (
    <div className="Toolbar_Container">
      <h3 className>Yazan Tarifi</h3>
      <div className="Links">
        <Link className="Link" href="/">Home</Link>
        <Link className="Link" href="/projects">Projects</Link>
        <Link className="Link" href="/about">About</Link>
        <Link className="Link" href="/skills">Skills</Link>
        <Link className="Link" href="/archive">Archive</Link>
      </div>
    </div>
  );
}
