import React, { SyntheticEvent, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import { Link } from 'parse-link-header';
import List from '../List';
import SearchBar from '../SearchBar';
import { paginationSlice } from '../../redux/slices/paginationSlice';
import { fetchStart, dropState } from '../../redux/fetchActions';
import {
  selectLoadingStatus,
  selectPagination,
  selectSearchString,
} from '../../redux/selectors';
import {
  Container, Content, SearchContainer, StyledSpinner,
} from './style';
import { searchStringSlice } from '../../redux/slices/searchStringSlice';

const App = (): JSX.Element => {
  const {
    first, prev, next, last, current,
  } = useSelector(selectPagination);

  const dispatch = useDispatch();

  const loading = useSelector(selectLoadingStatus);
  const className = loading === 'idle' ? '' : 'loading';

  const { setSearchString } = searchStringSlice.actions;
  const searchString = useSelector(selectSearchString);
  const inputEl = useRef<HTMLInputElement>(null);

  const onPageChange = (link: Link): void => {
    dispatch(fetchStart(link.page));
  };

  const onSubmit = (e: SyntheticEvent<HTMLElement>): void => {
    e.preventDefault();
    if (inputEl && inputEl.current) {
      if (inputEl.current.value === searchString) {
        return;
      }
      dispatch(dropState());
      dispatch(setSearchString(inputEl.current.value));
    }
    dispatch(fetchStart());
  };

  return (
    <Container elevation={3}>
      <h1>Search for organization repos on GitHub</h1>
      <Content>
        <SearchContainer>
          <StyledSpinner name="pulse" className={className} />
          <SearchBar onSubmit={onSubmit} inputElRef={inputEl} />
        </SearchContainer>
        <List />
      </Content>
      <div>
        <IconButton disabled={!first?.page} onClick={(): void => onPageChange(first as Link)}>
          <MdFirstPage />
        </IconButton>
        <IconButton disabled={!prev?.page} onClick={(): void => onPageChange(prev as Link)}>
          <MdNavigateBefore />
        </IconButton>
        <IconButton disabled>{current}</IconButton>
        <IconButton disabled={!next?.page} onClick={(): void => onPageChange(next as Link)}>
          <MdNavigateNext />
        </IconButton>
        <IconButton disabled={!last?.page} onClick={(): void => onPageChange(last as Link)}>
          <MdLastPage />
        </IconButton>
      </div>
    </Container>
  );
};

export default App;
