import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './HarmonyOS60.css';

const HarmonyOS60 = () => {
  const {siteConfig} = useDocusaurusContext();
  
  // 主要特性介绍
  const mainFeatures = [
    {
      title: "全场景AI融合",
      description: "AI深度融入系统各个层面，提供更智能的个性化体验",
      icon: "🧠",
      details: [
        "情境感知AI，预判用户需求并主动提供服务",
        "跨设备AI协同，智能分配计算任务到最佳设备",
        "隐私保护AI计算，敏感数据本地处理不上云",
        "自适应界面，根据使用场景动态调整UI布局"
      ]
    },
    {
      title: "超级终端2.0",
      description: "设备协同能力全面升级，实现真正的无缝跨设备体验",
      icon: "🔗",
      details: [
        "设备发现速度提升60%，连接稳定性大幅提高",
        "算力智能调配，复杂任务自动分配至最佳设备",
        "跨设备数据同步延迟降低至毫秒级",
        "支持最多12台设备同时协同工作"
      ]
    },
    {
      title: "次世代交互体验",
      description: "引入空间计算与手势交互，重新定义人机交互方式",
      icon: "👆",
      details: [
        "空间手势识别，无需接触设备即可进行操作",
        "眼动追踪技术，实现注视即选择的新交互范式",
        "3D界面渲染，为AR/VR设备提供原生支持",
        "多模态输入融合，语音、手势、触控无缝切换"
      ]
    },
    {
      title: "极致性能优化",
      description: "系统底层全面重构，实现前所未有的性能表现",
      icon: "⚡",
      details: [
        "应用启动速度再提升40%，达到瞬时启动",
        "内存使用效率优化50%，多任务切换更流畅",
        "电池续航提升30%，智能功耗管理",
        "游戏渲染性能提升2倍，支持8K分辨率渲染"
      ]
    }
  ];

  // 性能优化特性
  const performanceFeatures = [
    {
      title: "AI响应速度",
      value: "0.2s",
      description: "AI指令平均响应时间"
    },
    {
      title: "设备连接数",
      value: "12+",
      description: "同时连接的设备数量"
    },
    {
      title: "渲染帧率",
      value: "120fps",
      description: "系统UI最高渲染帧率"
    },
    {
      title: "能效提升",
      value: "30%",
      description: "整体能效比提升"
    }
  ];

  // 开发者特性
  const developerFeatures = [
    {
      title: "统一开发框架",
      description: "一次开发，多端部署，全场景覆盖",
      icon: "💻"
    },
    {
      title: "AI原生开发",
      description: "内置AI能力，轻松集成智能功能",
      icon: "🤖"
    },
    {
      title: "分布式调试",
      description: "跨设备协同开发与调试工具",
      icon: "🐛"
    },
    {
      title: "性能分析器",
      description: "全方位性能监控与优化工具",
      icon: "📊"
    }
  ];

  return (
    <Layout
      title="HarmonyOS 6.0"
      description="探索HarmonyOS NEXT 6.0版本的革命性特性与创新">
      <div className="harmonyos60-page">
        {/* 英雄区域 */}
        <section className="harmonyos60-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">HarmonyOS 6.0</h1>
              <p className="hero-subtitle">下一代操作系统，重新定义数字生活体验</p>
              <div className="version-badge">NEXT版本</div>
            </div>
          </div>
        </section>

        {/* 特性概览区域 */}
        <section className="overview-section">
          <div className="container">
            <div className="section-header">
              <h2>革命性特性概览</h2>
              <p>HarmonyOS 6.0 带来突破性创新，开启操作系统新纪元</p>
            </div>
            
            <div className="overview-visual">
              <div className="visual-placeholder">
                <div className="placeholder-text">HarmonyOS 6.0 界面概览图</div>
              </div>
            </div>
            
            <div className="performance-grid">
              {performanceFeatures.map((feature, index) => (
                <div key={index} className="performance-card">
                  <div className="performance-value">{feature.value}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 主要特性区域 */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>核心特性介绍</h2>
              <p>探索HarmonyOS 6.0的革命性功能创新</p>
            </div>
            
            <div className="main-features">
              {mainFeatures.map((feature, index) => (
                <div key={index} className={`main-feature ${index % 2 === 0 ? 'left-layout' : 'right-layout'}`}>
                  <div className="feature-content">
                    <div className="feature-header">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                    
                    <div className="feature-details">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="detail-item">
                          <span className="detail-check">✓</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="feature-visual">
                    <div className="visual-placeholder large">
                      <div className="placeholder-text">{feature.title} 示意图</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 开发者特性区域 */}
        <section className="developer-section">
          <div className="container">
            <div className="section-header">
              <h2>开发者新特性</h2>
              <p>为开发者提供的强大工具与框架</p>
            </div>
            
            <div className="developer-features">
              {developerFeatures.map((feature, index) => (
                <div key={index} className="developer-card">
                  <div className="dev-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="developer-visual">
              <div className="visual-placeholder">
                <div className="placeholder-text">HarmonyOS 6.0 开发工具界面</div>
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
      </div>
    </Layout>
  );
};

export default HarmonyOS60;