import { Route, Routes } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
