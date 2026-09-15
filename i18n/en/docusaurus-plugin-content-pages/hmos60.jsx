import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/harmonyos-6.0-features.module.css';

export default function HarmonyOS6Features() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "More beautiful - Dynamic light and shadow that follows your style",
      description: "EDR light-effect rendering technology creates smart light effects with vivid, true-to-life colors.",
      icon: "✨",
      details: ["Artistic signature feature, AI intelligently matches wallpaper style.", "AIGC generates personalized fonts", "Vitality mood theme, blending emotion recognition with motion-effect interaction.", "Pom-pom series theme, AI voice interaction animation."]
    },
    {
      title: "Easier to use - Device connectivity at a touch",
      description: "Tap-to-share covers over 60 apps, enabling seamless collaboration across multiple devices.",
      icon: "🔗",
      details: ["One-tap file sharing between phone and PC", "One-tap multi-sharing, team up for gaming", "NearLink connection covers a radius of up to 100 meters", "Hand-eye coordination feature, seamless cross-device keyboard and mouse switching."]
    },
    {
      title: "More intelligent - Super Celia, AI you can't put down.",
      description: "Celia recognizes 16 dialects and can complete complex tasks with a single sentence.",
      icon: "🤖",
      details: ["HarmonyOS agent framework HMAF, with the first batch of 80+ agents launched.", "Notes AI writing assistant", "Gallery AI one-tap video creation and AI reflection removal.", "Shifting from \"user commands\" to \"user intent\" as the core."]
    },
    {
      title: "Safer - Upgraded privacy and security protection",
      description: "The Star Shield security architecture has been upgraded again, blocking over 24 billion unreasonable permission requests.",
      icon: "🔒",
      details: ["AI anti-fraud identifies 7 types of telecom fraud", "AI Privacy Screen Protection", "Encrypted Sharing Feature", "Family anti-fraud, remote protection for family safety"]
    },
    {
      title: "Smoother - Enjoy a storm of fluid performance",
      description: "With the Ark Engine, smoothness is improved by 15% over HarmonyOS 5 and 40% over HarmonyOS 4.",
      icon: "🚀",
      details: ["Faster app installation", "Game launch speed improved 5x", "Battery life extended by 35+ minutes", "Instant launch, open, and load experience"]
    },
    {
      title: "All-Scenario Ecosystem",
      description: "Over 30,000 native HarmonyOS apps and atomic services, with developers exceeding 8 million.",
      icon: "🌐",
      details: ["Covering many fields such as government services, transportation, and finance.", "OpenHarmony code exceeds 130 million lines", "1,200 software and hardware products", "69 Third-Party Distributions"]
    }
  ];

  const technicalSpecs = [
    { name: "System Fluency", value: "15% improvement over HarmonyOS 5 and 40% over HarmonyOS 4." },
    { name: "Battery Life Performance", value: "Adds 35+ Minutes" },
    { name: "Tap-to-Share Apps", value: "Supports Over 60 Apps" },
    { name: "Celia Dialects", value: "Recognizes 16 Dialects" },
    { name: "Device Finder", value: "NearLink connection covers 100 meters" },
    { name: "Security Blocking", value: "Over 24 billion permission blocks" }
  ];


  return (
    <Layout
      title={`HarmonyOS 6.0 - ${siteConfig.title}`}
      description="Explore HarmonyOS 6.0's comprehensive upgrades in beauty, ease of use, intelligence, security, and smoothness.">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 6.0</h1>
          <p className={styles.heroSubtitle}>{'All-scenario smart living experience upgraded again'}</p>
          <p className={styles.heroDescription}>
            {'Officially released on October 22, 2025, it continues to evolve from "usable" to "easy to use", delivering a new experience that is more beautiful, more intelligent, more secure, easier to use, and smoother.'}
          </p>
          <div className={styles.releaseInfo}>
            <span className={styles.releaseTag}>{'Public Beta Released'}</span>
            <span className={styles.releaseDate}>{'Supports 90+ Device Models'}</span>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* Feature introduction section */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>{'Core New Features'}</h2>
            <p>{'Comprehensive evolution around five dimensions: refinement, connectivity, intelligence, security, and smoothness.'}</p>
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
            <h2>{'Technical Specifications and Data'}</h2>
            <p>{'Based on performance metrics and ecosystem data officially released by HUAWEI.'}</p>
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

        {/* Ecosystem development section */}
        <section className={styles.ecosystemSection}>
          <div className={styles.sectionHeader}>
            <h2>{'HarmonyOS Ecosystem Development'}</h2>
            <p>{'Rapidly growing operating system ecosystem'}</p>
          </div>
          <div className={styles.ecosystemContent}>
            <div className={styles.ecosystemStats}>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>{'1.19 Billion Devices'}</div>
                <div className={styles.statLabel}>{'OpenHarmony device shipments'}</div>
              </div>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>{'8 Million+'}</div>
                <div className={styles.statLabel}>{'HarmonyOS Developers'}</div>
              </div>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>{'30,000+'}</div>
                <div className={styles.statLabel}>{'HarmonyOS Apps and Atomic Services'}</div>
              </div>
              <div className={styles.ecosystemStat}>
                <div className={styles.statNumber}>{'1,200'}</div>
                <div className={styles.statLabel}>{'Compatible Software and Hardware Products'}</div>
              </div>
            </div>
            <div className={styles.ecosystemDescription}>
              <p>
                {'Since HarmonyOS was officially unveiled in 2019, after years of development, the HarmonyOS system has continued to iterate and upgrade. 2025 is a year of growth for the HarmonyOS ecosystem, and HUAWEI\'s all-scenario products have fully entered the HarmonyOS era.'}
              </p>
              <p>
                {'HarmonyOS 6 is the second version of the native HarmonyOS operating system. Building on HarmonyOS 5, it continuously optimizes to address users\' deeper needs in smoothness, intelligence, security, and interconnect efficiency.'}
              </p>
            </div>
          </div>
        </section>

      

        {/* Update Notes Section */}
        <section className={styles.updateSection}>
          <div className={styles.updateContent}>
            <h2>{'Upgrade Info'}</h2>
            <div className={styles.updateDetails}>
              <div className={styles.updateItem}>
                <h3>{'Upgrade Method'}</h3>
                <p>{'Users can enter the upgrade interface via Settings - System Update to experience the new system features.'}</p>
              </div>
              <div className={styles.updateItem}>
                <h3>{'Version Features'}</h3>
                <p>{'The public beta version no longer carries the "NEXT" label and is officially named HarmonyOS 6.0, marking the system\'s entry into a stable public beta stage.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook Area */}
        <section className="future-section">
          <div className="container">
            <div className="future-content">
              <div className="future-icon">🚀</div>
              <h2>{'Opening a new era of digital life'}</h2>
              <p>{'HarmonyOS 6.0 is not just an operating system upgrade; it is a gateway to an intelligent world of connected everything. It redefines collaboration between devices, delivers seamless, intelligent, personalized all-scenario experiences for users, and builds a powerful, open, innovative ecosystem platform for developers.'}</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}