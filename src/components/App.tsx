import React, { SyntheticEvent } from "react";
import Spinner from "react-spinkit";
import styled from "styled-components";
import type { SearchString } from "../types/searchString";
import type { LoadingState } from "../types/loading";
import ListContainer from "../containers/ListContainer";

const Container = styled.div`
  font-family: "Playfair Display", serif;
  background: #f7f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 3% 3% 3% 3%;
  height: 100%;
  @media (min-width: 768px) and (max-width: 1439px) {
    width: 60%;
  }
  @media (min-width: 1440px) {
    width: 40%;
  }
  box-sizing: border-box;
  border: 1px solid black;
  box-shadow: 12px 12px 2px 1px;
`;
const SearchPanel = styled.div`
  margin-top: -1em;
  margin-bottom: 1em;
  display: inline-flex;
  align-items: center;
`;
const StyledSpinner = styled(Spinner)`
  color: #972d16;
  visibility: hidden;
  &.loading {
    visibility: visible;
  }
`;
const StyledInput = styled.input`
  font-size: 1em;
  box-shadow: 6px 6px 2px 1px;
`;

type Props = {
  searchString: SearchString;
  isLoading: LoadingState;
  updateSearchString: (str: string) => void;
};

const App = ({
  searchString,
  isLoading,
  updateSearchString,
}: Props): JSX.Element => {
  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    updateSearchString(event.currentTarget.value);
  };

	const className = isLoading ? "loading" : "";

  return (
    <Container>
      <h1>Search for projects on GitHub</h1>
      <SearchPanel>
        <StyledSpinner name="pulse" className={className} />
        <StyledInput
          placeholder="start here"
          value={searchString}
          onChange={handleChange}
        />
      </SearchPanel>
      <ListContainer />
    </Container>
  );
};

export default App;
