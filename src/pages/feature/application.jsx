import React from 'react';
import Layout from '@theme/Layout';
import styles from './harmonyos-native-apps.module.css';

export default function HarmonyOSNativeApps() {
  return (
    <Layout
      title="HarmonyOS NEXT - 原生应用"
      description="探索HarmonyOS NEXT系统的原生应用生态，包括应用发展、开发者支持、生态优势、未来规划等全方位介绍">
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              原生<span className={styles.highlight}>应用</span>
            </h1>
            <p className={styles.heroSubtitle}>生态繁荣，体验卓越</p>
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
              <h2 className={styles.sectionTitle}>原生生态，繁荣发展</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT 构建了完整的原生应用生态，汇聚全球开发者的智慧与创新。
                从社交娱乐到生产力工具，从生活服务到企业应用，原生应用生态正在快速成长，为用户提供卓越体验。
              </p>
            </div>
          </div>
        </section>

        {/* Ecological Advantages */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>生态优势</h2>
              <p className={styles.sectionSubtitle}>原生应用的技术与体验优势</p>
            </div>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <div className={`${styles.icon} ${styles.performanceIcon}`}></div>
                </div>
                <h3 className={styles.advantageTitle}>极致性能</h3>
                <p className={styles.advantageDescription}>
                  原生应用直接调用系统能力，无需中间层转换，实现最佳性能表现。
                </p>
                <div className={styles.advantageStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>60%</span>
                    <span className={styles.statLabel}>性能提升</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>50%</span>
                    <span className={styles.statLabel}>功耗降低</span>
                  </div>
                </div>
              </div>

              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <div className={`${styles.icon} ${styles.experienceIcon}`}></div>
                </div>
                <h3 className={styles.advantageTitle}>完美体验</h3>
                <p className={styles.advantageDescription}>
                  深度集成系统特性，提供无缝的动效、交互和功能体验。
                </p>
                <div className={styles.advantageStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>系统集成</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>零延迟</span>
                    <span className={styles.statLabel}>响应速度</span>
                  </div>
                </div>
              </div>

              <div className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <div className={`${styles.icon} ${styles.crossDeviceIcon}`}></div>
                </div>
                <h3 className={styles.advantageTitle}>跨端协同</h3>
                <p className={styles.advantageDescription}>
                  一次开发，多端部署，实现设备间的无缝协同和体验一致性。
                </p>
                <div className={styles.advantageStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>多端</span>
                    <span className={styles.statLabel}>统一体验</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>无缝</span>
                    <span className={styles.statLabel}>任务流转</span>
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
              <h2 className={styles.sectionTitle}>生态发展现状</h2>
              <p className={styles.sectionSubtitle}>快速成长的应用生态系统</p>
            </div>
            <div className={styles.ecologicalDevelopment}>
              <div className={styles.developmentStats}>
                <div className={styles.statCard}>
                  <div className={styles.statVisual}>
                    <div className={styles.appCountAnimation}></div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statTitle}>30000+</h3>
                    <p className={styles.statDescription}>原生应用数量</p>
                    <div className={styles.growthIndicator}>
                      <span className={styles.growthArrow}>↑</span>
                      <span>月度增长 15%</span>
                    </div>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statVisual}>
                    <div className={styles.developerAnimation}></div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statTitle}>1000万+</h3>
                    <p className={styles.statDescription}>注册开发者</p>
                    <div className={styles.growthIndicator}>
                      <span className={styles.growthArrow}>↑</span>
                      <span>年度增长 200%</span>
                    </div>
                  </div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statVisual}>
                    <div className={styles.categoryAnimation}></div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statTitle}>27个</h3>
                    <p className={styles.statDescription}>应用分类覆盖</p>
                    <div className={styles.growthIndicator}>
                      <span className={styles.growthArrow}>↑</span>
                      <span>持续扩展中</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.categoryBreakdown}>
                <h3 className={styles.breakdownTitle}>应用分类分布</h3>
                <div className={styles.categoryGrid}>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>社交娱乐</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{width: '85%'}}></div>
                    </div>
                    <span className={styles.categoryPercent}>85%</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>生产力工具</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{width: '78%'}}></div>
                    </div>
                    <span className={styles.categoryPercent}>78%</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>生活服务</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{width: '92%'}}></div>
                    </div>
                    <span className={styles.categoryPercent}>92%</span>
                  </div>
                  <div className={styles.categoryItem}>
                    <span className={styles.categoryName}>游戏</span>
                    <div className={styles.categoryBar}>
                      <div className={styles.categoryFill} style={{width: '65%'}}></div>
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
              <h2 className={styles.sectionTitle}>开发者支持</h2>
              <p className={styles.sectionSubtitle}>全方位赋能应用开发</p>
            </div>
            <div className={styles.developerSupport}>
              <div className={styles.supportGrid}>
                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.toolkitIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>开发工具</h3>
                  <p className={styles.supportDescription}>
                    完整的开发工具链，包括IDE、模拟器、调试工具等，提升开发效率。
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>DevEco Studio</li>
                    <li>实时预览</li>
                    <li>一键调试</li>
                  </ul>
                </div>

                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.frameworkIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>开发框架</h3>
                  <p className={styles.supportDescription}>
                    ArkUI开发框架，声明式UI，状态管理，让开发更简单高效。
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>ArkUI框架</li>
                    <li>声明式开发</li>
                    <li>状态管理</li>
                  </ul>
                </div>

                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.resourceIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>资源支持</h3>
                  <p className={styles.supportDescription}>
                    丰富的开发文档、示例代码、设计资源，降低开发门槛。
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>完整文档</li>
                    <li>代码示例</li>
                    <li>设计系统</li>
                  </ul>
                </div>

                <div className={styles.supportCard}>
                  <div className={styles.supportIcon}>
                    <div className={`${styles.icon} ${styles.ecosystemIcon}`}></div>
                  </div>
                  <h3 className={styles.supportTitle}>生态服务</h3>
                  <p className={styles.supportDescription}>
                    应用分发、数据分析、商业化支持，助力应用成功。
                  </p>
                  <ul className={styles.supportFeatures}>
                    <li>应用市场</li>
                    <li>数据分析</li>
                    <li>商业化</li>
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
              <h2 className={styles.sectionTitle}>合作伙伴</h2>
              <p className={styles.sectionSubtitle}>共建繁荣应用生态</p>
            </div>
            <div className={styles.partnerEcosystem}>
              <div className={styles.partnerGrid}>
                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>互联网巨头</h3>
                  <p className={styles.partnerDescription}>
                    与主流互联网企业深度合作，推动核心应用原生适配。
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>微信</div>
                    <div className={styles.logoItem}>支付宝</div>
                    <div className={styles.logoItem}>抖音</div>
                    <div className={styles.logoItem}>淘宝</div>
                  </div>
                </div>

                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>金融服务</h3>
                  <p className={styles.partnerDescription}>
                    银行、证券、保险等金融机构全面接入，保障金融安全。
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>工商银行</div>
                    <div className={styles.logoItem}>招商银行</div>
                    <div className={styles.logoItem}>平安证券</div>
                    <div className={styles.logoItem}>中国人保</div>
                  </div>
                </div>

                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>生活服务</h3>
                  <p className={styles.partnerDescription}>
                    覆盖出行、外卖、旅游等生活服务领域，便捷日常生活。
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>滴滴出行</div>
                    <div className={styles.logoItem}>美团</div>
                    <div className={styles.logoItem}>携程</div>
                    <div className={styles.logoItem}>饿了么</div>
                  </div>
                </div>

                <div className={styles.partnerCategory}>
                  <h3 className={styles.partnerTitle}>内容生态</h3>
                  <p className={styles.partnerDescription}>
                    视频、音乐、阅读等内容平台，丰富用户娱乐体验。
                  </p>
                  <div className={styles.partnerLogos}>
                    <div className={styles.logoItem}>腾讯视频</div>
                    <div className={styles.logoItem}>爱奇艺</div>
                    <div className={styles.logoItem}>网易云音乐</div>
                    <div className={styles.logoItem}>起点阅读</div>
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
              <h2 className={styles.sectionTitle}>未来展望</h2>
              <p className={styles.sectionSubtitle}>构建万物互联的应用生态</p>
            </div>
            <div className={styles.futureOutlook}>
              <div className={styles.outlookContent}>
                <div className={styles.outlookVisual}>
                  <div className={styles.ecosystemMap}></div>
                </div>
                <div className={styles.outlookText}>
                  <h3 className={styles.outlookTitle}>全场景智慧生态</h3>
                  <p className={styles.outlookDescription}>
                    未来，HarmonyOS NEXT 将构建覆盖手机、平板、智慧屏、穿戴设备、
                    车载系统等全场景的智慧应用生态，实现真正的万物互联。
                  </p>
                  <div className={styles.outlookGoals}>
                    <div className={styles.goalItem}>
                      <span className={styles.goalNumber}>1000000+</span>
                      <span className={styles.goalText}>原生应用目标</span>
                    </div>
                    <div className={styles.goalItem}>
                      <span className={styles.goalNumber}>2000万+</span>
                      <span className={styles.goalText}>开发者规模</span>
                    </div>
                    <div className={styles.goalItem}>
                      <span className={styles.goalNumber}>全场景</span>
                      <span className={styles.goalText}>生态覆盖</span>
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
              <h2 className={styles.conclusionTitle}>共创应用生态新纪元</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT 的原生应用生态正在快速发展，汇聚全球开发者的智慧与创新。
                我们致力于构建一个开放、共赢的应用生态系统，为用户提供卓越体验，
                为开发者创造无限可能。加入我们，共同开启万物互联的智慧新时代。
              </p>
              <div className={styles.ecosystemBadges}>
                <span className={styles.ecosystemBadge}>原生应用</span>
                <span className={styles.ecosystemBadge}>开发者生态</span>
                <span className={styles.ecosystemBadge}>跨端协同</span>
                <span className={styles.ecosystemBadge}>万物互联</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}