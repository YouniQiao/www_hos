import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "@site/src/pages/OverseasApps.css";

const OverseasApps = () => {
  const { siteConfig } = useDocusaurusContext();

  // EasyAbroad feature overview
  const features = [
  {
    title: "Overseas app compatibility",
    description: "Run popular overseas apps on HarmonyOS with EasyAbroad technology",
    icon: "🌍"
  },
  {
    title: "GMS support",
    description: "Provides Google Mobile Services support so apps that depend on GMS run normally",
    icon: "🔌"
  },
  {
    title: "Secure isolated environment",
    description: "Apps run in a secure container without affecting HarmonyOS system security",
    icon: "🛡️"
  },
  {
    title: "Easy to Use",
    description: "One-tap install and use, access overseas apps without complex configuration",
    icon: "🎯"
  }];


  // Usage Steps
  const usageSteps = [
  {
    step: "1",
    title: "Install EasyAbroad",
    description: "Search for and install the 'EasyAbroad' app in AppGallery",
    tip: "Make sure your device is upgraded to the latest HarmonyOS version",
    url: "/img/oversea2.png"
  },
  {
    step: "2",
    title: "Launch EasyAbroad",
    description: "Open the app and follow the instructions to complete the initial setup",
    tip: "First-time use requires downloading necessary resource packs, so keep your network connection active",
    url: "/img/oversea3.png"
  },
  {
    step: "3",
    title: "Explore the app library",
    description: "Browse the overseas app store in EasyAbroad and select the apps you need",
    tip: "The app library includes overseas apps across social media, tools, entertainment, and more",
    url: "/img/oversea4.png"
  },
  {
    step: "4",
    title: "Installation and usage",
    description: "Install and run overseas apps directly in EasyAbroad",
    tip: "Installed apps appear in the EasyAbroad interface and are not mixed with native apps",
    url: "/img/oversea5.png"
  }];


  // Supported app categories
  const supportedApps = [
  {
    category: "Social Media",
    apps: ["WhatsApp", "Instagram", "Facebook", "Twitter", "Snapchat"]
  },
  {
    category: "Video Entertainment",
    apps: ["YouTube", "Netflix", "Disney+", "HBO Max", "Twitch"]
  },
  {
    category: "Tools & Efficiency",
    apps: ["Chrome", "Gmail", "Google Maps", "Google Drive", "Dropbox"]
  },
  {
    category: "Music & audio",
    apps: ["Spotify", "Pandora", "SoundCloud", "Audible", "Podcasts"]
  }];


  // FAQ
  const faqs = [
  {
    question: "What is EasyAbroad?",
    answer: "EasyAbroad is a compatibility layer solution on HarmonyOS that lets users run overseas Android apps on the pure HarmonyOS system, especially those that rely on Google Mobile Services:cite[7]."
  },
  {
    question: "Does EasyAbroad require additional payment?",
    answer: "EasyAbroad itself is free, but some overseas apps may include in-app purchases or subscriptions, with pricing set by the app developers."
  },
  {
    question: "Does EasyAbroad affect device performance?",
    answer: "EasyAbroad runs in a container environment and consumes some system resources. Regular apps run smoothly, but graphics-intensive games may experience performance impact:cite[1]:cite[6]."
  },
  {
    question: "Is EasyAbroad safe?",
    answer: "EasyAbroad runs overseas apps in a secure container, isolated from the HarmonyOS core system, so it does not affect system security:cite[7]."
  },
  {
    question: "Can all overseas apps run in EasyAbroad?",
    answer: "Most mainstream overseas apps are supported, but not all Android apps run perfectly. EasyAbroad uses a whitelist mechanism to ensure app compatibility and security:cite[7]."
  }];


  return (
    <Layout
      title="Use overseas apps on HarmonyOS"
      description="Learn how to use popular overseas apps on HarmonyOS with EasyAbroad">
      <div className="overseas-apps-page">
        {/* Hero Area */}
        <section className="overseas-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Use overseas apps on HarmonyOS</h1>
              <p className="hero-subtitle">Enjoy popular global apps and services with EasyAbroad technology</p>
            </div>
          </div>
        </section>

        {/* Feature overview section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>EasyAbroad feature overview</h2>
              <p>Overseas app compatibility solution on HarmonyOS</p>
            </div>

            {/* EasyAbroad screenshot area */}
            <div className="easy-abroad-screenshot">
              <img src="/img/oversea2.png" />

            </div>

            <div className="features-grid">
              {features.map((feature, index) =>
              <div key={index} className="feature-card">
                  <div className="feature-icon-container">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Usage guide section */}
        <section className="usage-section">
          <div className="container">
            <div className="section-header">
              <h2>User Guide</h2>
              <p>Steps to use overseas apps on HarmonyOS</p>
            </div>

            <div className="vertical-steps">
              {usageSteps.map((step, index) =>
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
              )}
            </div>
          </div>
        </section>

        {/* Supported app regions */}
        <section className="apps-section">
          <div className="container">
            <div className="section-header">
              <h2>Supported app categories</h2>
              <p>Mainstream overseas app types supported by EasyAbroad</p>
            </div>

            <div className="apps-grid">
              {supportedApps.map((category, index) =>
              <div key={index} className="app-category">
                  <h3>{category.category}</h3>
                  <div className="app-list">
                    {category.apps.map((app, appIndex) =>
                  <span key={appIndex} className="app-tag">{app}</span>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>FAQ</h2>
              <p>Common questions about using overseas apps on HarmonyOS</p>
            </div>

            <div className="faq-grid">
              {faqs.map((faq, index) =>
              <div key={index} className="faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Tips Area */}
        <section className="tips-section">
          <div className="container">
            <div className="tips-content">
              <div className="tips-icon">ℹ️</div>
              <h2>Important notice</h2>
              <p>EasyAbroad is a compatibility solution provided by HUAWEI to help users access overseas apps. Developers are advised to develop HarmonyOS native apps as soon as possible for the best performance and user experience. In the long run, HUAWEI will continue to improve the HarmonyOS ecosystem and reduce reliance on compatibility solutions.</p>
              <div className="tips-buttons">
                <a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide" target='_blank' className="dev-button">Developer adaptation guide</a>
                <a href="https://developer.huawei.com/consumer/cn/" target='_blank' className="learn-button">Learn more</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>);

};

export default OverseasApps;
