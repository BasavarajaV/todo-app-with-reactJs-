import React, {useState} from "react"
import {
    FormGroup,
    Form,
    InputGroup,
    InputGroupAddon,
    Button,
    Container,
    Input
} from "reactstrap"
import {v4} from "uuid"


const TodoForm=({addTodos})=>{
    const [todoString, setTodoString]= useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todoString === ""){
            return alert("Please fill some value")
        }

        const todo={
            todoString,
            id: v4()
        }
        
        addTodos(todo) // addTodos is method which is coming as props in this Form component

        setTodoString("")
    }


    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter a todo string"
                    value= {todoString}
                    onChange= {e=> setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="success"
                        >
                            Add Todo
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;