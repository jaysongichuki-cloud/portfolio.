
import "./index.css";

export default function ProjectCard({project}){
    return(
        <div className="projectCard">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            

        </div>
    )
}