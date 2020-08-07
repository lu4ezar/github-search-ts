import axios from 'axios';

const API_ROOT = 'https://api.github.com/search/repositories';

export const fetchData = arg => {
	let url;
	if (arg.searchString) {
		url = `${API_ROOT}?q=${arg.searchString}`;
	} else {
		url = arg;
	}
	return axios
		.get(url)
		.then(response => response)
		.catch(error => error.message);
};

export const getNextPageUrl = response => {
	const { link } = response.headers;
	if (!link) {
		return null;
	}
	const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);
	if (!nextLink) {
		return null;
	}
	return nextLink
		.trim()
		.split(';')[0]
		.slice(1, -1);
};

/* eslint-disable camelcase */
export const stripData = ({ items }) =>
	items.map(
		({
			id,
			name,
			html_url,
			description,
			stargazers_count,
			watchers_count
		}) => ({
			id,
			name,
			htmlUrl: html_url,
			description,
			stargazersCount: stargazers_count,
			watchersCount: watchers_count
		})
	);
