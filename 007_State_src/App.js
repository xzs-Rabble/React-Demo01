import "./App.css";
import { useState } from "react";

const App = () => {
  console.log("函数执行了 ---> 组件创建完毕");
  /* 
  使用setState()来创建state，它需要一个值作为参数，这个值就是state的初始值
  1)该函数返回一个数组:
    数组第一个元素是初始值;
    第二个是一个函数,用来修改state
  2)setState()是异步的,所以调用时有可能出现计算错误的情况，
    可通过传递回调函数的方式修改
   */
  let [num, setNum] = useState(1);
  let [user, setUser] = useState({ name: "rabble", age: 18 });

  const addHandler = () => {
    setTimeout(() => {
      setNum((preNum) => {
        /* setState()中回调的返回值将成为新的state */
        return preNum + 1;
      });

      // setNum(preNum=>preNum+1)
    }, 1000);
    console.log(num);
  };

  const updateHandler = () => {
    setUser({ ...user, name: "张三" });
    console.log(num);
  };

  return (
    <div className={"app"}>
      <h1>
        {num}--{user.name}--{user.age}
      </h1>
      <button onClick={updateHandler}>修改</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

//导出App
export default App;
