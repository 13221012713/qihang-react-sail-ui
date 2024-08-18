// src/Alert/demo/base.tsx

import React, { useState } from 'react';
import { Alert } from 'qihang'; // 确保路径正确

export default () => {

  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [isAlert2Visible, setIsAlert2Visible] = useState(true);

  const handleAlertClose = () => {
    // 更新 state 来隐藏 Alert
    setIsAlertVisible(false);
  };

  const handleAlert2Close = () => {
    // 更新 state 来隐藏 Alert
    setIsAlert2Visible(false);
  };

  return (
    <>
      {/* 基础用法 */}
      <Alert type="info">
        这是一条信息提示（Info）。
      </Alert>

      {/* 成功提示 */}
      <Alert type="success">
        这是一条成功提示（Success）。
      </Alert>

      {/* 警告提示 */}
      <Alert type="warning">
        这是一条警告提示（Warning）。
      </Alert>

      {/* 错误提示 */}
      {isAlertVisible && (
        <Alert type="error" closable={true} onClose={handleAlertClose}>
          这是一条错误提示（Error），可以关闭。
        </Alert>
      )}

      {/* 可关闭的提示 */}
      {isAlert2Visible && (
        <Alert type="info" closable={true} onClose={handleAlert2Close}>
          这是一条可关闭的信息提示（Info Closable）。
        </Alert>
      )}

      {/* 自定义样式和类名 */}
      <Alert
        type="success"
        style={{ marginTop: '30px', backgroundColor: '#f0f9eb', color: '#67c23a', width: '300px', marginBottom: '30px' }}
        className="custom-alert-class"
      >
        这是一条带有自定义样式和类名的成功提示（Success with Custom Style）。
      </Alert>

      {/* 嵌套元素 */}
      <Alert type="error">
        <strong>错误：</strong> 这是一个包含<strong style={{ color: 'black' }}>加粗文本</strong>和{' '}
        <em style={{ color: 'blue' }}>斜体文本</em>的错误提示。
      </Alert>
    </>
  );
};
