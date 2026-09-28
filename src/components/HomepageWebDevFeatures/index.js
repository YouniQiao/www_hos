import React from 'react';
import { translate } from '@docusaurus/Translate';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
{
  icon: "/device/phone.png",
  title: translate({ message: '快速上手' }),
  description: translate({ message: '了解手势导航，截图等基础操作。' }),
  readMore: '/docs/category/phone-quickstart'
},
{
  icon: "/device/phone.png",
  title: translate({ message: '智慧体验' }),
  description: translate({ message: '体验智慧功能带来的高效生活。' }),
  readMore: '/docs/category/phone-ai'
},
{
  icon: "/device/phone.png",
  title: translate({ message: '纯净安全' }),
  description: translate({ message: '时刻守护你的隐私安全。' }),
  readMore: '/docs/category/phone-security'
},
{
  icon: "/device/phone.png",
  title: translate({ message: '精彩影像' }),
  description: translate({ message: '玩转影像拍摄，图片编辑等技巧。' }),
  readMore: '/docs/category/phone-camera'
},
{
  icon: "/device/phone.png",
  title: translate({ message: '个性设置' }),
  description: translate({ message: '了解如何自定义你的设置。' }),
  readMore: '/docs/category/phone-setting'
},
{
  icon: "/device/phone.png",
  title: translate({ message: '全场景' }),
  description: translate({ message: '了解更多产品如何默契配合。' }),
  readMore: '/docs/category/phone-full-scene'
}];




const FeatureListPC = [
{
  icon: "/device/pc.png",
  title: translate({ message: '新机上手' }),
  description: translate({ message: '了解控制中心，截图等基础操作。' }),
  readMore: '/docs/category/pc-quickstart'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '全场景' }),
  description: translate({ message: '了解多产品如何默契配合。' }),
  readMore: '/docs/category/pc-full-scene'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '智慧体验' }),
  description: translate({ message: '体验智慧功能带来的高效办公。' }),
  readMore: '/docs/category/pc-ai'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '常用手势' }),
  description: translate({ message: '了解如何使用手势快捷操作电脑。' }),
  readMore: '/docs/category/pc-gesture'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '快捷键' }),
  description: translate({ message: '了解如何使用按键组合快捷操作电脑。' }),
  readMore: '/docs/category/pc-shortcut-key'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '高效办公' }),
  description: translate({ message: '了解如何使用文件管理、备忘录等应用高效办公。' }),
  readMore: '/docs/category/pc-work'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '纯净安全' }),
  description: translate({ message: '时刻守护你的隐私安全。' }),
  readMore: '/docs/category/pc-security'
},
{
  icon: "/device/pc.png",
  title: translate({ message: '个性设置' }),
  description: translate({ message: '了解如何自定义你的设备。' }),
  readMore: '/docs/category/pc-setting'
}];



const FeatureListTablet = [
{
  icon: "/device/pad.png",
  title: translate({ message: '快速上手' }),
  description: translate({ message: '了解手势导航，截图等基础操作。' }),
  readMore: '/docs/category/tablet-quickstart'
},
{
  icon: "/device/pad.png",
  title: translate({ message: '智慧体验' }),
  description: translate({ message: '体验智慧功能带来的高效生活。' }),
  readMore: '/docs/category/tablet-ai'
},
{
  icon: "/device/pad.png",
  title: translate({ message: '纯净安全' }),
  description: translate({ message: '时刻守护你的隐私安全。' }),
  readMore: '/docs/category/tablet-security'
},
{
  icon: "/device/pad.png",
  title: translate({ message: '精彩影像' }),
  description: translate({ message: '玩转影像拍摄，图片编辑等技巧。' }),
  readMore: '/docs/category/tablet-camera'
},
{
  icon: "/device/pad.png",
  title: translate({ message: '个性设置' }),
  description: translate({ message: '了解如何自定义你的设置。' }),
  readMore: '/docs/category/tablet-setting'
},
{
  icon: "/device/pad.png",
  title: translate({ message: '全场景' }),
  description: translate({ message: '了解更多产品如何默契配合。' }),
  readMore: '/docs/category/tablet-full-scene'
}];


