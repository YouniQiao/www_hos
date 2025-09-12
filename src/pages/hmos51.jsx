import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './HarmonyOS51.css';

const HarmonyOS51 = () => {
  const {siteConfig} = useDocusaurusContext();
  
  // 主要特性介绍
  const mainFeatures = [
    {
      title: "实况窗全新升级",
      description: "实况窗居中展示，与摄像头挖孔灵动结合，关键信息居于视觉焦点，外卖、打车、航班信息一目了然",
      icon: "🔔",
      details: [
        "胶囊形态从状态栏边缘移至屏幕正上方居中位置",
        "左右文本信息量倍增，关键信息清晰呈现",
        "支持多任务同时展示与交互",
        "覆盖导航、出行、生活服务等高频场景"
      ],
      url:"/img/hmos512.png"
    },
    {
      title: "AI影像增强",
      description: "AI修图与魔法移图功能，让普通用户也能轻松创作专业级影像作品",
      icon: "🖼️",
      details: [
        "魔法移图：自由拖动、缩放或复制照片内任意元素",
        "AI人像精修：智能优化光影层次、肤色质感及构图比例",
        "精准分离主体与背景，轻松重构画面",
        "批量处理100张照片仅需1分钟"
      ],
      url:"/img/hmos513.png"
    },
    {
      title: "智能小艺进化",
      description: "真人感对话交互，支持自然打断插话，提供更智能的助手体验",
      icon: "🤖",
      details: [
        "呼吸感视效与拟人音色，更自然的交互体验",
        "支持创意画室智能体，生成多种风格画作",
        "小艺照相馆智能体提供创意写真生成服务",
        "深度解题智能体支持拍照解题与作业批改"
      ],
      url:"/img/hmos514.png"
    },
    {
      title: "跨设备协同",
      description: "多设备无缝协作，华为生态体验更加完善",
      icon: "🔄",
      details: [
        "手机与MatePad通过NFC一碰即传，1GB视频传输仅需8秒",
        "跨屏办公模式下在MateBook上直接操作手机应用",
        "任务接力功能支持网页浏览进度云端同步",
        "手表远程操控，摇动手表即可触发手机快门"
      ],
      url:"/img/hmos515.png"
    }
  ];

  // 性能优化特性
  const performanceFeatures = [
    {
      title: "系统流畅度",
      value: "37%",
      description: "多任务处理场景下帧率稳定性提升"
    },
    {
      title: "应用启动速度",
      value: "0.8s",
      description: "应用启动速度缩短至0.8秒以内"
    },
    {
      title: "文件传输",
      value: "40%",
      description: "办公场景文件传输效率提升"
    },
    {
      title: "游戏体验",
      value: "优化",
      description: "游戏引擎的稳定性和流畅性提升"
    }
  ];

  // 开发者特性
  const developerFeatures = [
    {
      title: "ArkTS增强",
      description: "TypeScript超集语言，提供更好的类型系统和开发体验",
      icon: "📝"
    },
    {
      title: "方舟编译器",
      description: "AOT编译优化，提升应用性能和启动速度",
      icon: "⚙️"
    },
    {
      title: "DevEco 4.0",
      description: "集成开发环境全面升级，支持更高效的开发流程",
      icon: "💻"
    },
    {
      title: "分布式调试",
      description: "跨设备协同开发与调试工具",
      icon: "🐛"
    }
  ];

  return (
    <Layout
      title="HarmonyOS 5.1"
      description="探索HarmonyOS NEXT 5.1版本的全新特性与改进">
      <div className="harmonyos51-page">
        {/* 英雄区域 */}
        <section className="harmonyos51-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">HarmonyOS 5.1</h1>
              <p className="hero-subtitle">更流畅、更智能、更互联的全新体验</p>
              <div className="version-badge">NEXT版本</div>
            </div>
          </div>
        </section>

        {/* 特性概览区域 */}
        <section className="overview-section">
          <div className="container">
            <div className="section-header">
              <h2>全新特性概览</h2>
              <p>HarmonyOS 5.1 带来了多项革命性更新，全面提升用户体验</p>
            </div>
            
            <div className="overview-visual">
               <img src="/img/hmos511.jpg" />
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
              <h2>主要特性介绍</h2>
              <p>探索HarmonyOS 5.1的革命性功能更新</p>
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
                      <img src={feature.url} />
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
              <img src="/img/hmos516.png" />
              
            </div>
          </div>
        </section>

        {/* 未来展望区域 */}
        <section className="future-section">
          <div className="container">
            <div className="future-content">
              <div className="future-icon">🚀</div>
              <h2>开启智能体验新篇章</h2>
              <p>HarmonyOS 5.1 在系统流畅性、AI能力和跨设备协同方面实现了重大突破，为用户提供更加无缝、智能的数字生活体验。同时，为开发者提供了更强大的工具和框架，助力构建更丰富的鸿蒙生态应用。</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HarmonyOS51;