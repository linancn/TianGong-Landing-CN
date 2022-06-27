import React from 'react';
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E7%BD%91.svg',
    className: 'l4wa9noqdg-editor_css',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>天工Cloud: 企业环境管理工具</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>与企业ERP及工业互联网深度融合,打通数据获取、计算建模、报表分析流程,ESG服务链接绿色金融,符合国际标准的EPD/PEF报告</p>
      </span>
    ),
  },
};