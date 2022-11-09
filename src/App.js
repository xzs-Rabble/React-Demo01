import { useState } from "react";
import Logs from "./Components/Logs/Logs";
import LogsFrom from "./Components/LogsForm/LogsForm";
const App = () => {
  //模拟一组从服务器中加载的数据
  const [logsData, setLogsData] = useState([
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
  ]);

  //定义一个添加函数
  const saveLogHandler = (newLog) => {
    //向数据添加一个ID
    newLog.id = Date.now() + "";
    setLogsData([newLog, ...logsData]);
    console.log(newLog);
  };
  //定义一个删除函数
  const deleteLogById = (id) => {
    setLogsData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="app">
      {/* 引入LogsFrom */}
      <LogsFrom onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} onDelLog={deleteLogById} />
    </div>
  );
};

//导出App
export default App;
