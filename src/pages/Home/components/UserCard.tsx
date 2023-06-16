// typescript react component that accepts a user prop
import { Card } from "react-bootstrap";
import User from "../../../models/user";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const { first_name, last_name, email, avatar } = user;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={avatar}
        className="rounded-circle"
        style={{ height: "150px", width: "150px", margin: "auto" }}
      />
      <Card.Body>
        <Card.Title className="text-center">
          {first_name} {last_name}
        </Card.Title>
        <Card.Text className="text-center">{email}</Card.Text>
        <div className="d-flex justify-content-center">
          <Link to={`/user/edit/${user.id}`}>
            <button className="btn btn-primary me-2">
              <FaEdit />
            </button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
