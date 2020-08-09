import React from "react";
import {
  Name,
  Url,
  StargazersCount,
  WatchersCount,
  ForksCount
} from "../../types/repos";
import { StyledRepository } from "./style";

type Props = {
  style: React.CSSProperties;
  name: Name;
  url: Url;
  stargazers: StargazersCount;
  watchers: WatchersCount;
  forks: ForksCount;
};

const Repository = ({
  style,
  name,
  url,
  stargazers,
  watchers,
  forks
}: Props): JSX.Element => (
  <StyledRepository style={style}>
    <h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </h3>
    <div>
      Stargazers: {stargazers}
      Watchers: {watchers}
      Forks: {forks}
    </div>
  </StyledRepository>
);

export default Repository;
