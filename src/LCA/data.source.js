import React from 'react';
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E5%A4%A9%E5%B7%A5LCA.svg',
    className: 'l4wa9noqdg-editor_css',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>天工LCA: 生命周期评价工具</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>全面支持专业LCA,AI赋能的“所见即所得“建模过程,数据校验确保真实可信,全流程可溯源、可验证</p>
      </span>
    ),
  },
};