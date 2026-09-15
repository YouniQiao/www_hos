import React from 'react';
import Layout from '@theme/Layout';
import styles from "@site/src/pages/feature/harmonyos-next.module.css";

export default function HarmonyOSNext() {
  return (
    <Layout
      title="HarmonyOS NEXT - Natively Refined"
      description="Explore the natively refined features of HarmonyOS NEXT, including a unified design language, fluid motion, refined visuals, and innovative interactions.">

      <main className={styles.main}>
        {/* Hero Section - update style to match other pages */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Native <span className={styles.highlight}>Exquisite</span>
            </h1>
            <p className={styles.heroSubtitle}>Experience innovation, beauty in details</p>
            <div className={styles.heroAnimation}>
              <div className={styles.designElement}></div>
              <div className={styles.designElement}></div>
              <div className={styles.designElement}></div>
              <div className={styles.connectionLines}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Natively refined, defining the future experience</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT embraces a natively refined design philosophy to deliver a unified, fluid, and intelligent OS experience. From visuals to interactions, every detail is meticulously polished.

              </p>
            </div>
          </div>
        </section>

        {/* Design Language */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.featureGrid}>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Unified design language</h3>
                <p className={styles.featureDescription}>
                  Based on the Harmony Design system, it builds a consistent design language across devices. A unified color system, standardized spacing, and coordinated corner radii ensure apps deliver perfect visual consistency across different devices.

                </p>
                <ul className={styles.featureList}>
                  <li>Adaptive layout system</li>
                  <li>Unified component library</li>
                  <li>Cross-device visual consistency</li>
                  <li>Accessibility design support</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.designVisual}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Effects */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={`${styles.featureGrid} ${styles.reverse}`}>
              <div className={styles.featureVisual}>
                <div className={styles.animationVisual}></div>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Fluid, natural motion</h3>
                <p className={styles.featureDescription}>
                  Physics-based motion design makes every interaction silky smooth. Carefully crafted transition animations and micro-interaction feedback deliver an immersive experience.

                </p>
                <ul className={styles.featureList}>
                  <li>Physics-engine-driven animations</li>
                  <li>Intelligent transition effects</li>
                  <li>Refined micro-interactions</li>
                  <li>Performance-optimized rendering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Style */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.featureGrid}>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Refined visual style</h3>
                <p className={styles.featureDescription}>
                  Minimalism meets modern aesthetics — refined icon design, elegant typography, and delicate material textures create a high-end tech visual feel.

                </p>
                <ul className={styles.featureList}>
                  <li>Modern icon system</li>
                  <li>Elegant typographic hierarchy</li>
                  <li>Refined material effects</li>
                  <li>Tech-forward visual elements</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.visualStyle}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Innovation */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={`${styles.featureGrid} ${styles.reverse}`}>
              <div className={styles.featureVisual}>
                <div className={styles.interactionVisual}></div>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Innovative interaction experience</h3>
                <p className={styles.featureDescription}>
                  Breaking through traditional interaction patterns, it introduces smart prediction, gesture controls, voice interaction, and other innovations that make devices understand you better and feel more intuitive.

                </p>
                <ul className={styles.featureList}>
                  <li>Intelligent predictive interaction</li>
                  <li>Multimodal interaction support</li>
                  <li>Context-aware features</li>
                  <li>Accessibility interaction optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusion}>
          <div className="container">
            <div className={styles.conclusionContent}>
              <h2 className={styles.conclusionTitle}>Opening a new chapter of native refinement</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT is more than an operating system — it is a relentless pursuit of the perfect experience. From design language to interaction innovation, every detail reflects a deep understanding of user needs and the ultimate display of technical strength.

              </p>
              <div className={styles.techBadges}>
                <span className={styles.techBadge}>Unified design</span>
                <span className={styles.techBadge}>Smooth animations</span>
                <span className={styles.techBadge}>Exquisite visuals</span>
                <span className={styles.techBadge}>Innovative interaction</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>);

}
