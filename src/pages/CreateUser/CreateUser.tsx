import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/userActions";
import { Form, Button } from "react-bootstrap";

const CreateUser = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      createUser({ first_name: firstName, last_name: lastName, email: email })
    );
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3"
        controlId="formFirstName"
      >
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formLastName"
      >
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Create User
      </Button>
    </Form>
  );
};

export default CreateUser;
