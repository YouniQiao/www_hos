import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@site/src/pages/SupportedDevices.css';

const SupportedDevices = () => {
  const { siteConfig } = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState('phones');

  // Phone Device List
  const phones = [
  {
    name: "Mate X Series",
    models: ["Mate XTs ULTIMATE DESIGN", "Mate XT ULTIMATE DESIGN", "Mate X7", "Mate X6", "Mate X6 Collector's Edition", "Mate X5", "Mate X5 Collector's Edition"],
    image: "mate70"
  },
  {
    name: "Pure X Series",
    models: ["Pure X", "Pure X Collector's Edition"],
    image: "mate60"
  },
  {
    name: "Mate 80 Series",
    models: ["Mate 80", "Mate 80 Pro", "Mate 80 Pro Max", "Mate 80 RS ULTIMATE DESIGN"],
    image: "mate80"
  },
  {
    name: "Pura 80 Series",
    models: ["Pura 70", "Pura 70 Pro", "Pura 70 Pro+", "Pura 70 Ultra"],
    image: "pura80"
  },
  {
    name: "Mate 70 series",
    models: ["Mate 70", "Mate 70 Air", "Mate 70 Pro", "Mate 70 Pro+", "Mate 70 RS", "Mate 70 Pro Exclusive Edition"],
    image: "mate70"
  },
  {
    name: "Pura 70 Series",
    models: ["Pura 70", "Pura 70 Pro", "Pura 70 Pro+", "Pura 70 Ultra", "Pura 70 BeiDou Satellite Messaging Edition"],
    image: "pura70"
  },
  {
    name: "Mate 60 Series",
    models: ["Mate 60", "Mate 60 Pro", "Mate 60 Pro+", "Mate 60 RS ULTIMATE DESIGN"],
    image: "mate60"
  },
  {
    name: "nova 15 Series",
    models: ["nova 15", "nova 15 Pro", "nova 15 Ultra"],
    image: "nova14"
  },
  {
    name: "nova 14 Series",
    models: ["nova 14", "nova 14 Pro", "nova 14 Ultra", "nova 14 Vitality Edition"],
    image: "nova14"
  },
  {
    name: "nova 13 Series",
    models: ["nova 13", "nova 13 Pro"],
    image: "nova13"
  },
  {
    name: "nova 12 series",
    models: ["nova 12", "nova 12 Pro", "nova 12 Ultra", "nova 12 Ultra Star Edition"],
    image: "nova12"
  },
  {
    name: "nova Flip",
    models: ["nova Flip", "nova Flip S"],
    image: "nova13"
  },
  {
    name: "Pocket Series",
    models: ["Pocket 2", "Pocket 2 Art Edition", "Pocket 2 Exclusive Edition"],
    image: "nova13"
  },
  {
    name: "HUAWEI Enjoy Series",
    models: ["Enjoy 70X"],
    image: "nova13"
  }];



  // Phone HarmonyOS 6.1 supported models
  const phones61 = [
  // Official Release
  {
    name: "Mate 80 Series",
    models: ["Mate 80", "Mate 80 Pro", "Mate 80 Pro Max", "Mate 80 RS ULTIMATE DESIGN"],
    image: "mate80"
  },
  {
    name: "Pura 80 Series",
    models: ["Pura 80", "Pura 80 Pro", "Pura 80 Pro+", "Pura 80 Ultra"],
    image: "pura80"
  },
  {
    name: "Mate 70 series",
    models: ["Mate 70", "Mate 70 Pro", "Mate 70 Pro Exclusive Edition", "Mate 70 Pro+", "Mate 70 RS ULTIMATE DESIGN", "Mate 70 Air"],
    image: "mate70"
  },
  {
    name: "Pura 70 Series",
    models: ["Pura 70", "Pura 70 BeiDou Satellite Messaging Edition", "Pura 70 Pro", "Pura 70 Pro+", "Pura 70 Ultra"],
    image: "pura70"
  },
  {
    name: "Pura X Series",
    models: ["Pura X", "Pura X Collector's Edition"],
    image: "pura70"
  },
  {
    name: "Mate 60 Series",
    models: ["Mate 60", "Mate 60 Pro", "Mate 60 Pro+", "Mate 60 RS ULTIMATE DESIGN"],
    image: "mate60"
  },
  {
    name: "Mate X Series",
    models: ["Mate X7", "Mate X7 Collector's Edition", "Mate X6", "Mate X6 Collector's Edition", "Mate XTs ULTIMATE DESIGN"],
    image: "mate70"
  },
  {
    name: "nova 15 Series",
    models: ["nova 15", "nova 15 Pro", "nova 15 Ultra"],
    image: "nova14"
  },
  // Public Beta
  {
    name: "Mate X5 Series (Public Beta)",
    models: ["Mate X5", "Mate X5 Collector's Edition", "Mate XT ULTIMATE DESIGN"],
    image: "mate60"
  },
  {
    name: "Pocket Series (Public Beta)",
    models: ["Pocket 2", "Pocket 2 Art Edition", "Pocket 2 Exclusive Edition"],
    image: "nova13"
  },
  {
    name: "nova 14 Series (Public Beta)",
    models: ["nova 14", "nova 14 Pro", "nova 14 Ultra", "nova 14 Vitality Edition"],
    image: "nova14"
  },
  {
    name: "nova 13 Series (Public Beta)",
    models: ["nova 13", "nova 13 Pro"],
    image: "nova13"
  },
  {
    name: "nova 12 Series (Public Beta)",
    models: ["nova 12", "nova 12 Pro", "nova 12 Ultra", "nova 12 Ultra Star Edition"],
    image: "nova12"
  },
  {
    name: "nova Flip Series (Public Beta)",
    models: ["nova Flip", "nova Flip S"],
    image: "nova13"
  },
  {
    name: "HUAWEI Enjoy series (public beta)",
    models: ["Enjoy 70X", "Enjoy 70X Premium Edition"],
    image: "nova13"
  }];


  // Phone device list 5.1
  const phones51 = [
  {
    name: "Same as 6.0 models",
    models: ["Please upgrade to HarmonyOS 6.0"],
    image: "matepad-pro-13"
  }];



  // Tablet Device List 6.0
  const tablets = [
  {
    name: "MatePad Edge",
    models: ["Edge"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Pro 13.2-inch",
    models: ["2023/2023 Collector's Edition/2025"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Pro 12.2-inch",
    models: ["2024/2025"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Pro 11-inch",
    models: ["2024"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad 11.5 S",
    models: ["2025/Lively Edition 2025/Vibrant Edition 2025", "2024/Dynamic Edition 2024"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Air",
    models: ["2024", "2025"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Mini",
    models: ["Mini"],
    image: "matepad-pro-13"
  }];



  // Tablet HarmonyOS 6.1 supported models
  const tablets61 = [
  // Official Release
  {
    name: "MatePad Edge",
    models: ["Edge"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Pro 13.2-inch",
    models: ["2025"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Pro 12.2-inch",
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
    models: ["2025", "Dynamic Edition 2025", "Active Edition 2025"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Mini",
    models: ["Mini"],
    image: "matepad-pro-13"
  },
  // Public Beta
  {
    name: "MatePad Pro 13.2-inch (Public Beta)",
    models: ["2023", "2023 Collector's Edition"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Air (Public Beta)",
    models: ["2024"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad 11.5 S (Public Beta)",
    models: ["2024", "Dynamic Edition 2024"],
    image: "matepad-pro-13"
  },
  {
    name: "MatePad Pro 11-inch (Public Beta)",
    models: ["2024"],
    image: "matepad-pro-13"
  }];


  // Tablet Device List 5.1
  const tablets51 = [
  {
    name: "MatePad Air",
    models: ["2024"],
    image: "matepad-pro-11"
  },
  {
    name: "MatePad",
    models: ["11.5'S", "11.5'S Smart Edition"],
    image: "matepad-pro-12"
  }];




  // PC Device List 6.0
  const pcs = [
  {
    name: "MateBook Fold",
    models: ["ULTIMATE DESIGN"],
    image: "matepad-pro-12"
  },
  {
    name: "MateBook",
    models: ["Pro"],
    image: "matepad-pro-12"
  }];


  // PC HarmonyOS 6.1 Supported Devices (Public Beta)
  const pcs61 = [
  {
    name: "MateBook Fold",
    models: ["ULTIMATE DESIGN"],
    image: "matepad-pro-12"
  },
  {
    name: "MateBook",
    models: ["Pro"],
    image: "matepad-pro-12"
  },
  {
    name: "MateBook 14",
    models: ["HarmonyOS Edition"],
    image: "matepad-pro-12"
  }];


  // PC Device List 5.1
  const pcs51 = [
  {
    name: "Same as 6.0 devices",
    models: ["Please upgrade to HarmonyOS 6.0"],
    image: "freebuds-pro4"
  }];



  // Wearable Device List 6.0
  const wearables = [
  {
    name: "WATCH ULTIMATE DESIGN Series",
    models: ["ULTIMATE DESIGN Purple Gold Edition", "Ultimate 2"],
    image: "freebuds-pro4"
  },
  {
    name: "WATCH Series",
    models: ["WATCH 5"],
    image: "freebuds-pro4"
  },
  {
    name: "WATCH GT series",
    models: ["WATCH GT 5 Pro", "WATCH GT 5"],
    image: "watch-gt4"
  },
  {
    name: "WATCH Fit series",
    models: ["WATCH Fit 4 Pro", "WATCH Fit 4"],
    image: "watch-gt4"
  }];


  // Wearable HarmonyOS 6.1 supported models
  const wearables61 = [
  // Official Release
  {
    name: "WATCH GT 6 Series",
    models: ["WATCH GT 6", "WATCH GT 6 Pro"],
    image: "watch-gt4"
  },
  // Public Beta
  {
    name: "WATCH Ultimate (Public Beta)",
    models: ["Ultimate 2 Exploration Edition", "ULTIMATE DESIGN Purple Gold Edition"],
    image: "freebuds-pro4"
  },
  {
    name: "WATCH Series (Public Beta)",
    models: ["WATCH 5"],
    image: "freebuds-pro4"
  },
  {
    name: "WATCH Fit Series (Public Beta)",
    models: ["WATCH FIT 4", "WATCH FIT 4 Pro"],
    image: "watch-gt4"
  }];


  // Wearable Device List 5.1
  const wearables51 = [
  {
    name: "Same as 6.0 devices",
    models: ["Please upgrade to HarmonyOS 6.0"],
    image: "freebuds-pro4"
  }];




  // ===== HarmonyOS 7 Supported Devices =====
  // Data source: HUAWEI official website HarmonyOS 7 Supported Devices page (updated Sep 2026)
  // Group: Public Beta / Huawei Fans early access upgrade opens Sep 7; Huawei Fans Beta opens in Oct; more products coming soon
  const hmos7 = {
    phones: {
      beta: [
      { name: "Mate 80 Series", models: ["Mate 80", "Mate 80 Pro", "Mate 80 Pro Max", "Mate 80 Pro Max Wind Speed Edition", "Mate 80 RS ULTIMATE DESIGN"], image: "mate80" },
      { name: "Mate 70 series", models: ["Mate 70", "Mate 70 Pro", "Mate 70 Pro Exclusive Edition", "Mate 70 Pro+", "Mate 70 RS ULTIMATE DESIGN", "Mate 70 Air"], image: "mate70" },
      { name: "Mate X Series", models: ["Mate X7", "Mate X7 Collector's Edition", "Mate X6", "Mate X6 Collector's Edition", "Mate XTs ULTIMATE DESIGN"], image: "mate70" },
      { name: "Pura 90 Series", models: ["Pura 90", "Pura 90 Pro", "Pura 90 Max"], image: "pura80" },
      { name: "Pura 80 Series", models: ["Pura 80", "Pura 80 Pro", "Pura 80 Pro+", "Pura 80 Ultra"], image: "pura80" },
      { name: "Pura X Series", models: ["Pura X Max", "Pura X Max Collector's Edition", "Pura X", "Pura X Collector's Edition"], image: "pura70" },
      { name: "nova 16 Series", models: ["nova 16", "nova 16 Pro", "nova 16 Ultra", "nova 16z"], image: "nova14" },
      { name: "nova 15 Series", models: ["nova 15", "nova 15 Pro", "nova 15 Ultra"], image: "nova14" },
      { name: "Enjoy 90 Series", models: ["Enjoy 90", "Enjoy 90 Plus", "Enjoy 90m Plus", "Enjoy 90 Pro Max"], image: "nova13" }],

      fans: [
      { name: "nova 16 SE", image: "nova14" }],

      fansBeta: [
      { name: "Mate 60 series", image: "mate60" },
      { name: "Mate X5 series", image: "mate60" },
      { name: "Pocket 2 series", image: "nova13" },
      { name: "Mate XT ULTIMATE DESIGN", image: "mate70" },
      { name: "Pura 70 series", image: "pura70" },
      { name: "nova 14 series", image: "nova14" },
      { name: "nova 13 series", image: "nova13" },
      { name: "nova 12 series", image: "nova12" },
      { name: "nova Flip S", image: "nova13" },
      { name: "nova Flip", image: "nova13" },
      { name: "Enjoy 70X (including Premium Edition)", image: "nova13" }]

    },
    tablets: {
      beta: [
      { name: "MatePad Edge", image: "matepad-pro-13" },
      { name: "MatePad Pro Max", image: "matepad-pro-13" },
      { name: "MatePad Pro 12-inch", image: "matepad-pro-12" },
      { name: "MatePad Mini", image: "matepad-pro-11" },
      { name: "MatePad 11.5 2026", image: "matepad-pro-11" }],

      fans: [
      { name: "MatePad Air 12-inch 2026", image: "matepad-air" }],

      fansBeta: [
      { name: "MatePad Pro 13.2-inch 2025", image: "matepad-pro-13" },
      { name: "MatePad Pro 13.2-inch 2023 series", image: "matepad-pro-13" },
      { name: "MatePad Pro 12.2-inch 2025", image: "matepad-pro-12" },
      { name: "MatePad Pro 12.2-inch 2024 series", image: "matepad-pro-12" },
      { name: "MatePad Pro 11-inch 2024", image: "matepad-pro-11" },
      { name: "MatePad Air 12-inch 2025 series", image: "matepad-air" },
      { name: "MatePad Air 12-inch 2024", image: "matepad-air" },
      { name: "MatePad 11.5 S 2025 series", image: "matepad-pro-11" },
      { name: "MatePad 11.5”S 2024 series", image: "matepad-pro-11" }]

    },
    pcs: {
      beta: [
      { name: "MateBook Fold ULTIMATE DESIGN Kirin X90 Plus", image: "matepad-pro-12" },
      { name: "MateBook Fold ULTIMATE DESIGN", image: "matepad-pro-12" },
      { name: "MateBook Pro Kirin X90 Plus", image: "matepad-pro-12" },
      { name: "MateBook Pro", image: "matepad-pro-12" },
      { name: "MateBook Pro S", image: "matepad-pro-12" },
      { name: "MateBook 14 HarmonyOS Edition", image: "matepad-pro-12" }]

    },
    wearables: {
      beta: [
      { name: "WATCH Ultimate 2 ULTIMATE EXPLORATION", image: "freebuds-pro4" },
      { name: "WATCH ULTIMATE DESIGN Purple Gold Edition", image: "freebuds-pro4" },
      { name: "WATCH ULTIMATE DESIGN MAEXTRO Custom Edition", image: "freebuds-pro4" },
      { name: "WATCH GT 7 Series", image: "watch-gt4" }],

      fans: [
      { name: "WATCH GT 7", image: "watch-gt4" },
      { name: "WATCH GT 7 Pro", image: "watch-gt4" },
      { name: "WATCH FIT 5", image: "watch-gt4" },
      { name: "WATCH FIT 5 Pro", image: "watch-gt4" }],

      fansBeta: [
      { name: "WATCH GT Runner 2", image: "watch-gt4" },
      { name: "WATCH GT 6 Series", image: "watch-gt4" }],

      more: [
      { name: "WATCH ULTIMATE DESIGN Star Diamond Bloom Edition", image: "freebuds-pro4" },
      { name: "WATCH 5 series", image: "freebuds-pro4" }]

    },
  };

  // Group rendering (Public Beta / Pollen / Pollen Beta)
  const renderGroup = (title, date, devices) =>
  devices && devices.length > 0 ?
  <>
        <h3 className="group-title">
          {title}
          {date ? <span className="group-date">{date}</span> : null}
        </h3>
        <div className="devices-grid">
          {devices.map(renderDeviceCard)}
        </div>
      </> :
  null;


  // Update Timeline
  const timeline = [
  {
    period: "October 2026",
    description: "HarmonyOS 7 Huawei Fans Beta is now open; older models are gradually joining the early access",
    devices: ["Mate 60 Series", "Mate X5 Series", "Pocket 2 series", "Pura 70 Series", "nova 12/13/14 Series", "MatePad Pro 13.2-inch", "WATCH GT 6 Series"]
  },
  {
    period: "September 7, 2026",
    description: "HarmonyOS 7 public beta and Huawei Fans early access are now open; new flagship models get the first batch of upgrades",
    devices: ["Mate 80 Series", "Mate 70 series", "Mate X Series", "Pura 80/90 Series", "nova 15/16 Series", "MatePad Edge", "MateBook Fold ULTIMATE DESIGN", "WATCH Ultimate 2"]
  },
  {
    period: "Q4 2025 and later",
    description: "More older models are gradually being adapted to expand the HarmonyOS ecosystem",
    devices: ["More older models are continuously updated"]
  },
  {
    period: "Q3 2025",
    description: "nova Series",
    devices: ["nova 14 Series"]
  },
  {
    period: "Q1 2025",
    description: "nova Series, MatePad Series",
    devices: ["nova 12/13 Series", "MatePad Series"]
  },
  {
    period: "Q4 2024",
    description: "Mate 60/70 series, Pura 70 series, Mate X6 series and other flagship devices get the first batch of upgrades",
    devices: ["Mate 60 Series", "Mate 70 series", "Pura 70 Series", "Mate X6 series"]
  }];



  const renderDeviceCard = (device) =>
  <div key={device.name} className="device-card">
      <div className="device-image">
        <div className={`device-placeholder ${device.image}`}>
          <div className="device-screen"></div>
        </div>
      </div>
      <div className="device-info">
        <h3>{device.name}</h3>
        <div className="device-models">
          {device.models && device.models.length > 0 ?
        device.models.map((model, i) =>
        <span key={i} className="device-model">{model}</span>
        ) : null}
        </div>
      </div>
    </div>;


  return (
    <Layout
      title="HarmonyOS Supported Models"
      description="View all phones, tablets, and wearables that support upgrading to HarmonyOS">
      <div className="devices-page">
        {/* Hero Area */}
        <section className="devices-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">HarmonyOS Supported Models</h1>
              <p className="hero-subtitle">Explore Huawei devices that can upgrade to the next-generation operating system</p>
              <p className="device-date">Page last updated: 2026.9.15</p>
            </div>
          </div>
        </section>

        {/* Device Navigation */}
        <section className="devices-nav">
          <div className="container">
            <div className="tabs">
              <button
                className={`tab ${activeTab === 'phones' ? 'active' : ''}`}
                onClick={() => setActiveTab('phones')}>

                📱 Phone devices
              </button>
              <button
                className={`tab ${activeTab === 'tablets' ? 'active' : ''}`}
                onClick={() => setActiveTab('tablets')}>

                💻 Tablet devices
              </button>
              <button
                className={`tab ${activeTab === 'pcs' ? 'active' : ''}`}
                onClick={() => setActiveTab('pcs')}>

                💻 PC devices
              </button>
              <button
                className={`tab ${activeTab === 'wearables' ? 'active' : ''}`}
                onClick={() => setActiveTab('wearables')}>

                ⌚ Wearable devices
              </button>
            </div>
          </div>
        </section>

        {/* Device List */}
        <section className="devices-list">
          <div className="container">
            {activeTab === 'phones' &&
            <>
                <h2 className="section-title">Phone HarmonyOS 7 Supported Models</h2>
                {renderGroup("Public Beta", "September 7", hmos7.phones.beta)}
                {renderGroup("Huawei Fans", "September 7", hmos7.phones.fans)}
                {renderGroup("Huawei Fan Beta", "October", hmos7.phones.fansBeta)}
                <h2 className="section-title">Phone HarmonyOS 6.1 supported models</h2>
                <div className="devices-grid">
                  {phones61.map(renderDeviceCard)}
                </div>
                <h2 className="section-title">Phone HarmonyOS 6.0 supported models</h2>
                <div className="devices-grid">
                  {phones.map(renderDeviceCard)}
                </div>
                 <h2 className="section-title">Phone HarmonyOS 5.1 supported models</h2>
                 <div className="devices-grid">
                  {phones51.map(renderDeviceCard)}
                </div>
              </>
            }

            {activeTab === 'tablets' &&
            <>
                <h2 className="section-title">Tablet HarmonyOS 7 Supported Models</h2>
                {renderGroup("Public Beta", "September 7", hmos7.tablets.beta)}
                {renderGroup("Huawei Fans", "September 7", hmos7.tablets.fans)}
                {renderGroup("Huawei Fan Beta", "October", hmos7.tablets.fansBeta)}
                <h2 className="section-title">Tablet HarmonyOS 6.1 Supported Models</h2>
                <div className="devices-grid">
                  {tablets61.map(renderDeviceCard)}
                </div>
                <h2 className="section-title">Tablet HarmonyOS 6.0 supported models</h2>
                <div className="devices-grid">
                  {tablets.map(renderDeviceCard)}
                </div>
                 <h2 className="section-title">Tablet HarmonyOS 5.1 supported models</h2>
                 <div className="devices-grid">
                  {tablets51.map(renderDeviceCard)}
                </div>
              </>
            }

            {activeTab === 'pcs' &&
            <>
                <h2 className="section-title">PC HarmonyOS 7 Supported Models</h2>
                {renderGroup("Public Beta", "September 7", hmos7.pcs.beta)}
                <h2 className="section-title">PC HarmonyOS 6.1 Supported Models</h2>
                <div className="devices-grid">
                  {pcs61.map(renderDeviceCard)}
                </div>
                <h2 className="section-title">PC HarmonyOS 6.0 supported models</h2>
                <div className="devices-grid">
                  {pcs.map(renderDeviceCard)}
                </div>
                 <h2 className="section-title">PC HarmonyOS 5.1 supported models</h2>
                 <div className="devices-grid">
                  {pcs51.map(renderDeviceCard)}
                </div>
              </>
            }

            {activeTab === 'wearables' &&
            <>
                <h2 className="section-title">Wearable HarmonyOS 7 Supported Models</h2>
                {renderGroup("Public Beta", "September 7", hmos7.wearables.beta)}
                {renderGroup("Huawei Fans", "September 7", hmos7.wearables.fans)}
                {renderGroup("Huawei Fan Beta", "October", hmos7.wearables.fansBeta)}
                {renderGroup("More products coming soon", "October", hmos7.wearables.more)}
                <h2 className="section-title">Wearable HarmonyOS 6.1 Supported Models</h2>
                <div className="devices-grid">
                  {wearables61.map(renderDeviceCard)}
                </div>
                <h2 className="section-title">Wearable HarmonyOS 6.0 Supported Models</h2>
                <div className="devices-grid">
                  {wearables.map(renderDeviceCard)}
                </div>
                 <h2 className="section-title">Wearable HarmonyOS 5.1 supported models</h2>
                 <div className="devices-grid">
                  {wearables51.map(renderDeviceCard)}
                </div>
              </>
            }

          </div>
        </section>

        {/* Update Timeline */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">Upgrade Timeline</h2>
            <div className="timeline">
              {timeline.map((item, index) =>
              <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{item.period}</h3>
                    <p>{item.description}</p>
                    <div className="timeline-devices">
                      {item.devices.map((device, i) =>
                    <span key={i} className="device-tag">{device}</span>
                    )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Description Area */}
        <section className="notes-section">
          <div className="container">
            <div className="notes-content">
              <h2>Important Notes</h2>
              <div className="notes-grid">
                <div className="note-card">
                  <h3>Upgrade Preparation</h3>
                  <p>Before upgrading, back up important data, make sure the device has sufficient battery, and connect to a stable Wi-Fi network.</p>
                </div>
                <div className="note-card">
                  <h3>App Compatibility</h3>
                  <p>HarmonyOS does not support Android apps. Please make sure your frequently used apps have HarmonyOS versions.</p>
                </div>
                <div className="note-card">
                  <h3>Continuous Updates</h3>
                  <p>HUAWEI will continue to provide upgrade support for more devices. Please follow official announcements for the latest information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>);

};

export default SupportedDevices;
