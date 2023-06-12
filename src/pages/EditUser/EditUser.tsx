import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import User from "../../store/models/user";

interface EditUserProps {
  user: User;
  onSave: (user: User) => void;
}

const EditUser = ({ user, onSave }: EditUserProps) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("EditUser handleSubmit");
    // onSave({ ...user, first_name: firstName, last_name: lastName, email });
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

      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          type="submit"
        >
          <FaSave className="me-2" />
          Save
        </Button>
      </div>
    </Form>
  );
};

export default EditUser;
