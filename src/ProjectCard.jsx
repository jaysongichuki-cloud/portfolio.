function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
      />

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.technologies?.map((tech, index) => (
            <span key={index}>
              {tech}
            </span>
          ))}
        </div>

        <a
          className="btn"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard