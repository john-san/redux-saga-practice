import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/userActions";
import User from "../../store/models/user";
import UserCard from "./components/UserCard";
import { Row } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);

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
      <div>{usersContent}</div>
    </div>
  );
}

export default Home;
