import { connect } from "react-redux";
import App from "../components/App";
import updateSearchString from "../redux/actions/searchStringActions";
import type { SearchString } from "../types/searchString";
import type { LoadingType } from "../types/loading";

const mapStateToProps = ({
  searchString,
  isLoading,
}: {
  searchString: SearchString;
  isLoading: LoadingType;
}) => ({
  searchString,
  isLoading,
});

const mapDispatchToProps = {
  updateSearchString,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
