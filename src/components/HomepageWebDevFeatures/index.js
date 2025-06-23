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
    readMore: '/docs/quick-start/gesture-navigation'
  },
  {
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效生活。
      </>
    ),
    readMore: '/docs/ai/screen-recognition'
  },
  {
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/security/privacy-light'
  },
  {
    title: '精彩影像',
    description: (
      <>
        玩转影像拍摄，图片编辑等技巧。
      </>
    ),
    readMore: '/docs/camera/zoom-ring'
  },
  {
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设置。
      </>
    ),
    readMore: '/docs/setting/weather-theme'
  },
  {
    title: '全场景',
    description: (
      <>
        了解更多产品如何默契配合。
      </>
    ),
    readMore: '/docs/full-scene/huawei-share'
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



const FeatureListPC = [
  {
    title: '新机上手',
    description: (
      <>
        了解控制中心，截图等基础操作。
      </>
    ),
    readMore: '/docs/quick-start-pc/harmonyos'
  },
  {
    title: '全场景',
    description: (
      <>
        了解多产品如何默契配合。
      </>
    ),
    readMore: '/docs/full-scene-pc/super-device'
  },
  {
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效办公。
      </>
    ),
    readMore: '/docs/ai-pc/xiaoyi-search'
  },
  {
    title: '常用手势',
    description: (
      <>
        了解如何使用手势快捷操作电脑。
      </>
    ),
    readMore: '/docs/gesture/knuckle'
  },
  {
    title: '快捷键',
    description: (
      <>
        了解如何使用按键组合快捷操作电脑。
      </>
    ),
    readMore: '/docs/shortcut-key/open-startup-window'
  },
  {
    title: '高效办公',
    description: (
      <>
        了解如何使用文件管理、备忘录等应用高效办公。
      </>
    ),
    readMore: '/docs/work/memo'
  },
  {
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/security-pc/privacy-light'
  },
  {
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设备。
      </>
    ),
    readMore: '/docs/setting-pc/change-wallpaper'
  },
  
];

const FeatureListTablet = [
  {
    title: '新机上手',
    description: (
      <>
        纯血鸿蒙平板，敬请期待。
      </>
    ),
    readMore: '/docs/quick-start-tablet/start'
  },
  
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
        <h1 className='text-center largest font-bold'>玩机精选</h1>
        <div className='text-center mb-10'>
          各类设备的玩机技巧
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
