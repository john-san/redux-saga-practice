import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/CreateUser/CreateUser";
import EditUser from "./pages/EditUser/EditUser";

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
          element={<EditUser />}
        />
      </Routes>
    </Router>
  );
}

export default App;
