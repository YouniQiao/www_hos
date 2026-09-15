import React from 'react';
import Layout from '@theme/Layout';
import styles from "@site/src/pages/feature/harmonyos-native-fluidity.module.css";

export default function HarmonyOSNativeFluidity() {
  return (
    <Layout
      title="HarmonyOS NEXT - Native Smoothness"
      description="Explore the native smooth experience of HarmonyOS NEXT, including silky-smooth features such as fluid animations, instant response, intelligent scheduling, and performance optimization.">

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Native <span className={styles.highlight}>Smooth</span>
            </h1>
            <p className={styles.heroSubtitle}>Silky-smooth experience, flowing like water</p>
            <div className={styles.heroAnimation}>
              <div className={styles.flowLine}></div>
              <div className={styles.flowLine}></div>
              <div className={styles.flowLine}></div>
              <div className={styles.flowParticle}></div>
              <div className={styles.flowParticle}></div>
              <div className={styles.flowParticle}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Silky smooth, a revolutionary experience</h2>
              <p className={styles.sectionText}>
                With native smoothness at its core, HarmonyOS NEXT delivers unprecedented operational fluidity through a deeply optimized system architecture and intelligent resource scheduling. From touch response to animation transitions, every moment is silky smooth.

              </p>
            </div>
          </div>
        </section>

        {/* Smooth Animation */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Fluid motion effects</h2>
              <p className={styles.sectionSubtitle}>Silky-smooth animations based on physical laws</p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.physicsIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Physics animation engine</h3>
                <p className={styles.cardDescription}>
                  An animation system designed around real physical laws makes every interaction feel natural, fluid, and intuitive.
                </p>
                <ul className={styles.featureList}>
                  <li>Spring animation effects</li>
                  <li>Inertial scrolling simulation</li>
                  <li>Physical collision feedback</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.transitionIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Smart transition animations</h3>
                <p className={styles.cardDescription}>
                  Carefully designed page transition effects ensure visual continuity and reduce the sense of interruption during operations.
                </p>
                <ul className={styles.featureList}>
                  <li>Shared element transitions</li>
                  <li>Context-aware animations</li>
                  <li>Seamless page transitions</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.microIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Refined micro-interactions</h3>
                <p className={styles.cardDescription}>
                  Meticulous refinement of every detail, from button feedback to list scrolling, delivers a smooth experience everywhere.
                </p>
                <ul className={styles.featureList}>
                  <li>Instant touch feedback</li>
                  <li>Smooth scrolling</li>
                  <li>Refined visual feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Response */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Rapid response</h2>
              <p className={styles.sectionSubtitle}>Millisecond touch response with excellent responsiveness</p>
            </div>
            <div className={styles.responseDemo}>
              <div className={styles.demoVisual}>
                <div className={styles.touchIndicator}></div>
                <div className={styles.responseLine}></div>
                <div className={styles.speedMeter}>
                  <div className={styles.speedNeedle}></div>
                  <span className={styles.speedLabel}>Response speed</span>
                </div>
              </div>
              <div className={styles.demoContent}>
                <h3 className={styles.demoTitle}>Instant touch response</h3>
                <p className={styles.demoDescription}>
                  Millisecond-level touch response is achieved through an optimized touch pipeline and predictive algorithms. The moment your finger touches the screen, the system responds instantly, taking responsiveness to a whole new level.

                </p>
                <div className={styles.responseStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>8ms</span>
                    <span className={styles.statLabel}>Touch response</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>120fps</span>
                    <span className={styles.statLabel}>Render frame rate</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>Zero latency</span>
                    <span className={styles.statLabel}>Animation frame drops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Scheduling */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Smart scheduling</h2>
              <p className={styles.sectionSubtitle}>Smart resource allocation ensures a smooth experience</p>
            </div>
            <div className={styles.schedulingGrid}>
              <div className={styles.schedulingCard}>
                <div className={styles.schedulingVisual}>
                  <div className={styles.cpuAnimation}></div>
                </div>
                <div className={styles.schedulingContent}>
                  <h3 className={styles.schedulingTitle}>Smart CPU frequency scaling</h3>
                  <p className={styles.schedulingDescription}>
                    Intelligently adjusts CPU frequency based on usage scenarios, striking the perfect balance between performance and power consumption to ensure ultimate smoothness at critical moments.

                  </p>
                  <div className={styles.schedulingFeatures}>
                    <span>Scene recognition</span>
                    <span>Dynamic frequency scaling</span>
                    <span>Energy-efficiency optimization</span>
                  </div>
                </div>
              </div>

              <div className={styles.schedulingCard}>
                <div className={styles.schedulingContent}>
                  <h3 className={styles.schedulingTitle}>Intelligent memory management</h3>
                  <p className={styles.schedulingDescription}>
                    Smartly predicts memory needs and allocates resources in advance, reducing wait times when launching and switching apps while keeping the system smooth over the long term.

                  </p>
                  <div className={styles.schedulingFeatures}>
                    <span>Preloading mechanism</span>
                    <span>Smart reclamation</span>
                    <span>Defragmentation</span>
                  </div>
                </div>
                <div className={styles.schedulingVisual}>
                  <div className={styles.memoryAnimation}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Optimization */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Performance optimization</h2>
              <p className={styles.sectionSubtitle}>System-level optimization for lasting smoothness without lag</p>
            </div>
            <div className={styles.optimizationGrid}>
              <div className={styles.optimizationCard}>
                <h3 className={styles.optimizationTitle}>Rendering engine optimization</h3>
                <p className={styles.optimizationDescription}>
                  A new rendering architecture reduces draw layers and boosts rendering efficiency, ensuring complex interfaces run smoothly.
                </p>
                <div className={styles.optimizationProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '95%' }}></div>
                  </div>
                  <span>95% rendering efficiency improvement</span>
                </div>
              </div>

              <div className={styles.optimizationCard}>
                <h3 className={styles.optimizationTitle}>Storage performance optimization</h3>
                <p className={styles.optimizationDescription}>
                  An intelligent file system and storage scheduling algorithms greatly improve file read/write speeds and reduce app loading times.
                </p>
                <div className={styles.optimizationProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '80%' }}></div>
                  </div>
                  <span>80% faster read/write speeds</span>
                </div>
              </div>

              <div className={styles.optimizationCard}>
                <h3 className={styles.optimizationTitle}>Network transmission optimization</h3>
                <p className={styles.optimizationDescription}>
                  Intelligent network scheduling and data prefetching improve network response speed and optimize the online content loading experience.
                </p>
                <div className={styles.optimizationProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '75%' }}></div>
                  </div>
                  <span>75% lower network latency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Architecture */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Smoothness technology architecture</h2>
              <p className={styles.sectionSubtitle}>Multi-layered technologies ensure system fluidity</p>
            </div>
            <div className={styles.technologyArchitecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Application Layer</h4>
                  <p>Smooth experience performance</p>
                  <div className={styles.layerFeatures}>
                    <span>Silky-smooth animations</span>
                    <span>Instant response</span>
                    <span>Seamless switching</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Framework Layer</h4>
                  <p>Smoothness technology framework</p>
                  <div className={styles.layerFeatures}>
                    <span>Motion engine</span>
                    <span>Rendering pipeline</span>
                    <span>Scheduling algorithm</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>System layer</h4>
                  <p>System-level optimization</p>
                  <div className={styles.layerFeatures}>
                    <span>Memory management</span>
                    <span>Process scheduling</span>
                    <span>Storage optimization</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Hardware Layer</h4>
                  <p>Hardware acceleration support</p>
                  <div className={styles.layerFeatures}>
                    <span>GPU rendering</span>
                    <span>NPU acceleration</span>
                    <span>Storage acceleration</span>
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
              <h2 className={styles.conclusionTitle}>A new level of smoothness</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT's native smooth experience redefines the fluidity standard for mobile operating systems. From the underlying architecture to the upper-level interactions, every detail has been meticulously optimized to deliver an unprecedented silky-smooth experience. Here, technology and art blend perfectly to create a seamless digital life.


              </p>
              <div className={styles.fluidityBadges}>
                <span className={styles.fluidityBadge}>Fluid motion effects</span>
                <span className={styles.fluidityBadge}>Rapid response</span>
                <span className={styles.fluidityBadge}>Smart scheduling</span>
                <span className={styles.fluidityBadge}>Performance optimization</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>);

}
