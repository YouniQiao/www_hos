import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@site/src/pages/HarmonyOS51.css';

const HarmonyOS51 = () => {
  const {siteConfig} = useDocusaurusContext();
  
  // Key Features Introduction
  const mainFeatures = [
    {
      title: "Live Window fully upgraded",
      description: "The Live Window is now centered and dynamically integrated with the camera punch-hole, keeping key information at the visual focus. Food delivery, ride-hailing, and flight info are clear at a glance.",
      icon: "🔔",
      details: [
        "The capsule has moved from the edge of the status bar to the center at the top of the screen.",
        "Doubled text information on both sides, with key info clearly presented.",
        "Supports simultaneous display and interaction of multiple tasks",
        "Covers high-frequency scenarios such as navigation, travel, and life services."
      ],
      url:"/img/hmos512.png"
    },
    {
      title: "AI image enhancement",
      description: "AI photo editing and Magic Move let everyday users easily create professional-grade images.",
      icon: "🖼️",
      details: [
        "Magic Move: freely drag, scale, or copy any element in a photo.",
        "AI portrait retouching: intelligently optimizes lighting layers, skin texture, and composition.",
        "Precisely separate subject from background and easily recompose the image",
        "Batch process 100 photos in just 1 minute"
      ],
      url:"/img/hmos513.png"
    },
    {
      title: "Celia evolution",
      description: "Lifelike conversational interaction with natural interruption support for a smarter assistant experience.",
      icon: "🤖",
      details: [
        "Breathing visual effects and human-like voice for a more natural interaction experience.",
        "Supports the Creative Studio agent to generate artworks in multiple styles.",
        "The Celia Photo Studio agent offers creative portrait generation services.",
        "The deep problem-solving agent supports photo-based problem solving and homework grading."
      ],
      url:"/img/hmos514.png"
    },
    {
      title: "Cross-device collaboration",
      description: "Seamless multi-device collaboration makes the HUAWEI ecosystem experience even more complete.",
      icon: "🔄",
      details: [
        "One-tap sharing between phone and MatePad via NFC transfers a 1GB video in just 8 seconds.",
        "Use phone apps directly on MateBook in cross-screen office mode.",
        "Task Handoff supports cloud syncing of web browsing progress.",
        "Remote control from the watch — shake your watch to trigger the phone's shutter."
      ],
      url:"/img/hmos515.png"
    }
  ];

  // Performance Optimization Features
  const performanceFeatures = [
    {
      title: "System smoothness",
      value: "37%",
      description: "Improved frame rate stability in multitasking scenarios"
    },
    {
      title: "App launch speed",
      value: "0.8s",
      description: "App launch time reduced to under 0.8 seconds"
    },
    {
      title: "File transfer",
      value: "40%",
      description: "Improved file transfer efficiency in office scenarios"
    },
    {
      title: "Gaming experience",
      value: "Optimization",
      description: "Improved game engine stability and smoothness"
    }
  ];

  // Developer Features
  const developerFeatures = [
    {
      title: "ArkTS enhancements",
      description: "A TypeScript superset language offering a better type system and development experience.",
      icon: "📝"
    },
    {
      title: "Ark Compiler",
      description: "AOT compilation optimization improves app performance and launch speed.",
      icon: "⚙️"
    },
    {
      title: "DevEco Studio 5.1",
      description: "The integrated development environment has been fully upgraded to support more efficient development workflows.",
      icon: "💻"
    },
    {
      title: "Distributed debugging",
      description: "Cross-device collaborative development and debugging tools",
      icon: "🐛"
    }
  ];

  return (
    <Layout
      title="HarmonyOS 5.1"
      description="Explore the new features and improvements in HarmonyOS NEXT 5.1.">
      <div className="harmonyos51-page">
        {/* Hero Area */}
        <section className="harmonyos51-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">HarmonyOS 5.1</h1>
              <p className="hero-subtitle">{'A new experience that\'s smoother, smarter, and more connected.'}</p>
              <div className="version-badge">{'NEXT version'}</div>
            </div>
          </div>
        </section>

        {/* Features Overview Area */}
        <section className="overview-section">
          <div className="container">
            <div className="section-header">
              <h2>{'All-New Features Overview'}</h2>
              <p>{'HarmonyOS 5.1 brings multiple revolutionary updates that comprehensively enhance the user experience.'}</p>
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

        {/* Key Features Area */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>{'Key Features Introduction'}</h2>
              <p>{'Explore the revolutionary feature updates in HarmonyOS 5.1.'}</p>
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

        {/* Developer Features Area */}
        <section className="developer-section">
          <div className="container">
            <div className="section-header">
              <h2>{'New Developer Features'}</h2>
              <p>{'Powerful tools and frameworks for developers'}</p>
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

        {/* Future Outlook Area */}
        <section className="future-section">
          <div className="container">
            <div className="future-content">
              <div className="future-icon">🚀</div>
              <h2>{'Opening a new chapter in smart experiences'}</h2>
              <p>{'HarmonyOS 5.1 delivers major breakthroughs in system fluidity, AI capabilities, and cross-device collaboration, providing users with a more seamless and intelligent digital life experience. It also offers developers more powerful tools and frameworks to help build a richer HarmonyOS ecosystem of apps.'}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HarmonyOS51;