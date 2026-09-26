import React from 'react';
import Layout from '@theme/Layout';
import styles from "@site/src/pages/feature/harmonyos-native-security.module.css";

export default function HarmonyOSNativeSecurity() {
  return (
    <Layout
      title="HarmonyOS - Native Security"
      description="Explore the native security capabilities of HarmonyOS, including security architecture, data protection, privacy security, payment security, and other comprehensive security protections.">

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Native <span className={styles.highlight}>Security</span>
            </h1>
            <p className={styles.heroSubtitle}>Comprehensive protection, worry-free security</p>
            <div className={styles.heroAnimation}>
              <div className={styles.securityGrid}></div>
              <div className={styles.lockElement}></div>
              <div className={styles.shieldElement}></div>
              <div className={styles.keyElement}></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Security first, privacy above all</h2>
              <p className={styles.sectionText}>
                HarmonyOS is built around native security, establishing a comprehensive security protection system from chip to cloud. Through microkernel architecture, distributed security, and privacy protection technologies, it provides solid security for user data and applications.

              </p>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Security architecture</h2>
              <p className={styles.sectionSubtitle}>Comprehensive security protection from chip to cloud</p>
            </div>
            <div className={styles.architecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.cloudIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>Cloud security</h3>
                  <p className={styles.layerDescription}>
                    Cloud data encryption, secure transmission, access control
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>Device-cloud collaborative encryption</li>
                    <li>Secure transmission protocol</li>
                    <li>Access permission management</li>
                  </ul>
                </div>

                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.systemIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>System security</h3>
                  <p className={styles.layerDescription}>
                    Microkernel architecture, secure boot, integrity protection
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>Microkernel design</li>
                    <li>Secure boot chain</li>
                    <li>System integrity</li>
                  </ul>
                </div>

                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.applicationIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>App security</h3>
                  <p className={styles.layerDescription}>
                    App sandbox, permission management, code signing
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>App sandbox isolation</li>
                    <li>Fine-grained permission control</li>
                    <li>Code signature verification</li>
                  </ul>
                </div>

                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.chipIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>Chip security</h3>
                  <p className={styles.layerDescription}>
                    Hardware-level encryption, secure storage, trusted execution environment
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>TEE trusted environment</li>
                    <li>Hardware encryption engine</li>
                    <li>Secure key storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection - Thoroughly fix text color */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} ${styles.whiteText}`}>Data protection</h2>
              <p className={`${styles.sectionSubtitle} ${styles.whiteText}`}>Full-lifecycle data security protection</p>
            </div>
            <div className={styles.dataProtection}>
              <div className={styles.protectionGrid}>
                <div className={styles.protectionCard}>
                  <div className={styles.protectionIcon}>
                    <div className={`${styles.icon} ${styles.encryptionIcon}`}></div>
                  </div>
                  <h3 className={`${styles.protectionTitle} ${styles.whiteText}`}>End-to-end encryption</h3>
                  <p className={`${styles.protectionDescription} ${styles.whiteText}`}>
                    End-to-end encryption across data transmission, storage, and processing ensures data security at every stage.
                  </p>
                  <div className={styles.protectionFeatures}>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Encrypted transmission</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Storage encryption</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Encrypted processing</span>
                  </div>
                </div>

                <div className={styles.protectionCard}>
                  <div className={styles.protectionIcon}>
                    <div className={`${styles.icon} ${styles.privacyIcon}`}></div>
                  </div>
                  <h3 className={`${styles.protectionTitle} ${styles.whiteText}`}>Privacy protection</h3>
                  <p className={`${styles.protectionDescription} ${styles.whiteText}`}>
                    Least-privilege principle: user data access requires explicit authorization to protect personal privacy.
                  </p>
                  <div className={styles.protectionFeatures}>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Data minimization</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Transparent and controllable</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Anonymization</span>
                  </div>
                </div>

                <div className={styles.protectionCard}>
                  <div className={styles.protectionIcon}>
                    <div className={`${styles.icon} ${styles.backupIcon}`}></div>
                  </div>
                  <h3 className={`${styles.protectionTitle} ${styles.whiteText}`}>Secure backup</h3>
                  <p className={`${styles.protectionDescription} ${styles.whiteText}`}>
                    Distributed secure backup mechanism ensures data is not lost due to device loss or damage.
                  </p>
                  <div className={styles.protectionFeatures}>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Distributed storage</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Encrypted backup</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>Quick recovery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Scenarios */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Security scenarios</h2>
              <p className={styles.sectionSubtitle}>All-scenario security protection</p>
            </div>
            <div className={styles.scenarioGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioVisual}>
                  <div className={styles.paymentScene}></div>
                </div>
                <div className={styles.scenarioContent}>
                  <h3 className={styles.scenarioTitle}>Payment security</h3>
                  <p className={styles.scenarioDescription}>
                    Payment protection based on the TEE trusted execution environment ensures the security of payment passwords and transaction data.
                  </p>
                  <ul className={styles.scenarioFeatures}>
                    <li>Hardware-level encryption</li>
                    <li>Biometric recognition</li>
                    <li>Transaction risk control</li>
                  </ul>
                </div>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioContent}>
                  <h3 className={styles.scenarioTitle}>Communication security</h3>
                  <p className={styles.scenarioDescription}>
                    End-to-end encrypted communication prevents calls and messages from being eavesdropped on or tampered with.
                  </p>
                  <ul className={styles.scenarioFeatures}>
                    <li>End-to-end encryption</li>
                    <li>Anti-eavesdropping protection</li>
                    <li>Identity verification</li>
                  </ul>
                </div>
                <div className={styles.scenarioVisual}>
                  <div className={styles.communicationScene}></div>
                </div>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioVisual}>
                  <div className={styles.networkScene}></div>
                </div>
                <div className={styles.scenarioContent}>
                  <h3 className={styles.scenarioTitle}>Network security</h3>
                  <p className={styles.scenarioDescription}>
                    Intelligently identifies malicious networks and phishing websites to keep users safe online.
                  </p>
                  <ul className={styles.scenarioFeatures}>
                    <li>Malicious website blocking</li>
                    <li>Wi-Fi security detection</li>
                    <li>VPN secure access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Protection - Thoroughly fix text color */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} ${styles.whiteText}`}>Privacy protection</h2>
              <p className={`${styles.sectionSubtitle} ${styles.whiteText}`}>Comprehensive protection of user privacy data</p>
            </div>
            <div className={styles.privacyFeatures}>
              <div className={styles.privacyGrid}>
                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>Permission management</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    Fine-grained permission control requires explicit user authorization for apps to access sensitive data.
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>App permissions</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Dynamic authorization</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Permission audit</span>
                  </div>
                </div>

                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>Location protection</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    Blurred location information prevents precise location from being misused and protects location privacy.
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Fuzzy location</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Temporary authorization</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Location masking</span>
                  </div>
                </div>

                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>Anonymous identifier</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    Anonymous device identifiers and differential privacy protect users' real identity information.
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Device anonymity</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Differential privacy</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Data masking</span>
                  </div>
                </div>

                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>Security audit</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    Complete security logging and behavior analysis enable security event tracing and risk alerts.
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Behavior analysis</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Risk warning</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>Event tracing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Technology */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Security technology</h2>
              <p className={styles.sectionSubtitle}>Core technology ensures system security</p>
            </div>
            <div className={styles.technologyGrid}>
              <div className={styles.technologyCard}>
                <h3 className={styles.technologyTitle}>Microkernel architecture</h3>
                <p className={styles.technologyDescription}>
                  Minimized kernel attack surface; system services run in user mode to enhance system security.
                </p>
                <div className={styles.technologyFeatures}>
                  <span>Least privilege</span>
                  <span>Service isolation</span>
                  <span>Enhanced security</span>
                </div>
              </div>

              <div className={styles.technologyCard}>
                <h3 className={styles.technologyTitle}>Trusted execution environment</h3>
                <p className={styles.technologyDescription}>
                  Hardware-level secure zone protects sensitive data and critical operations while isolating malware.
                </p>
                <div className={styles.technologyFeatures}>
                  <span>Hardware isolation</span>
                  <span>Secure storage</span>
                  <span>Encrypted computing</span>
                </div>
              </div>

              <div className={styles.technologyCard}>
                <h3 className={styles.technologyTitle}>Distributed security</h3>
                <p className={styles.technologyDescription}>
                  Cross-device security authentication and data protection ensure end-to-end security in distributed environments.
                </p>
                <div className={styles.technologyFeatures}>
                  <span>Device authentication</span>
                  <span>Secure channel</span>
                  <span>Data encryption</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusion}>
          <div className="container">
            <div className={styles.conclusionContent}>
              <h2 className={styles.conclusionTitle}>A secure and trusted digital world</h2>
              <p className={styles.conclusionText}>
                HarmonyOS's native security capabilities create a secure and trusted digital environment for users. From chip-level security to cloud protection, from data protection to privacy security, every aspect is carefully designed so users can enjoy the convenience of technology without worry.


              </p>
              <div className={styles.securityBadges}>
                <span className={styles.securityBadge}>Security architecture</span>
                <span className={styles.securityBadge}>Data protection</span>
                <span className={styles.securityBadge}>Privacy security</span>
                <span className={styles.securityBadge}>Payment security</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>);

}
