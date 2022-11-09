import React from "react";
import "./MyDate.css";

const MyDate = (props) => {
  const month = props.date.toLocaleString("zh-CN", { month: "long" });
  const date = props.date.getDate();
  return (
    <div className="date">
      {/* 日期的日期 */}
      <div className="month">{month}</div>
      <div className="day">{date}</div>
    </div>
  );
};

export default MyDate;
