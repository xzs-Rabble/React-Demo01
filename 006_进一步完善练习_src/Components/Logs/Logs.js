/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import "./Logs.css";
const Logs = () => {
  //模拟一组从服务器中加载的数据
  const logsData = [
    {
      id: "001",
      date: new Date(2021, 10, 27, 12, 21),
      time: "40",
      desc: "睡觉",
    },
    {
      id: "002",
      date: new Date(2022, 6, 1, 8, 31),
      time: "20",
      desc: "充电",
    },
    {
      id: "003",
      date: new Date(2022, 8, 24, 18, 40),
      time: "60",
      desc: "恰饭",
    },
    {
      id: "004",
      date: new Date(2022, 11, 7, 17, 3),
      time: "10",
      desc: "打飞机",
    },
  ];

  //将数据放入JSX中
  const LogItemData = logsData.map((item) => (
    <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />
  ));

  return (
    <div className="logs">
      {
        LogItemData
        // <LogItem {...item} />
      }
    </div>
  );
};

//导出App
export default Logs;
