import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";

export default function ProfHeader(props) {
    let { username, email } = props.user;

    //how is somebody "followed"?

//   function followButton() {
//     if (props.self){
//         return <Icon chess king size='large' />
//     }else if ()
//   }

  return (
    <div>
      <span>User: {username} </span>
      {/* <span>{followButton()}</span> */}
      <p>@ {email}</p>
    </div>
  );
}
