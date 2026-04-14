import React from 'react';
import ModuleShell from './ModuleShell';
import ProjectModule from './ProjectModule';

export default function CourseProjectsModule({ projects, onOpenImage }) {
  return (
    <ModuleShell
      id="ece-203-work"
      label="ECE 203"
      title="Featured coursework from Electronics Laboratory."
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
