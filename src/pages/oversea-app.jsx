import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './OverseasApps.css';

const OverseasApps = () => {
  const {siteConfig} = useDocusaurusContext();
  
  // 出境易特性介绍
  const features = [
    {
      title: "海外应用兼容",
      description: "通过出境易技术，在HarmonyOS NEXT上运行流行的海外应用",
      icon: "🌍"
    },
    {
      title: "GMS服务支持",
      description: "提供Google移动服务支持，让依赖GMS的应用正常运行",
      icon: "🔌"
    },
    {
      title: "安全隔离环境",
      description: "应用在安全容器中运行，不影响HarmonyOS系统安全性",
      icon: "🛡️"
    },
    {
      title: "简便易用",
      description: "一键安装使用，无需复杂配置即可访问海外应用",
      icon: "🎯"
    }
  ];

  // 使用步骤
  const usageSteps = [
    {
      step: "1",
      title: "安装出境易",
      description: "在华为应用市场中搜索并安装'出境易'应用",
      tip: "确保设备已升级到HarmonyOS NEXT最新版本",
      url:"/img/oversea2.png"
    },
    {
      step: "2",
      title: "启动出境易",
      description: "打开应用并按照指引完成初始设置",
      tip: "首次使用需要下载必要的资源包，请保持网络连接",
      url:"/img/oversea3.png"
    },
    {
      step: "3",
      title: "探索应用库",
      description: "浏览出境易内的海外应用商店，选择需要的应用",
      tip: "应用库包含社交媒体、工具、娱乐等各类海外应用",
      url:"/img/oversea4.png"
    },
    {
      step: "4",
      title: "安装与使用",
      description: "在出境易内直接安装和运行海外应用",
      tip: "安装的应用会出现在出境易界面内，不会与原生应用混合",
      url:"/img/oversea5.png"
    }
  ];

  // 支持的应用类别
  const supportedApps = [
    {
      category: "社交媒体",
      apps: ["WhatsApp", "Instagram", "Facebook", "Twitter", "Snapchat"]
    },
    {
      category: "视频娱乐",
      apps: ["YouTube", "Netflix", "Disney+", "HBO Max", "Twitch"]
    },
    {
      category: "工具效率",
      apps: ["Chrome", "Gmail", "Google Maps", "Google Drive", "Dropbox"]
    },
    {
      category: "音乐音频",
      apps: ["Spotify", "Pandora", "SoundCloud", "Audible", "Podcasts"]
    }
  ];

  // 常见问题
  const faqs = [
    {
      question: "出境易是什么？",
      answer: "出境易是HarmonyOS NEXT上的兼容层解决方案，允许用户在纯血鸿蒙系统上运行海外Android应用，特别是那些依赖Google移动服务的应用:cite[7]。"
    },
    {
      question: "使用出境易需要额外付费吗？",
      answer: "出境易本身是免费应用，但部分海外应用可能包含内购或订阅服务，费用由应用开发者决定。"
    },
    {
      question: "出境易会影响设备性能吗？",
      answer: "出境易运行在容器环境中，会占用一定的系统资源。普通应用运行流畅，但高图形要求的游戏可能会有性能影响:cite[1]:cite[6]。"
    },
    {
      question: "出境易是否安全？",
      answer: "出境易在安全容器中运行海外应用，与HarmonyOS核心系统隔离，不会影响系统安全性:cite[7]。"
    },
    {
      question: "所有海外应用都能在出境易中运行吗？",
      answer: "大部分主流海外应用都支持，但并非所有Android应用都能完美运行。出境易采用白名单机制，确保应用兼容性和安全性:cite[7]。"
    }
  ];

  return (
    <Layout
      title="在HarmonyOS NEXT上使用海外应用"
      description="了解如何通过出境易在HarmonyOS NEXT上使用海外流行应用">
      <div className="overseas-apps-page">
        {/* 英雄区域 */}
        <section className="overseas-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">在HarmonyOS NEXT上使用海外应用</h1>
              <p className="hero-subtitle">通过出境易技术，畅享全球流行应用和服务</p>
            </div>
          </div>
        </section>

        {/* 特性介绍区域 */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>出境易特性介绍</h2>
              <p>HarmonyOS NEXT上的海外应用兼容解决方案</p>
            </div>
            
            {/* 出境易截图区域 */}
            <div className="chujingyi-screenshot">
              <img src="/img/oversea2.png" />
             
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-container">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 使用指南区域 */}
        <section className="usage-section">
          <div className="container">
            <div className="section-header">
              <h2>使用指南</h2>
              <p>在HarmonyOS NEXT上使用海外应用的步骤</p>
            </div>
            
            <div className="vertical-steps">
              {usageSteps.map((step, index) => (
                <div key={index} className="vertical-step">
                  <div className="step-content">
                    <div className="step-header">
                      <div className="step-number">{step.step}</div>
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.description}</p>
                    <div className="step-tip">
                      <span className="tip-icon">💡</span>
                      <span className="tip-text">{step.tip}</span>
                    </div>
                  </div>
                  <div className="step-screenshot">
                    <div className="screenshot-placeholder small">
                      <img src={step.url} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 支持的应用区域 */}
        <section className="apps-section">
          <div className="container">
            <div className="section-header">
              <h2>支持的应用类别</h2>
              <p>出境易支持的主流海外应用类型</p>
            </div>
            
            <div className="apps-grid">
              {supportedApps.map((category, index) => (
                <div key={index} className="app-category">
                  <h3>{category.category}</h3>
                  <div className="app-list">
                    {category.apps.map((app, appIndex) => (
                      <span key={appIndex} className="app-tag">{app}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 常见问题区域 */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>常见问题解答</h2>
              <p>关于在HarmonyOS上使用海外应用的常见疑问</p>
            </div>
            
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 提示区域 */}
        <section className="tips-section">
          <div className="container">
            <div className="tips-content">
              <div className="tips-icon">ℹ️</div>
              <h2>重要提示</h2>
              <p>出境易是华为为帮助用户访问海外应用而提供的兼容性解决方案。建议开发者尽快开发HarmonyOS原生应用，以获得最佳性能和用户体验。长期来看，华为将持续完善鸿蒙生态，减少对兼容方案的依赖。</p>
              <div className="tips-buttons">
                <a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide" target='_blank' className="dev-button">开发者适配指南</a>
                <a href="https://developer.huawei.com/consumer/cn/" target='_blank' className="learn-button">了解更多</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OverseasApps;