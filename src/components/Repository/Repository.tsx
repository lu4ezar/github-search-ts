import React from 'react';
import { IconContext } from 'react-icons';
import { GoStar, GoEye, GoRepoForked } from 'react-icons/go';
import { IRepo } from '../../types/repos';
import StyledRepository from './style';

const Repository = ({
  name,
  url,
  stargazers,
  watchers,
  forks,
}: IRepo): JSX.Element => (
  <StyledRepository>
    <h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </h3>
    <div>
      <IconContext.Provider
        value={{ color: 'silver', className: 'react-icons' }}
      >
        <GoStar />
        {stargazers}
        <GoEye />
        {watchers}
        <GoRepoForked />
        {forks}
      </IconContext.Provider>
    </div>
  </StyledRepository>
);

export default Repository;
