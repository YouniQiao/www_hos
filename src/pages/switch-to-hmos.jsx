import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './MigrateToHarmonyOS.css';

const MigrateToHarmonyOS = () => {
  const {siteConfig} = useDocusaurusContext();
  
  const migrationBenefits = [
    {
      title: "数据无缝迁移",
      description: "联系人、照片、应用数据一键迁移，无需担心数据丢失",
      icon: "📲"
    },
    {
      title: "熟悉的使用体验",
      description: "类似的操作逻辑和界面设计，降低学习成本",
      icon: "📱"
    },
    {
      title: "应用生态兼容",
      description: "主流应用全面兼容，工作娱乐不受影响",
      icon: "🔄"
    },
    {
      title: "性能全面提升",
      description: "更流畅的系统体验，更长的电池续航",
      icon: "⚡"
    }
  ];

  const migrationSteps = [
    {
      step: "1",
      title: "备份原设备数据",
      description: "使用云服务或本地备份功能，确保重要数据安全",
      tip: "建议使用华为云空间或其他云服务进行备份"
    },
    {
      step: "2",
      title: "获取迁移工具",
      description: "下载并安装'HarmonyOS手机克隆'应用",
      tip: "可在应用市场或华为官网下载此工具"
    },
    {
      step: "3",
      title: "连接设备",
      description: "通过扫码或手动连接，建立新旧设备间的传输通道",
      tip: "确保两台设备处于同一Wi-Fi网络下"
    },
    {
      step: "4",
      title: "选择迁移内容",
      description: "选择需要迁移的联系人、照片、视频、文档等数据",
      tip: "可根据需要选择部分或全部内容进行迁移"
    },
    {
      step: "5",
      title: "开始迁移",
      description: "等待数据传输完成，期间保持设备连接稳定",
      tip: "迁移时间取决于数据量大小，请耐心等待"
    },
    {
      step: "6",
      title: "完成设置",
      description: "按照指引完成新设备的初始设置",
      tip: "建议登录华为账号以同步云备份数据"
    }
  ];

  const faqs = [
    {
      question: "从Android迁移到HarmonyOS，我的应用数据会丢失吗？",
      answer: "大部分主流应用的数据都可以顺利迁移，但建议迁移前确认重要数据已备份。"
    },
    {
      question: "iOS用户迁移到HarmonyOS会遇到什么问题？",
      answer: "iOS系统由于生态封闭性，部分数据迁移可能受限，但联系人、照片和日历等核心数据可以顺利迁移。"
    },
    {
      question: "迁移后需要重新购买应用吗？",
      answer: "大部分免费应用可以直接下载使用，付费应用可能需要重新购买，具体取决于开发者策略。"
    },
    {
      question: "迁移过程需要多长时间？",
      answer: "迁移时间取决于数据量大小，通常10-30分钟可以完成大部分数据的迁移。"
    }
  ];

  return (
    <Layout
      title="迁移至HarmonyOS NEXT"
      description="从Android或iOS轻松迁移到HarmonyOS，享受更智慧的全场景体验">
      <div className="migrate-page">
        {/* 英雄区域 */}
        <section className="migrate-hero-section">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className="migrate-hero-content">
                  <h1 className="migrate-hero-title">轻松迁移至 <span className="gradient-text">HarmonyOS NEXT</span></h1>
                  <p className="migrate-hero-subtitle">从Android或iOS无缝切换，享受更智慧的全场景体验</p>
                  <div className="device-badges">
                    <span className="device-badge android">Android</span>
                    <span className="device-badge ios">iOS</span>
                    <span className="device-badge arrow">→</span>
                    <span className="device-badge harmony">HarmonyOS</span>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="migrate-hero-visual">
                  <div className="migration-devices">
                    <div className="device-source">
                      <div className="device-img android"></div>
                      <div className="device-label">原设备</div>
                    </div>
                    <div className="migration-arrow">
                      <div className="arrow-animation"></div>
                    </div>
                    <div className="device-target">
                      <div className="device-img harmony"></div>
                      <div className="device-label">新设备</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 迁移优势区域 */}
        <section className="benefits-section">
          <div className="container">
            <div className="section-header">
              <h2>为什么选择迁移到HarmonyOS</h2>
              <p>享受更智慧、更流畅的全场景体验</p>
            </div>
            
            <div className="benefits-grid">
              {migrationBenefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon-container">
                    <div className="benefit-icon">{benefit.icon}</div>
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 迁移步骤区域 */}
        <section className="steps-section">
          <div className="container">
            <div className="section-header">
              <h2>迁移步骤指南</h2>
              <p>简单六步，轻松完成数据迁移</p>
            </div>
            
            <div className="steps-grid">
              {migrationSteps.map((step, index) => (
                <div key={index} className="step-card">
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
              ))}
            </div>
          </div>
        </section>

        {/* 常见问题区域 */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>常见问题解答</h2>
              <p>关于迁移至HarmonyOS的常见疑问</p>
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

        {/* 迁移提示区域 */}
        <section className="tips-section">
          <div className="container">
            <div className="tips-content">
              <div className="tips-icon">🎉</div>
              <h2>准备好开始迁移了吗？</h2>
              <p>下载手机克隆应用，立即开始您的HarmonyOS之旅</p>
              <div className="tips-buttons">
                <a href="https://apps.apple.com/cn/app/%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%E5%85%8B%E9%9A%86/id920728033" target="_blank" className="download-button">下载手机克隆(苹果)</a>
                <a href="https://appgallery.huawei.com/app/C10099757" target="_blank" className="download-button">下载手机克隆(安卓)</a>
                
              </div>
              <br/>
              <div className="tips-buttons">
                
                <a href="https://consumer.huawei.com/cn/support/content/zh-cn16046718/" target="_blank" className="guide-button">查看详细指南</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MigrateToHarmonyOS;