import React from 'react';
import Layout from '@theme/Layout';
import styles from './harmonyos-native-connectivity.module.css';

export default function HarmonyOSNativeConnectivity() {
  return (
    <Layout
      title="HarmonyOS NEXT - 原生互联"
      description="探索HarmonyOS NEXT系统的原生互联能力，包括跨端协同、统一播控、随时分享等创新功能">
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              原生<span className={styles.highlight}>互联</span>
            </h1>
            <p className={styles.heroSubtitle}>跨端协同，无缝连接</p>
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
              <h2 className={styles.sectionTitle}>万物互联，智慧协同</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT 以原生互联为核心，打破设备边界，构建统一的数字世界。
                让手机、平板、电脑、智慧屏等设备协同工作，创造无缝的跨端体验。
              </p>
            </div>
          </div>
        </section>

        {/* Cross-Device Collaboration */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>跨端协同</h2>
              <p className={styles.sectionSubtitle}>多设备深度融合，任务自由流转</p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.flowIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>任务接续</h3>
                <p className={styles.cardDescription}>
                  正在进行的任务可在不同设备间无缝接续，从手机到平板，工作不停歇。
                </p>
                <ul className={styles.featureList}>
                  <li>应用状态同步</li>
                  <li>内容自动迁移</li>
                  <li>进度实时保存</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.multiScreenIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>多屏协同</h3>
                <p className={styles.cardDescription}>
                  手机屏幕可投射到平板或电脑，实现跨设备文件拖拽、键盘鼠标共享。
                </p>
                <ul className={styles.featureList}>
                  <li>屏幕扩展显示</li>
                  <li>跨设备文件管理</li>
                  <li>硬件能力共享</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.unifiedIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>统一生态</h3>
                <p className={styles.cardDescription}>
                  一次开发，多端部署，应用自动适配不同设备形态，提供一致体验。
                </p>
                <ul className={styles.featureList}>
                  <li>自适应UI框架</li>
                  <li>分布式能力</li>
                  <li>生态一致性</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Media Control */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>统一播控</h2>
              <p className={styles.sectionSubtitle}>音视频内容在多设备间智能流转</p>
            </div>
            <div className={styles.mediaControl}>
              <div className={styles.mediaDevices}>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>手机</span>
                </div>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>平板</span>
                </div>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>智慧屏</span>
                </div>
                <div className={styles.mediaDevice}>
                  <div className={styles.deviceScreen}></div>
                  <span className={styles.deviceName}>音箱</span>
                </div>
              </div>
              <div className={styles.controlCenter}>
                <div className={styles.controlPanel}>
                  <h3 className={styles.controlTitle}>智能播控中心</h3>
                  <p className={styles.controlDescription}>
                    系统智能识别场景，推荐最佳播放设备，一键切换音视频输出。
                  </p>
                  <div className={styles.controlFeatures}>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>设备自动发现</span>
                    </div>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>播放状态同步</span>
                    </div>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>音量统一调节</span>
                    </div>
                    <div className={styles.controlFeature}>
                      <span className={styles.featureDot}></span>
                      <span>播放列表共享</span>
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
              <h2 className={styles.sectionTitle}>随时分享</h2>
              <p className={styles.sectionSubtitle}>极简分享体验，内容快速流转</p>
            </div>
            <div className={styles.sharingGrid}>
              <div className={styles.sharingFeature}>
                <div className={styles.sharingVisual}>
                  <div className={styles.shareAnimation}></div>
                </div>
                <div className={styles.sharingText}>
                  <h3 className={styles.sharingTitle}>一碰传</h3>
                  <p className={styles.sharingDescription}>
                    设备轻轻一碰，文件即刻传输。无需复杂设置，享受极速分享体验。
                  </p>
                </div>
              </div>

              <div className={styles.sharingFeature}>
                <div className={styles.sharingText}>
                  <h3 className={styles.sharingTitle}>共享剪贴板</h3>
                  <p className={styles.sharingDescription}>
                    在一台设备复制，在另一台设备粘贴。文字、图片、文件随心共享。
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
                  <h3 className={styles.sharingTitle}>云端协同</h3>
                  <p className={styles.sharingDescription}>
                    基于分布式文件系统，所有设备访问同一文件视图，编辑自动同步。
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
              <h2 className={styles.sectionTitle}>分布式技术架构</h2>
              <p className={styles.sectionSubtitle}>基于HarmonyOS的分布式软总线技术，实现设备间的低时延、高带宽通信</p>
            </div>
            <div className={styles.architecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>应用层</h4>
                  <p>跨设备应用生态</p>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>框架层</h4>
                  <p>分布式能力框架</p>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>服务层</h4>
                  <p>分布式数据管理</p>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>内核层</h4>
                  <p>分布式软总线</p>
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
              <h2 className={styles.conclusionTitle}>连接创造价值</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT 的原生互联能力，让设备不再是孤立的个体，而是协同工作的智慧整体。
                从个人设备到智能家居，从办公场景到娱乐体验，连接让一切变得更简单、更智能。
              </p>
              <div className={styles.interconnectBadges}>
                <span className={styles.interconnectBadge}>跨端协同</span>
                <span className={styles.interconnectBadge}>统一播控</span>
                <span className={styles.interconnectBadge}>随时分享</span>
                <span className={styles.interconnectBadge}>分布式架构</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}