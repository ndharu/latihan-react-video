import { Player } from "video-react";
import { source } from "../data";

export default (props) => {
  return (
    <Player>
      <source src={source.test} />
    </Player>
  );
};
