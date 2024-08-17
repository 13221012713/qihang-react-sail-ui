// src/Button/demo/base.tsx

import React from 'react';
import { Button } from 'qihang';

export default () => {

  return (
    <>
      <Button type="default">默认按钮</Button> &nbsp;
      <Button type="primary">主要按钮</Button>

      <div style={ { marginTop: '10px' }}>
        <Button type="primary" size="large">大号按钮</Button> &nbsp;
        <Button type="primary" size="medium">中号按钮</Button> &nbsp;
        <Button type="primary" size="small">小号按钮</Button>
      </div>

      <div style={ { marginTop: '10px' } }>
        <Button type="primary" disabled>禁用的主要按钮</Button> &nbsp;
        <Button type="default" disabled>禁用的默认按钮</Button>
      </div>

      <div style={ { marginTop: '10px' } }>
        <Button type="primary" loading>加载中...</Button>
      </div>
    </>
  );
}
