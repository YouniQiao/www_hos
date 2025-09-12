import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './UsingAndroidApps.css';

const UsingAndroidApps = () => {
  const {siteConfig} = useDocusaurusContext();
  
  // 卓易通特性介绍
  const features = [
    {
      title: "应用兼容性",
      description: "通过卓易通技术，HarmonyOS NEXT可以兼容运行部分Android应用",
      icon: "🔄"
    },
    {
      title: "无缝体验",
      description: "Android应用与HarmonyOS原生应用协同工作，提供一致的用户体验",
      icon: "📱"
    },
    {
      title: "性能优化",
      description: "针对Android应用进行性能优化，确保流畅运行",
      icon: "⚡"
    },
    {
      title: "安全沙箱",
      description: "Android应用在安全环境中运行，保障系统安全",
      icon: "🔒"
    }
  ];

  // 使用步骤
  const usageSteps = [
    {
      step: "1",
      title: "安装卓易通环境",
      description: "从应用市场安装卓易通后，首次使用时会自动安装卓易通运行环境",
      tip: "确保设备有足够的存储空间（约2-3GB）",
      url:"/img/android2.jpg"
    },
    {
      step: "2",
      title: "获取Android应用",
      description: "通过华为应用市场或卓易通内市场或自行获取Android应用",
      tip: "建议优先选择华为应用市场中的已验证应用",
      url:"/img/android1.jpg"
    },
    {
      step: "3",
      title: "安装与运行",
      description: "像安装普通应用一样安装Android应用，系统会自动处理兼容性",
      tip: "首次运行Android应用可能需要稍长的加载时间",
      url:"/img/android3.jpg"
    },
    {
      step: "4",
      title: "日常使用",
      description: "Android应用会与HarmonyOS应用一起出现在应用列表中",
      tip: "可以像使用原生应用一样使用Android应用",
      url:"/img/android4.jpg"
    }
  ];

  // 常见问题
  const faqs = [
    {
      question: "卓易通是什么？",
      answer: "卓易通是HarmonyOS NEXT中的兼容层技术，允许在HarmonyOS上运行部分Android应用，为用户提供过渡期的应用兼容性支持。"
    },
    {
      question: "所有Android应用都能在HarmonyOS上运行吗？",
      answer: "不是所有Android应用都能完美运行。华为通过卓易通技术提供了对大部分常用Android应用的兼容性支持，但某些应用可能存在功能限制或性能问题。"
    },
    {
      question: "使用Android应用会影响系统安全性吗？",
      answer: "Android应用在卓易通的安全沙箱环境中运行，与HarmonyOS核心系统隔离，不会影响系统整体安全性。"
    },
    {
      question: "卓易通是永久性的解决方案吗？",
      answer: "卓易通是过渡方案，旨在帮助用户从Android生态平滑迁移到HarmonyOS生态。长期来看，建议开发者开发HarmonyOS原生应用。"
    }
  ];

  return (
    <Layout
      title="在HarmonyOS NEXT上使用Android应用"
      description="了解如何在HarmonyOS NEXT上通过卓易通技术使用Android应用">
      <div className="android-apps-page">
        {/* 英雄区域 */}
        <section className="android-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">在HarmonyOS NEXT上使用Android应用</h1>
              <p className="hero-subtitle">通过卓易通技术，在HarmonyOS上使用您熟悉的Android应用</p>
            </div>
          </div>
        </section>

        {/* 特性介绍区域 */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>卓易通特性介绍</h2>
              <p>HarmonyOS NEXT上的Android应用兼容解决方案</p>
            </div>
            
            {/* 卓易通截图区域 */}
            <div className="zhuoyitong-screenshot">
              <img src="/img/android1.jpg" />
             
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
              <p>在HarmonyOS NEXT上使用Android应用的步骤</p>
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

        {/* 常见问题区域 */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>常见问题解答</h2>
              <p>关于在HarmonyOS上使用Android应用的常见疑问</p>
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
              <p>卓易通是华为为帮助用户平滑过渡到HarmonyOS生态而提供的兼容性解决方案。建议开发者尽快适配HarmonyOS原生应用，以获得最佳性能和用户体验。</p>
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

export default UsingAndroidApps;