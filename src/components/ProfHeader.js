import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";

export default function ProfHeader(props) {
    let { username, email } = props.user;

  function followButton() {
    if (props.self){
        return <Icon chess king size='large' />
    els
    }
  }

  return (
    <div>
      <span>User: {username} </span>
      {/* <span>{followButton()}</span> */}
      <p>@ {email}</p>
    </div>
  );
}
