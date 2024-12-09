import { useContext, useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const { todos, setTodos } = useContext(TodoContext);
    const navigate = useNavigate();
    const { id } = useParams();

    // Find the todo to edit when component mounts
    useEffect(() => {
        const todoToEdit = todos.find(todo => todo.id === parseInt(id));

        if (todoToEdit) {
            setTitle(todoToEdit.title);
            setDescription(todoToEdit.description);
            setCompleted(todoToEdit.completed);
        } else {
            // If no todo found, redirect back to home
            navigate('/');
        }
    }, [id, todos, navigate]);

    return (
        <Container>
            <h1 className="my-3">Edit Todo</h1>
            <Form
                onSubmit={e => {
                    e.preventDefault();

                    // Update the todos array
                    const updatedTodos = todos.map(todo =>
                        todo.id === parseInt(id)
                            ? { ...todo, title, description, completed } : todo);

                    // Update the state
                    setTodos(updatedTodos);

                    // Redirect back to home page
                    navigate("/");
                }}>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title </Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Get software developer job"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        row={3}
                        placeholder={`1. Create amazing project\n2.Apply to Google & Netflix\n3. Crush interview`}
                        required
                    />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    id="completed"
                    label="Mark as completed"
                    checked={completed}
                    onChange={(e) => setCompleted((e.target.checked))}
                    className="mb-3"
                />
                <Button variant="primary" type="submit">
                    Update Todo
                </Button>
            </Form>
        </Container>
    )
}
