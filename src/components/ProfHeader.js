import React from "react";
import { Button, Icon } from "semantic-ui-react";

const URL = "http://localHost:3000/";

export default function ProfHeader(props) {
  let { username, email } = props.viewedUser;

  function follow() {
    fetch(
      URL + `api/users/${props.user.id}/follow_user/${props.viewedUser.id}`,
      { method: "PATCH" }
    );
  }

  function unfollow() {
    fetch(
      URL + `api/users/${props.user.id}/unfollow_user/${props.viewedUser.id}`,
      { method: "PATCH" }
    );
  }

  function followButton() {
    if (props.following === null) {
      return <Icon name="chess king" />;
    } else if (props.following === true) {
      return (
        <Button negative size="mini" content="Unfollow" onClick={unfollow} />
      );
    } else {
      return <Button positive size="mini" content="Follow" onClick={follow} />;
    }
  }

  return (
    <div>
      <span>User: {username} </span>
      <span>{followButton()}</span>
      <p>@ {email}</p>
    </div>
  );
}
