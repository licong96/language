import React, { } from 'react';
import './index.scss';
import IconButton from 'rsuite/lib/IconButton';
// import qs from 'qs';

function Index(props) {
//   const search = qs.parse(props.location.search, { ignoreQueryPrefix: true });
//   const { index } = search;

  const handlerBack = () => {
    props.history.goBack();
  }

  return (
    <div className="full-page detail">
        <div className="back" onClick={handlerBack}>
          <IconButton icon={ <i className="iconfont icon-jiantouarrowhead7"></i> } circle  />
        </div>
        <div className="main">详情页暂未开发~_~</div>
    </div>
  );
}

export default Index;