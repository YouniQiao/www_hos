import React from 'react';
import Layout from '@theme/Layout';
import styles from './harmonyos-next.module.css';

export default function HarmonyOSNext() {
  return (
    <Layout
      title="HarmonyOS NEXT - 原生精致"
      description="探索HarmonyOS NEXT系统的原生精致特征，包括统一设计语言、流畅动效、精致视觉、创新交互等">
      
      <main className={styles.main}>
        {/* Hero Section - 更新与其他页面一致的风格 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              原生<span className={styles.highlight}>精致</span>
            </h1>
            <p className={styles.heroSubtitle}>体验革新，细节至美</p>
            <div className={styles.heroAnimation}>
              <div className={styles.designElement}></div>
              <div className={styles.designElement}></div>
              <div className={styles.designElement}></div>
              <div className={styles.connectionLines}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>原生精致，定义未来体验</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT 以原生精致的设计理念，构建统一、流畅、智能的操作系统体验，
                从视觉到交互，每一处细节都经过精心打磨。
              </p>
            </div>
          </div>
        </section>

        {/* Design Language */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.featureGrid}>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>统一的设计语言</h3>
                <p className={styles.featureDescription}>
                  基于 Harmony Design 系统，构建跨设备一致的设计语言。统一的色彩体系、
                  规范的间距标准、协调的圆角设计，确保应用在不同设备上呈现完美的视觉一致性。
                </p>
                <ul className={styles.featureList}>
                  <li>自适应布局系统</li>
                  <li>统一的组件库</li>
                  <li>跨设备视觉一致性</li>
                  <li>无障碍设计支持</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.designVisual}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Effects */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={`${styles.featureGrid} ${styles.reverse}`}>
              <div className={styles.featureVisual}>
                <div className={styles.animationVisual}></div>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>流畅自然的动效</h3>
                <p className={styles.featureDescription}>
                  基于物理规律的动效设计，让每一次交互都如丝般顺滑。精心设计的转场动画、
                  微交互反馈，为用户带来沉浸式的操作体验。
                </p>
                <ul className={styles.featureList}>
                  <li>物理引擎驱动的动画</li>
                  <li>智能转场效果</li>
                  <li>细腻的微交互</li>
                  <li>性能优化的渲染</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Style */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.featureGrid}>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>精致的视觉风格</h3>
                <p className={styles.featureDescription}>
                  极简主义与现代美学相结合，通过精致的图标设计、优雅的字体排版、
                  细腻的材质纹理，打造高端科技的视觉感受。
                </p>
                <ul className={styles.featureList}>
                  <li>现代化图标体系</li>
                  <li>优雅的字体层次</li>
                  <li>精致的材质效果</li>
                  <li>科技感的视觉元素</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.visualStyle}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Innovation */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={`${styles.featureGrid} ${styles.reverse}`}>
              <div className={styles.featureVisual}>
                <div className={styles.interactionVisual}></div>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>创新的交互体验</h3>
                <p className={styles.featureDescription}>
                  突破传统的交互模式，引入智能预测、手势操作、语音交互等创新功能，
                  让设备更加懂你，操作更加直觉。
                </p>
                <ul className={styles.featureList}>
                  <li>智能预测交互</li>
                  <li>多模态交互支持</li>
                  <li>情境感知功能</li>
                  <li>无障碍交互优化</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusion}>
          <div className="container">
            <div className={styles.conclusionContent}>
              <h2 className={styles.conclusionTitle}>开启原生精致新篇章</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT 不仅是一个操作系统，更是对完美体验的执着追求。
                从设计语言到交互创新，每一处细节都体现着对用户需求的深度理解和技术实力的极致展现。
              </p>
              <div className={styles.techBadges}>
                <span className={styles.techBadge}>统一设计</span>
                <span className={styles.techBadge}>流畅动效</span>
                <span className={styles.techBadge}>精致视觉</span>
                <span className={styles.techBadge}>创新交互</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}