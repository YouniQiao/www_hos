import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "@site/src/pages/harmonyos-7.0-features.module.css";

export default function HarmonyOS70Features() {
  const { siteConfig } = useDocusaurusContext();

  const features = [
  {
    title: "HarmonyOS Spatial Computing - Immersive Light",
    description: "New spatial interaction: when you drag an icon, light and shadow trace along your fingertip; swiping to dismiss notifications turns the notification bar into glowing particles that drift away; tapping, pressing, dragging and swiping all feel more responsive.",
    icon: "✨",
    tags: ["Light-sensing particles", "Light follows finger", "Halo gravity", "3D Spatial Cards"]
  },
  {
    title: "Step into a deep visual world - 3D and camera movement",
    description: "Spatial camera movement naturally blends city landmarks in weather with 3D perspectives; calendar seasonal easter eggs surround you as the view rotates; lock screen space clock and 3D space wallpapers let you slide left and right into a three-dimensional aesthetic wonderland.",
    icon: "🧊",
    tags: ["Spatial camera movement", "Spatial clock", "Spatial wallpaper", "Stereoscopic view"]
  },
  {
    title: "Let imagination have more space - 3D creation",
    description: "Remy can reconstruct drone aerial footage into a huge 3D spatial map and let you browse it freely on your phone; V2Fun can generate a 3D model from a single photo, with 360° free preview.",
    icon: "🏗️",
    tags: ["Large-scene reconstruction", "Photo modeling", "3D store tours", "Product modeling"]
  },
  {
    title: "HarmonyOS Intelligence - Celia Revamped",
    description: "Celia has a refreshed design, with a home screen entry one tap away; the homepage supports personalized precise recommendations, and the sidebar integrates Celia Memo, Celia Claw and other agents in one place, so common services are always at hand.",
    icon: "🤖",
    tags: ["Proactive services", "Job search assistant", "Healthy usage", "Handy Assistant"]
  },
  {
    title: "HarmonyOS apps enter the Agent era",
    description: "Petal Maps, Browser, Music, Video, Reading and Themes are fully AI-powered: generate travel plans and personalized playlists with one sentence, get in-depth interpretation of hot news, and use AI to create exclusive themes and fonts.",
    icon: "🧩",
    tags: ["Petal Maps", "HUAWEI Browser", "Music / Video", "Reading / Themes"]
  },
  {
    title: "Ultra-Smooth Ark Engine",
    description: "The Ark Engine combined with a performance large model turns passive response into proactive supply: high-frequency software gets priority in computing power allocation, making check-ins and cross-app sharing jumps smoother; enabling performance mode boosts overall performance, with game frame rate stability improved by 40%.",
    icon: "🚀",
    tags: ["Performance large model", "Space-time acceleration", "Enhanced keep-alive", "Frame Rate Stability +40%"]
  },
  {
    title: "Spatial Magic - Memory & Storage",
    description: "Hyper-space memory increases available RAM by up to 3 GB, making background apps more durable; hyper-space storage saves a huge amount of space after upgrade, making the disk more durable and eliminating storage anxiety.",
    icon: "💾",
    tags: ["+3GB Available RAM", "1TB: Save 109GB", "512GB: Save 51GB", "256GB: Save 22GB"]
  },
  {
    title: "HarmonyOS Star Shield security - AI anti-fraud",
    description: "AI voice-changing detection, AI overseas call-forwarding detection, AI risky webpage detection, AI anti-script fraud, AI risky QR code detection, with cross-app linked alerts from calls to payments; HPIC personal intelligent computing system brings cloud-side AI data processing to the same security level as on-device.",
    icon: "🛡️",
    tags: ["AI Voice Change Detection", "Overseas transfer scam detection", "Anti-scripted scam protection", "HPIC Personal Intelligent Computing"]
  },
  {
    title: "HarmonyOS Star River Interconnect - Tap to Share",
    description: "One-tap sharing to multiple devices at once; tap to flip the card for encrypted transfer; game installation packages can be sent to teammates instantly; on the creative canvas, tap wherever you want to paste; remote direct transfer has no distance or format limits; the inner circle lets you check loved ones' updates anytime.",
    icon: "🔗",
    tags: ["Multi-person sharing", "Encrypted sharing", "Instant game transfer", "Remote direct transfer", "Inner circle"]
  },
  {
    title: "Digital Care & Asset Inheritance",
    description: "During calls, text-to-speech and speech-to-text conversion is supported, with AI voice restoration capabilities, allowing people with speech impairments to express freely; digital asset inheritance can pass Gallery, Notes and other important data to designated heirs after real-name multi-factor authentication.",
    icon: "💝",
    tags: ["Text calling", "Sound repair", "Rider assistance", "Digital asset inheritance"]
  }];


  const technicalSpecs = [
  { label: "First public beta now open", value: "September 7, 2026" },
  { label: "Available RAM", value: "Up to +3GB" },
  { label: "Ultra Space storage savings", value: "1TB models save up to 109 GB" },
  { label: "Game Frame Rate Stability", value: "40% improvement" },
  { label: "3-year smooth usage", value: "Mate 60 reaches 90%" },
  { label: "Cloud-Side AI Security", value: "HPIC Personal Intelligent Computing" }];


  return (
    <Layout
      title={`HarmonyOS 7.0 - ${siteConfig.title}`}
      description="Explore HarmonyOS 7.0's comprehensive upgrades in spatial computing, Celia intelligence, Agent-based apps, Ark Engine, Star Shield security and Star River interconnect.">
      {/* Hero */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>HarmonyOS 7.0</h1>
          <p className={styles.heroSubtitle}>Spatial Computing: More Room for Imagination</p>
          <p className={styles.heroDescription}>
            On September 7, 2026, the first public beta plan was launched. HarmonyOS 7.0 brings HarmonyOS spatial computing, a refreshed Celia and Agent-based system apps, paired with the ultra-smooth Ark Engine, Star Shield AI anti-fraud and Star River interconnect, moving from 'easy to use' to 'understands you' all-scenario intelligent experience.

          </p>
          <div className={styles.heroTags}>
            <span className={styles.heroTag}>First Public Beta Now Open</span>
            <span className={styles.heroTag}>HarmonyOS spatial computing</span>
            <span className={styles.heroTag}>Apps Enter the Agent Era</span>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        {/* Key features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>Key new features</h2>
            <p>The comprehensive evolution of spatial computing, HarmonyOS intelligence, Star Shield security, Star River interconnect and Ark Engine.</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) =>
            <div key={index} className={styles.featureCard}>
                <div className={styles.featureEmoji}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
                <div className={styles.featureTags}>
                  {feature.tags.map((tag, idx) =>
                <span key={idx} className={styles.featureTagItem}>{tag}</span>
                )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key data */}
        <section className={styles.specsSection}>
          <div className={styles.sectionHeader}>
            <h2>Key data</h2>
            <p>Based on core metrics officially released by Huawei</p>
          </div>
          <div className={styles.specsGrid}>
            {technicalSpecs.map((spec, index) =>
            <div key={index} className={styles.specCard}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            )}
          </div>
        </section>

        {/* Upgrade info */}
        <section className={styles.updateSection}>
          <div className={styles.updateContent}>
            <h2>Early access upgrade</h2>
            <div className={styles.updateGrid}>
              <div className={styles.updateCard}>
                <h3>🚀 How to upgrade</h3>
                <p>
                  Phone / tablet / PC: go to Settings → search 'Software Update' → tap ⋮ in the top right → early access upgrade; watches can be upgraded via 'My HUAWEI App → early access upgrade', and earbuds and other categories will be pushed gradually.

                </p>
              </div>
              <div className={styles.updateCard}>
                <h3>📱 First Batch of Upgrade Models</h3>
                <p>
                  The first public beta covers Mate 80 / Pura 90 / nova 16 series, Mate X series, MateBook Fold ULTIMATE DESIGN, MatePad Edge, WATCH Ultimate 2 and other models. See the Supported Models page for the full list.

                </p>
              </div>
              <div className={styles.updateCard}>
                <h3>📌 Friendly reminder</h3>
                <p>
                  Currently only specific models sold in mainland China (excluding Hong Kong, Macao and Taiwan) support the upgrade. Please refer to official information or actual experience for each model's rollout; some features require HOTA upgrade support.

                </p>
              </div>
              <div className={styles.updateCard}>
                <h3>📊 Data notes</h3>
                <p>
                  Performance, battery life, frame rate stability and storage savings data come from Huawei labs. The test device is the HUAWEI Mate 80 Pro Max running the first version of HarmonyOS 7. Actual experience may vary.

                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outlook */}
        <section className={styles.visionSection}>
          <div className={styles.visionContent}>
            <div className={styles.visionIcon}>🌌</div>
            <h2>Entering the Agent era that moves from 'easy to use' to 'understands you'.</h2>
            <p>
              HarmonyOS 7.0 is more than just another version iteration: spatial computing reshapes visuals and interaction, Celia and system apps enter the Agent era together, Star Shield security and HPIC personal intelligent computing system put AI capabilities and privacy security on the same baseline. HarmonyOS is becoming a true all-scenario intelligent foundation that understands users, serves proactively, and is trustworthy.


            </p>
          </div>
        </section>
      </main>
    </Layout>);

}
