import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/harmonyos-5.0-features.module.css';

export default function HarmonyOS5Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "Ark Engine",
      description: "Four engines independently developed by HUAWEI — graphics, memory, scheduling, and storage — comprehensively improving system performance",
      icon: "🚀",
      details: ["Graphics rendering performance improved by 20%", "App launch speed improved by 15%", "Battery life increased by 30 minutes", "Storage read speed significantly improved"]
    },
    {
      title: "SuperHub",
      description: "An innovative cross-app, cross-device content sharing method that enables seamless content flow",
      icon: "📋",
      details: ["Drag content to SuperHub for temporary storage", "One-tap paste across apps and devices", "Supports text, images, and files", "Stores up to 100 items"]
    },
    {
      title: "Smart Scan",
      description: "No need to open an app — double-tap the back cover to scan quickly",
      icon: "📱",
      details: ["Supports mainstream scanning with Alipay, WeChat, and more", "Double-tap the phone's back to trigger", "Recognition speed as fast as 0.5 seconds", "Covers scenarios such as payments, transit, and web browsing"]
    },
    {
      title: "Privacy Center",
      description: "A comprehensive privacy and security protection system with transparent app permission management",
      icon: "🔒",
      details: ["Visualized app permission access logs", "Camera and microphone usage alerts", "Sensitive information masking", "Proactive privacy risk alerts"]
    },
    {
      title: "Communication Sharing",
      description: "Tablets can share the phone's cellular capabilities without a SIM card",
      icon: "📶",
      details: ["Tablet shares the phone's cellular network", "Answer calls, send and receive texts", "Network latency reduced by 20%", "Power consumption reduced by 30%"]
    },
    {
      title: "Universal Cards",
      description: "App info displayed directly on the home screen — take action without opening the app",
      icon: "🃏",
      details: ["Supports custom sizes", "Card stacking and grouping", "Real-Time Information Updates", "Supports third-party apps"]
    },
  ];

  const technicalSpecs = [
    { name: "Release Date", value: "October 2024" },
    { name: "Core Upgrades", value: "Ark Engine" },
    { name: "Performance Boost", value: "System smoothness improved by 20%" },
    { name: "First-Batch Models", value: "Mate 60 series and more" },
    { name: "Device Connectivity", value: "Supports 8 Device Types" },
    { name: "Security Certification", value: "CC EAL5+ security" }
  ];

  const ecosystemData = [
    { label: "Connected Device Count", value: "700 million+", icon: "🔗" },
    { label: "Ecosystem Partners", value: "2200+", icon: "🤝" },
    { label: "Atomic Services", value: "50,000+", icon: "⚛️" },
    { label: "Monthly Active Users", value: "570 million", icon: "👥" }
  ];

  return (
    <Layout
      title={`HarmonyOS 5.0 New Features - ${siteConfig.title}`}
      description="Explore innovative features of HarmonyOS 5.0 such as the Ark Engine, SuperHub, and Super Compression">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 5.0</h1>
          <p className={styles.heroSubtitle}>{'Smoother, freer, and safer'}</p>
          <p className={styles.heroDescription}>
            {'Released on October 22, 2024, introducing innovative features such as the Ark Engine and SuperHub, comprehensively upgrading the all-scenario smart experience.'}
          </p>
           <div className={styles.releaseInfo}>
            <span className={styles.releaseTag}>{'Officially ushering in the native HarmonyOS era'}</span>
        
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* Feature Introduction Section */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>{'Core New Features'}</h2>
            <p>{'Eight innovative features redefining the smart device experience'}</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.featureDetails}>
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className={styles.specsSection}>
          <div className={styles.sectionHeader}>
            <h2>{'Technical Specifications'}</h2>
            <p>{'HarmonyOS 5.0 key specs and performance metrics'}</p>
          </div>
          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) => (
              <div key={index} className={styles.specItem}>
                <div className={styles.specName}>{spec.name}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        

        {/* Feature Comparison */}
        <section className={styles.comparisonSection}>
          <div className={styles.sectionHeader}>
            <h2>{'Version Feature Comparison'}</h2>
            <p>{'Key upgrades in HarmonyOS 5.0 compared to the previous generation'}</p>
          </div>
          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>{'Feature Category'}</div>
              <div className={styles.tableCell}>HarmonyOS 4.0</div>
              <div className={styles.tableCell}>HarmonyOS 5.0</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>{'System Performance'}</div>
              <div className={styles.tableCell}>{'Basic Optimization'}</div>
              <div className={styles.tableCell}>{'Ark Engine fully enhanced'}</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>{'Content Sharing'}</div>
              <div className={styles.tableCell}>{'Multi-screen Collaboration'}</div>
              <div className={styles.tableCell}>{'SuperHub'}</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>{'Storage Management'}</div>
              <div className={styles.tableCell}>{'Smart Cleanup'}</div>
              <div className={styles.tableCell}>{'Super Compression Technology'}</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>{'Privacy & Security'}</div>
              <div className={styles.tableCell}>{'Basic Privacy Protection'}</div>
              <div className={styles.tableCell}>{'Privacy Center visualization'}</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>{'Interaction Experience'}</div>
              <div className={styles.tableCell}>{'Large Folder'}</div>
              <div className={styles.tableCell}>{'Smart scan and AI subtitles'}</div>
            </div>
          </div>
        </section>

        {/* Upgrade Recommendations */}
        <section className={styles.upgradeSection}>
          <div className={styles.upgradeContent}>
            <h2>{'Upgrade recommendations and support'}</h2>
            <div className={styles.upgradeInfo}>
              
              <div className={styles.upgradeItem}>
                <h3>{'⚠️ Notes'}</h3>
                <p>{'Before upgrading, back up important data and make sure the battery is sufficiently charged (50% or more recommended)'}</p>
              </div>
              <div className={styles.upgradeItem}>
                <h3>{'🔄 Upgrade Method'}</h3>
                <p>{'Check and install via Settings → System & updates → Software update'}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}