import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './harmonyos-5.0-features.module.css';

export default function HarmonyOS5Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "方舟引擎",
      description: "华为自研的图形、内存、调度和存储四大引擎，全面提升系统性能",
      icon: "🚀",
      details: ["图形渲染性能提升20%", "应用启动速度提升15%", "续航时间增加30分钟", "存储读取速度大幅提升"]
    },
    {
      title: "超级中转站",
      description: "创新的跨应用、跨设备内容分享方式，实现无缝内容流转",
      icon: "📋",
      details: ["拖拽内容至中转站暂存", "跨应用、跨设备一键粘贴", "支持文本、图片、文件", "最多可存储100条内容"]
    },
    {
      title: "智感扫码",
      description: "无需打开应用，双击后盖即可快速扫码",
      icon: "📱",
      details: ["支持支付宝、微信等主流扫码", "双击手机后盖触发", "识别速度快至0.5秒", "覆盖支付、乘车、网页等场景"]
    },
    {
      title: "隐私中心",
      description: "全面的隐私安全保护体系，透明化管理应用权限",
      icon: "🔒",
      details: ["应用权限访问记录可视化", "摄像头、麦克风使用提醒", "敏感信息脱敏处理", "隐私风险主动提醒"]
    },
    {
      title: "通信共享",
      description: "平板无需插卡即可共享手机通信能力",
      icon: "📶",
      details: ["平板共享手机蜂窝网络", "接听电话、收发短信", "网络延迟降低20%", "功耗降低30%"]
    },
    {
      title: "万能卡片",
      description: "应用信息桌面直显，无需打开应用即可操作",
      icon: "🃏",
      details: ["支持尺寸自定义", "卡片堆叠与组合", "实时信息更新", "支持第三方应用"]
    },
  ];

  const technicalSpecs = [
    { name: "发布时间", value: "2024年10月" },
    { name: "核心升级", value: "方舟引擎" },
    { name: "性能提升", value: "系统流畅度提升20%" },
    { name: "首批机型", value: "Mate 60系列等" },
    { name: "设备互联", value: "支持8类设备" },
    { name: "安全认证", value: "CC EAL5+级安全" }
  ];

  const ecosystemData = [
    { label: "连接设备数", value: "7亿+", icon: "🔗" },
    { label: "生态合作伙伴", value: "2200+", icon: "🤝" },
    { label: "原子化服务", value: "5万+", icon: "⚛️" },
    { label: "月活用户", value: "5.7亿", icon: "👥" }
  ];

  return (
    <Layout
      title={`HarmonyOS 5.0 新特性 - ${siteConfig.title}`}
      description="探索HarmonyOS 5.0的方舟引擎、超级中转站、超级压缩等创新特性">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 5.0</h1>
          <p className={styles.heroSubtitle}>更流畅、更自由、更安全</p>
          <p className={styles.heroDescription}>
            2024年10月22日发布，引入方舟引擎、超级中转站等创新功能，全面升级全场景智慧体验。
          </p>
           <div className={styles.releaseInfo}>
            <span className={styles.releaseTag}>正式开启原生鸿蒙时代</span>
        
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* 特性介绍部分 */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>核心新特性</h2>
            <p>八大创新功能，重新定义智能终端体验</p>
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
            <h2>技术规格</h2>
            <p>HarmonyOS 5.0 关键参数与性能指标</p>
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

        

        {/* 特性对比 */}
        <section className={styles.comparisonSection}>
          <div className={styles.sectionHeader}>
            <h2>版本特性对比</h2>
            <p>HarmonyOS 5.0 相较于前代的主要升级</p>
          </div>
          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>特性类别</div>
              <div className={styles.tableCell}>HarmonyOS 4.0</div>
              <div className={styles.tableCell}>HarmonyOS 5.0</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>系统性能</div>
              <div className={styles.tableCell}>基础优化</div>
              <div className={styles.tableCell}>方舟引擎全面提升</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>内容分享</div>
              <div className={styles.tableCell}>多屏协同</div>
              <div className={styles.tableCell}>超级中转站</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>存储管理</div>
              <div className={styles.tableCell}>智能清理</div>
              <div className={styles.tableCell}>超级压缩技术</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>隐私安全</div>
              <div className={styles.tableCell}>基础隐私保护</div>
              <div className={styles.tableCell}>隐私中心可视化</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>交互体验</div>
              <div className={styles.tableCell}>大文件夹</div>
              <div className={styles.tableCell}>智感扫码、AI字幕</div>
            </div>
          </div>
        </section>

        {/* 升级建议 */}
        <section className={styles.upgradeSection}>
          <div className={styles.upgradeContent}>
            <h2>升级建议与支持</h2>
            <div className={styles.upgradeInfo}>
              
              <div className={styles.upgradeItem}>
                <h3>⚠️ 注意事项</h3>
                <p>升级前请备份重要数据，确保电量充足（建议50%以上）</p>
              </div>
              <div className={styles.upgradeItem}>
                <h3>🔄 升级方式</h3>
                <p>通过「设置」-「系统和更新」-「软件更新」检测并安装</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}