import React from 'react';
import Layout from '@theme/Layout';
import styles from "@site/src/pages/feature/harmonyos-native-connectivity.module.css";

export default function HarmonyOSNativeConnectivity() {
  return (
    <Layout
      title="HarmonyOS NEXT - Native Interconnectivity"
      description="Explore the native interconnectivity capabilities of HarmonyOS NEXT, including cross-device collaboration, unified media control, and instant sharing.">

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Native <span className={styles.highlight}>Interconnect</span>
            </h1>
            <p className={styles.heroSubtitle}>Cross-device collaboration, seamless connection</p>
            <div className={styles.heroAnimation}>
              <div className={styles.connectionNode}></div>
              <div className={styles.connectionNode}></div>
              <div className={styles.connectionNode}></div>
              <div className={styles.connectionNode}></div>
              <div className={styles.connectionLines}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Connecting everything, smart collaboration</h2>
              <p className={styles.sectionText}>
                With native interconnectivity at its core, HarmonyOS NEXT breaks down device boundaries to build a unified digital world. Phones, tablets, PCs, HUAWEI Vision, and other devices work together to create a seamless cross-device experience.

              </p>
            </div>
          </div>
        </section>

        {/* Cross-Device Collaboration */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Cross-device collaboration</h2>
              <p className={styles.sectionSubtitle}>Deep multi-device integration with free-flowing tasks</p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.flowIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Task continuity</h3>
                <p className={styles.cardDescription}>
                  Ongoing tasks can seamlessly continue across devices—from phone to tablet, work never stops.
                </p>
                <ul className={styles.featureList}>
                  <li>App state sync</li>
                  <li>Automatic content migration</li>
                  <li>Real-time progress saving</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.multiScreenIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Multi-screen collaboration</h3>
                <p className={styles.cardDescription}>
                  Project your phone screen to a tablet or PC for cross-device file drag-and-drop and shared keyboard and mouse.
                </p>
                <ul className={styles.featureList}>
                  <li>Extended screen display</li>
                  <li>Cross-device file management</li>
                  <li>Hardware capability sharing</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.unifiedIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>Unified ecosystem</h3>
                <p className={styles.cardDescription}>
                  Develop once, deploy across devices. Apps automatically adapt to different device forms for a consistent experience.
                </p>
                <ul className={styles.featureList}>
                  <li>Adaptive UI framework</li>
                  <li>Distributed capabilities</li>
                  <li>Ecosystem consistency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Media Control */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Unified playback control</h2>
              <p className={styles.sectionSubtitle}>Smart audio/video flow across devices</p>
            </div>
            <div className={styles.mediaControl}>
              <div className={styles.mediaDevices}>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>Phone</span>
                </div>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>Tablet</span>
                </div>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>HUAWEI Vision</span>
                </div>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>Speaker</span>
                </div>
              </div>
              <div className={styles.controlCenter}>
                <div className={styles.controlPanel}>
                  <h3 className={styles.controlTitle}>Smart playback control center</h3>
                  <p className={styles.controlDescription}>
                    The system intelligently recognizes scenarios, recommends the best playback device, and switches audio/video output with one tap.
                  </p>
                  <div className={styles.controlFeatures}>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>Automatic device discovery</span>
                    </div>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>Playback state sync</span>
                    </div>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>Unified volume control</span>
                    </div>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>Shared playlist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Sharing */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Share anytime</h2>
              <p className={styles.sectionSubtitle}>Minimalist sharing experience with fast content flow</p>
            </div>
            <div className={styles.sharingGrid}>
              <div className={styles.sharingFeature}>
                <div className={styles.sharingVisual}>
                  <div className={styles.shareAnimation}></div>
                </div>
                <div className={styles.sharingText}>
                  <h3 className={styles.sharingTitle}>One-tap transfer</h3>
                  <p className={styles.sharingDescription}>
                    Tap devices together to transfer files instantly. No complex setup—just enjoy blazing-fast sharing.
                  </p>
                </div>
              </div>

              <div className={styles.sharingFeature}>
                <div className={styles.sharingText}>
                  <h3 className={styles.sharingTitle}>Shared clipboard</h3>
                  <p className={styles.sharingDescription}>
                    Copy on one device, paste on another. Share text, images, and files freely.
                  </p>
                </div>
                <div className={styles.sharingVisual}>
                  <div className={styles.clipboardAnimation}></div>
                </div>
              </div>

              <div className={styles.sharingFeature}>
                <div className={styles.sharingVisual}>
                  <div className={styles.cloudAnimation}></div>
                </div>
                <div className={styles.sharingText}>
                  <h3 className={styles.sharingTitle}>Cloud-device collaboration</h3>
                  <p className={styles.sharingDescription}>
                    Based on a distributed file system, all devices access the same file view with automatic edit sync.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Architecture */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Distributed technology architecture</h2>
              <p className={styles.sectionSubtitle}>Based on HarmonyOS's distributed soft bus technology, enabling low-latency, high-bandwidth communication between devices.</p>
            </div>
            <div className={styles.architecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Application layer</h4>
                  <p>Cross-device app ecosystem</p>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Framework layer</h4>
                  <p>Distributed capability framework</p>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Service layer</h4>
                  <p>Distributed data management</p>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>Kernel layer</h4>
                  <p>Distributed Soft Bus</p>
                </div>
              </div>
              <div className={styles.architectureVisual}>
                <div className={styles.architectureDiagram}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusion}>
          <div className="container">
            <div className={styles.conclusionContent}>
              <h2 className={styles.conclusionTitle}>Connectivity creates value</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT's native interconnectivity turns devices from isolated individuals into a smart, collaborative whole. From personal devices to smart home, from office scenarios to entertainment experiences, connectivity makes everything simpler and smarter.

              </p>
              <div className={styles.interconnectBadges}>
                <span className={styles.interconnectBadge}>Cross-device collaboration</span>
                <span className={styles.interconnectBadge}>Unified playback control</span>
                <span className={styles.interconnectBadge}>Share anytime</span>
                <span className={styles.interconnectBadge}>Distributed architecture</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>);

}
