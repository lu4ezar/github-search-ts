import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import Repository from '../Repository';
import { Container } from './style';
import { selectRepos, selectError } from '../../redux/selectors';

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
