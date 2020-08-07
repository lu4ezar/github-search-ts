// @flow
import { connect } from 'react-redux';
import List from '../components/List';
import { fetchNextPage } from '../redux/actions/dataActions';
import type { DataArray } from '../types/data';
import type { ErrorType } from '../types/error';

const mapStateToProps = ({
	data,
	error
}: {
	data: DataArray,
	error: ErrorType
}) => ({
	data,
	error
});

const mapDispatchToProps = {
	fetchNextPage
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
