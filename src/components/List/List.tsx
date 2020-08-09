import React, { UIEvent } from "react";
import debounce from "lodash.debounce";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useSelector, useDispatch } from "react-redux";
import Repository from "../Repository";
import { fetchNextPage } from "../../redux/fetchActions";
import { OuterList } from "./style";
import { selectRepos, selectError } from "../../redux/selectors";

const debounceOnScroll = (fn: (event: UIEvent<HTMLElement>) => void) => {
  const debounced = debounce(fn, 300);
  return (event: UIEvent<HTMLElement>) => {
    event.persist();
    return debounced(event);
  };
};

const List = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const error = useSelector(selectError);

  const onScroll = (e: UIEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    const { scrollHeight, scrollTop, clientHeight } = target;
    const listBottom = scrollHeight - scrollTop === clientHeight;
    if (listBottom) {
      dispatch(fetchNextPage());
    }
  };

  return (
    <>
      {repos.length ? (
        <OuterList onScroll={debounceOnScroll(onScroll)}>
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                initialScrollOffset={16}
                itemCount={repos.length}
                itemSize={120}
                height={height}
                width={width}
                itemData={repos}
              >
                {({ index, style }) => (
                  <Repository style={style} {...repos[index]} />
                )}
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
