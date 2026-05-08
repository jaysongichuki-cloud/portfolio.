import "./index.css"

export default function Button({ onClick}){
    return(
        <button className="Button" onClick={onClick} >Add</button>
    )
}