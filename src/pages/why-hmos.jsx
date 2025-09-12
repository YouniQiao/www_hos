import React, { useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './WhyHarmonyOS.css';

const WhyHarmonyOS = () => {
  const {siteConfig} = useDocusaurusContext();
  const featuresRef = useRef(null);
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const features = [
    {
      title: "无缝设备协同",
      description: "手机、平板、电脑、智能屏等设备无缝连接，内容与服务自由流转",
      icon: "🔄"
    },
    {
      title: "智能场景体验",
      description: "根据使用场景智能组合设备能力，提供更自然的人机交互体验",
      icon: "🌟"
    },
    {
      title: "流畅性能表现",
      description: "系统响应更快，应用启动速度提升，带来更顺滑的操作体验",
      icon: "⚡"
    },
    {
      title: "全方位隐私保护",
      description: "从芯片到云端的多层级安全架构，保障个人数据与隐私安全",
      icon: "🔐"
    },
    {
      title: "智慧生活助手",
      description: "AI赋能的全场景智慧服务，主动提供贴心的个性化体验",
      icon: "🤖"
    },
    {
      title: "丰富应用生态",
      description: "海量优质应用与服务，满足工作、娱乐、生活全方位需求",
      icon: "📱"
    }
  ];

  return (
    <Layout
      title="为什么选择HarmonyOS NEXT"
      description="新一代智能终端操作系统，为万物互联时代打造">
      <div className="harmony-page">
        {/* 英雄区域 */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className="hero-content">
                  <h1 className="hero-title">
                    <span className="hero-title-text">为什么选择</span>
                    <span className="gradient-text">HarmonyOS NEXT</span>
                  </h1>
                  <p className="hero-subtitle">新一代全场景智慧操作系统，重新定义数字生活体验</p>
                  <button className="cta-button" onClick={scrollToFeatures}>探索特性</button>
                </div>
              </div>
              <div className="col col--6">
                <div className="hero-visual">
                  <div className="floating-devices">
                    <div className="device phone">
                      <div className="screen"></div>
                    </div>
                    <div className="tablet device">
                      <div className="screen"></div>
                    </div>
                    <div className="laptop device">
                      <div className="screen"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特性介绍区域 - 添加ref用于跳转 */}
        <section className="features-section" ref={featuresRef}>
          <div className="container">
            <div className="section-header">
              <h2>HarmonyOS NEXT 用户体验优势</h2>
              <p>探索下一代操作系统带来的全新数字生活体验</p>
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

        {/* 技术对比区域 */}
        <section className="comparison-section">
          <div className="container">
            <div className="section-header">
              <h2>与传统操作系统的区别</h2>
              <p>体验下一代操作系统的革新</p>
            </div>
            
            <div className="comparison-content">
              <div className="comparison-item">
                <h4>传统系统</h4>
                <ul>
                  <li>设备间孤立运行</li>
                  <li>应用体验割裂</li>
                  <li>手动配置连接</li>
                  <li>功能单一固定</li>
                </ul>
              </div>
              
              <div className="vs-badge">VS</div>
              
              <div className="comparison-item harmony">
                <h4>HarmonyOS NEXT</h4>
                <ul>
                  <li>跨设备无缝协同</li>
                  <li>服务自由流转</li>
                  <li>智能自动连接</li>
                  <li>场景自适应体验</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VMall商城跳转区域 */}
        <section className="vmall-section">
          <div className="container">
            <div className="vmall-content">
              <div className="vmall-text">
                <h2>体验 HarmonyOS NEXT</h2>
                <p>前往VMall商城，选购预装HarmonyOS NEXT的华为设备，开启全场景智慧生活</p>
                <a href="https://www.vmall.com" className="vmall-button" target="_blank" rel="noopener noreferrer">
                  前往VMall商城
                </a>
              </div>
              <div className="vmall-visual">
                <div className="vmall-device">
                  <div className="device-screen"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhyHarmonyOS;