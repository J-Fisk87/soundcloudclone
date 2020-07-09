import React from "react";
import { Container, CardGroup } from "semantic-ui-react";
import TrackCard from "./TrackCard";

export default function Tracklist(props) {
  return props.tracks.length > 0 ? (
    <CardGroup>
      {props.tracks.map((t) => (
        <TrackCard track={t} />
      ))}
    </CardGroup>
  ) : (
    <div>
      <p>No data</p>
    </div>
  );
}
