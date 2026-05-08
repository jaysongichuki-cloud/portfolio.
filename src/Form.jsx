import { useState } from "react"
import Button from "./Button";
import "./index.css"

export default function Form({addNewProject}){
    const [title , modifyTtile] = useState("")
    const [description , modifyDescription] = useState("")
    function submitButton(){
            if(!title || !description) return;
    addNewProject(title , description);

    modifyDescription("");
    modifyTtile("");
    }
    return(
        <div className="userForm">
            <strong>Add Project </strong>
            
            Title
            <input type="text " value={title} 
            onChange={(event) => modifyTtile(event.target.value)}
            />
            
            Description
            <textarea 
            value={description}
            onChange={(event) => modifyDescription(event.target.value)}
            />       
            <br /> 
            <br />   

                <Button className = "Button" onClick={submitButton}>Add</Button>

            
        </div>
    )
}