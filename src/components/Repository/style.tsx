import styled from 'styled-components';
import { Card } from '@material-ui/core';

const StyledRepository = styled(Card)`
  margin: 1em;
  padding: 1em;
  & > p {
    color: cornflowerblue;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & .react-icons {
    vertical-align: middle;
    padding-right: 1rem;
  }
`;

export default StyledRepository;
