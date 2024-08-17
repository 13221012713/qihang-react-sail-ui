// src/Modal/demo/base.tsx

import React, { useState } from 'react';
import { Modal } from 'qihang'; // 确保路径正确

export default () => {
  // 控制模态弹窗显示隐藏的状态
  const [isModalVisible, setModalVisible] = useState(false);

  // 打开模态弹窗
  const openModal = () => {
    setModalVisible(true);
  };

  // 关闭模态弹窗
  const closeModal = () => {
    setModalVisible(false);
  };

  // 模态弹窗的确认操作
  const handleConfirm = () => {
    console.log('模态弹窗确认操作');
    closeModal();
  };

  return (
    <>
      {/* 触发模态弹窗的按钮 */}
      <button type="button" onClick={openModal}>
        打开模态弹窗
      </button>

      {/* 模态弹窗组件 */}
      <Modal
        visible={isModalVisible}
        title="模态弹窗标题"
        onConfirm={handleConfirm}
        onCancel={closeModal}
      >
        <div>
          这里是模态弹窗的内容区域，可以放置文本、表单或其他元素。
        </div>
      </Modal>
    </>
  );
};
