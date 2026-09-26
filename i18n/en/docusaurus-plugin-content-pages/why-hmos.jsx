import React, { useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@site/src/pages/WhyHarmonyOS.css';

const WhyHarmonyOS = () => {
  const {siteConfig} = useDocusaurusContext();
  const featuresRef = useRef(null);
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const features = [
    {
      title: "Seamless device collaboration",
      description: "Phones, tablets, PCs, smart screens and other devices connect seamlessly, with content and services flowing freely between them.",
      icon: "🔄"
    },
    {
      title: "Smart scenario experience",
      description: "Intelligently combines device capabilities based on usage scenarios to provide a more natural human-machine interaction experience.",
      icon: "🌟"
    },
    {
      title: "Smooth performance",
      description: "Quicker system response and faster app launches deliver a smoother experience.",
      icon: "⚡"
    },
    {
      title: "Comprehensive privacy protection",
      description: "A multi-layered security architecture from chip to cloud protects personal data and privacy.",
      icon: "🔐"
    },
    {
      title: "Smart life assistant",
      description: "AI-powered all-scenario smart services proactively deliver thoughtful, personalized experiences.",
      icon: "🤖"
    },
    {
      title: "Rich app ecosystem",
      description: "A vast selection of high-quality apps and services meets all your needs for work, entertainment, and daily life.",
      icon: "📱"
    }
  ];

  return (
    <Layout
      title="Why Choose HarmonyOS"
      description="A new-generation intelligent terminal operating system built for the Internet of Everything era.">
      <div className="harmony-page">
        {/* Hero Area */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className="hero-content">
                  <h1 className="hero-title">
                    <span className="hero-title-text">{'Why choose'}</span>
                    <span className="gradient-text">HarmonyOS</span>
                  </h1>
                  <p className="hero-subtitle">{'A new-generation all-scenario smart operating system that redefines the digital life experience.'}</p>
                  
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

        {/* Feature introduction area - add ref for navigation */}
        <section className="features-section" ref={featuresRef}>
          <div className="container">
            <div className="section-header">
              <h2>{'HarmonyOS User Experience Advantages'}</h2>
              <p>{'Explore the brand-new digital life experience brought by the next-generation operating system.'}</p>
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

        {/* Technology comparison area */}
        <section className="comparison-section">
          <div className="container">
            <div className="section-header">
              <h2>{'Differences from Traditional Operating Systems'}</h2>
              <p>{'Experience the innovation of the next-generation operating system.'}</p>
            </div>
            
            <div className="comparison-content">
              <div className="comparison-item">
                <h4>{'Traditional systems'}</h4>
                <ul>
                  <li>{'Devices operate in isolation'}</li>
                  <li>{'Fragmented app experience'}</li>
                  <li>{'Manual configuration and connection'}</li>
                  <li>{'Fixed single function'}</li>
                </ul>
              </div>
              
              <div className="vs-badge">VS</div>
              
              <div className="comparison-item harmony">
                <h4>HarmonyOS</h4>
                <ul>
                  <li>{'Seamless cross-device collaboration'}</li>
                  <li>{'Services flow freely'}</li>
                  <li>{'Smart automatic connection'}</li>
                  <li>{'Scenario-adaptive experience'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VMall redirect area */}
        <section className="vmall-section">
          <div className="container">
            <div className="vmall-content">
              <div className="vmall-text">
                <h2>{'Experience HarmonyOS'}</h2>
                <p>{'Visit VMall to purchase HUAWEI devices pre-installed with HarmonyOS and start an all-scenario smart life.'}</p>
                <a href="https://www.vmall.com" className="vmall-button" target="_blank" rel="noopener noreferrer">
                  {'Visit VMall'}
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