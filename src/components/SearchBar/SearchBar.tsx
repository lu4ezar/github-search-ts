import React, { SyntheticEvent, ChangeEvent } from "react";
import { Paper, IconButton } from "@material-ui/core";
import { MdSearch } from "react-icons/md";
import { fetchStart } from "../../redux/fetchActions";
import { searchStringSlice } from "../../redux/slices/searchStringSlice";
import { selectSearchString } from "../../redux/selectors";
import { StyledInput } from "./style";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
  const { setSearchString } = searchStringSlice.actions;
  const searchString = useSelector(selectSearchString);
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchString(event.currentTarget.value));
  };
  const onSubmit = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(fetchStart());
  };

  return (
    <Paper component="form" onSubmit={onSubmit}>
      <StyledInput
        value={searchString}
        placeholder="enter organization name"
        onChange={handleChange}
      />
      <IconButton type="submit" aria-label="search">
        <MdSearch />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
