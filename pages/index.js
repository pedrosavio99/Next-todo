import { useState } from "react"

const Index = () => {
    const [userInput, setInput] = useState('')
    const[todolist,settodolist] = useState([])

    const handleChange = (value_to_change) =>{
        value_to_change.preventDefault()
        setInput(value_to_change.target.value)
        // console.log(userInput)
    }
    const handleSubmit = (value_to_change) =>{
        
        value_to_change.preventDefault()
        settodolist([
            userInput,
            ...todolist
        ])

        setInput('')
    }
    const handleDelete = (value_to_change) =>{
        const updateList = todolist.filter(todoItem =>todolist.indexOf(todoItem)!=todolist.indexOf(value_to_change))
        settodolist(updateList)
    }
    return(
        <div>
            <h3>Next TodoList</h3>
            <form>
                <input type='text' value={userInput} placeholder="Enter a todo" onChange={handleChange}/> <button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    todolist.length >=1 ? todolist.map((todo, index)=>{
                        return <li key={index}>{todo} <button onClick={
                            (value_to_change) => { 
                            value_to_change.preventDefault()
                            handleDelete(todo)
                        }}>Delete</button></li>
                    }) : "Enter a todo item"
                }
            </ul>
        </div>
    )
}

export default Index