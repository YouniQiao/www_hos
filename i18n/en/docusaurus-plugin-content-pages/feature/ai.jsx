import React from 'react';
import Layout from '@theme/Layout';
import styles from "@site/src/pages/feature/harmonyos-native-intelligence.module.css";

export default function HarmonyOSNativeIntelligence() {
  return (
    <Layout
      title="HarmonyOS - Native Intelligence"
      description="Explore the native intelligence of HarmonyOS and experience Celia's innovative features in voice interaction, scenario awareness, and smart recommendations.">

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Native <span className={styles.highlight}>Intelligent</span>
            </h1>
            <p className={styles.heroSubtitle}>Celia, knows what you need.</p>
            <div className={styles.heroAnimation}>
              <div className={styles.aiCore}></div>
              <div className={styles.pulseRing}></div>
              <div className={styles.pulseRing}></div>
              <div className={styles.pulseRing}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Smart companion, proactive service.</h2>
              <p className={styles.sectionText}>
                HarmonyOS is built around native intelligence, making Celia your thoughtful digital assistant. Powered by advanced AI, Celia understands context, perceives scenarios, and anticipates needs, delivering an unprecedented intelligent experience.

              </p>
            </div>
          </div>
        </section>

        {/* Voice Interaction */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Natural Voice Interaction</h2>
              <p className={styles.sectionSubtitle}>A voice assistant that understands you better, conversing as naturally as a friend.</p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.voiceIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Continuous conversation</h3>
                <p className={styles.cardDescription}>
                  No need to wake repeatedly - you can issue multiple commands in one conversation, and Celia understands context.
                </p>
                <ul className={styles.featureList}>
                  <li>Contextual Memory</li>
                  <li>Multi-turn conversation</li>
                  <li>Coreference Resolution</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.understandingIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Semantic understanding</h3>
                <p className={styles.cardDescription}>
                  Deeply understands natural language, handles complex commands and vague expressions, and accurately captures user intent.
                </p>
                <ul className={styles.featureList}>
                  <li>Intent Recognition</li>
                  <li>Sentiment Analysis</li>
                  <li>Semantic parsing</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.multimodalIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Multimodal Interaction</h3>
                <p className={styles.cardDescription}>
                  Combines voice, vision, gestures, and other interaction methods to deliver the most suitable experience in different scenarios.
                </p>
                <ul className={styles.featureList}>
                  <li>Voice + Vision</li>
                  <li>Gesture control</li>
                  <li>Context Awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scene Perception */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Smart Scene Perception</h2>
              <p className={styles.sectionSubtitle}>Proactively senses the environment and anticipates user needs.</p>
            </div>
            <div className={styles.sceneGrid}>
              <div className={styles.sceneCard}>
                <div className={styles.sceneVisual}>
                  <div className={styles.officeScene}></div>
                </div>
                <div className={styles.sceneContent}>
                  <h3 className={styles.sceneTitle}>Work Scenarios</h3>
                  <p className={styles.sceneDescription}>
                    Detects that you're in work mode, automatically enables Do Not Disturb, organizes meeting schedules, and reminds you of important matters.
                  </p>
                  <div className={styles.sceneFeatures}>
                    <span className={styles.sceneFeature}>Meeting reminder</span>
                    <span className={styles.sceneFeature}>Document recommendation</span>
                    <span className={styles.sceneFeature}>Focus mode</span>
                  </div>
                </div>
              </div>

              <div className={styles.sceneCard}>
                <div className={styles.sceneContent}>
                  <h3 className={styles.sceneTitle}>Travel scenarios</h3>
                  <p className={styles.sceneDescription}>
                    Automatically plans routes based on your itinerary, pushes real-time traffic updates, and recommends services along the way.
                  </p>
                  <div className={styles.sceneFeatures}>
                    <span className={styles.sceneFeature}>Route planning</span>
                    <span className={styles.sceneFeature}>Traffic Alerts</span>
                    <span className={styles.sceneFeature}>Service recommendation</span>
                  </div>
                </div>
                <div className={styles.sceneVisual}>
                  <div className={styles.travelScene}></div>
                </div>
              </div>

              <div className={styles.sceneCard}>
                <div className={styles.sceneVisual}>
                  <div className={styles.homeScene}></div>
                </div>
                <div className={styles.sceneContent}>
                  <h3 className={styles.sceneTitle}>Home scenarios</h3>
                  <p className={styles.sceneDescription}>
                    Senses family members' status, automatically adjusts the home environment, and creates a comfortable living space.
                  </p>
                  <div className={styles.sceneFeatures}>
                    <span className={styles.sceneFeature}>Environment Adjustment</span>
                    <span className={styles.sceneFeature}>Device linkage</span>
                    <span className={styles.sceneFeature}>Scenario mode</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Recommendation */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Personalized smart recommendations.</h2>
              <p className={styles.sectionSubtitle}>Precise content recommendations based on deep learning.</p>
            </div>
            <div className={styles.recommendation}>
              <div className={styles.recommendationEngine}>
                <div className={styles.engineVisual}>
                  <div className={styles.aiBrain}></div>
                </div>
                <div className={styles.engineContent}>
                  <h3 className={styles.engineTitle}>Smart Recommendation Engine</h3>
                  <p className={styles.engineDescription}>
                    Provides unique personalized recommendations for each user based on behavior analysis, interest modeling, and contextual awareness.
                  </p>
                  <div className={styles.recommendationAreas}>
                    <div className={styles.recommendationArea}>
                      <h4>Content Recommendation</h4>
                      <p>Smart matching of news, videos, music, and more.</p>
                    </div>
                    <div className={styles.recommendationArea}>
                      <h4>Service recommendation</h4>
                      <p>Scenario-based smart recommendations for nearby services.</p>
                    </div>
                    <div className={styles.recommendationArea}>
                      <h4>App recommendations</h4>
                      <p>Recommends relevant apps based on usage habits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Control */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Smart Device Control</h2>
              <p className={styles.sectionSubtitle}>Control all smart home devices with a single command.</p>
            </div>
            <div className={styles.controlGrid}>
              <div className={styles.controlCard}>
                <div className={styles.controlIcon}>
                  <div className={`${styles.icon} ${styles.homeControlIcon}`}></div>
                </div>
                <h3 className={styles.controlTitle}>Smart home</h3>
                <p className={styles.controlDescription}>
                  "Celia, turn on the living room lights and set them to cozy mode" - control all smart home devices with a single command.
                </p>
              </div>

              <div className={styles.controlCard}>
                <div className={styles.controlIcon}>
                  <div className={`${styles.icon} ${styles.officeControlIcon}`}></div>
                </div>
                <h3 className={styles.controlTitle}>Office devices</h3>
                <p className={styles.controlDescription}>
                  "Celia, connect to the printer and print today's meeting materials" - intelligently recognizes and controls office devices.
                </p>
              </div>

              <div className={styles.controlCard}>
                <div className={styles.controlIcon}>
                  <div className={`${styles.icon} ${styles.carControlIcon}`}></div>
                </div>
                <h3 className={styles.controlTitle}>In-car system</h3>
                <p className={styles.controlDescription}>
                  "Celia, navigate to the office and play today's news" - seamlessly connects with the in-car smart system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Technology */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>AI Technology Architecture</h2>
              <p className={styles.sectionSubtitle}>Device-cloud collaborative intelligent computing framework.</p>
            </div>
            <div className={styles.technologyArchitecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Application Layer</h4>
                  <p>Smart Scene Applications</p>
                  <div className={styles.layerFeatures}>
                    <span>Voice assistant</span>
                    <span>Smart recommendations</span>
                    <span>Scene awareness</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Capability Layer</h4>
                  <p>AI Core Capabilities</p>
                  <div className={styles.layerFeatures}>
                    <span>Natural Language Processing</span>
                    <span>Computer Vision</span>
                    <span>Machine learning</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Framework Layer</h4>
                  <p>AI Computing Framework</p>
                  <div className={styles.layerFeatures}>
                    <span>MindSpore</span>
                    <span>Distributed Learning</span>
                    <span>Device-Cloud Synergy</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Chip Layer</h4>
                  <p>Hardware acceleration</p>
                  <div className={styles.layerFeatures}>
                    <span>NPU Neural Network</span>
                    <span>AI Computing Power Optimization</span>
                    <span>Energy management</span>
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
              <h2 className={styles.conclusionTitle}>New Smart Living Experience</h2>
              <p className={styles.conclusionText}>
                Celia is more than a voice assistant - it's a smart companion that understands your needs. With HarmonyOS's native intelligence, Celia provides thoughtful services in every aspect of your life, making technology truly serve people.

              </p>
              <div className={styles.intelligenceBadges}>
                <span className={styles.intelligenceBadge}>Voice interaction</span>
                <span className={styles.intelligenceBadge}>Scene awareness</span>
                <span className={styles.intelligenceBadge}>Smart recommendations</span>
                <span className={styles.intelligenceBadge}>Device Control</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>);

}
