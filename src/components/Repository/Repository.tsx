import React from "react";
import {
  Name,
  HtmlUrl,
  Description,
  StargazersCount,
  WatchersCount
} from "../../types/repos";
import { StyledRepository } from "./style";

type Props = {
  style: React.CSSProperties;
  name: Name;
  htmlUrl: HtmlUrl;
  description: Description;
  stargazersCount: StargazersCount;
  watchersCount: WatchersCount;
};

const Repository = ({
  style,
  name,
  htmlUrl,
  description,
  stargazersCount,
  watchersCount
}: Props): JSX.Element => (
  <StyledRepository style={style}>
    <h3>
      <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </h3>
    <p>{description}</p>
    <div>
      Stargazers: {stargazersCount}
      Watchers: {watchersCount}
    </div>
  </StyledRepository>
);

export default Repository;
