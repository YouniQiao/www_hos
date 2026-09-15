import React from 'react';
import Layout from '@theme/Layout';
import styles from "@site/src/pages/feature/harmonyos-native-apps.module.css";

export default function HarmonyOSNativeApps() {
  return (
    <Layout
      title="HarmonyOS NEXT - Native Apps"
      description="Explore the native app ecosystem of HarmonyOS NEXT, including app growth, developer support, ecosystem advantages, and future plans.">

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Native <span className={styles.highlight}>Apps</span>
            </h1>
            <p className={styles.heroSubtitle}>A Thriving Ecosystem, an Exceptional Experience</p>
            <div className={styles.heroAnimation}>
              <div className={styles.appIcon}></div>
              <div className={styles.appIcon}></div>
              <div className={styles.appIcon}></div>
              <div className={styles.appIcon}></div>
              <div className={styles.connectionGrid}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>A Thriving Native Ecosystem</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT has built a complete native app ecosystem, bringing together the wisdom and innovation of developers worldwide. From social entertainment to productivity tools, from lifestyle services to enterprise apps, the native app ecosystem is growing rapidly, delivering an exceptional experience for users.

              </p>
            </div>
          </div>
        </section>

        {/* Ecological Advantages */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Ecosystem Advantages</h2>
              <p className={styles.sectionSubtitle}>Technical and Experience Advantages of Native Apps</p>
            </div>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <div className={`${styles.icon} ${styles.performanceIcon}`}></div>
                </div>
                <h3 className={styles.advantageTitle}>Ultimate Performance</h3>
                <p className={styles.advantageDescription}>
                  Native apps call system capabilities directly without intermediate-layer conversion, delivering optimal performance.
                </p>
                <div className={styles.advantageStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>60%</span>
                    <span className={styles.statLabel}>Performance Improvement</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>50%</span>
                    <span className={styles.statLabel}>Reduced Power Consumption</span>
                  </div>
                </div>
              </div>

              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <div className={`${styles.icon} ${styles.experienceIcon}`}></div>
                </div>
                <h3 className={styles.advantageTitle}>Perfect experience</h3>
                <p className={styles.advantageDescription}>
                  Deep integration with system features delivers seamless animations, interactions, and functionality.
                </p>
                <div className={styles.advantageStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>System Integration</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>Zero latency</span>
                    <span className={styles.statLabel}>Response Speed</span>
                  </div>
                </div>
              </div>

              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <div className={`${styles.icon} ${styles.crossDeviceIcon}`}></div>
                </div>
                <h3 className={styles.advantageTitle}>Cross-Device Collaboration</h3>
                <p className={styles.advantageDescription}>
                  Develop once, deploy across multiple devices, enabling seamless collaboration and consistent experience across devices.
                </p>
                <div className={styles.advantageStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>Multi-device</span>
                    <span className={styles.statLabel}>Unified experience</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>Seamless</span>
                    <span className={styles.statLabel}>Task Flow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecological Development */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Ecosystem Development Status</h2>
              <p className={styles.sectionSubtitle}>A Rapidly Growing App Ecosystem</p>
            </div>
            <div className={styles.ecologicalDevelopment}>
              <div className={styles.developmentStats}>
                <div className={styles.statCard}>
                  <div className={styles.statVisual}>
                    <div className={styles.appCountAnimation}></div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statTitle}>30000+</h3>
                    <p className={styles.statDescription}>Native App Count</p>
                    <div className={styles.growthIndicator}>
                      <span className={styles.growthArrow}>↑</span>
                      <span>15% Monthly Growth</span>
                    </div>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statVisual}>
                    <div className={styles.developerAnimation}></div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statTitle}>10 million+</h3>
                    <p className={styles.statDescription}>Registered Developers</p>
                    <div className={styles.growthIndicator}>
                      <span className={styles.growthArrow}>↑</span>
                      <span>200% Annual Growth</span>
                    </div>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statVisual}>
                    <div className={styles.categoryAnimation}></div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statTitle}>27</h3>
                    <p className={styles.statDescription}>App Category Coverage</p>
                    <div className={styles.growthIndicator}>
                      <span className={styles.growthArrow}>↑</span>
                      <span>Continuously Expanding</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.categoryBreakdown}>
                <h3 className={styles.breakdownTitle}>App Category Distribution</h3>
                <div className={styles.categoryGrid}>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>Social Entertainment</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{ width: '85%' }}></div>
                    </div>
                    <span className={styles.categoryPercent}>85%</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>Productivity Tools</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{ width: '78%' }}></div>
                    </div>
                    <span className={styles.categoryPercent}>78%</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>Life Services</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{ width: '92%' }}></div>
                    </div>
                    <span className={styles.categoryPercent}>92%</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>Games</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{ width: '65%' }}></div>
                    </div>
                    <span className={styles.categoryPercent}>65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Support */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Developer Support</h2>
              <p className={styles.sectionSubtitle}>Empowering App Development Across the Board</p>
            </div>
            <div className={styles.developerSupport}>
              <div className={styles.supportGrid}>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.toolkitIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>Development Tools</h3>
                  <p className={styles.supportDescription}>
                    A complete development toolchain, including IDE, emulator, and debugging tools, to boost development efficiency.
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>DevEco Studio</li>
                    <li>Real-Time Preview</li>
                    <li>One-Click Debugging</li>
                  </ul>
                </div>

                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.frameworkIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>Development framework</h3>
                  <p className={styles.supportDescription}>
                    ArkUI development framework with declarative UI and state management makes development simpler and more efficient.
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>ArkUI Framework</li>
                    <li>Declarative Development</li>
                    <li>State management</li>
                  </ul>
                </div>

                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.resourceIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>Resource support</h3>
                  <p className={styles.supportDescription}>
                    Rich development documentation, sample code, and design resources lower the barrier to development.
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>Complete Documentation</li>
                    <li>Code Examples</li>
                    <li>Design System</li>
                  </ul>
                </div>

                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.ecosystemIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>Ecosystem services</h3>
                  <p className={styles.supportDescription}>
                    App distribution, data analytics, and monetization support help apps succeed.
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>AppGallery</li>
                    <li>Data Analysis</li>
                    <li>Commercialization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Ecosystem */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Partners</h2>
              <p className={styles.sectionSubtitle}>Building a Thriving App Ecosystem</p>
            </div>
            <div className={styles.partnerEcosystem}>
              <div className={styles.partnerGrid}>
                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>Internet Giants</h3>
                  <p className={styles.partnerDescription}>
                    Deep collaboration with leading internet companies drives native adaptation of core apps.
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>WeChat</div>
                    <div className={styles.logoItem}>Alipay</div>
                    <div className={styles.logoItem}>Douyin</div>
                    <div className={styles.logoItem}>Taobao</div>
                  </div>
                </div>

                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>Financial Services</h3>
                  <p className={styles.partnerDescription}>
                    Banks, securities, insurance, and other financial institutions are fully onboarded to ensure financial security.
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>ICBC</div>
                    <div className={styles.logoItem}>China Merchants Bank</div>
                    <div className={styles.logoItem}>Ping An Securities</div>
                    <div className={styles.logoItem}>PICC</div>
                  </div>
                </div>

                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>Life Services</h3>
                  <p className={styles.partnerDescription}>
                    Covers lifestyle services such as mobility, food delivery, and travel, making daily life more convenient.
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>DiDi</div>
                    <div className={styles.logoItem}>Meituan</div>
                    <div className={styles.logoItem}>Ctrip</div>
                    <div className={styles.logoItem}>Ele.me</div>
                  </div>
                </div>

                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>Content Ecosystem</h3>
                  <p className={styles.partnerDescription}>
                    Video, music, reading, and other content platforms enrich the entertainment experience.
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>Tencent Video</div>
                    <div className={styles.logoItem}>iQIYI</div>
                    <div className={styles.logoItem}>NetEase Cloud Music</div>
                    <div className={styles.logoItem}>Qidian Reading</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Future Outlook</h2>
              <p className={styles.sectionSubtitle}>Building an App Ecosystem for All Things Connected</p>
            </div>
            <div className={styles.futureOutlook}>
              <div className={styles.outlookContent}>
                <div className={styles.outlookVisual}>
                  <div className={styles.ecosystemMap}></div>
                </div>
                <div className={styles.outlookText}>
                  <h3 className={styles.outlookTitle}>All-Scenario Smart Ecosystem</h3>
                  <p className={styles.outlookDescription}>
                    In the future, HarmonyOS NEXT will build a smart app ecosystem covering all scenarios — phones, tablets, HUAWEI Vision, wearables, and in-car systems — to achieve true connectivity for all things.

                  </p>
                  <div className={styles.outlookGoals}>
                    <div className={styles.goalItem}>
                      <span className={styles.goalNumber}>1000000+</span>
                      <span className={styles.goalText}>Native App Goals</span>
                    </div>
                    <div className={styles.goalItem}>
                      <span className={styles.goalNumber}>20 million+</span>
                      <span className={styles.goalText}>Developer Scale</span>
                    </div>
                    <div className={styles.goalItem}>
                      <span className={styles.goalNumber}>All-scenario</span>
                      <span className={styles.goalText}>Ecosystem Coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusion}>
          <div className="container">
            <div className={styles.conclusionContent}>
              <h2 className={styles.conclusionTitle}>Co-creating a New Era for the App Ecosystem</h2>
              <p className={styles.conclusionText}>
                The native app ecosystem of HarmonyOS NEXT is growing rapidly, bringing together the wisdom and innovation of developers worldwide. We are committed to building an open, win-win app ecosystem that delivers an exceptional experience for users and creates endless possibilities for developers. Join us to usher in a new era of intelligent connectivity for all things.


              </p>
              <div className={styles.ecosystemBadges}>
                <span className={styles.ecosystemBadge}>Native Apps</span>
                <span className={styles.ecosystemBadge}>Developer Ecosystem</span>
                <span className={styles.ecosystemBadge}>Cross-Device Collaboration</span>
                <span className={styles.ecosystemBadge}>Internet of Everything</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>);

}
