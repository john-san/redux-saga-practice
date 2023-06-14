import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/CreateUser/CreateUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/user/create"
          element={<CreateUser />}
        />
        <Route
          path="/user/edit/:id"
          element={<h1>Edit User</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
