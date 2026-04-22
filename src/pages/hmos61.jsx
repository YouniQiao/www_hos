import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './harmonyos-6.1-features.module.css';

export default function HarmonyOS61Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "更流畅 - 方舟引擎持续优化",
      description: "应用启动、分屏操作、页面滑动全面提速，游戏快启与视频预加载体验升级",
      icon: "🚀",
      tags: ["应用秒开", "分屏流畅", "游戏快启", "视频预加载"]
    },
    {
      title: "更安全 - 星盾架构全面落地",
      description: "从底层到应用全方位安全防护，加密分享与AI防诈保护升级",
      icon: "🔒",
      tags: ["加密分享", "AI防诈", "隐私管控", "亲情守护"]
    },
    {
      title: "更智能 - 小艺与智能体协同",
      description: "小艺助手与智能体深度协同，语音交互自然度与准确率大幅提升",
      icon: "🤖",
      tags: ["语音交互", "智能体协同", "语音转文字", "智能导航"]
    },
    {
      title: "更便捷 - 实况窗与动感卡片",
      description: "交互体验全面升级，实况窗、动感卡片、碰一碰分享优化",
      icon: "✨",
      tags: ["实况窗", "动感卡片", "碰一碰分享", "畅连对讲"]
    },
    {
      title: "更贴心 - 数字资产继承",
      description: "云空间照片视频安全传递给亲友，一键全域分享让生活更便利",
      icon: "💝",
      tags: ["资产继承", "全域分享", "多端同步", "日历同步"]
    },
    {
      title: "全场景生态覆盖",
      description: "终端设备突破5500万，覆盖18个核心垂直领域，全品类设备支持",
      icon: "🌐",
      tags: ["5500万+", "18个领域", "全品类", "鸿蒙智家"]
    }
  ];

  const technicalSpecs = [
    { label: "发布时间", value: "2026年4月20日" },
    { label: "终端设备", value: "突破 5,500 万" },
    { label: "安全架构", value: "星盾全面落地" },
    { label: "资产继承", value: "最多 5 位继承人" },
    { label: "覆盖领域", value: "18 个垂直领域" },
    { label: "畅连对讲", value: "实时语音/视频" }
  ];

  return (
    <Layout
      title={`HarmonyOS 6.1 - ${siteConfig.title}`}
      description="探索HarmonyOS 6.1在流畅、安全、智能、便捷和全场景生态方面的全面升级">
      {/* Hero */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 6.1</h1>
          <p className={styles.heroSubtitle}>全场景智慧体验持续进化</p>
          <p className={styles.heroDescription}>
            2026年4月20日正式推送，终端设备突破5500万，覆盖手机、平板、PC、穿戴、音频、智慧屏、鸿蒙智家全品类设备，
            带来更流畅、更安全、更智能、更贴心的全新体验
          </p>
          <div className={styles.heroTags}>
            <span className={styles.heroTag}>正式版已发布</span>
            <span className={styles.heroTag}>5500万+ 终端设备</span>
            <span className={styles.heroTag}>全品类覆盖</span>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* 核心特性 */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>核心新特性</h2>
            <p>围绕"流畅、安全、智能、便捷、贴心"五大维度的持续进化</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureEmoji}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
                <div className={styles.featureTags}>
                  {feature.tags.map((tag, idx) => (
                    <span key={idx} className={styles.featureTagItem}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 关键数据 */}
        <section className={styles.specsSection}>
          <div className={styles.sectionHeader}>
            <h2>关键数据</h2>
            <p>基于华为官方发布的核心指标</p>
          </div>
          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) => (
              <div key={index} className={styles.specCard}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 升级信息 */}
        <section className={styles.updateSection}>
          <div className={styles.updateContent}>
            <h2>升级信息</h2>
            <div className={styles.updateGrid}>
              <div className={styles.updateCard}>
                <h3>📱 升级方式</h3>
                <p>用户可通过"设置 → 系统更新"路径进入升级界面，体验全新系统功能。支持机型将分批推送，请耐心等待。</p>
              </div>
              <div className={styles.updateCard}>
                <h3>🎯 版本亮点</h3>
                <p>HarmonyOS 6.1 在6.0基础上持续打磨体验，方舟引擎、星盾安全、小艺智能体三大核心能力全面升级，新增数字资产继承、畅连实时对讲等贴心功能。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 展望 */}
        <section className={styles.visionSection}>
          <div className={styles.visionContent}>
            <div className={styles.visionIcon}>🌟</div>
            <h2>迈向全场景智慧生活新阶段</h2>
            <p>
              HarmonyOS 6.1 不仅仅是一次版本迭代，更是鸿蒙生态走向成熟的标志。5500万终端设备、18个核心垂直领域的全覆盖，
              标志着鸿蒙系统正从"可用"全面迈向"好用"，为用户构建真正无缝、安全、智能的全场景数字生活体验。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
