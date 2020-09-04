import React, { SyntheticEvent, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import List from '../List';
import SearchBar from '../SearchBar';
import { paginationSlice } from '../../redux/slices/paginationSlice';
import { fetchStart, dropState } from '../../redux/fetchActions';
import {
  selectLoadingStatus,
  selectPagination,
  selectSearchString
} from '../../redux/selectors';
import { Container, Content, SearchContainer, StyledSpinner } from './style';
import { searchStringSlice } from '../../redux/slices/searchStringSlice';

const App = (): JSX.Element => {
  const paginationActions = paginationSlice.actions;
  const { currentPage, loadedPages, totalPages } = useSelector(
    selectPagination
  );
  const hasMore = loadedPages < totalPages;

  const dispatch = useDispatch();

  const loading = useSelector(selectLoadingStatus);
  const className = loading === 'idle' ? '' : 'loading';

  const { setSearchString } = searchStringSlice.actions;
  const searchString = useSelector(selectSearchString);
  const inputEl = useRef<HTMLInputElement>(null);

  const onPageChange = (pageNumber: number): void => {
    dispatch(paginationActions.setPage(pageNumber));
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
      <Pagination
        count={loadedPages}
        page={currentPage}
        shape="rounded"
        onChange={(_, pageNumber) => onPageChange(pageNumber)}
      />
    </Container>
  );
};

export default App;
