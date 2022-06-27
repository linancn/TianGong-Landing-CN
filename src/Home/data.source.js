import React from 'react';
export const Nav34DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo l4s9b8dzo2n-editor_css',
    children:
      'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%A4%A9%E5%B7%A5%E8%AE%A1%E5%88%92-%E4%B8%AD%E6%96%87%E7%B4%AB%E8%89%B2%E6%A8%AA%E7%89%88.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item~l4w3wzcrbj',
        className: 'header3-item',
        children: {
          href: 'http://www.meitu.com',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>主页</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>下载</p>
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
                      <span>
                        <p>
                          <a
                            href="/database"
                            target="_blank"
                          >
                            数据库
                          </a>
                        </p>
                      </span>
                    </span>
                  ),
                },
              ],
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
                        <p>
                          <a
                            href="/LCA"
                            target="_blank"
                          >
                            生命周期评价工具
                          </a>
                        </p>
                      </span>
                    </span>
                  ),
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: 'http://www.baidu.com',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        <a href="http://www.baidu.com">English</a>
                      </p>
                    </span>
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
export const Banner10DataSource = {
  wrapper: { className: 'banner1 l3o6uwbkkaa-editor_css' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem l3o6t68teu-editor_css' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg0 bg l3o6t2d3wzh-editor_css' },
        title: {
          className: 'banner1-title l3o6yg9k1p-editor_css',
          children:
            'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%A4%A9%E5%B7%A5%E7%AB%96%E5%9B%BE-%E5%8F%8D%E7%99%BD%E7%B4%AB.svg',
        },
        content: {
          className: 'banner1-content l3o6yhclb1q-editor_css',
          children: (
            <span>
              <span>
                <p>共享、共建、共治的生命周期评价数据、软件和知识生态系统</p>
              </span>
            </span>
          ),
        },
        button: {
          className: 'banner1-button l3o76tude3u-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>了解详情</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
          type: 'default',
          href: '/detail',
        },
      },
    ],
    className: 'l3o6tr7anmt-editor_css',
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>天工数据库与工具箱</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: '/database',
          },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E6%95%B0%E6%8D%AE%E5%BA%93.svg',
            className: 'l4w9qq5foxc-editor_css',
          },
          content: {
            children: (
              <span>
                <p>数据库</p>
              </span>
            ),
            className: 'l4w9s9un0tf-editor_css',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: '/LCA',
          },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E5%A4%A9%E5%B7%A5LCA.svg',
            className: 'l4w9qtwmbch-editor_css',
          },
          content: {
            children: (
              <span>
                <p>生命周期评价工具</p>
              </span>
            ),
            className: 'l4w9tmsjx0r-editor_css',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content',
          href: '/footprint', },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E7%A2%B32.svg',
            className: 'l4w9qyaxd4q-editor_css',
          },
          content: {
            children: (
              <span>
                <p>环境足迹计算工具</p>
              </span>
            ),
            className: 'l4w9tz11ob6-editor_css',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' ,
        href:'/design'},
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E8%AE%BE%E8%AE%A1.svg',
            className: 'l4w9r00segi-editor_css',
          },
          content: {
            children: (
              <span>
                <p>产品生态设计辅助工具</p>
              </span>
            ),
            className: 'l4w9u9cmb3-editor_css',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content',
        href:'/cloud' },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%9B%BE%E6%A0%871-%E7%BD%91.svg',
            className: 'l4w9ql0ywo-editor_css',
          },
          content: {
            children: (
              <span>
                <p>企业环境管理工具</p>
              </span>
            ),
            className: 'l4w9uhdoahs-editor_css',
          },
        },
      },
    ],
  },
};
export const Content122DataSource = {
  wrapper: {
    className: 'home-page-wrapper content12-wrapper l3sdhaghhge-editor_css',
  },
  page: { className: 'home-page content12 l3oai8yhg-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>项目发起单位</p>
          </span>
        ),
        className: 'title-h1 l3o7129egmc-editor_css',
      },
    ],
  },
  block: {
    className: 'img-wrapper l3oao4tiu16-editor_css',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content l3ocj2meblo-editor_css' },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%90%88%E4%BD%9C%E5%8D%95%E4%BD%8Dlogo-%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6.svg',
            className: 'l3oau253axm-editor_css',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%90%88%E4%BD%9C%E5%8D%95%E4%BD%8Dlogo-%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E9%99%A2.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%90%88%E4%BD%9C%E5%8D%95%E4%BD%8Dlogo-%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6.svg',
          },
        },
      },
      {
        name: 'block~l46foyd5kc',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://tian-gong-initiative-open.oss-cn-shenzhen.aliyuncs.com/image/%E5%90%88%E4%BD%9C%E5%8D%95%E4%BD%8Dlogo-%E5%8D%97%E6%98%8C%E5%A4%A7%E5%AD%A6.svg',
          },
        },
      },
    ],
  },
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
