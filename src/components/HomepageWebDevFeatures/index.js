import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '高端精致',
    description: (
      <>
        
      </>
    ),
    readMore: '/docs/development/knowledge-base/data-fetching'
  },
  {
    title: '简单易用',
    description: (
      <>
        
      </>
    ),
    readMore: '/docs/development/getting-started/installation-guide'
  },
  {
    title: '极致流畅',
    description: (
      <>
        
      </>
    ),
    readMore: '/docs/development/knowledge-base/fast-refresh'
  },
  {
    title: '纯净安全',
    description: (
      <>
        
      </>
    ),
    readMore: '/docs/development/knowledge-base/middleware-system'
  },
  {
    title: '原生智能',
    description: (
      <>
        
      </>
    ),
    readMore: '/docs/development/knowledge-base/api-routes'
  },
  {
    title: '全场景协同',
    description: (
      <>
        
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
