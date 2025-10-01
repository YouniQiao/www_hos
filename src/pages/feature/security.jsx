import React from 'react';
import Layout from '@theme/Layout';
import styles from './harmonyos-native-security.module.css';

export default function HarmonyOSNativeSecurity() {
  return (
    <Layout
      title="HarmonyOS NEXT - 原生安全"
      description="探索HarmonyOS NEXT系统的原生安全能力，包括安全架构、数据保护、隐私安全、支付安全等全方位安全防护">
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              原生<span className={styles.highlight}>安全</span>
            </h1>
            <p className={styles.heroSubtitle}>全方位保护，安全无忧</p>
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
              <h2 className={styles.sectionTitle}>安全为本，隐私至上</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT 以原生安全为核心，构建从芯片到云端的全方位安全防护体系。
                通过微内核架构、分布式安全、隐私保护等技术，为用户数据和应用提供坚实的安全保障。
              </p>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>安全架构</h2>
              <p className={styles.sectionSubtitle}>从芯片到云端的全方位安全防护</p>
            </div>
            <div className={styles.architecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.cloudIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>云端安全</h3>
                  <p className={styles.layerDescription}>
                    云端数据加密、安全传输、访问控制
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>端云协同加密</li>
                    <li>安全传输协议</li>
                    <li>访问权限管理</li>
                  </ul>
                </div>

                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.systemIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>系统安全</h3>
                  <p className={styles.layerDescription}>
                    微内核架构、安全启动、完整性保护
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>微内核设计</li>
                    <li>安全启动链</li>
                    <li>系统完整性</li>
                  </ul>
                </div>

                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.applicationIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>应用安全</h3>
                  <p className={styles.layerDescription}>
                    应用沙箱、权限管理、代码签名
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>应用沙箱隔离</li>
                    <li>精细权限控制</li>
                    <li>代码签名验证</li>
                  </ul>
                </div>

                <div className={styles.layer}>
                  <div className={styles.layerIcon}>
                    <div className={`${styles.icon} ${styles.chipIcon}`}></div>
                  </div>
                  <h3 className={styles.layerTitle}>芯片安全</h3>
                  <p className={styles.layerDescription}>
                    硬件级加密、安全存储、可信执行环境
                  </p>
                  <ul className={styles.layerFeatures}>
                    <li>TEE可信环境</li>
                    <li>硬件加密引擎</li>
                    <li>安全密钥存储</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection - 彻底修复文字颜色 */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} ${styles.whiteText}`}>数据保护</h2>
              <p className={`${styles.sectionSubtitle} ${styles.whiteText}`}>全生命周期数据安全保护</p>
            </div>
            <div className={styles.dataProtection}>
              <div className={styles.protectionGrid}>
                <div className={styles.protectionCard}>
                  <div className={styles.protectionIcon}>
                    <div className={`${styles.icon} ${styles.encryptionIcon}`}></div>
                  </div>
                  <h3 className={`${styles.protectionTitle} ${styles.whiteText}`}>端到端加密</h3>
                  <p className={`${styles.protectionDescription} ${styles.whiteText}`}>
                    数据传输、存储、处理全过程加密，确保数据在各个环节的安全性。
                  </p>
                  <div className={styles.protectionFeatures}>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>传输加密</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>存储加密</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>处理加密</span>
                  </div>
                </div>

                <div className={styles.protectionCard}>
                  <div className={styles.protectionIcon}>
                    <div className={`${styles.icon} ${styles.privacyIcon}`}></div>
                  </div>
                  <h3 className={`${styles.protectionTitle} ${styles.whiteText}`}>隐私保护</h3>
                  <p className={`${styles.protectionDescription} ${styles.whiteText}`}>
                    最小权限原则，用户数据访问需明确授权，保护个人隐私信息。
                  </p>
                  <div className={styles.protectionFeatures}>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>数据最小化</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>透明可控</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>匿名处理</span>
                  </div>
                </div>

                <div className={styles.protectionCard}>
                  <div className={styles.protectionIcon}>
                    <div className={`${styles.icon} ${styles.backupIcon}`}></div>
                  </div>
                  <h3 className={`${styles.protectionTitle} ${styles.whiteText}`}>安全备份</h3>
                  <p className={`${styles.protectionDescription} ${styles.whiteText}`}>
                    分布式安全备份机制，确保数据不会因设备丢失或损坏而丧失。
                  </p>
                  <div className={styles.protectionFeatures}>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>分布式存储</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>加密备份</span>
                    <span className={`${styles.protectionFeature} ${styles.whiteText}`}>快速恢复</span>
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
              <h2 className={styles.sectionTitle}>安全场景</h2>
              <p className={styles.sectionSubtitle}>覆盖全场景的安全防护</p>
            </div>
            <div className={styles.scenarioGrid}>
              <div className={styles.scenarioCard}>
                <div className={styles.scenarioVisual}>
                  <div className={styles.paymentScene}></div>
                </div>
                <div className={styles.scenarioContent}>
                  <h3 className={styles.scenarioTitle}>支付安全</h3>
                  <p className={styles.scenarioDescription}>
                    基于TEE可信执行环境的支付保护，确保支付密码和交易数据的安全性。
                  </p>
                  <ul className={styles.scenarioFeatures}>
                    <li>硬件级加密</li>
                    <li>生物识别</li>
                    <li>交易风控</li>
                  </ul>
                </div>
              </div>

              <div className={styles.scenarioCard}>
                <div className={styles.scenarioContent}>
                  <h3 className={styles.scenarioTitle}>通信安全</h3>
                  <p className={styles.scenarioDescription}>
                    端到端加密通信，防止通话和消息被窃听或篡改。
                  </p>
                  <ul className={styles.scenarioFeatures}>
                    <li>端到端加密</li>
                    <li>防窃听保护</li>
                    <li>身份验证</li>
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
                  <h3 className={styles.scenarioTitle}>网络安全</h3>
                  <p className={styles.scenarioDescription}>
                    智能识别恶意网络和钓鱼网站，保护用户上网安全。
                  </p>
                  <ul className={styles.scenarioFeatures}>
                    <li>恶意网站拦截</li>
                    <li>Wi-Fi安全检测</li>
                    <li>VPN安全接入</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Protection - 彻底修复文字颜色 */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={`${styles.sectionTitle} ${styles.whiteText}`}>隐私保护</h2>
              <p className={`${styles.sectionSubtitle} ${styles.whiteText}`}>用户隐私数据的全方位保护</p>
            </div>
            <div className={styles.privacyFeatures}>
              <div className={styles.privacyGrid}>
                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>权限管理</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    精细化权限控制，应用访问敏感数据需用户明确授权。
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>应用权限</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>动态授权</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>权限审计</span>
                  </div>
                </div>

                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>位置保护</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    模糊位置信息，防止精确位置被滥用，保护行踪隐私。
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>模糊定位</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>临时授权</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>位置脱敏</span>
                  </div>
                </div>

                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>匿名标识</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    使用匿名设备标识和差分隐私技术，保护用户真实身份信息。
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>设备匿名</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>差分隐私</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>数据脱敏</span>
                  </div>
                </div>

                <div className={styles.privacyItem}>
                  <h3 className={`${styles.privacyTitle} ${styles.whiteText}`}>安全审计</h3>
                  <p className={`${styles.privacyDescription} ${styles.whiteText}`}>
                    完整的安全日志记录和行为分析，便于安全事件追溯和风险预警。
                  </p>
                  <div className={styles.privacyTags}>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>行为分析</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>风险预警</span>
                    <span className={`${styles.privacyTag} ${styles.whiteText}`}>事件追溯</span>
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
              <h2 className={styles.sectionTitle}>安全技术</h2>
              <p className={styles.sectionSubtitle}>核心技术保障系统安全</p>
            </div>
            <div className={styles.technologyGrid}>
              <div className={styles.technologyCard}>
                <h3 className={styles.technologyTitle}>微内核架构</h3>
                <p className={styles.technologyDescription}>
                  最小化内核攻击面，系统服务运行在用户态，提升系统安全性。
                </p>
                <div className={styles.technologyFeatures}>
                  <span>最小权限</span>
                  <span>服务隔离</span>
                  <span>安全增强</span>
                </div>
              </div>

              <div className={styles.technologyCard}>
                <h3 className={styles.technologyTitle}>可信执行环境</h3>
                <p className={styles.technologyDescription}>
                  硬件级安全区域，保护敏感数据和关键操作，隔离恶意软件。
                </p>
                <div className={styles.technologyFeatures}>
                  <span>硬件隔离</span>
                  <span>安全存储</span>
                  <span>加密计算</span>
                </div>
              </div>

              <div className={styles.technologyCard}>
                <h3 className={styles.technologyTitle}>分布式安全</h3>
                <p className={styles.technologyDescription}>
                  跨设备安全认证和数据保护，确保分布式环境下的端到端安全。
                </p>
                <div className={styles.technologyFeatures}>
                  <span>设备认证</span>
                  <span>安全通道</span>
                  <span>数据加密</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={styles.conclusion}>
          <div className="container">
            <div className={styles.conclusionContent}>
              <h2 className={styles.conclusionTitle}>安全可信的数字世界</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT 的原生安全能力，为用户构建了一个安全可信的数字环境。
                从芯片级安全到云端防护，从数据保护到隐私安全，每一个环节都经过精心设计，
                让用户享受科技便利的同时，无后顾之忧。
              </p>
              <div className={styles.securityBadges}>
                <span className={styles.securityBadge}>安全架构</span>
                <span className={styles.securityBadge}>数据保护</span>
                <span className={styles.securityBadge}>隐私安全</span>
                <span className={styles.securityBadge}>支付安全</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}