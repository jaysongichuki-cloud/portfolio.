import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList