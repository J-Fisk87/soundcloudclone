import React from "react";
import { Container } from "semantic-ui-react";
import TrackCard from "./TrackCard";

export default function Tracklist(props) {
  return props.tracks !== undefined ? (
    <Container text>
      {props.tracks.map((t) => (
        <TrackCard track={t} />
      ))}
    </Container>
  ) : (
    <Container text>
      <p>No data</p>
    </Container>
  );
}
