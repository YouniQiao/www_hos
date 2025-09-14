import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
    readMore: '/docs/category/phone-quickstart'
  },
  {
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效生活。
      </>
    ),
    readMore: '/docs/category/phone-ai'
  },
  {
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/category/phone-security'
  },
  {
    title: '精彩影像',
    description: (
      <>
        玩转影像拍摄，图片编辑等技巧。
      </>
    ),
    readMore: '/docs/category/phone-camera'
  },
  {
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设置。
      </>
    ),
    readMore: '/docs/category/phone-setting'
  },
  {
    title: '全场景',
    description: (
      <>
        了解更多产品如何默契配合。
      </>
    ),
    readMore: '/docs/category/phone-full-scene'
  },
  {
    title: '新功能',
    description: (
      <>
        探索HarmonyOS NEXT新功能。
      </>
    ),
    readMore: '/docs/category/phone-new-features'
  }
];



const FeatureListPC = [
  {
    title: '新机上手',
    description: (
      <>
        了解控制中心，截图等基础操作。
      </>
    ),
    readMore: '/docs/category/pc-quickstart'
  },
  {
    title: '全场景',
    description: (
      <>
        了解多产品如何默契配合。
      </>
    ),
    readMore: '/docs/category/pc-full-scene'
  },
  {
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效办公。
      </>
    ),
    readMore: '/docs/category/pc-ai'
  },
  {
    title: '常用手势',
    description: (
      <>
        了解如何使用手势快捷操作电脑。
      </>
    ),
    readMore: '/docs/category/pc-gesture'
  },
  {
    title: '快捷键',
    description: (
      <>
        了解如何使用按键组合快捷操作电脑。
      </>
    ),
    readMore: '/docs/category/pc-shortcut-key'
  },
  {
    title: '高效办公',
    description: (
      <>
        了解如何使用文件管理、备忘录等应用高效办公。
      </>
    ),
    readMore: '/docs/category/pc-work'
  },
  {
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/category/pc-security'
  },
  {
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设备。
      </>
    ),
    readMore: '/docs/category/pc-setting'
  },
  
];

const FeatureListTablet = [
  {
    title: '快速上手',
    description: (
      <>
        了解手势导航，截图等基础操作。
      </>
    ),
    readMore: '/docs/category/tablet-quickstart'
  },
  {
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效生活。
      </>
    ),
    readMore: '/docs/category/tablet-ai'
  },
  {
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/category/tablet-security'
  },
  {
    title: '精彩影像',
    description: (
      <>
        玩转影像拍摄，图片编辑等技巧。
      </>
    ),
    readMore: '/docs/category/tablet-camera'
  },
  {
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设置。
      </>
    ),
    readMore: '/docs/category/tablet-setting'
  },
  {
    title: '全场景',
    description: (
      <>
        了解更多产品如何默契配合。
      </>
    ),
    readMore: '/docs/category/tablet-full-scene'
  },
  {
    title: '新功能',
    description: (
      <>
        探索HarmonyOS NEXT新功能。
      </>
    ),
    readMore: '/docs/category/tablet-new-features'
  }
];

const FeatureListWearable = [
  {
    title: '新机上手',
    description: (
      <>
        纯血鸿蒙穿戴设备，敬请期待。
      </>
    ),
    readMore: '/docs/quick-start-wearable/start'
  },
  
];

const FeatureListTV = [
  {
    title: '新机上手',
    description: (
      <>
        纯血鸿蒙智慧屏，敬请期待。
      </>
    ),
    readMore: '/docs/quick-start-tv/start'
  },
  
];

const FeatureListCar = [
  {
    title: '新机上手',
    description: (
      <>
        纯血鸿蒙智能座舱，敬请期待。
      </>
    ),
    readMore: '/docs/quick-start-car/start'
  },
  
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
        <h1 className='text-center largest font-bold'>玩机设备</h1>
        <div className='text-center mb-10'>
          各类设备的玩机技巧内容，全部来自各设备提供的《玩机技巧》App。
        </div>

        <Tabs
          defaultValue="phone"
          values={[
            { label: '手机', value: 'phone' },
            { label: '电脑', value: 'pc' },
            { label: '平板', value: 'tablet' },
            { label: '穿戴', value: 'wearable' },
            { label: '智慧屏', value: 'tv' },
            { label: '智能座舱', value: 'car' },
          ]}
        >
          <TabItem value="phone">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </TabItem>
          <TabItem value="pc">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListPC.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </TabItem>
          <TabItem value="tablet">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListTablet.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </TabItem>
          <TabItem value="wearable">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListWearable.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </TabItem>
          <TabItem value="tv">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListTV.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </TabItem>
          <TabItem value="car">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListCar.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </TabItem>
        </Tabs >

       
        
      </div>
    </section>
  );
}
