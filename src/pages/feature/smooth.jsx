import React from 'react';
import Layout from '@theme/Layout';
import styles from './harmonyos-native-fluidity.module.css';

export default function HarmonyOSNativeFluidity() {
  return (
    <Layout
      title="HarmonyOS NEXT - 原生流畅"
      description="探索HarmonyOS NEXT系统的原生流畅体验，包括流畅动效、极速响应、智能调度、性能优化等丝滑体验特征">
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              原生<span className={styles.highlight}>流畅</span>
            </h1>
            <p className={styles.heroSubtitle}>丝滑体验，行云流水</p>
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
              <h2 className={styles.sectionTitle}>丝滑流畅，体验革新</h2>
              <p className={styles.sectionText}>
                HarmonyOS NEXT 以原生流畅为核心，通过深度优化的系统架构和智能资源调度，
                实现前所未有的操作流畅度。从触控响应到动画过渡，每一刻都如丝般顺滑。
              </p>
            </div>
          </div>
        </section>

        {/* Smooth Animation */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>流畅动效</h2>
              <p className={styles.sectionSubtitle}>基于物理规律的丝滑动画体验</p>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.physicsIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>物理动效引擎</h3>
                <p className={styles.cardDescription}>
                  基于真实物理规律设计的动画系统，让每一次交互都自然流畅，符合用户直觉。
                </p>
                <ul className={styles.featureList}>
                  <li>弹性动画效果</li>
                  <li>惯性滚动模拟</li>
                  <li>物理碰撞反馈</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.transitionIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>智能转场动画</h3>
                <p className={styles.cardDescription}>
                  精心设计的页面转场效果，确保视觉连续性，减少操作中断感。
                </p>
                <ul className={styles.featureList}>
                  <li>共享元素过渡</li>
                  <li>场景感知动画</li>
                  <li>无缝页面切换</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.cardIcon}>
                  <div className={`${styles.icon} ${styles.microIcon}`}></div>
                </div>
                <h3 className={styles.cardTitle}>细腻微交互</h3>
                <p className={styles.cardDescription}>
                  针对每个细节的精心打磨，从按钮反馈到列表滚动，处处体现流畅体验。
                </p>
                <ul className={styles.featureList}>
                  <li>即时触控反馈</li>
                  <li>流畅滚动效果</li>
                  <li>细腻视觉反馈</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Response */}
        <section className={`${styles.featureSection} ${styles.darkSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>极速响应</h2>
              <p className={styles.sectionSubtitle}>毫秒级触控响应，操作跟手性极佳</p>
            </div>
            <div className={styles.responseDemo}>
              <div className={styles.demoVisual}>
                <div className={styles.touchIndicator}></div>
                <div className={styles.responseLine}></div>
                <div className={styles.speedMeter}>
                  <div className={styles.speedNeedle}></div>
                  <span className={styles.speedLabel}>响应速度</span>
                </div>
              </div>
              <div className={styles.demoContent}>
                <h3 className={styles.demoTitle}>触控即响应</h3>
                <p className={styles.demoDescription}>
                  通过优化的触控流水线和预测算法，实现毫秒级触控响应。
                  手指触达的瞬间，系统即刻反馈，操作跟手性达到全新高度。
                </p>
                <div className={styles.responseStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>8ms</span>
                    <span className={styles.statLabel}>触控响应</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>120fps</span>
                    <span className={styles.statLabel}>渲染帧率</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>0延迟</span>
                    <span className={styles.statLabel}>动画掉帧</span>
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
              <h2 className={styles.sectionTitle}>智能调度</h2>
              <p className={styles.sectionSubtitle}>智慧资源分配，确保流畅体验</p>
            </div>
            <div className={styles.schedulingGrid}>
              <div className={styles.schedulingCard}>
                <div className={styles.schedulingVisual}>
                  <div className={styles.cpuAnimation}></div>
                </div>
                <div className={styles.schedulingContent}>
                  <h3 className={styles.schedulingTitle}>CPU智能调频</h3>
                  <p className={styles.schedulingDescription}>
                    根据使用场景智能调节CPU频率，在性能和功耗间取得完美平衡，
                    确保关键时刻的极致流畅。
                  </p>
                  <div className={styles.schedulingFeatures}>
                    <span>场景识别</span>
                    <span>动态调频</span>
                    <span>能效优化</span>
                  </div>
                </div>
              </div>

              <div className={styles.schedulingCard}>
                <div className={styles.schedulingContent}>
                  <h3 className={styles.schedulingTitle}>内存智能管理</h3>
                  <p className={styles.schedulingDescription}>
                    智能预测内存需求，提前分配资源，减少应用启动和切换时的等待时间，
                    保持系统长期流畅。
                  </p>
                  <div className={styles.schedulingFeatures}>
                    <span>预加载机制</span>
                    <span>智能回收</span>
                    <span>碎片整理</span>
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
              <h2 className={styles.sectionTitle}>性能优化</h2>
              <p className={styles.sectionSubtitle}>系统级优化，持久流畅不卡顿</p>
            </div>
            <div className={styles.optimizationGrid}>
              <div className={styles.optimizationCard}>
                <h3 className={styles.optimizationTitle}>渲染引擎优化</h3>
                <p className={styles.optimizationDescription}>
                  全新渲染架构，减少绘制层级，提升渲染效率，确保复杂界面也能流畅运行。
                </p>
                <div className={styles.optimizationProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '95%'}}></div>
                  </div>
                  <span>渲染效率提升 95%</span>
                </div>
              </div>

              <div className={styles.optimizationCard}>
                <h3 className={styles.optimizationTitle}>存储性能优化</h3>
                <p className={styles.optimizationDescription}>
                  智能文件系统和存储调度算法，大幅提升文件读写速度，减少应用加载时间。
                </p>
                <div className={styles.optimizationProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '80%'}}></div>
                  </div>
                  <span>读写速度提升 80%</span>
                </div>
              </div>

              <div className={styles.optimizationCard}>
                <h3 className={styles.optimizationTitle}>网络传输优化</h3>
                <p className={styles.optimizationDescription}>
                  智能网络调度和数据预取技术，提升网络响应速度，优化在线内容加载体验。
                </p>
                <div className={styles.optimizationProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '75%'}}></div>
                  </div>
                  <span>网络延迟降低 75%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Architecture */}
        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>流畅技术架构</h2>
              <p className={styles.sectionSubtitle}>多层次技术保障系统流畅性</p>
            </div>
            <div className={styles.technologyArchitecture}>
              <div className={styles.architectureLayers}>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>应用层</h4>
                  <p>流畅体验表现</p>
                  <div className={styles.layerFeatures}>
                    <span>丝滑动画</span>
                    <span>即时响应</span>
                    <span>无缝切换</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>框架层</h4>
                  <p>流畅技术框架</p>
                  <div className={styles.layerFeatures}>
                    <span>动效引擎</span>
                    <span>渲染管线</span>
                    <span>调度算法</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>系统层</h4>
                  <p>系统级优化</p>
                  <div className={styles.layerFeatures}>
                    <span>内存管理</span>
                    <span>进程调度</span>
                    <span>存储优化</span>
                  </div>
                </div>
                <div className={styles.layer}>
                  <h4 className={styles.layerTitle}>硬件层</h4>
                  <p>硬件加速支持</p>
                  <div className={styles.layerFeatures}>
                    <span>GPU渲染</span>
                    <span>NPU加速</span>
                    <span>存储加速</span>
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
              <h2 className={styles.conclusionTitle}>流畅新境界</h2>
              <p className={styles.conclusionText}>
                HarmonyOS NEXT 的原生流畅体验，重新定义了移动操作系统的流畅标准。
                从底层架构到上层交互，每一个细节都经过精心优化，为用户带来前所未有的丝滑体验。
                在这里，科技与艺术完美融合，创造出行云流水般的数字生活。
              </p>
              <div className={styles.fluidityBadges}>
                <span className={styles.fluidityBadge}>流畅动效</span>
                <span className={styles.fluidityBadge}>极速响应</span>
                <span className={styles.fluidityBadge}>智能调度</span>
                <span className={styles.fluidityBadge}>性能优化</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}