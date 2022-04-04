import React from "react";
import s from "./Users.module.css";
const Paginarot = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && s.current__page}
            onClick={(e) => {
              onPageChanged(p);
            }}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginarot;
