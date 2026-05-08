import ProjectCard from "./ProjectCard";
import "./index.css"

export default function ProjectList({projects}){
    return(
        <div className="projectList">
            {projects.map((project) =>
            (<ProjectCard key = {project.id} project = {project}/>)
             )}


            
        </div>
    )
}