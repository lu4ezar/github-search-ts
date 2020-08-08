import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Project from './Project';
import type { ErrorType } from '../types/error';
import type { DataArray } from '../types/data';

const OuterList = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #fcfafa;
  border: thin solid black;
  border-left: none;
`;

type Props = {
  error: ErrorType;
  data: DataArray;
  fetchNextPage: () => void;
};

const debounceOnScroll = (fn: any) => {
  const debounced = debounce(fn, 300);
  return (event: any) => {
    event.persist();
    return debounced(event);
  };
};

const List = ({ data, error, fetchNextPage }: Props) => {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: any;
  }) => <Project style={style} {...data[index]} />;

  const onScroll = (e: SyntheticEvent) => {
		const target = e.target as HTMLElement;
    const { scrollHeight, scrollTop, clientHeight } = target;
		const listBottom = scrollHeight - scrollTop === clientHeight;
    if (listBottom) {
      fetchNextPage();
    }
  };

  return (
    <>
      {data.length ? (
        <OuterList onScroll={debounceOnScroll(onScroll)}>
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                initialScrollOffset={16}
                itemCount={data.length}
                itemSize={120}
                height={height}
                width={width}
                itemData={data}
              >
                {Row}
              </FixedSizeList>
            )}
          </AutoSizer>
        </OuterList>
      ) : null}
      {error && (
        <p>
          Error:
          {error}
        </p>
      )}
    </>
  );
};

export default List;
