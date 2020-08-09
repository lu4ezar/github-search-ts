import styled from "styled-components";

export const StyledRepository = styled.div`
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