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
      name: "华为Mate 70系列",
      models: ["Mate 70", "Mate 70 Pro", "Mate 70 Pro+", "Mate 70 RS"],
      date: "2024年Q4",
      image: "mate70"
    },
    {
      name: "华为Pura 70系列",
      models: ["Pura 70", "Pura 70 Pro", "Pura 70 Ultra"],
      date: "2024年Q4",
      image: "pura70"
    },
    {
      name: "华为Mate 60系列",
      models: ["Mate 60", "Mate 60 Pro", "Mate 60 Pro+"],
      date: "2024年Q4",
      image: "mate60"
    },
    {
      name: "华为Mate X6系列",
      models: ["Mate X6", "Mate X6 Pro"],
      date: "2024年Q4",
      image: "matex6"
    },
    {
      name: "华为Nova 13系列",
      models: ["Nova 13", "Nova 13 Pro", "Nova 13 Ultra"],
      date: "2025年Q1",
      image: "nova13"
    },
    {
      name: "华为Nova 12系列",
      models: ["Nova 12", "Nova 12 Pro", "Nova 12 Ultra"],
      date: "2025年Q1",
      image: "nova12"
    }
  ];

  // 平板设备列表
  const tablets = [
    {
      name: "MatePad Pro 13.2",
      models: ["Wi-Fi版", "5G版"],
      date: "2024年Q4",
      image: "matepad-pro-13"
    },
    {
      name: "MatePad Pro 11",
      models: ["2024款"],
      date: "2024年Q4",
      image: "matepad-pro-11"
    },
    {
      name: "MatePad Pro 12.2",
      models: ["Wi-Fi版", "5G版"],
      date: "2024年Q4",
      image: "matepad-pro-12"
    },
    {
      name: "MatePad Air 12",
      models: ["Wi-Fi版", "5G版"],
      date: "2025年Q1",
      image: "matepad-air"
    }
  ];

  // 穿戴设备列表
  const wearables = [
    {
      name: "HUAWEI FreeBuds Pro 4",
      models: ["标准版", "特别版"],
      date: "2024年Q4",
      image: "freebuds-pro4"
    },
    {
      name: "HUAWEI WATCH GT 4",
      models: ["46mm", "42mm"],
      date: "2025年Q1",
      image: "watch-gt4"
    },
    {
      name: "HUAWEI WATCH Ultimate",
      models: ["标准版"],
      date: "2025年Q1",
      image: "watch-ultimate"
    }
  ];

  // 更新时间线
  const timeline = [
    {
      period: "2024年第四季度",
      description: "Mate 60/70系列、Pura 70系列、Mate X6系列等旗舰设备首批升级",
      devices: ["Mate 60系列", "Mate 70系列", "Pura 70系列", "Mate X6系列"]
    },
    {
      period: "2025年第一季度",
      description: "Nova系列、MatePad系列及穿戴设备扩展升级",
      devices: ["Nova 12/13系列", "MatePad全系列", "FreeBuds Pro 4", "WATCH GT 4"]
    },
    {
      period: "2025年第二季度及以后",
      description: "更多老机型逐步适配，扩大HarmonyOS NEXT生态",
      devices: ["更多老款机型持续更新中"]
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
          {device.models.join(" · ")}
        </div>
        <div className="device-date">
        升级时间: {device.date}
        </div>
      </div>
    </div>
  );

  return (
    <Layout
      title="HarmonyOS NEXT支持机型"
      description="查看所有支持升级到HarmonyOS NEXT的手机、平板和穿戴设备">
      <div className="devices-page">
        {/* 英雄区域 */}
        <section className="devices-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">HarmonyOS NEXT 支持机型</h1>
              <p className="hero-subtitle">探索可升级到下一代操作系统的华为设备</p>
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
                className={`tab ${activeTab === 'wearables' ? 'active' : ''}`}
                onClick={() => setActiveTab('wearables')}
              >
                ⌚ 穿戴设备
              </button>
            </div>
          </div>
        </section>

        {/* 设备列表 */}
        <section className="devices-list">
          <div className="container">
            {activeTab === 'phones' && (
              <>
                <h2 className="section-title">手机设备</h2>
                <div className="devices-grid">
                  {phones.map(renderDeviceCard)}
                </div>
              </>
            )}
            
            {activeTab === 'tablets' && (
              <>
                <h2 className="section-title">平板设备</h2>
                <div className="devices-grid">
                  {tablets.map(renderDeviceCard)}
                </div>
              </>
            )}
            
            {activeTab === 'wearables' && (
              <>
                <h2 className="section-title">穿戴设备</h2>
                <div className="devices-grid">
                  {wearables.map(renderDeviceCard)}
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
                  <p>HarmonyOS NEXT不支持Android应用，请确保常用应用已有HarmonyOS版本。</p>
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