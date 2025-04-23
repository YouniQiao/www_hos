import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '快速上手',
    description: (
      <>
        了解手势导航，截图等基础操作。
      </>
    ),
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效生活。
      </>
    ),
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '精彩影像',
    description: (
      <>
        玩转影像拍摄，图片编辑等技巧。
      </>
    ),
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设置。
      </>
    ),
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '全场景',
    description: (
      <>
        了解更多产品如何默契配合。
      </>
    ),
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '新功能',
    description: (
      <>
        探索HarmonyOS NEXT新功能。
      </>
    ),
    readMore: '/docs/new-feature/lock-screen'
  }
];

function Feature({ Svg, title, description, readMore }) {
  return (
    <div>
      <div className="card p-8 box-border">
        <h3 className='mb-2'>{title}</h3>
        <div className='mb-2'>{description}</div>
        {<Link
          to={readMore}>
          了解更多
        </Link>}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container mt-10">
        <h1 className='text-center largest font-bold'>玩机精选</h1>
        <div className='text-center mb-10'>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
