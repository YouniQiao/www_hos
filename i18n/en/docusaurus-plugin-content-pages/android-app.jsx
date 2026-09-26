import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "@site/src/pages/UsingAndroidApps.css";

const UsingAndroidApps = () => {
  const { siteConfig } = useDocusaurusContext();

  // DroiTong Features Overview
  const features = [
  {
    title: "App Compatibility",
    description: "With DroiTong technology, HarmonyOS can run some Android apps with compatibility.",
    icon: "🔄"
  },
  {
    title: "Seamless Experience",
    description: "Android apps work alongside HarmonyOS native apps to deliver a consistent user experience.",
    icon: "📱"
  },
  {
    title: "Performance Optimization",
    description: "Performance optimization for Android apps ensures smooth operation.",
    icon: "⚡"
  },
  {
    title: "Secure Sandbox",
    description: "Android apps run in a secure environment, keeping the system safe.",
    icon: "🔒"
  }];


  // Steps
  const usageSteps = [
  {
    step: "1",
    title: "Install the DroiTong Environment",
    description: "After installing DroiTong from AppGallery, the DroiTong runtime environment is installed automatically on first use.",
    tip: "Make sure the device has enough storage space (about 2-3 GB).",
    url: "/img/android2.jpg"
  },
  {
    step: "2",
    title: "Get Android Apps",
    description: "Get Android apps from AppGallery, the in-app DroiTong store, or on your own.",
    tip: "We recommend choosing verified apps from AppGallery first.",
    url: "/img/android1.jpg"
  },
  {
    step: "3",
    title: "Installation & Running",
    description: "Install Android apps just like regular apps; the system handles compatibility automatically.",
    tip: "The first launch of an Android app may take a bit longer to load.",
    url: "/img/android3.jpg"
  },
  {
    step: "4",
    title: "Daily Use",
    description: "Android apps appear in the app list alongside HarmonyOS apps.",
    tip: "Use Android apps just like native apps.",
    url: "/img/android4.jpg"
  }];


  // FAQ
  const faqs = [
  {
    question: "What is DroiTong?",
    answer: "DroiTong is a compatibility layer technology in HarmonyOS that allows some Android apps to run on HarmonyOS, providing transitional app compatibility support for users."
  },
  {
    question: "Can all Android apps run on HarmonyOS?",
    answer: "Not all Android apps run perfectly. HUAWEI provides compatibility support for most common Android apps through DroiTong technology, but some apps may have feature limitations or performance issues."
  },
  {
    question: "Will using Android apps affect system security?",
    answer: "Android apps run in DroiTong's secure sandbox environment, isolated from the HarmonyOS core system, so they do not affect overall system security."
  },
  {
    question: "Is DroiTong a permanent solution?",
    answer: "DroiTong is a transitional solution designed to help users migrate smoothly from the Android ecosystem to the HarmonyOS ecosystem. In the long run, developers are advised to build HarmonyOS native apps."
  }];


  return (
    <Layout
      title="Using Android apps on HarmonyOS."
      description="Learn how to use Android apps on HarmonyOS via DroiTong technology.">
      <div className="android-apps-page">
        {/* Hero Section */}
        <section className="android-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Using Android apps on HarmonyOS.</h1>
              <p className="hero-subtitle">Use the Android apps you know on HarmonyOS with DroiTong technology.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>DroiTong Features Overview</h2>
              <p>Android app compatibility solution on HarmonyOS.</p>
            </div>

            {/* DroiTong Screenshots Section */}
            <div className="droi-tong-screenshot">
              <img src="/img/android1.jpg" />

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

        {/* Usage Guide Section */}
        <section className="usage-section">
          <div className="container">
            <div className="section-header">
              <h2>Usage Guide</h2>
              <p>Steps to use Android apps on HarmonyOS.</p>
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

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>FAQ</h2>
              <p>Common questions about using Android apps on HarmonyOS.</p>
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

        {/* Tips Section */}
        <section className="tips-section">
          <div className="container">
            <div className="tips-content">
              <div className="tips-icon">ℹ️</div>
              <h2>Important Notes</h2>
              <p>DroiTong is a compatibility solution provided by HUAWEI to help users transition smoothly to the HarmonyOS ecosystem. Developers are advised to adapt HarmonyOS native apps as soon as possible for the best performance and user experience.</p>
              <div className="tips-buttons">
                <a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide" target='_blank' className="dev-button">Developer Adaptation Guide</a>
                <a href="https://developer.huawei.com/consumer/cn/" target='_blank' className="learn-button">Learn More</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>);

};

export default UsingAndroidApps;