const FeatureListWearable = [
{
  icon: "/device/watch.png",
  title: 'HUAWEI WATCH D3',
  description: translate({ message: '轻薄舒适，平稳加压，安心测量。' }),
  readMore: '/docs/category/watch-d3'
},
{
  icon: "/device/watch.png",
  title: translate({ message: 'HUAWEI WATCH 6 系列' }),
  description: translate({ message: '腕上 AI 助手，独立智慧体验。' }),
  readMore: '/docs/category/watch-6'
},
{
  icon: "/device/watch.png",
  title: translate({ message: 'HUAWEI WATCH GT 7 系列' }),
  description: translate({ message: '户外进阶运动，突破有迹可循。' }),
  readMore: '/docs/category/watch-gt7'
},
{
  icon: "/device/watch.png",
  title: translate({ message: 'HUAWEI WATCH FIT 5 系列' }),
  description: translate({ message: '睡眠监测升级，全面健康守护。' }),
  readMore: '/docs/category/watch-fit5'
},
{
  icon: "/device/watch.png",
  title: 'HUAWEI WATCH Buds 2',
  description: translate({ message: '耳机手表二合一，自由佩戴更随心。' }),
  readMore: '/docs/category/watch-buds2'
},
{
  icon: "/device/watch.png",
  title: translate({ message: 'WATCH | ULTIMATE DESIGN' }),
  description: translate({ message: '非凡大师星钻绽放款，优雅盛放。' }),
  readMore: '/docs/category/watch-ultimate-design'
},
{
  icon: "/device/watch.png",
  title: 'HUAWEI WATCH GT Runner 2',
  description: translate({ message: '超精准定位，智能马拉松模式。' }),
  readMore: '/docs/category/watch-gt-runner2'
},
{
  icon: "/device/watch.png",
  title: 'HUAWEI WATCH Ultimate 2',
  description: translate({ message: '海豚声呐通信，北斗卫星语音消息。' }),
  readMore: '/docs/category/watch-ultimate2'
},
{
  icon: "/device/watch.png",
  title: translate({ message: 'HUAWEI WATCH GT 6 系列' }),
  description: translate({ message: '多维情绪健康，全新骑行体验。' }),
  readMore: '/docs/category/watch-gt6'
},
{
  icon: "/device/watch.png",
  title: 'HUAWEI WATCH 5',
  description: translate({ message: '鸿蒙 AI 智能手表。' }),
  readMore: '/docs/category/watch-5'
}];



const FeatureListTV = [
{
  icon: "/device/tv.png",
  title: translate({ message: '新机上手' }),
  description: translate({ message: '了解智慧屏连接、观看电视直播等操作。' }),
  readMore: '/docs/category/tv-quickstart'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '灵犀指向遥控' }),
  description: translate({ message: '了解灵犀指向遥控的配对与操控。' }),
  readMore: '/docs/category/tv-remote-control'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '投屏方法' }),
  description: translate({ message: '了解各类投屏的具体操作。' }),
  readMore: '/docs/category/tv-mirror'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '畅连通话' }),
  description: translate({ message: '了解在智慧屏上使用畅连通话。' }),
  readMore: '/docs/category/tv-changlian'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '智享生活' }),
  description: translate({ message: '了解更多智慧屏的智能功能。' }),
  readMore: '/docs/category/tv-smart-life'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '全场景协同' }),
  description: translate({ message: '了解如何使用智慧屏进行多设备协同。' }),
  readMore: '/docs/category/tv-full-scene'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '灵犀悬浮触控' }),
  description: translate({ message: '像用手机一样双指操控智慧屏。' }),
  readMore: '/docs/category/tv-touch-control'
},
{
  icon: "/device/tv.png",
  title: translate({ message: '更多技巧' }),
  description: translate({ message: '了解更多智慧屏使用技巧。' }),
  readMore: '/docs/category/tv-more'
}];



const FeatureListCar = [
{
  icon: "/device/car.png",
  title: translate({ message: '新机上手' }),
  description: translate({ message: '纯血鸿蒙智能座舱，敬请期待。' }),
  readMore: '/docs/quick-start-car/start'
}];



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
          {translate({ message: "了解更多" })}
        </Link>}

      </div>
    </div>);

}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container mt-10">
        <h1 className='text-center largest font-bold'>{translate({ message: "玩机设备" })}</h1>
        <div className='text-center mb-10'>
          {translate({ message: "各类设备的玩机技巧内容，全部来自各设备提供的《玩机技巧》App。" })}
        </div>

        <Tabs
          defaultValue="phone"
          values={[
          { label: translate({ message: '手机' }), value: 'phone' },
          { label: translate({ message: '平板' }), value: 'tablet' },
          { label: translate({ message: '电脑' }), value: 'pc' },
          { label: translate({ message: '穿戴' }), value: 'wearable' },
          { label: translate({ message: '智慧屏' }), value: 'tv' },
          { label: translate({ message: '智能座舱' }), value: 'car' }]
          }>

          <TabItem value="phone">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureList.map((props, idx) =>
              <Feature key={idx} {...props} />
              )}
            </div>
          </TabItem>
          <TabItem value="pc">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListPC.map((props, idx) =>
              <Feature key={idx} {...props} />
              )}
            </div>
          </TabItem>
          <TabItem value="tablet">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListTablet.map((props, idx) =>
              <Feature key={idx} {...props} />
              )}
            </div>
          </TabItem>
          <TabItem value="wearable">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListWearable.map((props, idx) =>
              <Feature key={idx} {...props} />
              )}
            </div>
          </TabItem>
          <TabItem value="tv">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListTV.map((props, idx) =>
              <Feature key={idx} {...props} />
              )}
            </div>
          </TabItem>
          <TabItem value="car">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FeatureListCar.map((props, idx) =>
              <Feature key={idx} {...props} />
              )}
            </div>
          </TabItem>
        </Tabs>



      </div>
    </section>);

}
