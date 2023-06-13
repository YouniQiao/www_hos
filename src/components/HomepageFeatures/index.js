import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HarmonyOS是什么',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        手机上、平板上、电脑上、手表上、电视上、车上...这些都是HarmonyOS。
      </>
    ),
  },
  {
    title: 'HarmonyOS核心体验',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        超级终端、应用流转、智能高效，HarmonyOS常用常新，更进一步。
      </>
    ),
  },
  {
    title: 'HarmonyOS设备',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        想体验HarmonyOS？有这些设备可以体验。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
