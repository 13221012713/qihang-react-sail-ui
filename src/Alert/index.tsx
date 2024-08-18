import React, { memo } from 'react';
import './styles/index.less'; // 引入样式，您需要添加对应的 Alert 样式

export interface AlertProps {
  /** 警告类型 */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** 是否可关闭 */
  closable?: boolean;
  /** 关闭时的回调函数 */
  onClose?: () => void;
  /** 自定义类名 */
  className?: string;
  /** 内联样式 */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = memo((props) => {
  const {
    type = 'info',
    closable = false,
    onClose,
    children,
    className = '',
    style,
  } = props;

  // 动态添加类型相关的类名
  const alertClass = `alert alert-${type} ${closable ? 'alert-closable' : ''} ${className}`;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={alertClass} style={style}>
      {children}
      {closable && (
        <button
          type="button"
          className="alert-close"
          onClick={handleClose}
        >
          &times;
        </button>
      )}
    </div>
  );
});

export default Alert;
