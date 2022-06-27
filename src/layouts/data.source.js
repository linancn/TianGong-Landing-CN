import React from 'react';
export const Nav34DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%A4%A9%E5%B7%A5%E8%AE%A1%E5%88%92-%E4%B8%AD%E6%96%87%E7%B4%AB%E8%89%B2%E6%A8%AA%E7%89%88.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <p>主页</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item0',
        className: 'header3-item l4wfdmqju16-editor_css',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>
                    <span>下载</span>
                    <br />
                  </p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/test1.png',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: (
                    <span>
                      <p>LCA数据库</p>
                    </span>
                  ),
                },
              ],
              href: '/database',
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/test2.png',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: (
                    <span>
                      <span>
                        <p>LCA评价工具</p>
                      </span>
                    </span>
                  ),
                },
              ],
              href: '/LCA',
            },
          },
        ],
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>
                      <a href="https://tiangong.earth/">English</a>
                    </p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Footer10DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer1-wrapper l3mih0nq38-editor_css',
  },
  OverPack: {
    className: 'footer1 l3l9sv8n9q-editor_css',
    playScale: 0.2,
    always: false,
  },
  block: {
    className: 'home-page l3l9os4j5ah-editor_css',
    gutter: 0,
    children: [
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>下载</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
          className: 'l3o72utit4l-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>LCA数据库</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'l3o75bf01tt-editor_css',
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>LCA软件</p>
                </span>
              ),
              className: 'l3o75h7q0xj-editor_css',
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>LCA知识中心</p>
                </span>
              ),
              className: 'l3o75jpqoig-editor_css',
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block l42f1837x4j-editor_css',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <p>天工计划</p>
                </span>
              </span>
            </span>
          ),
          className: 'l3o75lmg7cu-editor_css',
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>关于我们</p>
                </span>
              ),
              className: 'l3o75np6e6d-editor_css',
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>加入我们</p>
                  </span>
                </span>
              ),
              className: 'l3o75pvnydh-editor_css',
            },
            {
              href: '#',
              name: 'link2',
              children: (
                <span>
                  <p>联系我们</p>
                </span>
              ),
              className: 'l3o75tq0ijb-editor_css',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper l3l9tbfdmmr-editor_css' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2022&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
