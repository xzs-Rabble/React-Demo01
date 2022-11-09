/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import "./Logs.css";
import LogFilter from "./LogFilter/LogFilter";
import { useState } from "react";
const Logs = (props) => {
  //创建一个储存年份的state
  const [year, setYear] = useState(2022);

  //创建修改年份的函数
  const changeYearHandler = (year) => {
    setYear(year);
  };

  //过滤数据，只显示某一年的数据
  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );
  console.log(filterData);

  //将数据放入JSX中
  let LogItemData = filterData.map((item) => (
    <LogItem
      onDelLog={() => props.onDelLog(item.id)}
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
    />
  ));

  /* if (LogItemData.length === 0) {
    LogItemData = <p className="no-logs">没有找到日志!</p>;
  } */

  return (
    <Card className="logs">
      <LogFilter onYearChange={changeYearHandler} yaer={year} />
      {
        // LogItemData
        LogItemData.length !== 0 ? (
          LogItemData
        ) : (
          <p className="no-logs">没有找到日志!</p>
        )

        // <LogItem {...item} />
      }
    </Card>
  );
};

//导出App
export default Logs;
