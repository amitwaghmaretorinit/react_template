import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import Table from "antd/lib/table";
import {
  TableContainer,
  EmptyContainer,
  Wrapper,
  LoadMoreContainer,
} from "./style";
import { isBottomScroll } from "./helper";
import { Button } from "@atom/Buttons";
import { Flex } from "@atom/Flex";
import { AutoComplete, Row } from "antd";
import { useSelector } from "react-redux";
import { VList } from "virtuallist-antd";

const defaultScrollConfig = {
  y: "calc(100vh - 330px)",
  x: true,
};
interface DataTableType {
  debug?: boolean;
  infinity?: boolean;
  dataSource: Array<any>;
  scroll?: { y: number; x: number };
  onFetch?: () => Promise<any> | void;
  rowSelection?: any;
  loading?: boolean;
  pagination?: boolean;
  columns: any;
  props?: any;
  renderEmpty?: () => React.ReactNode;
  style?: React.CSSProperties;
  showLoadMore?: boolean;
  scrollConfig?: any;
  currentPage?: number;
  id?: string;
  index?: number;
  nextPageURL?: string | boolean;
  rowClassName?: (row: any, index: number) => string;
  firstColumnSelectable?: any;
  className?: any;
  onRowClick?: (row: any) => void;
  rowHeight?: any;
  rowKey?: any;
  isVirtualized?: boolean;
  footer?: any;
}

const DataTable = (p: DataTableType) => {
  const {
    debug = false,
    infinity = false,
    dataSource = [],
    scroll = defaultScrollConfig,
    pagination = false,
    onFetch = () => null,
    renderEmpty,
    style,
    showLoadMore,
    scrollConfig,
    currentPage,
    id,
    index = 0,
    nextPageURL,
    rowClassName,
    firstColumnSelectable = false,
    className,
    onRowClick,
    rowHeight = 500,
    rowKey,
    footer,
    isVirtualized = false,
    ...props
  } = p;
  const { rowSelection, ...restprops } = props;

  const [showLoadMoreState, setShowMoreState] = useState(false);
  const [showLoadMoreLoader, setShowLoadMoreLoader] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  let { sideBarCollapsed } = useSelector((state: any) => state.rawData);

  useEffect(() => {
    const tableElements = document.getElementsByClassName("ant-table-body");
    const tableElement = tableElements[index] || tableElements[0];

    return () => {
      if (tableElement) {
        removeScrollListener(tableElement);
      }
    };
  }, []);
  useEffect(() => {
    const tableElements = document.getElementsByClassName("ant-table-body");
    const tableElement = tableElements[index] || tableElements[0];
    if (tableElement && showLoadMore) {
      if (currentPage === 1) {
        tableElement.scrollTop = 0;
        setShowMoreState(false);
      }
      tableElement.addEventListener("scroll", (e: any) => {
        const isBottom = isBottomScroll(e);
        setShowMoreState(isBottom && showLoadMore);
        if (!isBottom) {
          setShowLoadMoreLoader(false);
        }
      });
    }
  }, [showLoadMore, index, currentPage]);

  useEffect(() => {
    if (!showLoadMore) {
      setShowLoadMoreLoader(false);
    }
  }, [showLoadMore]);

  const removeScrollListener = (tableElement: Element) => {
    tableElement.removeEventListener("scroll", () => {});
  };
  const scrollConfiguration = scrollConfig || scroll;

  const [tableWidth, setTableWidth] = useState(0);
  const ref: any = useRef(null);

  useEffect(() => {
    sideBarCollapsed = null;
  }, []);

  const handleResize = () => {
    setIsUpdated(!isUpdated);
    window.removeEventListener("resize", handleResize, true);
  };

  window.addEventListener("resize", handleResize, true);

  useEffect(() => {
    const width = ref.current.offsetWidth;
    setTableWidth(
      sideBarCollapsed
        ? width + 200
        : sideBarCollapsed === false
        ? width - 210
        : width
    );
    // eslint-disable-next-line
  }, [sideBarCollapsed, isUpdated]);
  return (
    <Wrapper className={className}  isData={!!dataSource.length}>
      <div ref={ref} style={{ width: "100%" }}>
      <Flex direction="column" style={{display: "grid", width: "100%"}}>
        <TableContainer
          id={"data_table"}
          showCustomEmpty={!props.loading && !!renderEmpty}
          // @ts-ignore
          onScroll={(e: {
            target: {
              scrollHeight: number;
              scrollTop: number;
              clientHeight: number;
            };
          }) => {
            if (
              infinity &&
              !props.loading &&
              e.target.scrollHeight &&
              e.target.scrollTop
            ) {
              const bottom =
                Math.round(e.target.scrollHeight - e.target.scrollTop) ===
                e.target.clientHeight;

              if (bottom) {
                onFetch();
              }
            }
          }}
        >
          <Table
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) =>
                  onRowClick && onRowClick({ event, record, rowIndex }),
              };
            }}
            dataSource={dataSource.map((item, index) => ({
              ...item,
              key: item.id || index,
            }))}
            scroll={scrollConfiguration}
            pagination={false}
            {...restprops}
            showSorterTooltip={false}
            style={{ ...style, width: tableWidth }}
            rowClassName={rowClassName}
            id={id}
            {...(firstColumnSelectable
              ? {
                  rowKey: rowKey,
                  rowSelection: rowSelection,
                  components: VList({
                    height: rowHeight,
                  }),
                }
              : {})}
            {...(isVirtualized
              ? {
                  components: VList({
                    height: rowHeight,
                  }),
                }
              : {})}
            {...(footer
              ? {
                  summary: footer,
                }
              : {})}
          />

          {renderEmpty && !props.loading && !dataSource.length && (
            <EmptyContainer>{renderEmpty()}</EmptyContainer>
          )}
          {showLoadMoreState && nextPageURL && (
            <LoadMoreContainer>
              <Flex>
                <Button
                  variant="secondary"
                  size={"medium"}
                  isLoading={showLoadMoreLoader}
                  text={"Load More"}
                  onClick={async () => {
                    setShowLoadMoreLoader(true);
                    const res = await onFetch();
                    setShowLoadMoreLoader(false);
                    setShowMoreState(false);
                  }}
                />
              </Flex>
            </LoadMoreContainer>
          )}
        </TableContainer>
        </Flex>
      </div>
    </Wrapper>
  );
};

DataTable.propTypes = {
  lastId: PropTypes.any,
  dataSource: PropTypes.any,
  debug: PropTypes.bool,
  infinity: PropTypes.bool,
  loadingIndicator: PropTypes.bool,
  onFetch: PropTypes.any,
  scroll: PropTypes.any,
};

export default DataTable;