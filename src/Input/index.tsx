import React, { memo } from 'react';
import './styles/index.less'; // 引入样式

export interface InputProps {
  /** 输入框类型（text, password, email等） */
  type?: 'text' | 'password' | 'email' | 'number';
  /** 输入框当前值 */
  value?: string;
  /** 输入框值改变时的回调函数 */
  onChange?: (value: string) => void;
  /** 自定义类名 */
  className?: string;
  /** 内联样式 */
  style?: React.CSSProperties;
  /** 输入框占位符 */
  placeholder?: string;
  /** 是否禁用输入框 */
  disabled?: boolean;
  /** 是否显示为必填 */
  required?: boolean;
}

const Input: React.FC<InputProps> = memo((props) => {
  const {
    type = 'text',
    value = '',
    onChange,
    className = '',
    style,
    placeholder = '请输入内容',
    disabled = false,
    required = false,
  } = props;

  // 处理输入框值变化的事件
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
      className={`input ${className}`}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  );
});

export default Input;
