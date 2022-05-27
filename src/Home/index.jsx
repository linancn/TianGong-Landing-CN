/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';
import Nav0 from './Nav0';
import Banner3 from './Banner3';
import Banner5 from './Banner5';
import Content12 from './Content12';
import Footer1 from './Footer1';

import {
  Nav00DataSource,
  Banner30DataSource,
  Banner31DataSource,
  Banner32DataSource,
  Banner50DataSource,
  Banner53DataSource,
  Banner52DataSource,
  Content121DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    /* 如果不是 dva 2.0 请使用以下代码
    // 实现整屏滚动
    scrollScreen.init({ location: ['Banner3_0', 'Banner3_1', 'Banner3_2', 'Banner5_0', 'Banner5_3', 'Banner5_2', 'Content12_1', 'Footer1_0'] });
    */
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
        // 实现整屏滚动
        scrollScreen.init({
          location: [
            'Banner3_0',
            'Banner3_1',
            'Banner3_2',
            'Banner5_0',
            'Banner5_3',
            'Banner5_2',
            'Content12_1',
            'Footer1_0',
          ],
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_1"
        key="Banner3_1"
        dataSource={Banner31DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_2"
        key="Banner3_2"
        dataSource={Banner32DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_3"
        key="Banner5_3"
        dataSource={Banner53DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_2"
        key="Banner5_2"
        dataSource={Banner52DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12
        id="Content12_1"
        key="Content12_1"
        dataSource={Content121DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
