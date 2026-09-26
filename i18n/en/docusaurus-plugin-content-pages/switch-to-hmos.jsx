import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "@site/src/pages/MigrateToHarmonyOS.css";

const MigrateToHarmonyOS = () => {
  const { siteConfig } = useDocusaurusContext();

  const migrationBenefits = [
  {
    title: "Seamless data migration",
    description: "One-tap migration for contacts, photos, and app data — no need to worry about data loss",
    icon: "📲"
  },
  {
    title: "Familiar user experience",
    description: "Familiar operation logic and interface design reduce the learning curve",
    icon: "📱"
  },
  {
    title: "App ecosystem compatibility",
    description: "Full compatibility with mainstream apps keeps work and entertainment unaffected",
    icon: "🔄"
  },
  {
    title: "Overall performance boost",
    description: "Smoother system experience, longer battery life",
    icon: "⚡"
  }];


  const migrationSteps = [
  {
    step: "1",
    title: "Back up data on your original device",
    description: "Use cloud services or local backup to keep important data safe",
    tip: "We recommend backing up with HUAWEI Cloud or another cloud service"
  },
  {
    step: "2",
    title: "Get the migration tool",
    description: "Download and install the 'HarmonyOS Phone Clone' app",
    tip: "You can download this tool from AppGallery or the HUAWEI official website"
  },
  {
    step: "3",
    title: "Connect device",
    description: "Scan a QR code or connect manually to establish a transfer channel between the old and new devices",
    tip: "Make sure both devices are on the same Wi-Fi network"
  },
  {
    step: "4",
    title: "Choose what to migrate",
    description: "Select the contacts, photos, videos, documents, and other data you want to migrate",
    tip: "You can choose to migrate part or all of the content as needed"
  },
  {
    step: "5",
    title: "Start migration",
    description: "Wait for the data transfer to finish, keeping the device connection stable",
    tip: "Migration time depends on the amount of data, so please be patient"
  },
  {
    step: "6",
    title: "Complete setup",
    description: "Follow the guide to complete the initial setup of your new device",
    tip: "We recommend signing in with your HUAWEI ID to sync cloud backup data"
  }];


  const faqs = [
  {
    question: "Will my app data be lost when migrating from Android to HarmonyOS?",
    answer: "Data from most mainstream apps can be migrated smoothly, but we recommend confirming that important data is backed up before migrating."
  },
  {
    question: "What issues will iOS users encounter when migrating to HarmonyOS?",
    answer: "Due to the closed nature of the iOS ecosystem, some data migration may be limited, but core data such as contacts, photos, and calendar can be migrated smoothly."
  },
  {
    question: "Do I need to repurchase apps after migration?",
    answer: "Most free apps can be downloaded and used directly; paid apps may need to be purchased again, depending on developer policy."
  },
  {
    question: "How long does the migration process take?",
    answer: "Migration time depends on the amount of data; most data can usually be migrated within 10-30 minutes."
  }];


  return (
    <Layout
      title="Migrate to HarmonyOS"
      description="Easily migrate from Android or iOS to HarmonyOS and enjoy a smarter all-scenario experience">
      <div className="migrate-page">
        {/* Hero area */}
        <section className="migrate-hero-section">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className="migrate-hero-content">
                  <h1 className="migrate-hero-title">Easily migrate to <span className="gradient-text">HarmonyOS</span></h1>
                  <p className="migrate-hero-subtitle">Seamlessly switch from Android or iOS and enjoy a smarter all-scenario experience</p>
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
                      <div className="device-label">Original device</div>
                    </div>
                    <div className="migration-arrow">
                      <div className="arrow-animation"></div>
                    </div>
                    <div className="device-target">
                      <div className="device-img harmony"></div>
                      <div className="device-label">New device</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration benefits section */}
        <section className="benefits-section">
          <div className="container">
            <div className="section-header">
              <h2>Why migrate to HarmonyOS</h2>
              <p>Enjoy a smarter, smoother all-scenario experience</p>
            </div>

            <div className="benefits-grid">
              {migrationBenefits.map((benefit, index) =>
              <div key={index} className="benefit-card">
                  <div className="benefit-icon-container">
                    <div className="benefit-icon">{benefit.icon}</div>
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Migration steps section */}
        <section className="steps-section">
          <div className="container">
            <div className="section-header">
              <h2>Migration step guide</h2>
              <p>Six simple steps to easily complete data migration</p>
            </div>

            <div className="steps-grid">
              {migrationSteps.map((step, index) =>
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
              )}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>Frequently asked questions</h2>
              <p>Frequently asked questions about migrating to HarmonyOS</p>
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

        {/* Migration tips section */}
        <section className="tips-section">
          <div className="container">
            <div className="tips-content">
              <div className="tips-icon">🎉</div>
              <h2>Ready to start migrating?</h2>
              <p>Download the Phone Clone app and start your HarmonyOS journey now</p>
              <div className="tips-buttons">
                <a href="https://apps.apple.com/cn/app/%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%E5%85%8B%E9%9A%86/id920728033" target="_blank" className="download-button">Download Phone Clone (Apple)</a>
                <a href="https://appgallery.huawei.com/app/C10099757" target="_blank" className="download-button">Download Phone Clone (Android)</a>

              </div>
              <br />
              <div className="tips-buttons">

                <a href="https://consumer.huawei.com/cn/support/content/zh-cn16046718/" target="_blank" className="guide-button">View detailed guide</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>);

};

export default MigrateToHarmonyOS;
