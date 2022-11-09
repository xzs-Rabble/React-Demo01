import { useState } from "react";
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import "./LogItem.css";

const LogItem = (props) => {
  //添加一个state，记录是否弹窗
  const [showConfirm, setShowConfirm] = useState(false);

  /* props是只读属性，不能修改 */
  const deletHandler = () => {
    //显示弹窗
    setShowConfirm(true);

    /* const isDel = window.confirm("该操作不可恢复，确认删除吗？");
    if (isDel) {
      props.onDelLog();
    } */
  };

  //弹窗确认函数
  const okHandler = () => {
    props.onDelLog();
    setShowConfirm(false);
  };

  //弹窗取消函数
  const cancelHandler = () => {
    setShowConfirm(false);
  };
  /*
   *   portal
   *       - 组件默认会作为父组件的后代渲染到页面中
   *           但是有些情况下，这种方式会带来一些问题
   *       - 通过portal可以将组件渲染到页面中的指定位置
   *       - 使用方法：
   *           1.在index.html添加一个新的元素
   *           2.修改组件的渲染方式
   *               - 通过ReactDOM.createPortal()作为返回值创建元素
   *               - 参数：
   *                   1. jsx（修改前return后的代码）
   *                   2. 目标位置（DOM元素）
   *
   * */
  return (
    <Card className="item">
      {showConfirm && (
        <ConfirmModal
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText="该操作不可恢复！确认吗？"
        />
      )}

      {/* 日志项容器 */}
      <MyDate date={props.date} />

      {/* 日志内容的容器 */}
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>

      {/* 添加一个删除按钮 */}
      <div>
        <div className="delete" onClick={deletHandler}>
          ×
        </div>
      </div>
    </Card>
  );
};

export default LogItem;
