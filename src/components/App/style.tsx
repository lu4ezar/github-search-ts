import Spinner from 'react-spinkit';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Container = styled(Paper)`
  font-family: 'Playfair Display', serif;
  display: flex;
  flex: 1;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSpinner = styled(Spinner)`
  color: #e13535;
  visibility: hidden;
  align-self: center;
  &.loading {
    visibility: visible;
  }
`;
