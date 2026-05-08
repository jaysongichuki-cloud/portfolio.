import { useState } from 'react'
import Header from './Header'
import Form from './Form';
import ProjectList from './ProjectList';

export default function App(){
  const [projects , modifyProjects] = useState([
    {
      id: 1,
      title: "Voting poll application",
      description: "I created this voting poll application. Hope you enjoy it. Here is the link for the application,  https://voting-poll-app-pink.vercel.app/"
    },
    {
      id: 2,
      title: "Donation app",
      description: "Here is a donation app project with very enticing responsive designs, https://jaysongichuki-cloud.github.io/Hope-donations/"
    }
  ]);

  function addNewProject(title , description) {
    const newProject = {
      id: projects.length + 1,
      title,
      description,
    };
    modifyProjects([...projects,  newProject])
  }
    return(
      <div>
    <Header/>
    <Form addNewProject = {addNewProject}/>
    <div className='listPart'>
  
    <ProjectList projects={projects}/>
    </div>
    </div>
  )
}