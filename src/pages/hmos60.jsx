import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './harmonyos-6.0-features.module.css';

export default function HarmonyOS6Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "更美观 - 灵动光影个性随行",
      description: "EDR光效渲染技术打造智慧光感特效，色彩鲜活真实",
      icon: "✨",
      details: ["艺术签名功能，AI智能匹配壁纸风格", "AIGC生成专属字体", "元气心情主题，情感识别与动效交互融合", "毛球系列主题，AI语音交互动画"]
    },
    {
      title: "更好用 - 设备互联一触即达",
      description: "碰一碰分享覆盖超60款应用，实现多设备无缝协同",
      icon: "🔗",
      details: ["手机与电脑碰一碰互传文件", "一碰多分享、组队开黑", "星闪连接覆盖半径达100米", "手眼同行功能，跨设备键鼠无感切换"]
    },
    {
      title: "更智能 - 超能小艺AI不释手",
      description: "小艺助手识别16种方言，一句话完成复杂任务",
      icon: "🤖",
      details: ["鸿蒙智能体框架HMAF，首批80+智能体上线", "备忘录AI帮写助手", "图库AI一键成片、AI反光消除", "从'用户指令'转变为'用户意图'为中心"]
    },
    {
      title: "更安全 - 隐私安全守护升级",
      description: "星盾安全架构再升级，拦截超240亿次不合理权限索取",
      icon: "🔒",
      details: ["AI防诈识别7类电信诈骗", "AI防窥屏保护", "加密分享功能", "亲情防诈，远程守护家人安全"]
    },
    {
      title: "更丝滑 - 纵享流畅性能风暴",
      description: "方舟引擎加持，流畅度较鸿蒙5提升15%，较鸿蒙4提升40%",
      icon: "🚀",
      details: ["应用安装速度更快", "游戏启动速度提升5倍", "续航增加35分钟以上", "秒启秒开秒加载体验"]
    },
    {
      title: "全场景生态",
      description: "鸿蒙原生应用和元服务超30000个，开发者突破800万",
      icon: "🌐",
      details: ["覆盖政务、交通、金融等众多领域", "开源鸿蒙代码超1.3亿行", "1200款软硬件产品", "69款三方发行版"]
    }
  ];

  const technicalSpecs = [
    { name: "系统流畅度", value: "较鸿蒙5提升15%，较鸿蒙4提升40%" },
    { name: "续航表现", value: "增加35分钟以上" },
    { name: "碰一碰应用", value: "支持超60款应用" },
    { name: "小艺方言", value: "识别16种方言" },
    { name: "设备查找", value: "星闪连接覆盖100米" },
    { name: "安全拦截", value: "超240亿次权限拦截" }
  ];


  return (
    <Layout
      title={`HarmonyOS 6.0 - ${siteConfig.title}`}
      description="探索HarmonyOS 6.0在美观、易用、智能、安全和流畅性方面的全面升级">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 6.0</h1>
          <p className={styles.heroSubtitle}>全场景智能生活体验再升级</p>
          <p className={styles.heroDescription}>
            2025年10月22日正式发布，从"可用"持续迈向"好用"，带来更好看、更智能、更安全、更好用、更流畅的全新体验
          </p>
          <div className={styles.releaseInfo}>
            <span className={styles.releaseTag}>公测版已发布</span>
            <span className={styles.releaseDate}>支持90多款机型</span>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* 特性介绍部分 */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>核心新特性</h2>
            <p>围绕"精致、互联、智能、安全、流畅"五大维度的全面进化</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.featureDetails}>
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 技术规格部分 */}
        <section className={styles.specsSection}>
          <div className={styles.sectionHeader}>
            <h2>技术规格与数据</h2>
            <p>基于华为官方发布的性能指标和生态数据</p>
          </div>
          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) => (
              <div key={index} className={styles.specItem}>
                <div className={styles.specName}>{spec.name}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 生态发展部分 */}
        <section className={styles.ecosystemSection}>
          <div className={styles.sectionHeader}>
            <h2>鸿蒙生态发展</h2>
            <p>快速成长的操作系统生态系统</p>
          </div>
          <div className={styles.ecosystemContent}>
            <div className={styles.ecosystemStats}>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>11.9亿台</div>
                <div className={styles.statLabel}>开源鸿蒙设备出货量</div>
              </div>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>800万+</div>
                <div className={styles.statLabel}>鸿蒙开发者</div>
              </div>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>3万+</div>
                <div className={styles.statLabel}>鸿蒙应用和元服务</div>
              </div>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>1200款</div>
                <div className={styles.statLabel}>兼容软硬件产品</div>
              </div>
            </div>
            <div className={styles.ecosystemDescription}>
              <p>
                自2019年鸿蒙正式面世以来，经过多年的发展，鸿蒙系统不断迭代升级。
                2025年是鸿蒙生态壮大之年，华为全场景新品已全面进入鸿蒙时代。
              </p>
              <p>
                鸿蒙6是原生鸿蒙操作系统的第二个版本，在鸿蒙5的基础上针对用户在流畅度、智能化、
                安全性、互联效率等方面的深层需求持续优化。
              </p>
            </div>
          </div>
        </section>

      

        {/* 更新说明部分 */}
        <section className={styles.updateSection}>
          <div className={styles.updateContent}>
            <h2>升级信息</h2>
            <div className={styles.updateDetails}>
              <div className={styles.updateItem}>
                <h3>升级方式</h3>
                <p>用户可通过"设置-系统更新"路径进入升级界面，体验全新系统功能</p>
              </div>
              <div className={styles.updateItem}>
                <h3>版本特点</h3>
                <p>公测版本不再带有"NEXT"字样，正式命名为HarmonyOS 6.0，标志着系统进入稳定公测阶段</p>
              </div>
            </div>
          </div>
        </section>

        {/* 未来展望区域 */}
        <section className="future-section">
          <div className="container">
            <div className="future-content">
              <div className="future-icon">🚀</div>
              <h2>开启数字生活新纪元</h2>
              <p>HarmonyOS 6.0 不仅仅是操作系统的升级，更是通向万物互联智能世界的门户。它重新定义了设备间的协作方式，为用户提供无缝、智能、个性化的全场景体验，为开发者打造强大、开放、创新的生态平台。</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}