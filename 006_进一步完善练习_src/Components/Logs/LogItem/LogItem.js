import React from "react";
import MyDate from "./MyDate/MyDate";
import "./LogItem.css";

const LogItem = (props) => {
  /* props是只读属性，不能修改 */
  return (
    <div className="item">
      {/* 日志项容器 */}
      <MyDate date={props.date} />

      {/* 日志内容的容器 */}
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>
    </div>
  );
};

export default LogItem;
