import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/content-updates.module.css';

export default function ContentUpdates() {
  const {siteConfig} = useDocusaurusContext();

  const updates = [
    {
      date: "2026-09-15",
      items: [
        {
          text: "HarmonyOS 7.0 exploration page launched",
          link: "/hmos70",
          category: "Website pages"
        },
        {
          text: "Updated supported devices, added HarmonyOS 7 supported devices (including audio and smart home categories)",
          link: "/support-device",
          category: "Website pages"
        },
      ]
    },
    {
      date: "2026-04-23",
      items: [
        {
          text: "Blog: Using Linux on HarmonyOS PC",
          link: "/blog/linux-on-harmonyos",
          category: "Blog"
        },
      ]
    },
    {
      date: "2026-04-22",
      items: [
        {
          text: "Priority notifications, never miss important alerts",
          link: "/docs/quick-start-tablet/priority-notification",
          category: "Tablet content"
        },
        {
          text: "Connect by proximity, share phone communication capabilities",
          link: "/docs/full-scene-tablet/communication-sharing",
          category: "Tablet content"
        },
        {
          text: "HarmonyOS Star River interconnect: transfer files with iOS devices",
          link: "/docs/full-scene-tablet/star-river-interop-ios",
          category: "Tablet content"
        },
        {
          text: "Multi-screen collaboration, open multiple phone windows",
          link: "/docs/full-scene-pc/multi-screen-collaboration-multi-window",
          category: "PC content"
        },
        {
          text: "Wireless projection, extend screen with tablet collaboration",
          link: "/docs/full-scene-pc/wireless-projection-tablet",
          category: "PC content"
        },
        {
          text: "Large landscape window, display phone apps on a big screen",
          link: "/docs/full-scene-pc/landscape-large-window",
          category: "PC content"
        },
        {
          text: "Smart security protection, safeguards call security",
          link: "/docs/security-pc/smart-security-protection",
          category: "PC content"
        },
        {
          text: "Per-app volume control",
          link: "/docs/quick-start-pc/per-app-volume",
          category: "PC content"
        },
        {
          text: "HarmonyOS 6.1 exploration page launched",
          link: "/hmos61",
          category: "Website pages"
        },
        {
          text: "Added HarmonyOS 6.1 supported devices to the supported devices page",
          link: "/support-device",
          category: "Website pages"
        },
      ]
    },
    {
      date: "2026-04-17",
      items: [
        {
          text: "New immersive light effects, a more transparent interface",
          link: "/docs/setting/immersive-light",
          category: "Phone content"
        },
        {
          text: "One-tap Star Shield anti-fraud, protects device security",
          link: "/docs/security/star-shield-anti-fraud",
          category: "Phone content"
        },
        {
          text: "Priority notifications, never miss important alerts",
          link: "/docs/quick-start/priority-notification",
          category: "Phone content"
        },
        {
          text: "One-tap color pick, quickly adjust image tones",
          link: "/docs/camera/color-dip",
          category: "Phone content"
        },
        {
          text: "HarmonyOS Star River interconnect: transfer files with iOS devices",
          link: "/docs/full-scene/star-river-interop-ios",
          category: "Phone content"
        },
        {
          text: "XMAGE style, more vibrant photos",
          link: "/docs/camera/xmage-style",
          category: "Phone content"
        },
        {
          text: "Smart grip detection for easier one-handed use",
          link: "/docs/quick-start/smart-grip",
          category: "Phone content"
        },
        {
          text: "Connect by proximity, share phone communication capabilities",
          link: "/docs/full-scene/communication-sharing",
          category: "Phone content"
        },
      ]
    },
    {
      date: "2026-01-24",
      items: [
        {
          text: "Homepage adds HarmonyOS installation data display",
          link: "/",
          category: "Website pages"
        },
      ]
    },
    {
      date: "2026-01-22",
      items: [
        {
          text: "Added Watch ULTIMATE DESIGN series HarmonyOS watches",
          link: "/docs/wearable",
          category: "Wearable content"
        },
        {
          text: "Updated supported devices, added Enjoy 70X and some wearable models",
          link: "/support-device",
          category: "Website pages"
        },
      ]
    },
    {
      date: "2026-01-12",
      items: [
        {
          text: "Several ways to install Android apps on HarmonyOS",
          link: "/blog/install-android-apps",
          category: "Blog"
        },
      ]
    },
    {
      date: "2026-01-09",
      items: [
        {
          text: "App Center, manage apps efficiently",
          link: "/docs/quick-start-tablet/app-center-efficient-management",
          category: "Tablet content"
        },
        {
          text: "Scan with ease, no fear of long distances or damaged codes",
          link: "/docs/quick-start-tablet/easy-scan-guide",
          category: "Tablet content"
        },
        {
          text: "Edit Control Panel",
          link: "/docs/quick-start-tablet/edit-control-center",
          category: "Tablet content"
        },
        {
          text: "Notes, a paperless new experience for learning and work",
          link: "/docs/quick-start-tablet/notes-paperless-experience",
          category: "Tablet content"
        },
        {
          text: "Real-time handwriting adjustment",
          link: "/docs/quick-start-tablet/real-time-handwriting-adjustment",
          category: "Tablet content"
        },
        {
          text: "Write to compose, draw to create",
          link: "/docs/quick-start-tablet/writing-and-drawing-with-stylus",
          category: "Tablet content"
        },
        {
          text: "Need help? Try asking Celia",
          link: "/docs/ai-tablet/ask-celia-for-device-help",
          category: "Tablet content"
        },
        {
          text: "Calendar class schedule, view course arrangements anytime",
          link: "/docs/ai-tablet/calendar-curriculum-schedule",
          category: "Tablet content"
        },
        {
          text: "Celia agent, unlock professional skills in one step",
          link: "/docs/ai-tablet/celia-agents-professional-skills",
          category: "Tablet content"
        },
        {
          text: "Celia deep problem-solving, a gold-medal smart teaching assistant",
          link: "/docs/ai-tablet/celia-deep-problem-solving",
          category: "Tablet content"
        },
        {
          text: "Celia Tasks, execute tasks with one command",
          link: "/docs/ai-tablet/celia-tasks-voice-execution",
          category: "Tablet content"
        },
        {
          text: "Immersive translation for easy foreign browsing",
          link: "/docs/ai-tablet/immersive-translation-easy-browsing",
          category: "Tablet content"
        },
        {
          text: "Family anti-fraud, keep your family's devices safe",
          link: "/docs/security-tablet/family-anti-fraud-protection",
          category: "Tablet content"
        },
        {
          text: "Lost device, findable even when powered off",
          link: "/docs/security-tablet/find-device-even-when-powered-off",
          category: "Tablet content"
        },
        {
          text: "Secure access, protect private data",
          link: "/docs/security-tablet/secure-access-protect-privacy-data",
          category: "Tablet content"
        },
        {
          text: "One-tap video creation, turn photos into dynamic videos",
          link: "/docs/camera-tablet/instant-movie-images-to-dynamic-videos",
          category: "Tablet content"
        },
        {
          text: "Cute chubby hands, win jewelry blind boxes at rock-paper-scissors",
          link: "/docs/setting-tablet/cute-chubby-hand-theme-game",
          category: "Tablet content"
        },
        {
          text: "Dark mode, more comfortable in the dark",
          link: "/docs/setting-tablet/dark-mode-comfort",
          category: "Tablet content"
        },
        {
          text: "Lock home screen layout",
          link: "/docs/setting-tablet/lock-home-screen-layout",
          category: "Tablet content"
        },
        {
          text: "Lock screen artistic signature, create personalized wallpapers",
          link: "/docs/setting-tablet/lock-screen-artistic-signature",
          category: "Tablet content"
        },
        {
          text: "Energetic mood themes, fun lock screen stress relief",
          link: "/docs/setting-tablet/mood-match-theme-lock-screen",
          category: "Tablet content"
        },
        {
          text: "Memo quick notes, browse summaries and originals at a glance",
          link: "/docs/setting-tablet/notes-quick-note-summary-and-original-text",
          category: "Tablet content"
        },
        {
          text: "Seamless cross-device image editing",
          link: "/docs/full-scene-tablet/seamless-cross-device-image-editing",
          category: "Tablet content"
        },
      
      ]
    },


    {
      date: "2025-12-30",
      items: [
        {
          text: "Control Panel customization",
          link: "/docs/quick-start-pc/control-center-edit",
          category: "PC content"
        },
        {
          text: "Calendar class schedule, view course arrangements anytime",
          link: "/docs/quick-start-pc/calendar-course-schedule",
          category: "PC content"
        },
        {
          text: "Doodle creation with one-tap restore",
          link: "/docs/quick-start-pc/graffiti-creation-and-restoration",
          category: "PC content"
        },
        {
          text: "Tap to transfer instantly between phone and PC",
          link: "/docs/full-scene-pc/touch-to-share-phone-pc-transfer",
          category: "PC content"
        },
        {
          text: "Hand-eye coordination, drag files with your gaze",
          link: "/docs/full-scene-pc/hand-eye-coordination-drag-files",
          category: "PC content"
        },
        {
          text: "Document assistant, quick summaries and Q&A",
          link: "/docs/ai-pc/xiaoyi-document-assistant-summary-qa",
          category: "PC content"
        },
        {
          text: "Celia Circle to Search, quickly extract and search",
          link: "/docs/ai-pc/xiaoyi-circle-to-search",
          category: "PC content"
        },
        {
          text: "Deep research for in-depth search and analysis",
          link: "/docs/ai-pc/xiaoyi-deep-research",
          category: "PC content"
        },
        {
          text: "Celia knowledge base, your personal knowledge manager",
          link: "/docs/ai-pc/xiaoyi-knowledge-base-guide",
          category: "PC content"
        },
        {
          text: "Smart classification, auto-sort specified files",
          link: "/docs/ai-pc/smart-file-categorization",
          category: "PC content"
        },
        {
          text: "Smart recommendations, one-tap access to related documents",
          link: "/docs/ai-pc/smart-recommendation-related-documents",
          category: "PC content"
        },
        {
          text: "Smart select, instant answers",
          link: "/docs/ai-pc/smart-text-selection",
          category: "PC content"
        },
        {
          text: "Smart album categorization",
          link: "/docs/ai-pc/smart-album-classification",
          category: "PC content"
        },
        {
          text: "Swipe up or down along the right edge with one finger to adjust volume",
          link: "/docs/gesture/adjust-volume-touchpad-gesture",
          category: "PC content"
        },
        {
          text: "Swipe up or down along the left edge with one finger to adjust brightness",
          link: "/docs/gesture/adjust-brightness-touchpad-left-edge",
          category: "PC content"
        },
        {
          text: "Cross-device file transfer",
          link: "/docs/gesture/cross-device-air-transfer",
          category: "PC content"
        },
        {
          text: "Air gesture screen scrolling",
          link: "/docs/gesture/air-gestures-scrolling-screen",
          category: "PC content"
        },
        {
          text: "Air gesture screenshot capture",
          link: "/docs/gesture/air-gesture-screenshot",
          category: "PC content"
        },
        {
          text: "Image to PPT, helps you create efficiently",
          link: "/docs/work/image-to-ppt-efficient-creation",
          category: "PC content"
        },
        {
          text: "Organizer folder, flexible home screen layout",
          link: "/docs/work/desktop-storage",
          category: "PC content"
        },
        {
          text: "Security protection, real-time defense against virus threats",
          link: "/docs/security-pc/security-protection",
          category: "PC content"
        },
        {
          text: "Enable Minor Mode",
          link: "/docs/setting-pc/enable-minors-mode",
          category: "PC content"
        },
        
      
      ]
    },
    {
      date: "2025-12-24",
      items: [
        {
          text: "Install apps bypassing AppGallery",
          link: "/blog/install-apps",
          category: "Blog"
        },
      ]
    },
    {
      date: "2025-12-22",
      items: [
        {
          text: "Supported devices for update",
          link: "/support-device",
          category: "Website pages"
        },
      ]
    },
    {
      date: "2025-12-10",
      items: [
        {
          text: "Search which apps support HarmonyOS",
          link: "/blog/search-apps",
          category: "Blog"
        },
        {
          text: "New blog feature",
          link: "/blog",
          category: "Website pages"
        },
      ]
    },
    {
      date: "2025-12-05",
      items: [
        {
          text: "App Center, manage apps efficiently",
          link: "/docs/quick-start/app-center",
          category: "Phone content"
        },
        {
          text: "Calendar class schedule, view course arrangements anytime",
          link: "/docs/ai/calendar-schedule",
          category: "Phone content"
        },
        {
          text: "Immersive translation for easy foreign browsing",
          link: "/docs/ai/xiaoyi-translate",
          category: "Phone content"
        },
        {
          text: "Celia agent, unlock professional skills in one step",
          link: "/docs/ai/xiaoyi-ai-agent",
          category: "Phone content"
        },
        {
          text: "Celia helps, easily handle big and small tasks",
          link: "/docs/ai/xiaoyi-help",
          category: "Phone content"
        },
        {
          text: "Need help? Try asking Celia",
          link: "/docs/ai/xiaoyi-solve-problem",
          category: "Phone content"
        },
        {
          text: "Secure access, protect private data",
          link: "/docs/security/secure-access",
          category: "Phone content"
        },
        {
          text: "Smartly hide banner notification content",
          link: "/docs/security/hide-notification",
          category: "Phone content"
        },
        {
          text: "Lost device, precise locating with NearLink",
          link: "/docs/security/lost-device-nearlink",
          category: "Phone content"
        },
        {
          text: "Personalized color cards for more vibrant photos",
          link: "/docs/camera/color-card",
          category: "Phone content"
        },
        {
          text: "AI-assisted composition, recommends photo angles",
          link: "/docs/camera/ai-composition",
          category: "Phone content"
        },
        {
          text: "Smart photo glare removal",
          link: "/docs/camera/remove-reflections",
          category: "Phone content"
        },
        {
          text: "Best expressions, adjust for the perfect group photo",
          link: "/docs/camera/best-expression",
          category: "Phone content"
        },
        {
          text: "Lock home screen layout",
          link: "/docs/setting/lock-layout",
          category: "Phone content"
        },
        {
          text: "Energetic mood themes, fun lock screen stress relief",
          link: "/docs/setting/mood-theme",
          category: "Phone content"
        },
        
      ]
    },
    {
      date: "2025-12-03",
      items: [
        {
          text: "Added setup method for HUAWEI Vision Air Touch shoulder buttons",
          link: "/docs/touch-tv/touch-control-key",
          category: "HUAWEI Vision content"
        },
      ]
    },
    {
      date: "2025-11-23",
      items: [
        {
          text: "Smart Remote",
          link: "/docs/category/tv-remote-control",
          category: "HUAWEI Vision content"
        },
        {
          text: "Air Touch",
          link: "/docs/category/tv-touch-control",
          category: "HUAWEI Vision content"
        },
        {
          text: "Smart people recognition",
          link: "/docs/smart-life-tv/smart-recognize",
          category: "HUAWEI Vision content"
        },
        {
          text: "Phone as remote control",
          link: "/docs/full-scene-tv/phone-remote-control",
          category: "HUAWEI Vision content"
        },
         {
          text: "Distributed home theater",
          link: "/docs/more-tv/home-theater",
          category: "HUAWEI Vision content"
        },
         {
          text: "How HUAWEI Vision accesses NAS devices",
          link: "/docs/more-tv/nas",
          category: "HUAWEI Vision content"
        },
      ]
    },
    {
      date: "2025-11-13",
      items: [
        {
          text: "Added link to HarmonyOS PC peripheral compatibility list",
          link: "/docs/devices-for-pc",
          category: "PC content"
        },
      ]
    },
    {
      date: "2025-11-03",
      items: [
        {
          text: "Privacy protection, safeguard your privacy",
          link: "/docs/security/privacy-protection",
          category: "Phone content"
        },
        {
          text: "Family anti-fraud, keep your family's devices safe",
          link: "/docs/security/family-ties-prevent-fraud",
          category: "Phone content"
        },
        {
          text: "Scan with ease, no fear of long distances or damaged codes",
          link: "/docs/quick-start/scan",
          category: "Phone content"
        },
        {
          text: "Celia deep problem-solving, a gold-medal smart teaching assistant",
          link: "/docs/ai/xiaoyi-problem-solving",
          category: "Phone content"
        },
        {
          text: "One-tap video creation, turn photos into dynamic videos",
          link: "/docs/camera/one-click-image-creation",
          category: "Phone content"
        },
        {
          text: "Cute chubby hands, win jewelry blind boxes at rock-paper-scissors",
          link: "/docs/setting/fat-hands-theme",
          category: "Phone content"
        },
        {
          text: "Lock screen artistic signature, create personalized wallpapers",
          link: "/docs/setting/lock-screen-signature",
          category: "Phone content"
        },
        {
          text: "Memo quick notes, browse summaries and originals at a glance",
          link: "/docs/setting/memo-shorthand",
          category: "Phone content"
        },
        {
          text: "Seamless cross-device image editing",
          link: "/docs/full-scene/cross-device-image-editing",
          category: "Phone content"
        },
        {
          text: "Tap to share instantly between phone and PC",
          link: "/docs/full-scene/touch-and-share-between-phone-pc",
          category: "Phone content"
        },
        {
          text: "Tap to share, fun sharing between phones",
          link: "/docs/full-scene/touch-and-share-between-phones",
          category: "Phone content"
        },
        
      ]
    },
    {
      date: "2025-11-01",
      items: [
        {
          text: "Updated supported devices, added PC category, and distinguished 6.0 and 5.1",
          link: "/support-device",
          category: "Website pages"
        },
        {
          text: "Added update log, records website updates",
          link: "/update",
          category: "Website pages"
        },
        
      ]
    },
   
  ];

  // Changed grouping from date to month
  const groupedUpdates = updates.reduce((acc, update) => {
    const month = update.date.substring(0, 7); // Get year-month "2024-12"
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(update);
    return acc;
  }, {});

  const monthNames = {
    "2026-12": "December 2026",
    "2026-11": "November 2026",
    "2026-10": "October 2026",
    "2026-09": "September 2026",
    "2026-08": "August 2026",
    "2026-07": "July 2026",
    "2026-06": "June 2026",
    "2026-05": "May 2026",
    "2026-04": "April 2026",
    "2026-03": "March 2026",
    "2026-02": "February 2026",
    "2026-01": "January 2026",
    "2025-12": "December 2025",
    "2025-11": "November 2025",
    "2025-10": "October 2025",
    "2024-12": "December 2024",
    "2024-11": "November 2024"
  };

  return (
    <Layout
      title={`Site update log - ${siteConfig.title}`}
      description="Website content update history">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{'Site update log'}</h1>
          <p className={styles.heroSubtitle}>{'Page and content update history'}</p>
          <p className={styles.heroDescription}>
            {'Records updates to all pages and content on the site, helping you stay informed of the latest changes'}
          </p>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.updatesContainer}>
          <div className={styles.updatesTimeline}>
            {Object.entries(groupedUpdates).map(([month, monthUpdates]) => (
              <div key={month} className={styles.monthSection}>
                <h2 className={styles.monthTitle}>{monthNames[month] || month}</h2>
                <div className={styles.timeline}>
                  {monthUpdates.map((update, updateIndex) => (
                    <div key={updateIndex} className={styles.timelineItem}>
                      <div className={styles.timelineDate}>
                        <div className={styles.dateCircle}></div>
                        <span className={styles.dateText}>{update.date}</span>
                      </div>
                      <div className={styles.timelineContent}>
                        <div className={styles.updateCards}>
                          {update.items.map((item, itemIndex) => (
                            <a key={itemIndex} href={item.link} className={styles.updateCard}>
                              <span className={`${styles.categoryTag} ${styles[item.category]}`}>
                                {item.category}
                              </span>
                              <span className={styles.updateText}>
                                {item.text}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>{'📊 Update stats'}</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{updates.length}</div>
                  <div className={styles.statLabel}>{'Days since update'}</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {updates.reduce((total, update) => total + update.items.length, 0)}
                  </div>
                  <div className={styles.statLabel}>{'Content entries'}</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {new Set(updates.flatMap(update => update.items.map(item => item.category))).size}
                  </div>
                  <div className={styles.statLabel}>{'Content categories'}</div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>{'🏷️ Content categories'}</h3>
              <div className={styles.categoriesList}>
                {Array.from(new Set(updates.flatMap(update => update.items.map(item => item.category)))).map(category => {
                  const count = updates.flatMap(update => update.items).filter(item => item.category === category).length;
                  return (
                    <div key={category} className={styles.categoryItem}>
                      <span className={`${styles.categoryDot} ${styles[category]}`}></span>
                      <span className={styles.categoryName}>{category}</span>
                      <span className={styles.categoryCount}>({count})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}