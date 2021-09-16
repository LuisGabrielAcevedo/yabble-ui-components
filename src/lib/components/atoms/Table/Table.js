/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Data from "./Components/Data";
import Pagination from "./Components/Pagination";
import "./Table.scss";
import { DEFAULT_PAGINATION } from "../../../constants";
import { sortTableData } from "../../../utils";

export const Table = (props) => {
  const {
    headers = [],
    data = [],
    pagination = DEFAULT_PAGINATION,
    onChangePagination,
    blocking,
    sortEvent,
  } = props;
  const { page, perPage, total } = pagination;
  const [dataToRender, setDataToRender] = useState([]);
  const [paginationData, setPaginationData] = useState({
    page,
    perPage,
    total: total,
    from: page,
    to: perPage,
    pages: Math.ceil(total / perPage),
  });

  useEffect(() => {
    const offset = (page - 1) * perPage;
    const from = offset + 1;
    const _to = offset + perPage;
    const to = _to > total ? total : _to;
    setPaginationData({
      page,
      perPage,
      total: total,
      from,
      to,
      pages: Math.ceil(total / perPage),
    });
  }, [pagination]);

  const [sortData, setSortData] = useState({
    down: true,
    field: "created",
    sortType: "string",
  });

  const sortFn = (values) => {
    setSortData(values);
    sortEvent({
      field: values.field,
      direction: values.down ? "DES" : "ASC",
    });
  };

  useEffect(() => {
    let sortedData = [...data];
    const { down, field } = sortData;
    if (field) sortedData = sortTableData(sortedData, field, down);
    setDataToRender(sortedData);
  }, [page, data, sortData]);

  const setPage = (page) => onChangePagination({ page });

  return (
    <div className="table__container">
      {blocking && (
        <div
          data-testid="table-overlay-block"
          className="table__overlay-block"
        ></div>
      )}
      <div className="table__scroll">
        <div className="table__scroll-content">
          <Header {...{ headers, sortData }} setSortData={sortFn} />
          <Data {...{ headers }} data={dataToRender} />
        </div>
      </div>
      <Pagination {...{ paginationData, setPage }} />
    </div>
  );
};
