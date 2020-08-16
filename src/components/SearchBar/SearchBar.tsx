import React, { SyntheticEvent } from 'react';
import { Paper, IconButton } from '@material-ui/core';
import { MdSearch } from 'react-icons/md';
import StyledInput from './style';

type Props = {
  onSubmit: (e: SyntheticEvent<HTMLElement>) => void;
  inputElRef: React.RefObject<HTMLInputElement>;
};

const SearchBar = ({ onSubmit, inputElRef }: Props): JSX.Element => (
  <Paper component='form' onSubmit={onSubmit}>
    <StyledInput inputRef={inputElRef} placeholder='enter organization name' />
    <IconButton type='submit' aria-label='search'>
      <MdSearch />
    </IconButton>
  </Paper>
);

export default SearchBar;
