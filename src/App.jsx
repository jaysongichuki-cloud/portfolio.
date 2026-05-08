import { useState } from 'react'
import Header from './Header'
import Form from './Form'
import ProjectList from './ProjectList'

export default function App() {
  const [projects, modifyProjects] = useState([
    {
      id: 1,
      title: "Voting Poll Application",
      description:
        "I created this voting poll application. Hope you enjoy it.",
      link:
        "https://voting-poll-app-pink.vercel.app/",
    },

    {
      id: 2,
      title: "Donation App",
      description:
        "Here is a donation app project with responsive designs.",
      link:
        "https://jaysongichuki-cloud.github.io/Hope-donations/",
    }
  ])

  function addNewProject(title, description, link) {
    const newProject = {
      id: projects.length + 1,
      title,
      description,
      link,
    }

    modifyProjects([
      ...projects,
      newProject
    ])
  }

  return (
    <div>
      <Header />

      <Form addNewProject={addNewProject} />

      <div className="listPart">
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}