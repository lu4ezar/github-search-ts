import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Repository from "../Repository";
import { fetchStart } from "../../redux/fetchActions";
import { Container, ButtonContainer } from "./style";
import { selectCurrentPage, selectError } from "../../redux/selectors";

const List = ({ hasMore }: { hasMore: boolean }): JSX.Element => {
  const dispatch = useDispatch();
  const repos = useSelector(selectCurrentPage);
  const error = useSelector(selectError);

  useEffect(() => {
    const scrollEl = document.getElementById("scroll");
    if (scrollEl) {
      scrollEl.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [repos]);

  const onClick = () => {
    dispatch(fetchStart());
  };

  return (
    <Container id="scroll">
      {repos.length
        ? repos.map(repo => <Repository key={repo.id} {...repo} />)
        : null}
      {error && <Alert severity="error">Error: {error}</Alert>}
      {hasMore && (
        <ButtonContainer>
          <Button variant="contained" color="primary" onClick={onClick}>
            Load more
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default List;
