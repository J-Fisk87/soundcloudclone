import React from "react";
import { CardGroup } from "semantic-ui-react";
import TrackCard from "./TrackCard";

export default function Tracklist(props) {
  return props.tracks.length > 0 ? (
    <CardGroup itemsPerRow={1}>
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
