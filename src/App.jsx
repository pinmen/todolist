import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>タスク名</li>
            <butotn>完了</butotn>
            <butotn>削除</butotn>
          </div>
        </ul>
      </div>
    </>
  );
};
