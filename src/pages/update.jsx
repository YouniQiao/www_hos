import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './content-updates.module.css';

export default function ContentUpdates() {
  const {siteConfig} = useDocusaurusContext();

  const updates = [
    {
      date: "2026-04-23",
      items: [
        {
          text: "博客：鸿蒙电脑上使用Linux",
          link: "/blog/linux-on-harmonyos",
          category: "博客"
        },
      ]
    },
    {
      date: "2026-04-22",
      items: [
        {
          text: "优先通知，重要通知不错过",
          link: "/docs/quick-start-tablet/priority-notification",
          category: "平板内容"
        },
        {
          text: "靠近连接，共享手机通信能力",
          link: "/docs/full-scene-tablet/communication-sharing",
          category: "平板内容"
        },
        {
          text: "鸿蒙星河互联，与 iOS 设备互传文件",
          link: "/docs/full-scene-tablet/star-river-interop-ios",
          category: "平板内容"
        },
        {
          text: "多屏协同，打开多个手机窗口",
          link: "/docs/full-scene-pc/multi-screen-collaboration-multi-window",
          category: "电脑内容"
        },
        {
          text: "无线投屏，协同平板扩展屏幕",
          link: "/docs/full-scene-pc/wireless-projection-tablet",
          category: "电脑内容"
        },
        {
          text: "横屏大窗口，大屏显示手机应用",
          link: "/docs/full-scene-pc/landscape-large-window",
          category: "电脑内容"
        },
        {
          text: "智能安全防护，守护通话安全",
          link: "/docs/security-pc/smart-security-protection",
          category: "电脑内容"
        },
        {
          text: "单应用音量调节",
          link: "/docs/quick-start-pc/per-app-volume",
          category: "电脑内容"
        },
        {
          text: "HarmonyOS 6.1 探索页面上线",
          link: "/hmos61",
          category: "网站页面"
        },
        {
          text: "支持机型页面新增 HarmonyOS 6.1 支持机型",
          link: "/support-device",
          category: "网站页面"
        },
      ]
    },
    {
      date: "2026-04-17",
      items: [
        {
          text: "全新沉浸光感，让界面更通透",
          link: "/docs/setting/immersive-light",
          category: "手机内容"
        },
        {
          text: "一键星盾防诈，守护用机安全",
          link: "/docs/security/star-shield-anti-fraud",
          category: "手机内容"
        },
        {
          text: "优先通知，重要通知不错过",
          link: "/docs/quick-start/priority-notification",
          category: "手机内容"
        },
        {
          text: "一键沾色，快速调整图片色调",
          link: "/docs/camera/color-dip",
          category: "手机内容"
        },
        {
          text: "鸿蒙星河互联，与 iOS 设备互传文件",
          link: "/docs/full-scene/star-river-interop-ios",
          category: "手机内容"
        },
        {
          text: "XMAGE 风格，拍照更出彩",
          link: "/docs/camera/xmage-style",
          category: "手机内容"
        },
        {
          text: "智感握姿，单手操作更顺手",
          link: "/docs/quick-start/smart-grip",
          category: "手机内容"
        },
        {
          text: "靠近连接，共享手机通信能力",
          link: "/docs/full-scene/communication-sharing",
          category: "手机内容"
        },
      ]
    },
    {
      date: "2026-01-24",
      items: [
        {
          text: "首页增加鸿蒙装机量数据显示",
          link: "/",
          category: "网站页面"
        },
      ]
    },
    {
      date: "2026-01-22",
      items: [
        {
          text: "新增Watch非凡大师系列鸿蒙手表",
          link: "/docs/wearable",
          category: "穿戴内容"
        },
        {
          text: "更新支持机型，新增畅享70X，以及穿戴部分机型",
          link: "/support-device",
          category: "网站页面"
        },
      ]
    },
    {
      date: "2026-01-12",
      items: [
        {
          text: "鸿蒙系统安装安卓应用的几种方式",
          link: "/blog/install-android-apps",
          category: "博客"
        },
      ]
    },
    {
      date: "2026-01-09",
      items: [
        {
          text: "应用中心，高效管理应用",
          link: "/docs/quick-start-tablet/app-center-efficient-management",
          category: "平板内容"
        },
        {
          text: "扫一扫，无惧远距离、破损码",
          link: "/docs/quick-start-tablet/easy-scan-guide",
          category: "平板内容"
        },
        {
          text: "编辑控制中心",
          link: "/docs/quick-start-tablet/edit-control-center",
          category: "平板内容"
        },
        {
          text: "笔记，无纸化学习办公新体验",
          link: "/docs/quick-start-tablet/notes-paperless-experience",
          category: "平板内容"
        },
        {
          text: "实时调整手写字迹",
          link: "/docs/quick-start-tablet/real-time-handwriting-adjustment",
          category: "平板内容"
        },
        {
          text: "提笔成文，落笔成画",
          link: "/docs/quick-start-tablet/writing-and-drawing-with-stylus",
          category: "平板内容"
        },
        {
          text: "用机有疑问？试试找小艺",
          link: "/docs/ai-tablet/ask-celia-for-device-help",
          category: "平板内容"
        },
        {
          text: "日历课程表，随时查看课程安排",
          link: "/docs/ai-tablet/calendar-curriculum-schedule",
          category: "平板内容"
        },
        {
          text: "小艺智能体，一步开启专业技能",
          link: "/docs/ai-tablet/celia-agents-professional-skills",
          category: "平板内容"
        },
        {
          text: "小艺深度解题，金牌智能助教",
          link: "/docs/ai-tablet/celia-deep-problem-solving",
          category: "平板内容"
        },
        {
          text: "小艺任务，一句话执行任务",
          link: "/docs/ai-tablet/celia-tasks-voice-execution",
          category: "平板内容"
        },
        {
          text: "沉浸式翻译，轻松浏览外文",
          link: "/docs/ai-tablet/immersive-translation-easy-browsing",
          category: "平板内容"
        },
        {
          text: "亲情防诈，为家人守护设备安全",
          link: "/docs/security-tablet/family-anti-fraud-protection",
          category: "平板内容"
        },
        {
          text: "设备丢失，关机也能找",
          link: "/docs/security-tablet/find-device-even-when-powered-off",
          category: "平板内容"
        },
        {
          text: "安全访问，保护隐私数据",
          link: "/docs/security-tablet/secure-access-protect-privacy-data",
          category: "平板内容"
        },
        {
          text: "一键成片，图片巧变动态视频",
          link: "/docs/camera-tablet/instant-movie-images-to-dynamic-videos",
          category: "平板内容"
        },
        {
          text: "萌趣小胖手，猜拳赢手饰盲盒",
          link: "/docs/setting-tablet/cute-chubby-hand-theme-game",
          category: "平板内容"
        },
        {
          text: "深色模式，暗下来更舒适",
          link: "/docs/setting-tablet/dark-mode-comfort",
          category: "平板内容"
        },
        {
          text: "锁定桌面布局",
          link: "/docs/setting-tablet/lock-home-screen-layout",
          category: "平板内容"
        },
        {
          text: "锁屏艺术签名，创作个性壁纸",
          link: "/docs/setting-tablet/lock-screen-artistic-signature",
          category: "平板内容"
        },
        {
          text: "元气心情主题，锁屏奇趣解压",
          link: "/docs/setting-tablet/mood-match-theme-lock-screen",
          category: "平板内容"
        },
        {
          text: "备忘录速记，速览摘要和原文",
          link: "/docs/setting-tablet/notes-quick-note-summary-and-original-text",
          category: "平板内容"
        },
        {
          text: "图片编辑跨设备无缝接续",
          link: "/docs/full-scene-tablet/seamless-cross-device-image-editing",
          category: "平板内容"
        },
      
      ]
    },


    {
      date: "2025-12-30",
      items: [
        {
          text: "控制中心个性编辑",
          link: "/docs/quick-start-pc/control-center-edit",
          category: "电脑内容"
        },
        {
          text: "日历课程表，随时查看课程安排",
          link: "/docs/quick-start-pc/calendar-course-schedule",
          category: "电脑内容"
        },
        {
          text: "涂鸦创作，还能一键还原",
          link: "/docs/quick-start-pc/graffiti-creation-and-restoration",
          category: "电脑内容"
        },
        {
          text: "碰一碰，手机电脑即刻互传",
          link: "/docs/full-scene-pc/touch-to-share-phone-pc-transfer",
          category: "电脑内容"
        },
        {
          text: "手眼同行，文件随目光拖放",
          link: "/docs/full-scene-pc/hand-eye-coordination-drag-files",
          category: "电脑内容"
        },
        {
          text: "文档助理，快速总结摘要和问答",
          link: "/docs/ai-pc/xiaoyi-document-assistant-summary-qa",
          category: "电脑内容"
        },
        {
          text: "小艺圈选，快速提取搜索",
          link: "/docs/ai-pc/xiaoyi-circle-to-search",
          category: "电脑内容"
        },
        {
          text: "深度研究，助您深度搜索和分析",
          link: "/docs/ai-pc/xiaoyi-deep-research",
          category: "电脑内容"
        },
        {
          text: "小艺知识库，您的专属知识管家",
          link: "/docs/ai-pc/xiaoyi-knowledge-base-guide",
          category: "电脑内容"
        },
        {
          text: "智能分类，指定文件自动归类",
          link: "/docs/ai-pc/smart-file-categorization",
          category: "电脑内容"
        },
        {
          text: "智能推荐，关联文档一键直达",
          link: "/docs/ai-pc/smart-recommendation-related-documents",
          category: "电脑内容"
        },
        {
          text: "智慧划词，即刻解答",
          link: "/docs/ai-pc/smart-text-selection",
          category: "电脑内容"
        },
        {
          text: "智能相册分类",
          link: "/docs/ai-pc/smart-album-classification",
          category: "电脑内容"
        },
        {
          text: "单指沿右边缘上下滑动以调节音量",
          link: "/docs/gesture/adjust-volume-touchpad-gesture",
          category: "电脑内容"
        },
        {
          text: "单指沿左边缘上下滑动以调节亮度",
          link: "/docs/gesture/adjust-brightness-touchpad-left-edge",
          category: "电脑内容"
        },
        {
          text: "跨设备隔空传送文件",
          link: "/docs/gesture/cross-device-air-transfer",
          category: "电脑内容"
        },
        {
          text: "隔空手势滑动屏幕",
          link: "/docs/gesture/air-gestures-scrolling-screen",
          category: "电脑内容"
        },
        {
          text: "隔空手势抓取截屏",
          link: "/docs/gesture/air-gesture-screenshot",
          category: "电脑内容"
        },
        {
          text: "图片转PPT，助您高效创作",
          link: "/docs/work/image-to-ppt-efficient-creation",
          category: "电脑内容"
        },
        {
          text: "收纳夹，桌面灵活布局",
          link: "/docs/work/desktop-storage",
          category: "电脑内容"
        },
        {
          text: "安全防护，实时防护病毒威胁",
          link: "/docs/security-pc/security-protection",
          category: "电脑内容"
        },
        {
          text: "开启未成年人模式",
          link: "/docs/setting-pc/enable-minors-mode",
          category: "电脑内容"
        },
        
      
      ]
    },
    {
      date: "2025-12-24",
      items: [
        {
          text: "绕开华为应用市场安装应用",
          link: "/blog/install-apps",
          category: "博客"
        },
      ]
    },
    {
      date: "2025-12-22",
      items: [
        {
          text: "更新支持机型",
          link: "/support-device",
          category: "网站页面"
        },
      ]
    },
    {
      date: "2025-12-10",
      items: [
        {
          text: "搜索哪些应用支持纯血鸿蒙",
          link: "/blog/search-apps",
          category: "博客"
        },
        {
          text: "新增博客功能",
          link: "/blog",
          category: "网站页面"
        },
      ]
    },
    {
      date: "2025-12-05",
      items: [
        {
          text: "应用中心，高效管理应用",
          link: "/docs/quick-start/app-center",
          category: "手机内容"
        },
        {
          text: "日历课程表，随时查看课程安排",
          link: "/docs/ai/calendar-schedule",
          category: "手机内容"
        },
        {
          text: "沉浸式翻译，轻松浏览外文",
          link: "/docs/ai/xiaoyi-translate",
          category: "手机内容"
        },
        {
          text: "小艺智能体，一步开启专业技能",
          link: "/docs/ai/xiaoyi-ai-agent",
          category: "手机内容"
        },
        {
          text: "小艺帮帮忙，轻松搞定大小事",
          link: "/docs/ai/xiaoyi-help",
          category: "手机内容"
        },
        {
          text: "用机有疑问？试试找小艺",
          link: "/docs/ai/xiaoyi-solve-problem",
          category: "手机内容"
        },
        {
          text: "安全访问，保护隐私数据",
          link: "/docs/security/secure-access",
          category: "手机内容"
        },
        {
          text: "智能隐藏横幅通知内容",
          link: "/docs/security/hide-notification",
          category: "手机内容"
        },
        {
          text: "设备丢失，星闪精确查找",
          link: "/docs/security/lost-device-nearlink",
          category: "手机内容"
        },
        {
          text: "个性色卡，拍照更出彩",
          link: "/docs/camera/color-card",
          category: "手机内容"
        },
        {
          text: "AI辅助构图，推荐拍照角度",
          link: "/docs/camera/ai-composition",
          category: "手机内容"
        },
        {
          text: "智能去除照片反光",
          link: "/docs/camera/remove-reflections",
          category: "手机内容"
        },
        {
          text: "最佳表情，调整出满意的合照",
          link: "/docs/camera/best-expression",
          category: "手机内容"
        },
        {
          text: "锁定桌面布局",
          link: "/docs/setting/lock-layout",
          category: "手机内容"
        },
        {
          text: "元气心情主题，锁屏奇趣解压",
          link: "/docs/setting/mood-theme",
          category: "手机内容"
        },
        
      ]
    },
    {
      date: "2025-12-03",
      items: [
        {
          text: "新增智慧屏悬浮触控肩键设置方法",
          link: "/docs/touch-tv/touch-control-key",
          category: "智慧屏内容"
        },
      ]
    },
    {
      date: "2025-11-23",
      items: [
        {
          text: "灵犀指向遥控",
          link: "/docs/category/tv-remote-control",
          category: "智慧屏内容"
        },
        {
          text: "灵犀悬浮触控",
          link: "/docs/category/tv-touch-control",
          category: "智慧屏内容"
        },
        {
          text: "智慧识人",
          link: "/docs/smart-life-tv/smart-recognize",
          category: "智慧屏内容"
        },
        {
          text: "手机变身遥控器",
          link: "/docs/full-scene-tv/phone-remote-control",
          category: "智慧屏内容"
        },
         {
          text: "分布式家庭影院",
          link: "/docs/more-tv/home-theater",
          category: "智慧屏内容"
        },
         {
          text: "华为智慧屏如何访问NAS设备",
          link: "/docs/more-tv/nas",
          category: "智慧屏内容"
        },
      ]
    },
    {
      date: "2025-11-13",
      items: [
        {
          text: "新增鸿蒙电脑外设兼容清单查询链接",
          link: "/docs/devices-for-pc",
          category: "电脑内容"
        },
      ]
    },
    {
      date: "2025-11-03",
      items: [
        {
          text: "防窥保护，守护隐私安全",
          link: "/docs/security/privacy-protection",
          category: "手机内容"
        },
        {
          text: "亲情防诈，为家人守护设备安全",
          link: "/docs/security/family-ties-prevent-fraud",
          category: "手机内容"
        },
        {
          text: "扫一扫，无惧远距离、破损码",
          link: "/docs/quick-start/scan",
          category: "手机内容"
        },
        {
          text: "小艺深度解题，金牌智能助教",
          link: "/docs/ai/xiaoyi-problem-solving",
          category: "手机内容"
        },
        {
          text: "一键成片，图片巧变动态视频",
          link: "/docs/camera/one-click-image-creation",
          category: "手机内容"
        },
        {
          text: "萌趣小胖手，猜拳赢手饰盲盒",
          link: "/docs/setting/fat-hands-theme",
          category: "手机内容"
        },
        {
          text: "锁屏艺术签名，创作个性壁纸",
          link: "/docs/setting/lock-screen-signature",
          category: "手机内容"
        },
        {
          text: "备忘录速记，速览摘要和原文",
          link: "/docs/setting/memo-shorthand",
          category: "手机内容"
        },
        {
          text: "图片编辑跨设备无缝接续",
          link: "/docs/full-scene/cross-device-image-editing",
          category: "手机内容"
        },
        {
          text: "碰一碰，手机电脑即刻分享",
          link: "/docs/full-scene/touch-and-share-between-phone-pc",
          category: "手机内容"
        },
        {
          text: "碰一碰，手机间趣味分享",
          link: "/docs/full-scene/touch-and-share-between-phones",
          category: "手机内容"
        },
        
      ]
    },
    {
      date: "2025-11-01",
      items: [
        {
          text: "更新支持机型，新增PC分类，以及区分6.0及5.1",
          link: "/support-device",
          category: "网站页面"
        },
        {
          text: "新增更新记录，记录网站更新",
          link: "/update",
          category: "网站页面"
        },
        
      ]
    },
   
  ];

  // 按日期分组，并转换为按月份分组
  const groupedUpdates = updates.reduce((acc, update) => {
    const month = update.date.substring(0, 7); // 获取年月 "2024-12"
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(update);
    return acc;
  }, {});

  const monthNames = {
    "2026-12": "2026年12月",
    "2026-11": "2026年11月",
    "2026-10": "2026年10月",
    "2026-09": "2026年09月",
    "2026-08": "2026年08月",
    "2026-07": "2026年07月",
    "2026-06": "2026年06月",
    "2026-05": "2026年05月",
    "2026-04": "2026年04月",
    "2026-03": "2026年03月",
    "2026-02": "2026年02月",
    "2026-01": "2026年01月",
    "2025-12": "2025年12月",
    "2025-11": "2025年11月",
    "2025-10": "2025年10月",
    "2024-12": "2024年12月",
    "2024-11": "2024年11月"
  };

  return (
    <Layout
      title={`站点更新记录 - ${siteConfig.title}`}
      description="网站内容更新历史记录">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>站点更新记录</h1>
          <p className={styles.heroSubtitle}>页面及内容更新历史</p>
          <p className={styles.heroDescription}>
            记录网站所有页面及内容的更新情况，帮助您了解最新变化
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
              <h3>📊 更新统计</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{updates.length}</div>
                  <div className={styles.statLabel}>更新天数</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {updates.reduce((total, update) => total + update.items.length, 0)}
                  </div>
                  <div className={styles.statLabel}>内容条目</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {new Set(updates.flatMap(update => update.items.map(item => item.category))).size}
                  </div>
                  <div className={styles.statLabel}>内容分类</div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>🏷️ 内容分类</h3>
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