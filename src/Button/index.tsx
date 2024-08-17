import React, { memo } from 'react';
import './styles/index.less'; // 引入样式

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'danger';
  /** 按钮尺寸 */
  size?: 'large' | 'medium' | 'small';
  /** 是否禁用按钮 */
  disabled?: boolean;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 按钮图标 */
  icon?: React.ReactNode;
  /** 按钮点击事件 */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** 自定义类名 */
  className?: string;
  /** 内联样式 */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    type = 'default',
    size = 'medium',
    disabled = false,
    loading = false,
    children,
    onClick,
    className = '',
    style,
  } = props;

  const btnClass = `dumi-btn dumi-btn-${type} dumi-btn-${size} ${disabled ? 'is-disabled' : ''} ${className}`;

  return (
    <button
      type="button"
      className={btnClass}
      style={style}
      disabled={disabled || loading}
      onClick={!disabled && !loading ? onClick : undefined}
    >
      {loading ? <span className="dumi-btn-loading">Loading...</span> : children}
    </button>
  );
});

export default Button;
