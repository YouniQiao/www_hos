import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    icon: "/device/phone.png",
    title: '快速上手',
    description: (
      <>
        了解手势导航，截图等基础操作。
      </>
    ),
    readMore: '/docs/category/phone-quickstart'
  },
  {
    icon: "/device/phone.png",
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效生活。
      </>
    ),
    readMore: '/docs/category/phone-ai'
  },
  {
    icon: "/device/phone.png",
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/category/phone-security'
  },
  {
    icon: "/device/phone.png",
    title: '精彩影像',
    description: (
      <>
        玩转影像拍摄，图片编辑等技巧。
      </>
    ),
    readMore: '/docs/category/phone-camera'
  },
  {
    icon: "/device/phone.png",
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设置。
      </>
    ),
    readMore: '/docs/category/phone-setting'
  },
  {
    icon: "/device/phone.png",
    title: '全场景',
    description: (
      <>
        了解更多产品如何默契配合。
      </>
    ),
    readMore: '/docs/category/phone-full-scene'
  }
];



const FeatureListPC = [
  {
    icon: "/device/pc.png",
    title: '新机上手',
    description: (
      <>
        了解控制中心，截图等基础操作。
      </>
    ),
    readMore: '/docs/category/pc-quickstart'
  },
  {
     icon: "/device/pc.png",
    title: '全场景',
    description: (
      <>
        了解多产品如何默契配合。
      </>
    ),
    readMore: '/docs/category/pc-full-scene'
  },
  {
     icon: "/device/pc.png",
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效办公。
      </>
    ),
    readMore: '/docs/category/pc-ai'
  },
  {
     icon: "/device/pc.png",
    title: '常用手势',
    description: (
      <>
        了解如何使用手势快捷操作电脑。
      </>
    ),
    readMore: '/docs/category/pc-gesture'
  },
  {
     icon: "/device/pc.png",
    title: '快捷键',
    description: (
      <>
        了解如何使用按键组合快捷操作电脑。
      </>
    ),
    readMore: '/docs/category/pc-shortcut-key'
  },
  {
     icon: "/device/pc.png",
    title: '高效办公',
    description: (
      <>
        了解如何使用文件管理、备忘录等应用高效办公。
      </>
    ),
    readMore: '/docs/category/pc-work'
  },
  {
     icon: "/device/pc.png",
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/category/pc-security'
  },
  {
     icon: "/device/pc.png",
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
    icon: "/device/pad.png",
    title: '快速上手',
    description: (
      <>
        了解手势导航，截图等基础操作。
      </>
    ),
    readMore: '/docs/category/tablet-quickstart'
  },
  {
    icon: "/device/pad.png",
    title: '智慧体验',
    description: (
      <>
        体验智慧功能带来的高效生活。
      </>
    ),
    readMore: '/docs/category/tablet-ai'
  },
  {
    icon: "/device/pad.png",
    title: '纯净安全',
    description: (
      <>
        时刻守护你的隐私安全。
      </>
    ),
    readMore: '/docs/category/tablet-security'
  },
  {
    icon: "/device/pad.png",
    title: '精彩影像',
    description: (
      <>
        玩转影像拍摄，图片编辑等技巧。
      </>
    ),
    readMore: '/docs/category/tablet-camera'
  },
  {
    icon: "/device/pad.png",
    title: '个性设置',
    description: (
      <>
        了解如何自定义你的设置。
      </>
    ),
    readMore: '/docs/category/tablet-setting'
  },
  {
    icon: "/device/pad.png",
    title: '全场景',
    description: (
      <>
        了解更多产品如何默契配合。
      </>
    ),
    readMore: '/docs/category/tablet-full-scene'
  }
];

const FeatureListWearable = [
  {
    icon: "/device/watch.png",
    title: 'WATCH Ultimate系列',
    description: (
      <>
        Ultimate系列鸿蒙手表。
      </>
    ),
    readMore: '/docs/wearable'
  },
  {
    icon: "/device/watch.png",
    title: 'WATCH GT 6系列',
    description: (
      <>
        GT系列鸿蒙手表。
      </>
    ),
    readMore: '/docs/wearable'
  },
  {
    icon: "/device/watch.png",
    title: 'WATCH 5',
    description: (
      <>
        首款AI智能手表。
      </>
    ),
    readMore: '/docs/wearable'
  },
  
];

const FeatureListTV = [
  {
    icon: "/device/tv.png",
    title: '新机上手',
    description: (
      <>
        了解智慧屏连接、观看电视直播等操作。
      </>
    ),
    readMore: '/docs/category/tv-quickstart'
  },
  {
    icon: "/device/tv.png",
    title: '投屏方法',
    description: (
      <>
        了解各类投屏的具体操作。
      </>
    ),
    readMore: '/docs/category/tv-mirror'
  },
  {
    icon: "/device/tv.png",
    title: '畅连通话',
    description: (
      <>
        了解在智慧屏上使用畅连通话。
      </>
    ),
    readMore: '/docs/category/tv-changlian'
  },
  {
    icon: "/device/tv.png",
    title: '智享生活',
    description: (
      <>
        了解更多智慧屏的智能功能。
      </>
    ),
    readMore: '/docs/category/tv-smart-life'
  },
  {
    icon: "/device/tv.png",
    title: '全场景协同',
    description: (
      <>
        了解如何使用智慧屏进行多设备协同。
      </>
    ),
    readMore: '/docs/category/tv-full-scene'
  },
  {
    icon: "/device/tv.png",
    title: '更多技巧',
    description: (
      <>
        了解更多智慧屏使用技巧。
      </>
    ),
    readMore: '/docs/category/tv-more'
  },
  
];

const FeatureListCar = [
  {
    icon: "/device/car.png",
    title: '新机上手',
    description: (
      <>
        纯血鸿蒙智能座舱，敬请期待。
      </>
    ),
    readMore: '/docs/quick-start-car/start'
  },
  
];

function Feature({ icon, title, description, readMore }) {
  return (
    <div>
      <div className="card p-8 box-border">
        <div className="dev-features-icon flex justify-center items-center">
          <img src={icon} alt={title} width={40} height={40} />
        </div>
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
            { label: '平板', value: 'tablet' },
            { label: '电脑', value: 'pc' },
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
