import Spinner from "react-spinkit";
import styled from "styled-components";

export const Container = styled.div`
  font-family: "Playfair Display", serif;
  background: #f7f0f0;
  display: flex;
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
  border: 1px solid black;
  box-shadow: 12px 12px 2px 1px;
`;
export const SearchPanel = styled.div`
  margin-top: -1em;
  margin-bottom: 1em;
  display: inline-flex;
  align-items: center;
`;
export const StyledSpinner = styled(Spinner)`
  color: #972d16;
  visibility: hidden;
  &.loading {
    visibility: visible;
  }
`;
export const StyledInput = styled.input`
  font-size: 1em;
  box-shadow: 6px 6px 2px 1px;
`;
