import React from 'react';
import ModuleShell from './ModuleShell';
import ProjectModule from './ProjectModule';

export default function ProjectsModule({ projects, onOpenImage }) {
  return (
    <ModuleShell
      id="projects"
      label="Projects"
      title="Embedded systems and audio projects pulled directly from my resume."
      dark
      bodyClassName="projects-module-stack"
    >
      {projects.map((project, index) => {
        const nextProject = projects[index + 1];

        return (
          <ProjectModule
            key={project.id}
            nextProjectId={nextProject?.id}
            nextProjectLabel={nextProject?.bannerTitle}
            onOpenImage={onOpenImage}
            project={project}
          />
        );
      })}
    </ModuleShell>
  );
}
