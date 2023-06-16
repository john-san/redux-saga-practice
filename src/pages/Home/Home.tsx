import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/userActions";
import User from "../../models/user";
import UserCard from "./components/UserCard";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);
  console.log("Home users", users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const usersContent =
    users?.length > 0 ? (
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-4"
      >
        {users.map((user: User) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </Row>
    ) : (
      <h2>No users</h2>
    );

  return (
    <div>
      <h1>Users</h1>
      <Link to="/user/create">
        <Button variant="primary">Create User</Button>
      </Link>
      <div>{usersContent}</div>
    </div>
  );
}

export default Home;
