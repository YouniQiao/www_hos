import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './SupportedDevices.css';

const SupportedDevices = () => {
  const {siteConfig} = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState('phones');
  
  // 手机设备列表
  const phones = [
    {
      name: "Mate X系列",
      models: ["Mate XTs 非凡大师", "Mate XT 非凡大师", "Mate X7","Mate X6", "Mate X6 典藏版", "Mate X5", "Mate X5 典藏版"],
      image: "mate70"
    },
    {
      name: "Pure X系列",
      models: ["Pure X","Pure X 典藏版"],
      image: "mate60"
    },
    {
      name: "Mate 80系列",
      models: ["Mate 80", "Mate 80 Pro", "Mate 80 Pro Max",  "Mate 80 RS 非凡大师"],
      image: "mate80"
    },
    {
      name: "Pura 80系列",
      models: ["Pura 70", "Pura 70 Pro", "Pura 70 Pro+","Pura 70 Ultra"],
      image: "pura80"
    },
    {
      name: "Mate 70系列",
      models: ["Mate 70", "Mate 70 Air","Mate 70 Pro", "Mate 70 Pro+", "Mate 70 RS", "Mate 70 Pro 优享版"],
      image: "mate70"
    },
    {
      name: "Pura 70系列",
      models: ["Pura 70", "Pura 70 Pro", "Pura 70 Pro+","Pura 70 Ultra","Pura 70 北斗卫星消息版"],
      image: "pura70"
    },
    {
      name: "Mate 60系列",
      models: ["Mate 60", "Mate 60 Pro", "Mate 60 Pro+", "Mate 60 RS 非凡大师"],
      image: "mate60"
    },
    {
      name: "nova 15系列",
      models: ["nova 15", "nova 15 Pro", "nova 15 Ultra"],
      image: "nova14"
    },
    {
      name: "nova 14系列",
      models: ["nova 14", "nova 14 Pro", "nova 14 Ultra","nova 14 活力版"],
      image: "nova14"
    },
    {
      name: "nova 13系列",
      models: ["nova 13", "nova 13 Pro"],
      image: "nova13"
    },
    {
      name: "nova 12系列",
      models: ["nova 12", "nova 12 Pro", "nova 12 Ultra","nova 12 Ultra星耀版"],
      image: "nova12"
    },
    {
      name: "nova Flip",
      models: ["nova Flip","nova Flip S"],
      image: "nova13"
    },
    {
      name: "Pocket系列",
      models: ["Pocket 2", "Pocket 2 艺术定制版", "Pocket 2 优享版"],
      image: "nova13"
    },
    {
      name: "华为畅享系列",
      models: ["畅享 70X",],
      image: "nova13"
    },
    
  ];

  // 手机 HarmonyOS 6.1 支持机型
  const phones61 = [
    // 正式版
    {
      name: "Mate 80系列",
      models: ["Mate 80", "Mate 80 Pro", "Mate 80 Pro Max", "Mate 80 RS 非凡大师"],
      image: "mate80"
    },
    {
      name: "Pura 80系列",
      models: ["Pura 80", "Pura 80 Pro", "Pura 80 Pro+", "Pura 80 Ultra"],
      image: "pura80"
    },
    {
      name: "Mate 70系列",
      models: ["Mate 70", "Mate 70 Pro", "Mate 70 Pro 优享版", "Mate 70 Pro+", "Mate 70 RS 非凡大师", "Mate 70 Air"],
      image: "mate70"
    },
    {
      name: "Pura 70系列",
      models: ["Pura 70", "Pura 70 北斗卫星消息版", "Pura 70 Pro", "Pura 70 Pro+", "Pura 70 Ultra"],
      image: "pura70"
    },
    {
      name: "Pura X系列",
      models: ["Pura X", "Pura X 典藏版"],
      image: "pura70"
    },
    {
      name: "Mate 60系列",
      models: ["Mate 60", "Mate 60 Pro", "Mate 60 Pro+", "Mate 60 RS 非凡大师"],
      image: "mate60"
    },
    {
      name: "Mate X系列",
      models: ["Mate X7", "Mate X7 典藏版", "Mate X6", "Mate X6 典藏版", "Mate XTs 非凡大师"],
      image: "mate70"
    },
    {
      name: "nova 15系列",
      models: ["nova 15", "nova 15 Pro", "nova 15 Ultra"],
      image: "nova14"
    },
    // 公测版
    {
      name: "Mate X5系列 (公测)",
      models: ["Mate X5", "Mate X5 典藏版", "Mate XT 非凡大师"],
      image: "mate60"
    },
    {
      name: "Pocket系列 (公测)",
      models: ["Pocket 2", "Pocket 2 艺术定制版", "Pocket 2 优享版"],
      image: "nova13"
    },
    {
      name: "nova 14系列 (公测)",
      models: ["nova 14", "nova 14 Pro", "nova 14 Ultra", "nova 14 活力版"],
      image: "nova14"
    },
    {
      name: "nova 13系列 (公测)",
      models: ["nova 13", "nova 13 Pro"],
      image: "nova13"
    },
    {
      name: "nova 12系列 (公测)",
      models: ["nova 12", "nova 12 Pro", "nova 12 Ultra", "nova 12 Ultra 星耀版"],
      image: "nova12"
    },
    {
      name: "nova Flip系列 (公测)",
      models: ["nova Flip", "nova Flip S"],
      image: "nova13"
    },
    {
      name: "华为畅享系列 (公测)",
      models: ["畅享 70X", "畅享 70X 尊享版"],
      image: "nova13"
    },
  ];

  // 手机设备列表 5.1
  const phones51 = [
    {
      name: "同6.0机型",
      models: ["请升级到HarmonyOS 6.0", ],
      image: "matepad-pro-13"
    },
    
  ];

  // 平板设备列表 6.0
  const tablets = [
    {
      name: "MatePad Edge",
      models: [ "Edge"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 13.2英寸",
      models: ["2023/2023典藏款/2025"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 12.2英寸",
      models: ["2024/2025"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 11英寸",
      models: [ "2024"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad 11.5 S",
      models: ["2025/灵动款2025/活力版2025","2024/灵动款2024"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Air",
      models: ["2024","2025"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Mini",
      models: ["Mini",],
      image: "matepad-pro-13"
    },
    
  ];

  // 平板 HarmonyOS 6.1 支持机型
  const tablets61 = [
    // 正式版
    {
      name: "MatePad Edge",
      models: ["Edge"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 13.2英寸",
      models: ["2025"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 12.2英寸",
      models: ["2025", "2024"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Air",
      models: ["2025"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad 11.5",
      models: ["2026"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad 11.5 S",
      models: ["2025", "灵动款 2025", "活力版 2025"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Mini",
      models: ["Mini"],
      image: "matepad-pro-13"
    },
    // 公测版
    {
      name: "MatePad Pro 13.2英寸 (公测)",
      models: ["2023", "2023 典藏版"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Air (公测)",
      models: ["2024"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad 11.5 S (公测)",
      models: ["2024", "灵动款 2024"],
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 11英寸 (公测)",
      models: ["2024"],
      image: "matepad-pro-13"
    },
  ];

  // 平板设备列表 5.1
  const tablets51 = [
    {
      name: "MatePad Air",
      models: ["2024"],
      image: "matepad-pro-11"
    },
    {
      name: "MatePad",
      models: ["11.5'S", "11.5'S 灵动款"],
      image: "matepad-pro-12"
    },
    
  ];


  // 电脑设备列表 6.0
  const pcs = [
    {
      name: "MateBook Fold",
      models: ["非凡大师",],
      image: "matepad-pro-12"
    },
    {
      name: "MateBook",
      models: ["Pro", ],
      image: "matepad-pro-12"
    },
  ];

  // 电脑 HarmonyOS 6.1 支持机型 (公测)
  const pcs61 = [
    {
      name: "MateBook Fold",
      models: ["非凡大师"],
      image: "matepad-pro-12"
    },
    {
      name: "MateBook",
      models: ["Pro"],
      image: "matepad-pro-12"
    },
    {
      name: "MateBook 14",
      models: ["鸿蒙版"],
      image: "matepad-pro-12"
    },
  ];

  // 电脑设备列表 5.1
  const pcs51 = [
    {
      name: "同6.0设备",
      models: ["请升级到HarmonyOS 6.0"],
      image: "freebuds-pro4"
    },
    
  ];

  // 穿戴设备列表 6.0
  const wearables = [
    {
      name: "WATCH非凡大师系列",
      models: ["非凡大师 紫金款","Ultimate 2",],
      image: "freebuds-pro4"
    },
    {
      name: "WATCH系列",
      models: ["WATCH 5",],
      image: "freebuds-pro4"
    },
    {
      name: "WATCH GT系列",
      models: ["WATCH GT 5 Pro","WATCH GT 5"],
      image: "watch-gt4"
    },
    {
      name: "WATCH Fit系列",
      models: ["WATCH Fit 4 Pro","WATCH Fit 4"],
      image: "watch-gt4"
    },
  ];

  // 穿戴 HarmonyOS 6.1 支持机型
  const wearables61 = [
    // 正式版
    {
      name: "WATCH GT 6系列",
      models: ["WATCH GT 6", "WATCH GT 6 Pro"],
      image: "watch-gt4"
    },
    // 公测版
    {
      name: "WATCH Ultimate (公测)",
      models: ["Ultimate 2 非凡探索", "ULTIMATE DESIGN 非凡大师 紫金款"],
      image: "freebuds-pro4"
    },
    {
      name: "WATCH系列 (公测)",
      models: ["WATCH 5"],
      image: "freebuds-pro4"
    },
    {
      name: "WATCH Fit系列 (公测)",
      models: ["WATCH FIT 4", "WATCH FIT 4 Pro"],
      image: "watch-gt4"
    },
  ];

  // 穿戴设备列表 5.1
  const wearables51 = [
    {
      name: "同6.0设备",
      models: ["请升级到HarmonyOS 6.0"],
      image: "freebuds-pro4"
    },
    
  ];


  // ===== HarmonyOS 7 支持机型 =====
  // 数据来源：华为官网「HarmonyOS 7 支持机型」页面（2026.9 更新）
  // 分组：公测版 / 花粉 于 9月7日 开放升级尝鲜；花粉Beta 于 10月 开放；更多产品敬请期待
  const hmos7 = {
    phones: {
      beta: [
        { name: "Mate 80系列", models: ["Mate 80", "Mate 80 Pro", "Mate 80 Pro Max", "Mate 80 Pro Max 风驰版", "Mate 80 RS 非凡大师"], image: "mate80" },
        { name: "Mate 70系列", models: ["Mate 70", "Mate 70 Pro", "Mate 70 Pro 优享版", "Mate 70 Pro+", "Mate 70 RS 非凡大师", "Mate 70 Air"], image: "mate70" },
        { name: "Mate X系列", models: ["Mate X7", "Mate X7 典藏版", "Mate X6", "Mate X6 典藏版", "Mate XTs 非凡大师"], image: "mate70" },
        { name: "Pura 90系列", models: ["Pura 90", "Pura 90 Pro", "Pura 90 Max"], image: "pura80" },
        { name: "Pura 80系列", models: ["Pura 80", "Pura 80 Pro", "Pura 80 Pro+", "Pura 80 Ultra"], image: "pura80" },
        { name: "Pura X系列", models: ["Pura X Max", "Pura X Max 典藏版", "Pura X", "Pura X 典藏版"], image: "pura70" },
        { name: "nova 16系列", models: ["nova 16", "nova 16 Pro", "nova 16 Ultra", "nova 16z"], image: "nova14" },
        { name: "nova 15系列", models: ["nova 15", "nova 15 Pro", "nova 15 Ultra"], image: "nova14" },
        { name: "畅享 90系列", models: ["畅享 90", "畅享 90 Plus", "畅享 90m Plus", "畅享 90 Pro Max"], image: "nova13" },
      ],
      fans: [
        { name: "nova 16 SE", image: "nova14" },
      ],
      fansBeta: [
        { name: "Mate 60 系列", image: "mate60" },
        { name: "Mate X5 系列", image: "mate60" },
        { name: "Pocket 2 系列", image: "nova13" },
        { name: "Mate XT 非凡大师", image: "mate70" },
        { name: "Pura 70 系列", image: "pura70" },
        { name: "nova 14 系列", image: "nova14" },
        { name: "nova 13 系列", image: "nova13" },
        { name: "nova 12 系列", image: "nova12" },
        { name: "nova Flip S", image: "nova13" },
        { name: "nova Flip", image: "nova13" },
        { name: "畅享 70X (含尊享版)", image: "nova13" },
      ],
    },
    tablets: {
      beta: [
        { name: "MatePad Edge", image: "matepad-pro-13" },
        { name: "MatePad Pro Max", image: "matepad-pro-13" },
        { name: "MatePad Pro 12 英寸", image: "matepad-pro-12" },
        { name: "MatePad Mini", image: "matepad-pro-11" },
        { name: "MatePad 11.5 2026", image: "matepad-pro-11" },
      ],
      fans: [
        { name: "MatePad Air 12 英寸 2026", image: "matepad-air" },
      ],
      fansBeta: [
        { name: "MatePad Pro 13.2 英寸 2025", image: "matepad-pro-13" },
        { name: "MatePad Pro 13.2 英寸 2023 系列", image: "matepad-pro-13" },
        { name: "MatePad Pro 12.2 英寸 2025", image: "matepad-pro-12" },
        { name: "MatePad Pro 12.2 英寸 2024 系列", image: "matepad-pro-12" },
        { name: "MatePad Pro 11 英寸 2024", image: "matepad-pro-11" },
        { name: "MatePad Air 12 英寸 2025 系列", image: "matepad-air" },
        { name: "MatePad Air 12 英寸 2024", image: "matepad-air" },
        { name: "MatePad 11.5 S 2025 系列", image: "matepad-pro-11" },
        { name: "MatePad 11.5\"S 2024 系列", image: "matepad-pro-11" },
      ],
    },
    pcs: {
      beta: [
        { name: "MateBook Fold 非凡大师 麒麟X90 Plus", image: "matepad-pro-12" },
        { name: "MateBook Fold 非凡大师", image: "matepad-pro-12" },
        { name: "MateBook Pro 麒麟X90 Plus", image: "matepad-pro-12" },
        { name: "MateBook Pro", image: "matepad-pro-12" },
        { name: "MateBook Pro S", image: "matepad-pro-12" },
        { name: "MateBook 14 鸿蒙版", image: "matepad-pro-12" },
      ],
    },
    wearables: {
      beta: [
        { name: "WATCH Ultimate 2 非凡探索", image: "freebuds-pro4" },
        { name: "WATCH ULTIMATE DESIGN 非凡大师 紫金款", image: "freebuds-pro4" },
        { name: "WATCH ULTIMATE DESIGN 非凡大师 尊界定制款", image: "freebuds-pro4" },
        { name: "WATCH GT 7 系列", image: "watch-gt4" },
      ],
      fans: [
        { name: "WATCH GT 7", image: "watch-gt4" },
        { name: "WATCH GT 7 Pro", image: "watch-gt4" },
        { name: "WATCH FIT 5", image: "watch-gt4" },
        { name: "WATCH FIT 5 Pro", image: "watch-gt4" },
      ],
      fansBeta: [
        { name: "WATCH GT Runner 2", image: "watch-gt4" },
        { name: "WATCH GT 6 系列", image: "watch-gt4" },
      ],
      more: [
        { name: "WATCH ULTIMATE DESIGN 非凡大师 星钻绽放款", image: "freebuds-pro4" },
        { name: "WATCH 5 系列", image: "freebuds-pro4" },
      ],
    },
    audios: {
      beta: [
        { name: "FreeClip 2 系列", image: "freebuds-pro4" },
      ],
      fansBeta: [
        { name: "FreeBuds Pro 5", image: "freebuds-pro4" },
        { name: "FreeBuds Pro 4", image: "freebuds-pro4" },
        { name: "FreeBuds 6", image: "freebuds-pro4" },
      ],
    },
    // 更多产品敬请期待
    smartLife: [
      "智能门锁 2 系列", "智能门锁 M2", "智能门锁 X1",
      "路由 X3 Pro 日照金山", "路由 X1 系列",
      "凌霄子母路由 Q7 电线版", "凌霄子母路由 Q7 网线版",
      "鸿蒙智家 智能主机 X2 系列", "智慧屏 MateTV 系列",
    ],
  };

  // 分组渲染（公测版 / 花粉 / 花粉Beta）
  const renderGroup = (title, date, devices) => (
    devices && devices.length > 0 ? (
      <>
        <h3 className="group-title">
          {title}
          {date ? <span className="group-date">{date}</span> : null}
        </h3>
        <div className="devices-grid">
          {devices.map(renderDeviceCard)}
        </div>
      </>
    ) : null
  );

  // 更新时间线
  const timeline = [
{
      period: "2026年10月",
      description: "HarmonyOS 7 花粉Beta 开放，老机型陆续加入尝鲜",
      devices: ["Mate 60系列", "Mate X5系列", "Pocket 2系列", "Pura 70系列", "nova 12/13/14系列", "MatePad Pro 13.2英寸", "WATCH GT 6系列", "FreeBuds Pro 5"]
    },
{
      period: "2026年9月7日",
      description: "HarmonyOS 7 公测版与花粉尝鲜开放，新旗舰机型首批升级",
      devices: ["Mate 80系列", "Mate 70系列", "Mate X系列", "Pura 80/90系列", "nova 15/16系列", "MatePad Edge", "MateBook Fold 非凡大师", "WATCH Ultimate 2"]
    },
{
      period: "2025年第四季度及以后",
      description: "更多老机型逐步适配，扩大HarmonyOS生态",
      devices: ["更多老款机型持续更新中"]
    },
{
      period: "2025年第三季度",
      description: "nova系列",
      devices: ["nova 14系列"]
    },
{
      period: "2025年第一季度",
      description: "nova系列、MatePad系列",
      devices: ["nova 12/13系列", "MatePad系列"]
    },
{
      period: "2024年第四季度",
      description: "Mate 60/70系列、Pura 70系列、Mate X6系列等旗舰设备首批升级",
      devices: ["Mate 60系列", "Mate 70系列", "Pura 70系列", "Mate X6系列"]
    }

  ];

  const renderDeviceCard = (device) => (
    <div key={device.name} className="device-card">
      <div className="device-image">
        <div className={`device-placeholder ${device.image}`}>
          <div className="device-screen"></div>
        </div>
      </div>
      <div className="device-info">
        <h3>{device.name}</h3>
        <div className="device-models">
          {device.models && device.models.length > 0 ? device.models.join(" · ") : ""}
        </div>
      </div>
    </div>
  );

  return (
    <Layout
      title="HarmonyOS支持机型"
      description="查看所有支持升级到HarmonyOS的手机、平板和穿戴设备">
      <div className="devices-page">
        {/* 英雄区域 */}
        <section className="devices-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">HarmonyOS 支持机型</h1>
              <p className="hero-subtitle">探索可升级到下一代操作系统的华为设备</p>
              <p className="device-date">本页面更新时间：2026.9.15</p>
            </div>
          </div>
        </section>

        {/* 设备导航 */}
        <section className="devices-nav">
          <div className="container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'phones' ? 'active' : ''}`}
                onClick={() => setActiveTab('phones')}
              >
                📱 手机设备
              </button>
              <button 
                className={`tab ${activeTab === 'tablets' ? 'active' : ''}`}
                onClick={() => setActiveTab('tablets')}
              >
                💻 平板设备
              </button>
              <button 
                className={`tab ${activeTab === 'pcs' ? 'active' : ''}`}
                onClick={() => setActiveTab('pcs')}
              >
                💻 电脑设备
              </button>
              <button 
                className={`tab ${activeTab === 'wearables' ? 'active' : ''}`}
                onClick={() => setActiveTab('wearables')}
              >
                ⌚ 穿戴设备
              </button>
              <button 
                className={`tab ${activeTab === 'audios' ? 'active' : ''}`}
                onClick={() => setActiveTab('audios')}
              >
                🎧 音频设备
              </button>
              <button 
                className={`tab ${activeTab === 'smartLife' ? 'active' : ''}`}
                onClick={() => setActiveTab('smartLife')}
              >
                🏠 智慧生活
              </button>
            </div>
          </div>
        </section>

        {/* 设备列表 */}
        <section className="devices-list">
          <div className="container">
            {activeTab === 'phones' && (
              <>
                <h2 className="section-title">手机 HarmonyOS 7支持机型</h2>
                {renderGroup("公测版", "9月7日", hmos7.phones.beta)}
                {renderGroup("花粉", "9月7日", hmos7.phones.fans)}
                {renderGroup("花粉Beta", "10月", hmos7.phones.fansBeta)}
                <br/><br/>
                <h2 className="section-title">手机 HarmonyOS 6.1支持机型</h2>
                <div className="devices-grid">
                  {phones61.map(renderDeviceCard)}
                </div>
                <br/><br/>
                <h2 className="section-title">手机 HarmonyOS 6.0支持机型</h2>
                <div className="devices-grid">
                  {phones.map(renderDeviceCard)}
                </div>
                 <br/><br/>
                 <h2 className="section-title">手机 HarmonyOS 5.1支持机型</h2>
                 <div className="devices-grid">
                  {phones51.map(renderDeviceCard)}
                </div>
              </>
            )}
            
            {activeTab === 'tablets' && (
              <>
                <h2 className="section-title">平板 HarmonyOS 7支持机型</h2>
                {renderGroup("公测版", "9月7日", hmos7.tablets.beta)}
                {renderGroup("花粉", "9月7日", hmos7.tablets.fans)}
                {renderGroup("花粉Beta", "10月", hmos7.tablets.fansBeta)}
                <br/><br/>
                <h2 className="section-title">平板 HarmonyOS 6.1支持机型</h2>
                <div className="devices-grid">
                  {tablets61.map(renderDeviceCard)}
                </div>
                <br/><br/>
                <h2 className="section-title">平板 HarmonyOS 6.0支持机型</h2>
                <div className="devices-grid">
                  {tablets.map(renderDeviceCard)}
                </div>
                <br/><br/>
                 <h2 className="section-title">平板 HarmonyOS 5.1支持机型</h2>
                 <div className="devices-grid">
                  {tablets51.map(renderDeviceCard)}
                </div>
              </>
            )}

            {activeTab === 'pcs' && (
              <>
                <h2 className="section-title">电脑 HarmonyOS 7支持机型</h2>
                {renderGroup("公测版", "9月7日", hmos7.pcs.beta)}
                <br/><br/>
                <h2 className="section-title">电脑 HarmonyOS 6.1支持机型</h2>
                <div className="devices-grid">
                  {pcs61.map(renderDeviceCard)}
                </div>
                <br/><br/>
                <h2 className="section-title">电脑 HarmonyOS 6.0支持机型</h2>
                <div className="devices-grid">
                  {pcs.map(renderDeviceCard)}
                </div>
                <br/><br/>
                 <h2 className="section-title">电脑 HarmonyOS 5.1支持机型</h2>
                 <div className="devices-grid">
                  {pcs51.map(renderDeviceCard)}
                </div>
              </>
            )}
            
            {activeTab === 'wearables' && (
              <>
                <h2 className="section-title">穿戴 HarmonyOS 7支持机型</h2>
                {renderGroup("公测版", "9月7日", hmos7.wearables.beta)}
                {renderGroup("花粉", "9月7日", hmos7.wearables.fans)}
                {renderGroup("花粉Beta", "10月", hmos7.wearables.fansBeta)}
                {renderGroup("更多产品敬请期待", "10月", hmos7.wearables.more)}
                <br/><br/>
                <h2 className="section-title">穿戴 HarmonyOS 6.1支持机型</h2>
                <div className="devices-grid">
                  {wearables61.map(renderDeviceCard)}
                </div>
                <br/><br/>
                <h2 className="section-title">穿戴 HarmonyOS 6.0支持机型</h2>
                <div className="devices-grid">
                  {wearables.map(renderDeviceCard)}
                </div>
                <br/><br/>
                 <h2 className="section-title">穿戴 HarmonyOS 5.1支持机型</h2>
                 <div className="devices-grid">
                  {wearables51.map(renderDeviceCard)}
                </div>
              </>
            )}

            {activeTab === 'audios' && (
              <>
                <h2 className="section-title">音频 HarmonyOS 7支持机型</h2>
                {renderGroup("公测版", "9月7日", hmos7.audios.beta)}
                {renderGroup("花粉Beta", "10月", hmos7.audios.fansBeta)}
              </>
            )}

            {activeTab === 'smartLife' && (
              <>
                <h2 className="section-title">智慧生活 HarmonyOS 7支持机型</h2>
                <h3 className="group-title">更多产品敬请期待<span className="group-date">10月</span></h3>
                <div className="devices-grid">
                  {hmos7.smartLife.map((name) => (
                    <div key={name} className="device-card">
                      <div className="device-info">
                        <h3>{name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* 更新时间线 */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">升级时间线</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{item.period}</h3>
                    <p>{item.description}</p>
                    <div className="timeline-devices">
                      {item.devices.map((device, i) => (
                        <span key={i} className="device-tag">{device}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 说明区域 */}
        <section className="notes-section">
          <div className="container">
            <div className="notes-content">
              <h2>重要说明</h2>
              <div className="notes-grid">
                <div className="note-card">
                  <h3>升级准备</h3>
                  <p>升级前请备份重要数据，确保设备电量充足，并连接稳定的Wi-Fi网络。</p>
                </div>
                <div className="note-card">
                  <h3>应用兼容性</h3>
                  <p>HarmonyOS不支持Android应用，请确保常用应用已有HarmonyOS版本。</p>
                </div>
                <div className="note-card">
                  <h3>持续更新</h3>
                  <p>华为将持续为更多设备提供升级支持，请关注官方公告获取最新信息。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SupportedDevices;