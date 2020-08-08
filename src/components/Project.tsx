import React from "react";
import styled from "styled-components";
import type {
  Name,
  HtmlUrl,
  Description,
  StargazersCount,
  WatchersCount,
} from "../types/data";

type Props = {
  style: any;
  name: Name;
  htmlUrl: HtmlUrl;
  description: Description;
  stargazersCount: StargazersCount;
  watchersCount: WatchersCount;
};

const StyledProject = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  margin: 1em 0;
  & > p {
    color: cornflowerblue;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Project = ({
  style,
  name,
  htmlUrl,
  description,
  stargazersCount,
  watchersCount,
}: Props) => (
  <StyledProject style={style}>
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
  </StyledProject>
);

export default Project;
