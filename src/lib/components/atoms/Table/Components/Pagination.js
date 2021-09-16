import React from "react";
import chevronLeft from "../../../../assets/icons/svg/chevron-left.svg";
import chevronRight from "../../../../assets/icons/svg/chevron-right.svg";
import { SecondaryIconOnlyButton } from "../../Buttons/Buttons";
import "./Pagination.scss";

const iconButtonLeftStyle = {
  height: "32px",
  width: "32px",
  marginLeft: "10px",
};
const iconButtonRightStyle = { height: "32px", width: "32px", margin: "4px" };
const iconStyles = { height: "20px", width: "20px" };

const Pagination = ({ paginationData, setPage }) => {
  const { total, from, to, page, pages } = paginationData;
  const prev = () => {
    const _prev = page - 1;
    if (_prev > 0) setPage(_prev);
  };
  const next = () => {
    const _next = page + 1;
    if (_next <= pages) setPage(_next);
  };

  return (
    <div className="table-component-pagination__container">
      <div className="table-component-pagination__pagination-content">
        <span className="table-component-pagination__text">Showing</span>
        <span className="table-component-pagination__text--strong">{`${from}`}</span>
        <span className="table-component-pagination__text">to</span>
        <span className="table-component-pagination__text--strong">{`${to} `}</span>
        <span className="table-component-pagination__text">{`of ${total} reports`}</span>
        <SecondaryIconOnlyButton
          {...{ iconStyles }}
          disabled={page === 1}
          onClick={prev}
          style={iconButtonLeftStyle}
          icon={chevronLeft}
          testId="chevronLeft"
        />
        <SecondaryIconOnlyButton
          {...{ iconStyles }}
          onClick={next}
          disabled={page === pages}
          style={iconButtonRightStyle}
          icon={chevronRight}
          testId="chevronRight"
        />
      </div>
    </div>
  );
};

export default Pagination;
