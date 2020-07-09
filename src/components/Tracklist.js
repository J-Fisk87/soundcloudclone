import React from "react";
import { Container } from "semantic-ui-react";
import TrackCard from "./TrackCard";

export default function Tracklist(props) {
  return props.tracks.length > 0 ? (
    <div>
      {props.tracks.map((t) => (
        <TrackCard track={t} />
      ))}
    </div>
  ) : (
    <div>
      <p>No data</p>
    </div>
  );
}
