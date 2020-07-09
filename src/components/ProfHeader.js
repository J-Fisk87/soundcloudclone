import React from "react";
import { Container } from "semantic-ui-react";

export default function ProfHeader(props) {
  let { username, email } = props.user;
  return (
    <div>
      <p>User: {username}</p>
  <p>@ {email}</p>
    </div>
  );
}
