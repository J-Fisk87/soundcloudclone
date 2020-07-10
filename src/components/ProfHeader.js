import React from "react";
import { Button, Icon } from "semantic-ui-react";

const URL = "http://localHost:3000/";

export default function ProfHeader(props) {
  let { username, email } = props.user;

  function follow() {console.log(`ProfHeader: ${props.user}`)
    fetch(
      URL + `api/users/${props.currentUserId}/follow_user/${props.user.id}`,
      { method: "PUT" }
    ).then(res => res.json()).then(() => props.toggleFollowingState());
  }

  function unfollow() {
    fetch(
      URL + `api/users/${props.currentUserId}/unfollow_user/${props.user.id}`,
      { method: "PUT" }
    ).then(res => res.json()).then(() => props.toggleFollowingState());;
  }

  function followButton() {
    if (!props.isCurrentUser) {
      if (props.following === true) {
        return (
          <Button negative size="mini" content="Unfollow" onClick={unfollow} />
        );
      } else {
        return <Button positive size="mini" content="Follow" onClick={follow} />;
      }
    }
    return <Icon name="chess king" />;
  }

  return (
    <div>
      <span>User: {username} </span>
      <span>{followButton()}</span>
      <p>@ {email}</p>
    </div>
  );
}
