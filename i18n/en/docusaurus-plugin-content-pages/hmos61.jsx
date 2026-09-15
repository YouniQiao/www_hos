import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/harmonyos-6.1-features.module.css';

export default function HarmonyOS61Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "Smoother — Ark Engine continuously optimized",
      description: "Faster app launch, split-screen, and page scrolling, with upgraded game quick-launch and video preloading experiences.",
      icon: "🚀",
      tags: ["Instant app launch", "Seamless Split-screen", "Quick Game Launch", "Video preloading"]
    },
    {
      title: "More secure — Star Shield architecture fully implemented",
      description: "Comprehensive security protection from the system level to apps, with upgraded encrypted sharing and AI anti-fraud protection.",
      icon: "🔒",
      tags: ["Encrypted Sharing", "AI Anti-fraud", "Privacy Control", "Family Care"]
    },
    {
      title: "Smarter — Celia and intelligent agent synergy",
      description: "Celia and the intelligent agent work in deep synergy, greatly improving the naturalness and accuracy of voice interaction.",
      icon: "🤖",
      tags: ["Voice interaction", "Agent collaboration", "Speech-to-text", "Smart Navigation"]
    },
    {
      title: "More convenient — Live Window and dynamic cards",
      description: "Fully upgraded interaction experience with optimized Live Window, dynamic cards, and tap-to-share.",
      icon: "✨",
      tags: ["Live Window", "Dynamic Cards", "Tap-to-share", "MeeTime Walkie-talkie"]
    },
    {
      title: "More thoughtful — digital asset inheritance",
      description: "Securely share cloud photos and videos with family and friends — one-tap sharing makes everyday life more convenient.",
      icon: "💝",
      tags: ["Asset inheritance", "Universal Sharing", "Multi-device Sync", "Calendar Sync"]
    },
    {
      title: "Full-scenario ecosystem coverage",
      description: "Over 55 million terminal devices, covering 18 core verticals, with support across all device categories.",
      icon: "🌐",
      tags: ["55 million+", "18 domains", "All Categories", "HUAWEI HarmonyOS Smart Home"]
    }
  ];

  const technicalSpecs = [
    { label: "Release date", value: "April 20, 2026" },
    { label: "Terminal devices", value: "Over 55 million" },
    { label: "Security Architecture", value: "Star Shield fully rolled out" },
    { label: "Asset inheritance", value: "Up to 5 inheritors" },
    { label: "Coverage areas", value: "18 verticals" },
    { label: "MeeTime Walkie-talkie", value: "Real-time voice/video" }
  ];

  return (
    <Layout
      title={`HarmonyOS 6.1 - ${siteConfig.title}`}
      description="Explore HarmonyOS 6.1's comprehensive upgrades in fluency, security, intelligence, convenience, and all-scenario ecosystem.">
      {/* Hero */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 6.1</h1>
          <p className={styles.heroSubtitle}>{'All-scenario smart experience keeps evolving'}</p>
          <p className={styles.heroDescription}>
            {'Officially rolled out on April 20, 2026, with over 55 million terminal devices across phones, tablets, PCs, wearables, audio, HUAWEI Vision, and HUAWEI HarmonyOS Smart Home — delivering a smoother, safer, smarter, and more thoughtful experience.'}
          </p>
          <div className={styles.heroTags}>
            <span className={styles.heroTag}>{'Official version released'}</span>
            <span className={styles.heroTag}>{'55 million+ terminal devices'}</span>
            <span className={styles.heroTag}>{'Full-category coverage'}</span>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* Core Features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>{'Core new features'}</h2>
            <p>{'Continuous evolution across five dimensions: fluency, security, intelligence, convenience, and thoughtfulness.'}</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureEmoji}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
                <div className={styles.featureTags}>
                  {feature.tags.map((tag, idx) => (
                    <span key={idx} className={styles.featureTagItem}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Data */}
        <section className={styles.specsSection}>
          <div className={styles.sectionHeader}>
            <h2>{'Key data'}</h2>
            <p>{'Based on core metrics officially released by HUAWEI'}</p>
          </div>
          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) => (
              <div key={index} className={styles.specCard}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Upgrade Info */}
        <section className={styles.updateSection}>
          <div className={styles.updateContent}>
            <h2>{'Upgrade Info'}</h2>
            <div className={styles.updateGrid}>
              <div className={styles.updateCard}>
                <h3>{'📱 Upgrade method'}</h3>
                <p>{'Users can upgrade by going to Settings → System Update to experience the new system features. Supported models will receive the update in batches — please be patient.'}</p>
              </div>
              <div className={styles.updateCard}>
                <h3>{'🎯 Version Highlights'}</h3>
                <p>{'HarmonyOS 6.1 continues to refine the experience built on 6.0, with comprehensive upgrades to the Ark Engine, Star Shield security, and the Celia intelligent agent, plus thoughtful new features like digital asset inheritance and MeeTime real-time walkie-talkie.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outlook */}
        <section className={styles.visionSection}>
          <div className={styles.visionContent}>
            <div className={styles.visionIcon}>🌟</div>
            <h2>{'Entering a new stage of all-scenario smart living'}</h2>
            <p>
              {'HarmonyOS 6.1 is more than just a version iteration — it marks the maturity of the HarmonyOS ecosystem. With 55 million terminal devices and full coverage across 18 core verticals, HarmonyOS is moving from "usable" to "delightful," delivering a truly seamless, secure, and intelligent all-scenario digital life.'}
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
