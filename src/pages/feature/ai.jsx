import React from 'react';
import Layout from '@theme/Layout';
import styles from './harmonyos-native-intelligence.module.css';

export default function HarmonyOSNativeIntelligence() {
  return (
    <Layout
      title="HarmonyOS NEXT - 原生智能"
      description="探索HarmonyOS NEXT系统的原生智能能力，体验智能小艺在语音交互、场景感知、智能推荐等方面的创新功能">
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              原生<span className={styles.highlight}>智能</span>
            </h1>
            <p className={styles.heroSubtitle}>智能小艺，懂你所需</p>
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
              <h2 className={styles.sectionTitle}>智慧随行，主动服务</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT 以原生智能为核心，让智能小艺成为您贴心的数字助手。
                基于强大的AI能力，小艺能够理解上下文、感知场景、预测需求，提供前所未有的智能体验。
              </p>
            </div>
          </div>
        </section>

        {/* Voice Interaction */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>自然语音交互</h2>
              <p className={styles.sectionSubtitle}>更懂你的语音助手，交流如朋友般自然</p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.voiceIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>连续对话</h3>
                <p className={styles.cardDescription}>
                  无需重复唤醒，一次对话中可连续发出多个指令，小艺能够理解上下文关系。
                </p>
                <ul className={styles.featureList}>
                  <li>上下文记忆</li>
                  <li>多轮对话</li>
                  <li>指代消解</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.understandingIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>语义理解</h3>
                <p className={styles.cardDescription}>
                  深度理解自然语言，能够处理复杂指令和模糊表达，准确捕捉用户意图。
                </p>
                <ul className={styles.featureList}>
                  <li>意图识别</li>
                  <li>情感分析</li>
                  <li>语义解析</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.multimodalIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>多模态交互</h3>
                <p className={styles.cardDescription}>
                  结合语音、视觉、手势等多种交互方式，在不同场景下提供最合适的交互体验。
                </p>
                <ul className={styles.featureList}>
                  <li>语音+视觉</li>
                  <li>手势控制</li>
                  <li>情境感知</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scene Perception */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>智能场景感知</h2>
              <p className={styles.sectionSubtitle}>主动感知环境，预判用户需求</p>
            </div>
            <div className={styles.sceneGrid}>
              <div className={styles.sceneCard}>
                <div className={styles.sceneVisual}>
                  <div className={styles.officeScene}></div>
                </div>
                <div className={styles.sceneContent}>
                  <h3 className={styles.sceneTitle}>工作场景</h3>
                  <p className={styles.sceneDescription}>
                    检测到您进入工作状态，自动开启免打扰模式，智能整理会议日程，提醒重要事项。
                  </p>
                  <div className={styles.sceneFeatures}>
                    <span className={styles.sceneFeature}>会议提醒</span>
                    <span className={styles.sceneFeature}>文档推荐</span>
                    <span className={styles.sceneFeature}>专注模式</span>
                  </div>
                </div>
              </div>

              <div className={styles.sceneCard}>
                <div className={styles.sceneContent}>
                  <h3 className={styles.sceneTitle}>出行场景</h3>
                  <p className={styles.sceneDescription}>
                    根据行程自动规划路线，实时推送交通信息，智能推荐沿途服务设施。
                  </p>
                  <div className={styles.sceneFeatures}>
                    <span className={styles.sceneFeature}>路线规划</span>
                    <span className={styles.sceneFeature}>交通预警</span>
                    <span className={styles.sceneFeature}>服务推荐</span>
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
                  <h3 className={styles.sceneTitle}>家居场景</h3>
                  <p className={styles.sceneDescription}>
                    感知家庭成员状态，自动调节家居环境，创建舒适的生活空间。
                  </p>
                  <div className={styles.sceneFeatures}>
                    <span className={styles.sceneFeature}>环境调节</span>
                    <span className={styles.sceneFeature}>设备联动</span>
                    <span className={styles.sceneFeature}>情景模式</span>
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
              <h2 className={styles.sectionTitle}>个性化智能推荐</h2>
              <p className={styles.sectionSubtitle}>基于深度学习的精准内容推荐</p>
            </div>
            <div className={styles.recommendation}>
              <div className={styles.recommendationEngine}>
                <div className={styles.engineVisual}>
                  <div className={styles.aiBrain}></div>
                </div>
                <div className={styles.engineContent}>
                  <h3 className={styles.engineTitle}>智能推荐引擎</h3>
                  <p className={styles.engineDescription}>
                    基于用户行为分析、兴趣建模和情境感知，为每个用户提供独一无二的个性化推荐。
                  </p>
                  <div className={styles.recommendationAreas}>
                    <div className={styles.recommendationArea}>
                      <h4>内容推荐</h4>
                      <p>新闻、视频、音乐等内容的智能匹配</p>
                    </div>
                    <div className={styles.recommendationArea}>
                      <h4>服务推荐</h4>
                      <p>基于场景的周边服务智能推荐</p>
                    </div>
                    <div className={styles.recommendationArea}>
                      <h4>应用推荐</h4>
                      <p>根据使用习惯推荐相关应用</p>
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
              <h2 className={styles.sectionTitle}>智能设备控制</h2>
              <p className={styles.sectionSubtitle}>一句话控制全屋智能设备</p>
            </div>
            <div className={styles.controlGrid}>
              <div className={styles.controlCard}>
                <div className={styles.controlIcon}>
                  <div className={`${styles.icon} ${styles.homeControlIcon}`}></div>
                </div>
                <h3 className={styles.controlTitle}>智能家居</h3>
                <p className={styles.controlDescription}>
                  "小艺小艺，打开客厅灯光并调到温馨模式" - 一句话控制全屋智能设备。
                </p>
              </div>

              <div className={styles.controlCard}>
                <div className={styles.controlIcon}>
                  <div className={`${styles.icon} ${styles.officeControlIcon}`}></div>
                </div>
                <h3 className={styles.controlTitle}>办公设备</h3>
                <p className={styles.controlDescription}>
                  "小艺，连接打印机并打印今天会议资料" - 智能识别并控制办公设备。
                </p>
              </div>

              <div className={styles.controlCard}>
                <div className={styles.controlIcon}>
                  <div className={`${styles.icon} ${styles.carControlIcon}`}></div>
                </div>
                <h3 className={styles.controlTitle}>车载系统</h3>
                <p className={styles.controlDescription}>
                  "小艺，导航到公司并播放今日新闻" - 无缝衔接车载智能系统。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Technology */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>AI技术架构</h2>
              <p className={styles.sectionSubtitle}>端云协同的智能计算框架</p>
            </div>
            <div className={styles.technologyArchitecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>应用层</h4>
                  <p>智能场景应用</p>
                  <div className={styles.layerFeatures}>
                    <span>语音助手</span>
                    <span>智能推荐</span>
                    <span>场景感知</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>能力层</h4>
                  <p>AI核心能力</p>
                  <div className={styles.layerFeatures}>
                    <span>自然语言处理</span>
                    <span>计算机视觉</span>
                    <span>机器学习</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>框架层</h4>
                  <p>AI计算框架</p>
                  <div className={styles.layerFeatures}>
                    <span>MindSpore</span>
                    <span>分布式学习</span>
                    <span>端云协同</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>芯片层</h4>
                  <p>硬件加速</p>
                  <div className={styles.layerFeatures}>
                    <span>NPU神经网络</span>
                    <span>AI算力优化</span>
                    <span>能效管理</span>
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
              <h2 className={styles.conclusionTitle}>智能生活新体验</h2>
              <p className={styles.conclusionText}>
                智能小艺不仅仅是语音助手，更是懂你所需的智能伙伴。基于HarmonyOS NEXT的原生智能能力，
                小艺将在生活的每个场景中为您提供贴心服务，让科技真正为人服务。
              </p>
              <div className={styles.intelligenceBadges}>
                <span className={styles.intelligenceBadge}>语音交互</span>
                <span className={styles.intelligenceBadge}>场景感知</span>
                <span className={styles.intelligenceBadge}>智能推荐</span>
                <span className={styles.intelligenceBadge}>设备控制</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}