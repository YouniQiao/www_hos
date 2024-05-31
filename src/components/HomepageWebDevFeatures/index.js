import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '全场景服务',
    description: (
      <>
        基于“1+8+N”战略，HarmonyOS能够提供跨设备的全场景智能服务，实现设备间的协同工作和无缝衔接。
      </>
    ),
    readMore: '/docs/development/knowledge-base/data-fetching'
  },
  {
    title: '流畅体验',
    description: (
      <>
        通过优化的系统内核和图形处理能力，HarmonyOS提供更为流畅的用户界面和应用运行环境，确保应用启动、运行和切换的高效性。
      </>
    ),
    readMore: '/docs/development/getting-started/installation-guide'
  },
  {
    title: '智能交互',
    description: (
      <>
        HarmonyOS支持多模态交互，包括语音、触摸、视觉识别等多种方式，提高了人机交互的自然性和便捷性。例如，通过“碰一碰”功能快速连接设备和服务。
      </>
    ),
    readMore: '/docs/development/knowledge-base/fast-refresh'
  },
  {
    title: '统一的用户体验',
    description: (
      <>
        HarmonyOS提供统一且直观的用户界面设计，确保不同设备上有一致的用户体验。
      </>
    ),
    readMore: '/docs/development/knowledge-base/middleware-system'
  },
  {
    title: '丰富的应用生态',
    description: (
      <>
        HarmonyOS正在快速构建和丰富其应用生态，支持多种类型的应用程序，满足用户的各种需求。
      </>
    ),
    readMore: '/docs/development/knowledge-base/api-routes'
  },
  {
    title: '安全与隐私保护',
    description: (
      <>
        HarmonyOS加强了系统的安全性和用户数据的隐私保护机制，采用多层防护、加密传输等技术，确保用户信息的安全。
      </>
    ),
    readMore: '/docs/development/theme/styling'
  }
];

function Feature({ Svg, title, description, readMore }) {
  return (
    <div>
      <div className="card p-8 box-border">
        <h3 className='mb-2'>{title}</h3>
        <div className='mb-2'>{description}</div>
        {/*<Link
          to={readMore}>
          Read more
        </Link>*/}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container mt-10">
        <h1 className='text-center largest font-bold'>核心特征</h1>
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
