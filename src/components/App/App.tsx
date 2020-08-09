import React, { SyntheticEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchStringSlice } from "../../redux/slices/searchStringSlice";
import List from "../List";
import { selectSearchString, selectLoadingStatus } from "../../redux/selectors";
import { Container, SearchPanel, StyledSpinner, StyledInput } from "./style";

const App = (): JSX.Element => {
  const { setSearchString } = searchStringSlice.actions;
  const searchString = useSelector(selectSearchString);
  const loading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    dispatch(setSearchString(event.currentTarget.value));
  };

  const className = loading === "idle" ? "" : "loading";

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
      <List />
    </Container>
  );
};

export default App;
