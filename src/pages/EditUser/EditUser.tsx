import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FaSave, FaTimes, FaTrash } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserById,
  updateUser,
  updateUserCancel,
  deleteUser,
} from "../../actions/userActions";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user.currentUser);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("EditUser handleSubmit user", user);
    await dispatch(
      updateUser({
        ...user,
        first_name: firstName,
        last_name: lastName,
        email,
      })
    );
    navigate("/");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await dispatch(deleteUser(user!.id));
      navigate("/");
    }
  };

  const handleCancel = () => {
    dispatch(updateUserCancel());
    navigate("/");
  };

  // once user exists, set form values
  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    // load user from store
    if (id === undefined) {
      navigate("/");
    } else {
      dispatch(getUserById(parseInt(id)));
    }
  }, [dispatch, id]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

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
        <Button
          variant="danger"
          onClick={handleDelete}
        >
          <FaTrash /> Delete
        </Button>
        <Button
          variant="secondary"
          onClick={handleCancel}
        >
          <FaTimes /> Cancel
        </Button>
      </div>
    </Form>
  );
};

export default EditUser;
