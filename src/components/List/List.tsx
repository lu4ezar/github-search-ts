import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Repository from '../Repository';
import { fetchStart } from '../../redux/fetchActions';
import { Container, ButtonContainer } from './style';
import { selectCurrentPage, selectError } from '../../redux/selectors';

const List = (): JSX.Element => {
  const repos = useSelector(selectRepos);
  const error = useSelector(selectError);

  useEffect(() => {
    const scrollEl = document.getElementById('scroll');
    if (scrollEl) {
      scrollEl.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [repos]);

  return (
    <Container id="scroll">
      {repos.length
        ? repos.map((repo) => <Repository key={repo.id} {...repo} />)
        : null}
      {error && (
        <Alert severity="error">
          Error:
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default List;
