import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './harmonyos-7.0-features.module.css';

export default function HarmonyOS70Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "鸿蒙空间计算 - 沉浸光感",
      description: "全新空间化交互：拖动图标时光影随指尖划出轨迹，滑动消除通知让通知栏化作光感粒子飘散；点、按、拖、滑都更有回应。",
      icon: "✨",
      tags: ["光感粒子", "光随指动", "光晕引力", "3D 空间卡片"]
    },
    {
      title: "闯入纵深视界 - 3D 与运镜",
      description: "空间运镜让天气的城市地标与 3D 视角自然融合，日历四季彩蛋随视角环绕呈现；锁屏空间时钟、3D 空间壁纸左右滑动即入立体美学幻境。",
      icon: "🧊",
      tags: ["空间运镜", "空间时钟", "空间壁纸", "立体视界"]
    },
    {
      title: "让想象更有空间 - 3D 创作",
      description: "Remy 可将无人机航拍影像重建为超大 3D 空间地图并在手机上自由浏览；V2Fun 一张照片即可生成 3D 模型，支持 360° 随心预览。",
      icon: "🏗️",
      tags: ["大场景重建", "照片建模", "3D 探店", "商品建模"]
    },
    {
      title: "鸿蒙智能 - 小艺焕新",
      description: "小艺焕新设计，桌面入口一点即达；首页支持个性化精准推送，侧边栏一站集成小艺帮记、小艺 Claw 等智能体，常用服务随时调用。",
      icon: "🤖",
      tags: ["主动服务", "求职帮手", "健康用机", "得力管家"]
    },
    {
      title: "鸿蒙应用迈进 Agent 时代",
      description: "花瓣地图、浏览器、音乐、视频、阅读、主题全面 AI 化：一句话生成旅行规划与专属歌单，热点资讯深度解读，还能调用 AI 生成专属主题与字体。",
      icon: "🧩",
      tags: ["花瓣地图", "华为浏览器", "音乐 / 视频", "阅读 / 主题"]
    },
    {
      title: "超丝滑方舟引擎",
      description: "方舟引擎配合性能大模型，化被动响应为主动供给：高频软件优先调配算力，打卡、跨应用分享跳转更丝滑；开启性能模式整机性能跃升，游戏帧率稳定性提升 40%。",
      icon: "🚀",
      tags: ["性能大模型", "时空加速", "保活增强", "帧率稳定 +40%"]
    },
    {
      title: "空间魔法 - 内存与存储",
      description: "超空间内存让可用运行内存最多增加 3 GB，后台更耐用；超空间存储升级后即省超大空间，磁盘更耐用，告别存储焦虑。",
      icon: "💾",
      tags: ["可用运存 +3GB", "1TB 省 109GB", "512GB 省 51GB", "256GB 省 22GB"]
    },
    {
      title: "鸿蒙星盾安全 - AI 防诈",
      description: "AI 变声检测、AI 境外转打检测、AI 风险网页检测、AI 防剧本诈骗、AI 风险二维码检测，从通话到支付跨应用联动预警；HPIC 个人智能计算系统让云侧 AI 数据处理达到端侧同级安全。",
      icon: "🛡️",
      tags: ["AI 变声检测", "境外转打检测", "防剧本诈骗", "HPIC 个人智能计算"]
    },
    {
      title: "鸿蒙星河互联 - 碰一碰",
      description: "一次可对多台设备碰一碰分享，轻点翻转卡片即可加密传输；游戏安装包秒传队友，创作画布上碰哪贴哪，远程直传不限距离与格式；亲密圈随时查看所爱动态。",
      icon: "🔗",
      tags: ["多人分享", "加密分享", "游戏秒传", "远程直传", "亲密圈"]
    },
    {
      title: "数字关怀与资产继承",
      description: "通话过程支持文字语音互转并叠加 AI 绘声声音修复能力，让言语障碍人士自由表达；数字资产继承可将图库、备忘录等重要数据在实名多重认证后交给指定继承人。",
      icon: "💝",
      tags: ["文本通话", "声音修复", "骑手辅助", "数字资产继承"]
    }
  ];

  const technicalSpecs = [
    { label: "首批公测开启", value: "2026年9月7日" },
    { label: "可用运行内存", value: "最高增加 3 GB" },
    { label: "超空间存储节省", value: "1TB 机型最多省 109 GB" },
    { label: "游戏帧率稳定性", value: "提升 40%" },
    { label: "三年使用流畅度", value: "Mate 60 达 90%" },
    { label: "云侧 AI 安全", value: "HPIC 个人智能计算" }
  ];

  return (
    <Layout
      title={`HarmonyOS 7.0 - ${siteConfig.title}`}
      description="探索HarmonyOS 7.0在空间计算、小艺智能、Agent 化应用、方舟引擎、星盾安全与星河互联方面的全面升级">
      {/* Hero */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 7.0</h1>
          <p className={styles.heroSubtitle}>空间计算，让想象更有空间</p>
          <p className={styles.heroDescription}>
            2026 年 9 月 7 日已开启首批公测计划。HarmonyOS 7.0 带来鸿蒙空间计算、焕新的小艺与 Agent 化系统应用，
            配合超丝滑方舟引擎、星盾 AI 防诈与星河互联，从「好用」走向「懂你」的全场景智能体验。
          </p>
          <div className={styles.heroTags}>
            <span className={styles.heroTag}>首批公测已开启</span>
            <span className={styles.heroTag}>鸿蒙空间计算</span>
            <span className={styles.heroTag}>应用迈进 Agent 时代</span>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* 核心特性 */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>核心新特性</h2>
            <p>空间计算、鸿蒙智能、星盾安全、星河互联与方舟引擎的全面进化</p>
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
            <h2>升级尝鲜</h2>
            <div className={styles.updateGrid}>
              <div className={styles.updateCard}>
                <h3>🚀 升级方式</h3>
                <p>
                  手机 / 平板 / 电脑：进入「设置 → 搜索“软件更新” → 右上角 ⋮ → 升级尝鲜」；
                  手表可通过「我的华为 App → 升级尝鲜」升级，耳机及其他品类陆续推送。
                </p>
              </div>
              <div className={styles.updateCard}>
                <h3>📱 首批升级机型</h3>
                <p>
                  首批公测覆盖 Mate 80 / Pura 90 / nova 16 系列、Mate X 系列、MateBook Fold 非凡大师、MatePad Edge、
                  WATCH Ultimate 2 等机型，完整清单见「支持机型」页面。
                </p>
              </div>
              <div className={styles.updateCard}>
                <h3>📌 温馨提醒</h3>
                <p>
                  目前仅支持中国大陆地区（不含中国香港、澳门、台湾地区）销售的特定机型升级，
                  各机型推送情况请以官方信息或实际体验为准；部分功能需 HOTA 升级支持。
                </p>
              </div>
              <div className={styles.updateCard}>
                <h3>📊 数据说明</h3>
                <p>
                  性能、续航、帧率稳定性与存储节省等数据来源于华为实验室，测试机型为搭载 HarmonyOS 7 首版本的
                  HUAWEI Mate 80 Pro Max，具体体验请以实际为准。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 展望 */}
        <section className={styles.visionSection}>
          <div className={styles.visionContent}>
            <div className={styles.visionIcon}>🌌</div>
            <h2>从「好用」迈向「懂你」的智能体时代</h2>
            <p>
              HarmonyOS 7.0 不只是又一次版本迭代：空间计算重塑了视觉与交互，小艺与系统应用一同迈进 Agent 时代，
              星盾安全与 HPIC 个人智能计算系统把 AI 能力与隐私安全放在同一条底线之上。
              鸿蒙正在成为真正理解用户、主动服务，并且值得信任的全场景智能底座。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
