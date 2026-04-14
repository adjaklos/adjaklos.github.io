import React from 'react';

export default function ModuleShell({
  id,
  label,
  title,
  children,
  dark = false,
  bodyClassName = '',
}) {
  return (
    <section
      className={dark ? 'module-shell module-shell-dark' : 'module-shell'}
      id={id}
    >
      <div className="module-banner">
        <p className="module-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <div className={bodyClassName ? `module-body ${bodyClassName}` : 'module-body'}>
        {children}
      </div>
    </section>
  );
}
