import { useState } from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";

const LogsForm = (props) => {
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTime, setInputTime] = useState("");

  //创建一个响应函数，监听表单项日期的变化
  const dateChangeHandler = (e) => {
    // console.log(e.target.value);
    setInputDate(e.target.value);
  };

  //创建一个响应函数，监听表单项内容的变化
  const descChangeHandler = (e) => {
    // console.log(e.target.value);
    setInputDesc(e.target.value);
  };

  //创建一个响应函数，监听表单项时长的变化
  const timeChangeHandler = (e) => {
    // console.log(e.target.value);
    setInputTime(e.target.value);
  };

  //当表单提交时，汇总表单的数据
  const formSubmitHandler = (e) => {
    //取消表单的默认行为
    e.preventDefault();

    //将数据拼装成一个对象
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: inputTime,
    };

    //添加新数据时，调用父组件传递过来的函数
    props.onSaveLog(newLog);

    //清空表单项
    setInputDate("");
    setInputDesc("");
    setInputTime("");
    // console.log(newLog);
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            id="date"
            type="date"
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input
            value={inputDesc}
            onChange={descChangeHandler}
            id="desc"
            type="text"
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input
            value={inputTime}
            onChange={timeChangeHandler}
            id="time"
            type="number"
          />
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
