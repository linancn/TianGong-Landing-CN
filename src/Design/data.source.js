import React from 'react';
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E8%AE%BE%E8%AE%A1.svg',
    className: 'l4wa9noqdg-editor_css',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>天工Design: 产品生态设计工具</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>将LCA前置,在R&D阶段开展生态设计,将碳足迹与其他环境足迹纳入设计考量,AI赋能的辅助设计</p>
      </span>
    ),
  },
};