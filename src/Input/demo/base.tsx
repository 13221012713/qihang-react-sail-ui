// src/Input/demo/base.tsx

import React, { useState } from 'react';
import { Input } from 'qihang'; // 确保路径正确

export default () => {
  // 控制输入框值的状态
  const [inputValue, setInputValue] = useState('');

  // 输入框值改变时的回调函数
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      {/* 样例1：基础文本输入框 */}
      <Input placeholder="请输入文本" onChange={handleInputChange} value={inputValue}></Input>

      <div style={{ marginTop: '20px' }}>
        {/* 样例2：带占位符的输入框 */}
        <Input placeholder="请输入内容" />
      </div>

      <div style={{ marginTop: '20px' }}></div>
      {/* 样例3：禁用状态的输入框 */}
      <Input value="这是禁用的输入框" disabled />

      <div style={{ marginTop: '20px' }}></div>
      {/* 样例4：必填的输入框 */}
      <Input required placeholder="必填项" />

      <div style={{ marginTop: '20px' }}></div>
      {/* 样例5：密码输入框 */}
      <Input type="password" placeholder="输入密码" />

      <div style={{ marginTop: '20px' }}></div>
      {/* 样例6：数值输入框 */}
      <Input type="number" placeholder="输入数字" />

      <div style={{ marginTop: '20px' }}></div>
      {/* 样例7：自定义样式的输入框 */}
      <Input
        className="custom-input-class"
        style={{ borderColor: 'rebeccapurple', fontSize: '16px' }}
        placeholder="自定义样式"
      />

      <div style={{ marginTop: '20px' }}></div>
      {/* 显示输入框的值，用于演示状态变化 */}
      <div>输入的值: {inputValue}</div>
    </>
  );
};
