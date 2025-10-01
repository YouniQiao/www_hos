import React from 'react';
import Link from '@docusaurus/Link';

const FeatureList = [
  [
    {
      image: '/img/jingzhi.png',
      title: '原生精致',
      description: (
        <>
          和谐美学，遵循自然物理法则，构建和谐美学秩序。引力动效，锁屏到解锁一镜到底，更流畅，更灵动。
        </>
      ),
      readMore: 'feature/delicate',
      readMoreText: '了解详情 ->',
    },
    {
      image: '/img/hulian.png',
      title: '原生互联',
      description: (
        <>
          一碰互传，美图、视频或好物，随时随地轻松分享。跨设备互通，手机相机一键调用，素材一扫即得。
        </>
      ),
      readMore: 'feature/connect',
      readMoreText: '了解详情 ->',
    }
  ],
  [
    {
      image: '/img/zhineng.png',
      title: '原生智能',
      description: (
        <>
          识屏对话，论文精读，指关节圈选直接抠图、问答、购物，更有业界首创小艺声音修复。
        </>
      ),
      readMore: 'feature/ai',
      readMoreText: '了解详情 ->',
    },
    {
      image: '/img/anquan.png',
      title: '原生安全',
      description: (
        <>
          禁止开放9类不合理权限，从源头降低隐私泄露风险。安全访问，仅给选定的数据，权限授权弹大幅减少。
        </>
      ),
      readMore: 'feature/security',
      readMoreText: '了解详情 ->',
    }
  ],
  [
    {
      image: '/img/liuchang.png',
      title: '原生流畅',
      description: (
        <>
          系统流畅，相应更及时，动效更跟手。游戏流畅，图形加速，高帧稳定。应用流畅，使用更丝滑，纵享流畅应用体验。
        </>
      ),
      readMore: 'feature/smooth',
      readMoreText: '了解详情 ->',
    },
    {
      image: '/img/yingyong.png',
      title: '原生应用',
      description: (
        <>
          全新应用市场，带来高品质应用，纯净安全下载。
        </>
      ),
      readMore: 'feature/application',
      readMoreText: '了解详情 ->',
    }
  ]
];

function Feature({ image, title, description, readMore, readMoreText = 'Read more ->', index }) {
  const className = index === 0 ? 'p-5 lg:p-20 lg:pl-0 border-[#E3E6E9]' : 'p-5 lg:p-20 lg:pr-0 border-[#E3E6E9]';
  return (
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className='text-center'>
          <img width={220} height={220} className='shadow-xl rounded-full' src={image} alt={title} style={{ maxWidth: '100% !important', height: 'auto' }} />
        </div>
        <div>
          <h3 className='mb-3'>{title}</h3>
          <div className='mb-2'>{description}</div>
          {<Link
            to={readMore}>
            {readMoreText}
            </Link>}
        </div>
      </div>
    </div>
  );
}

export default function HomepageEcommerceFeatures() {
  return (
    <section className='pt-10'>
      <h1 className='text-center largest font-bold'>核心特征</h1>
      <div className='text-center mb-10'>
        欢迎来到鸿蒙新世界，从内到外，焕然一新。
      </div>
      <div className='grid grid-cols-1 divide-y border-y-[#E3E6E9] border-y'>
        {FeatureList.map((list, idx) => (
          <div className='border-[#E3E6E9]'>
            <div className="container grid grid-cols-1 md:grid-cols-2 md:divide-x">
              {list.map((props, index) => (
                <Feature index={index} key={index} {...props} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
