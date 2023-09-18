import React from "react";
import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to={`/userlist`}>Go to User List</Link>
    </div>
  );
}
