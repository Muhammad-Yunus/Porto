/* ============================================================
   MUHAMMAD YUNUS :: RETRO PORTFOLIO :: script.js
   ============================================================ */

/* ---------- NAV ---------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

/* ---------- TYPEWRITER ---------- */
const roles = ['Software Engineer','IoT Engineer','AI + Computer Vision','Embedded Systems','Tech Lead'];
const twEl = document.getElementById('typewriter');
let ri = 0, ci = 0, del = false;
(function type(){
  const word = roles[ri];
  twEl.textContent = word.slice(0, ci);
  if(!del){
    ci++;
    if(ci > word.length){ del = true; return setTimeout(type, 1600); }
  } else {
    ci--;
    if(ci < 0){ del = false; ci = 0; ri = (ri+1) % roles.length; }
  }
  setTimeout(type, del ? 55 : 110);
})();

/* ---------- TICKER ---------- */
const tickerItems = [
  ['SOFTWARE', false],['IOT', false],['EMBEDDED', true],['AI + CV', true],
  ['LORAWAN', false],['FPGA', true],['RF ENGINEERING', false],['ENTERPRISE', true],
  ['GO', false],['PYTHON', false],['C / C++', true],['TYPESCRIPT', false]
];
const track = document.getElementById('tickerTrack');
const tickerHTML = tickerItems.map(([t,hl]) => `<span class="${hl?'tl':'hl'}">• ${t}</span>`).join('');
track.innerHTML = tickerHTML + tickerHTML;

/* ---------- FOOTER MARQUEE ---------- */
document.getElementById('footerMarquee').textContent =
  '▲ INSERT COIN ▲ YUNUS.EXE ▲ GAME OVER? NO — PRESS START ▲ SIDE QUEST: YOUR PROJECT ▲';

/* ---------- SKILL DATA ---------- */
const skillGroups = [
  {cat:'Programming Language', cls:'', items:['Golang','Python','C','C++','C#','JavaScript','TypeScript','SQL'], hot:['Golang','Python']},
  {cat:'Database & Storage', cls:'', items:['PostgreSQL','MySQL','SQL Server','MongoDB','Redis','ElasticSearch','Amazon Aurora','Amazon S3','MinIO']},
  {cat:'CI/CD · Cloud · Infra', cls:'gc', items:['Jenkins','Azure DevOps','GitHub Actions','AWS CodeDeploy','AWS EC2','GCP GCE','DO Droplet']},
  {cat:'Containers & Linux', cls:'gc', items:['Docker','Docker Compose','Kubernetes','Debian','Ubuntu','CentOS']},
  {cat:'Workflow & Dataflow', cls:'', items:['Apache NiFi','Node-RED','n8n','OutSystems','Apache Airflow','NocoBase']},
  {cat:'Streaming & Messaging', cls:'tc', items:['Kafka','RabbitMQ','HiveMQ','Mosquitto'], hot:['Kafka']},
];

const embeddedGroups = [
  {cat:'Embedded Hardware', cls:'tc', items:['NXP iMX RT','STM32','ESP32','Raspberry Pi','BeagleBone','MilkV Duo','Xilinx ZYNQ 7000','Lattice ECP5','Gowin FPGA','Teensy','nRF52840','Renesas RA4M1'], hot:['STM32','ESP32']},
  {cat:'Edge AI & Tools', cls:'gc', items:['OpenCV','PyTorch','TensorFlow','Ultralytics','Roboflow','ONNX','Edge Impulse','OpenMV','Lite-RT','TDL-SDK']},
  {cat:'Embedded OS & Linux', cls:'', items:['Baremetal','FreeRTOS','RT-Thread','BuildRoot','OpenWRT','PetaLinux','Yocto','Zephyr OS','TI SYS/BIOS']},
  {cat:'IoT Protocols & Platforms', cls:'', items:['LoRa / LoRaWAN','MQTT','Azure IoT','Balena','Thingboard','Node-RED','Modbus RTU/TCP'], hot:['LoRaWAN']},
  {cat:'CAD & GUI', cls:'gc', items:['KiCAD','LVGL','SPICE Sim']},
  {cat:'RF Engineering', cls:'tc', items:['RF Simulation (SPICE)','VNA & Spectrum Analyzer','RF Planning (Cloud RF)']},
];

function renderSkillGrid(el, groups){
  el.innerHTML = groups.map(g => `
    <div class="skill-card reveal">
      <span class="skill-cat ${g.cls}">${g.cat.toUpperCase()}</span>
      <div class="skill-chips">
        ${g.items.map(it => `<span class="chip ${g.hot && g.hot.includes(it)?'hot':''}">${it}</span>`).join('')}
      </div>
    </div>`).join('');
}
renderSkillGrid(document.getElementById('skillGrid'), skillGroups);
renderSkillGrid(document.getElementById('embeddedGrid'), embeddedGroups);
/* ---------- PROJECTS ---------- */
const projects = [
  {tag:'iot', name:'Fullfill Smart Water Dispenser', date:'Feb–May 2026', role:'Developer', desc:'Cloud-connected smart water dispenser: ESP32-S3 handles cloud comms & NFC auth, Teensy 4.1 drives pump actuator, IR bottle detection, load-cell weighing, 5" LCD, and bidirectional UART with ESP32-S3.'},
  {tag:'rnd', name:'Winamp-Inspired Embedded Audio Player (STM32H7)', date:'May 2026', role:'Engineer', desc:'Embedded audio player on STM32H753ZI: PCM5102A DAC via I2S for low-latency sound, FATFS streaming from SD card over SPI, retro Winamp-style GUI on ILI9341 TFT, and PA3110D2 audio amp.'},
  {tag:'rnd', name:'LoPy LoRaWAN Environmental Sensor Node', date:'Jul 2026', role:'Engineer', desc:'Pycom LoPy + MicroPython LoRaWAN node streaming air quality (TVOC, eCO₂, AQI) and temperature/humidity as optimized binary payloads — low-power, long-range smart-building monitoring.'},
  {tag:'iot', name:'Aerial Cellular Discovery & SDR Spectrum Analysis', date:'Jul–Aug 2026', role:'Engineer', desc:'Drone 3G/4G/5G analysis: Raspberry Pi + RTL-SDR/HackRF, antenna decodes BTS signals. Nuxt 4/Vue 3 app with WebSocket updates, PostgreSQL history, mission planning & Playwright e2e.'},
  {tag:'rnd', name:'Antminer L3+ Multi-OS Embedded Platform', date:'Jul 2026', role:'Engineer', desc:'Repurposed Antminer L3+ (TI AM3352) into a multi-OS dev platform via J-Link JTAG: Baremetal, FreeRTOS, TI-RTOS & Embedded Linux. Includes real-time LiDAR mapping and LVGL GUI on RTOS.'},
  {tag:'iot', name:'Protocol Studio - Serial UART Terminal', date:'Aug 2026', role:'Developer', desc:'Retro-styled serial UART terminal via Web Serial API (Nuxt 4 / Vue 3): baud, parity, flow control, text/hex, logging & settings persistence for zero-dependency hardware debugging.'},
  {tag:'corp', name:'Client-Side Image Toolbox', date:'Aug 2026', role:'Developer', desc:'Privacy-first Nuxt 4 / Vue 3 image processing app: 100% client-side via Canvas + ONNX Runtime (DeepLab v3) for resizing, compression, background removal & format conversion — zero uploads or tracking.'},
  {tag:'corp', name:'Smart Building Digital Twin & Fleet Monitoring', date:'Aug 2026', role:'Developer', desc:'Digital twin + fleet monitoring on React 18 / Vite 5. Google Maps tracking, SMPLRSPACE visualization, HVAC/thermal, analytics (temp, humidity, CO₂) with trend charts, Glassmorphism UI.'},
  {tag:'rnd', name:'STM32L152RE LoRaWAN Sensor Node (AS923)', date:'Aug 2026', role:'Engineer', desc:'Ultra-low-power LoRaWAN node on STM32L152RE + SX1276 for AS923: Semtech LoRaMac-node stack with ADR tuning, dynamic channel mgmt & deep sleep. Battery-powered industrial telemetry.'},
  {tag:'rnd', name:'Colorlight 5A-75E RISC-V Soft Processor', date:'Aug 2026', role:'Engineer', desc:'Repurposed a Colorlight 5A-75E LED card (Lattice ECP5-25F FPGA) into a RISC-V soft-processor platform: HW in Propel Builder, firmware via Propel SDK, bitstream via Diamond.'},
  {tag:'rnd', name:'M5Cardputer AI Chat Client (MicroPython/UIFlow2)', date:'Sep 2026', role:'Engineer', desc:'Lightweight MicroPython/UIFlow2 LLM chat client on M5Stack Cardputer: OpenAI-compatible APIs (OpenAI/Ollama/OpenRouter), captive web portal, audio feedback & memory-optimized history.'},
  {tag:'iot', name:'RF Tools - Passive RF Circuit & Smith Chart Suite', date:'Oct 2026', role:'Developer', desc:'Browser RF calculators: Pi/Tee attenuator, LC filter (E24 snapping), L-match, toroid inductor & Smith Chart, with Touchstone import & S21/S11 plotting.'},
  {tag:'corp', name:'StripFlow - Schematic-to-Stripboard Auto-Router', date:'Oct 2026', role:'Developer', desc:'Zero-backend web CAD for schematic capture & stripboard layout: component library, Web-Worker simulated-annealing auto-routing, DRC, printable BOM, KiCad export & IndexedDB persistence.'},
  {tag:'corp', name:'Panel Designer - Electrical Control Panel CAD', date:'Oct 2026', role:'Developer', desc:'Browser-based visual electrical panel design: drag-drop DIN components, orthogonal auto-routing, real-time safety validation, auto-BOM, PDF export & localStorage persistence.'},
  {tag:'iot', name:'HF Receiver via Tayloe QSD & VHF Downconversion', date:'Oct 2026', role:'Engineer', desc:'Tayloe QSD receiver for HF; 140 MHz VHF TX downconverted to 20 MHz IF (ADE-1 + ADF4351 LO), FST3253 mux on Si5351 quadrature clocks, LM4562 LPF + TPA3110 Class-D to dual speakers.'},
  {tag:'iot', name:'M5Cardputer-Si5351 DDS VFO & Quadrature Clock Source', date:'Oct 2026', role:'Engineer', desc:'M5Stack Cardputer (ESP32) + Si5351: portable DDS VFO (8 kHz–150 MHz). Three channels incl. quadrature for Tayloe detector, band navigation & themed GUI.'},
  {tag:'iot', name:'DIY 20dB Pi-Attenuator & RF Power Testing', date:'Oct 2026', role:'Engineer', desc:'Designed a DIY 20dB RF attenuator to reduce transmitter output. Verified attenuation & matching with NanoVNA, preparing interfacing to AD8317 power meter and spectrogram analysis on Zynq-7010.'},
  {tag:'rnd', name:'HF/VHF RF Mixer', date:'Nov 2025', role:'Engineer', desc:'High-performance HF/VHF RF mixer using MCL ADE-1 (Mini-Circuits). Optimized for low conversion loss, high isolation, wide frequency coverage.'},
  {tag:'logistic', name:'VEGA - Governance & Access', date:'Nov 2025', role:'Developer', desc:'Governance layer masking PII on internal APIs. User-level access control by location, department, role; runtime configuration UI for IT Ops.'},
  {tag:'logistic', name:'MOVER - Transport Management', date:'Oct 2025', role:'Developer', desc:'Vendor onboarding & bidding, scheduled transport orders, end-to-end tracking from pickup to destination (staging).'},
  {tag:'rnd', name:'FPGA Software Defined Radio', date:'Oct 2025', role:'Engineer', desc:'Low-cost SDR on Xilinx ZYNQ-7000 FPGA + AD9226 ADC. Real-time signal acquisition, processing, and demodulation.'},
  {tag:'logistic', name:'IAMS - Internal Audit Mgmt', date:'Sept 2025', role:'Developer', desc:'End-to-end audit workflow: planning, site visits, meetings, call logs, loss estimation, structured audit reports.'},
  {tag:'rnd', name:'Instant - Merchant App Enhancement', date:'Sept 2025', role:'Developer', desc:'Scheduled order feature, geographical coverage validation with distance calculation and service pricing, improved booking management workflows.'},
  {tag:'rnd', name:'9th Order Chebyshev LPF (HF)', date:'Sept 2025', role:'Engineer', desc:'9th order Chebyshev low-pass filter for HF band. Minimal insertion loss and sharp cutoff for signal integrity.'},
  {tag:'rnd', name:'Compact Mini-Whip HF Antenna', date:'Sept 2025', role:'Engineer', desc:'Portable mini-whip HF antenna for mobile amateur radio operators. Compact form factor for easy deployment anywhere.'},
  {tag:'logistic', name:'Aware Web Refactoring', date:'Jul–Sept 2025', role:'Developer', desc:'Consolidated 200+ reports into 18 streamlined reports; refined dashboard UI for better operational insights.'},
  {tag:'rnd', name:'CANBus Sniffing & Monitoring', date:'Jul 2025', role:'Engineer', desc:'CAN sniffing on NXP i.MX RT1020 FlexCAN. Real-time frame capture/decode + LVGL-based live visualization UI.'},
  {tag:'logistic', name:'Guardian VoIP Client Mgmt', date:'June 2025', role:'Developer', desc:'VoIP provider configuration & management for the Guardian App; historical call tracking for auditing and analysis.'},
  {tag:'rnd', name:'MCU Object Detection (STM32 H7)', date:'May 2025', role:'Engineer', desc:'Vision AI on MCU: OpenMV + Lite-RT (TFLite) + Edge Impulse for smart, low-power IoT devices.'},
  {tag:'logistic', name:'Staging Productivity Heatmap GIS', date:'Apr–May 2025', role:'Developer', desc:'GIS heatmap of staging productivity and parcel flow per region. PostgreSQL geometry, server-side caching, IndexedDB rendering.'},
  {tag:'logistic', name:'Flex Schema BaaS', date:'Feb–Mar 2025', role:'Developer', desc:'Rapid API prototyping without backend infra. Define schemas via UI; auto-generates CRUD REST APIs with integrated caching layer.'},
  {tag:'logistic', name:'Employee Gift Mgmt System', date:'Jan 2025', role:'Developer', desc:'End-to-end gift distribution workflow automation. Automated Teams & Email notifications; digitized assignment and quantity tracking.'},
  {tag:'rnd', name:'FPGA Computer Vision (ZYNQ)', date:'Dec 2024', role:'Engineer', desc:'Real-time computer vision on Xilinx ZYNQ-7000 with OV7670 camera for edge image streaming and processing.'},
  {tag:'rnd', name:'React Flow in OutSystems', date:'Dec 2024', role:'Developer', desc:'React Flow wrapped as OutSystems widget for low-code visual workflows. Dynamic .NET Reflection-based server-side flow execution.'},
  {tag:'rnd', name:'Semantic Kernel for OutSystems', date:'Nov–Dec 2024', role:'Developer', desc:'Microsoft Semantic Kernel wrapped as OutSystems extension for LLM-powered workflows. RAG with ChatGPT + Qdrant vector DB.'},
  {tag:'logistic', name:'Secure Access', date:'Oct–Nov 2024', role:'Developer', desc:'Employee access management with role & group control, dynamic expiration, bulk assignment and revocation for IT Ops.'},
  {tag:'rnd', name:'Edge AI on Milk-V Duo S', date:'Oct 2024', role:'Engineer', desc:'Real-time object detection on RISC-V SBC with on-chip AI accelerator, via TDL SDK + VPSS pipeline.'},
  {tag:'logistic', name:'Contract Renewal Mgmt', date:'Sept 2024', role:'Developer', desc:'Multi-level approval workflow for contract renewals across supervisors, HR, and management.'},
  {tag:'logistic', name:'Instant Order Webform', date:'Sept 2024', role:'Developer', desc:'Customer delivery order webform with GMaps address autocomplete, geocoding, and AWS Location Service integration.'},
  {tag:'logistic', name:'Machine Learning Studio', date:'Aug–Oct 2024', role:'Developer', desc:'Flow-based ML pipeline with drag-and-drop UI. ML.NET backend, dynamic .NET flow execution, model serving via Data-G.'},
  {tag:'rnd', name:'Low-Cost High-Speed DAQ', date:'Spt 2024', role:'Engineer', desc:'High-speed data acquisition on BeagleBone SBC + Hantek USB oscilloscope. Real-time signal processing with LVGL UI.'},
  {tag:'logistic', name:'Sales Management', date:'Jul–Aug 2024', role:'Developer', desc:'Lead tracking, follow-up scheduling, activity logging, and reporting & analytics for sales teams.'},
  {tag:'rnd', name:'Custom Function Generator', date:'Jul 2024', role:'Engineer', desc:'Low-cost function generator using ESP8266 + AD9833 waveform IC for portable signal generation.'},
  {tag:'logistic', name:'Asset Management', date:'May–Jun 2024', role:'Developer', desc:'Asset registration, categorization, lifecycle tracking, openne schedule management, and analytical dashboards.'},
  {tag:'logistic', name:'Bulk Pickup Exception', date:'Mar 2024', role:'Developer', desc:'Pickup exception handling integrated with logistic core systems for real-time operational visibility.'},
  {tag:'logistic', name:'Network Management', date:'Mar–Jun 2024', role:'Developer', desc:'HUB & Staging master data management, Unit Zone placement control, and location contract modules.'},
  {tag:'logistic', name:'Bag Seal Generator', date:'Feb 2024', role:'Developer', desc:'System to manage and generate bag seals for secure parcel handling and tracking.'},
  {tag:'logistic', name:'Pricing Management', date:'Feb 2024', role:'Developer', desc:'Client-specific product pricing with reporting and analytics for margin and profitability tracking.'},
  {tag:'logistic', name:'Master Shipper', date:'Jan–Feb 2024', role:'Developer', desc:'Shipper master data registration, verification, and approval workflows ensuring high data integrity.'},
  {tag:'logistic', name:'Data-G Endpoint Generator', date:'Oct–Dec 2023', role:'Developer', desc:'APIs dynamically generated from database objects. Multi-engine, auth providers, ML anomaly alerting, playground, versioning.'},
  {tag:'logistic', name:'Guardian Navigator', date:'Nov 2023–Mar 2024', role:'Developer', desc:'Bulk order master data, courier routing & dispatching, area activation controls, real-time GPS via Google Maps API.'},
  {tag:'logistic', name:'Assessment Management', date:'Oct–Nov 2023', role:'Developer', desc:'Employee assessment test system with enrolment management, scoring, result tracking, and HR reporting.'},
  {tag:'logistic', name:'Instant - Merchant App', date:'Jun–Jul 2023', role:'Developer', desc:'Merchant order pickup creation and real-time tracking of pickup, transit, and delivery status.'},
  {tag:'logistic', name:'Claim Management', date:'Jan–Mar 2023', role:'Developer', desc:'Claims processing for lost or damaged parcels with verification and resolution workflows.'},
  {tag:'logistic', name:'Volume Forecast', date:'Dec 2023–Feb 2023', role:'Developer', desc:'Parcel volume forecasting per city with manpower estimation per unit zone using forecasted volumes.'},
  {tag:'logistic', name:'Life Mobile', date:'Aug–Nov 2022', role:'Developer', desc:'Employee mobile app for waybill tracking, attendance, and employee loans. Ported from legacy Xamarin to OutSystems.'},
  {tag:'logistic', name:'Timesheet Application', date:'Jul–Aug 2022', role:'Developer', desc:'Timesheet reporting for IT employees with manager and VP review & approval workflows.'},
  {tag:'logistic', name:'Smart Box Management', date:'Jun–Jul 2022', role:'Developer', desc:'SmartBox availability monitoring, occupancy control, and drag-and-drop layout configuration interface.'},
  {tag:'logistic', name:'LifeAja Employee Portal', date:'Mar–Jul 2022', role:'Developer', desc:'Centralized employee portal: blog, announcements, document directory, and unified internal app access.'},
  {tag:'logistic', name:'Aware Web', date:'Jan–Jul 2022', role:'Developer', desc:'Ported 200+ operational reports from Angular to OutSystems. Integrated Syncfusion & Ant Design frameworks.'},
  {tag:'corp', name:'Management Database Parlemen', date:'Oct–Dec 2021', role:'Tech Lead', desc:'Meeting tracking system for Ministry of Finance & Parliament. Chunked large-file upload to Object Storage + document content search.'},
  {tag:'corp', name:'Industrial Visual Inspection', date:'Oct 2021', role:'Developer', desc:'Computer vision for automated visual inspection on automotive production lines; defect & anomaly detection.'},
  {tag:'corp', name:'Operational Performance Tracking', date:'Apr–Aug 2021', role:'Tech Lead', desc:'Worker performance measurement across customer sites; efficiency tracking and cost-saving insights.'},
  {tag:'rnd', name:'Face Mask Detection System', date:'Jun 2021', role:'Developer', desc:'Real-time computer vision face mask detection for workplace & public safety compliance monitoring.'},
  {tag:'corp', name:'Supply Chain Management', date:'Apr–Aug 2021', role:'Tech Lead', desc:'Vendor registration & approval workflow, bidding processes, vendor assessment for procurement decisions.'},
  {tag:'rnd', name:'Tomato Grading System', date:'May 2021', role:'Developer', desc:'Desktop app for tomato grading using computer vision & deep learning — size, color, quality assessment.'},
  {tag:'corp', name:'Account Receivable Tracking', date:'Mar–Apr 2021', role:'Tech Lead', desc:'Automated payment reminder system; centralized tracking, reminder scheduling, and status monitoring.'},
  {tag:'rnd', name:'License Plate Recognition', date:'Apr 2021', role:'Engineer', desc:'Computer vision for automated vehicle identification in smart parking; reduced manual error.'},
  {tag:'corp', name:'Employee Portal Re-Factoring', date:'Jan–Feb 2021', role:'Tech Lead', desc:'Architecture analysis & refactoring: bottlenecks, technical debt, scalability improvements.'},
  {tag:'rnd', name:'Heart Arrhythmia Detection', date:'Jan 2021', role:'Engineer', desc:'LSTM deep learning system to detect heart arrhythmias from ECG data with time-series preprocessing.'},
  {tag:'rnd', name:'Smart Attendance System', date:'Jan 2021', role:'Developer', desc:'Facial recognition attendance using VGG16; automatic clock-in/out recording.'},
  {tag:'corp', name:'OJK Regulatory Reporting', date:'Oct–Nov 2020', role:'Developer', desc:'Credit, Market & Liquidity risk reporting with approval workflows; OJK-BOX integration for secure submission.'},
  {tag:'rnd', name:'Coffee Bean Classification', date:'Sept 2020', role:'Engineer', desc:'Machine learning classification of coffee beans by quality & type using texture analysis.'},
  {tag:'rnd', name:'Plant Health Monitoring', date:'Jun 2020', role:'Engineer', desc:'NOIR camera + OpenCV real-time plant health monitoring; stress detection and crop metrics.'},
  {tag:'corp', name:'Live Chat Customer Portal', date:'Apr–May 2020', role:'Developer', desc:'Real-time live chat integrated with corporate support and telesales platforms for unified case handling.'},
  {tag:'rnd', name:'Hoax Tweet Detection', date:'Apr 2020', role:'Engineer', desc:'CNN model for hoax vs legitimate tweet classification; TF-IDF + Information Gain feature selection.'},
  {tag:'iot', name:'ISPU Forecasting System', date:'Mar 2020', role:'Engineer', desc:'IoT air-quality monitoring with mobile app dashboard; automated ML workflow via Apache Airflow.'},
  {tag:'corp', name:'AI & CV Training (Tegal Polytechnic)', date:'Oct 2019', role:'Trainer', desc:'Hands-on AI & computer vision training for lecturers: ML model development, image processing, deployment.'},
  {tag:'iot', name:'LoRaWAN Gateway Integration', date:'Jun 2019', role:'IoT Developer', desc:'Kerlink LoRaWAN gateway integration with corporate plantation system for real-time environmental monitoring.'},
  {tag:'corp', name:'Insurance Telesales App', date:'Mar–Apr 2019', role:'Developer', desc:'Legacy telesales app migrated to OutSystems; modernized UX and improved workflow handling.'},
  {tag:'iot', name:'Fish Tank Monitoring System', date:'Apr 2019', role:'IoT Developer', desc:'IoT monitoring of temperature, salinity, pH, turbidity, water level; MySQL storage + Node-RED real-time dashboard.'},
  {tag:'iot', name:'Cold Storage Monitoring (Fast Food)', date:'Feb 2019', role:'IoT Developer', desc:'LoRaWAN temperature monitoring for fast food cold storage; real-time visualization and safety alerts.'},
  {tag:'iot', name:'Water Level Monitoring (Pulp & Paper)', date:'Feb 2019', role:'IoT Developer', desc:'LoRaWAN water level monitoring with sensor nodes, communication protocols, dashboards and early warning alerts.'},
  {tag:'rnd', name:'Industrial IoT Edge Controller', date:'Jan 2019', role:'IoT Engineer', desc:'Edge controller for electrical current measurement with RS485 peripherals and high-voltage digital I/O.'},
  {tag:'corp', name:'Insurance Customer Portal', date:'Dec 2018–Feb 2019', role:'Developer', desc:'Customer portal: policy details, payment history, investment monitoring, CMS for content and campaigns.'},
  {tag:'corp', name:'Building Management System', date:'Sep–Oct 2018', role:'Developer', desc:'Backoffice for building operations: facilities monitoring, tenant management, service request tracking.'},
  {tag:'iot', name:'AIDA Aquaculture System', date:'Oct 2018', role:'IoT Developer', desc:'Aquaculture operations support: water quality monitoring, feeding schedules, farm productivity dashboards.'},
  {tag:'iot', name:'TrackSense Fleet Management', date:'May 2018', role:'IoT Developer', desc:'LoRaWAN fleet GPS tracking with map dashboard, geofencing, polygon alerts, GeoTIFF Map Editor overlay.'},
  {tag:'iot', name:'LoRaWAN Network (Water Utility)', date:'Apr 2018', role:'IoT Developer', desc:'Real-time water debit, pressure & leakage monitoring; Grafana dashboard with 3D water meter visualization.'},
  {tag:'iot', name:'Cold Storage Monitoring (Frozen Food)', date:'Mar 2018', role:'IoT Developer', desc:'LoRaWAN cold storage temperature monitoring; Grafana dashboards + Apache NiFi dataflow pipelines.'},
  {tag:'rnd', name:'STM32 Temperature Sensor Node', date:'Oct 2017', role:'IoT Developer', desc:'Battery-powered STM32 LoRaWAN temperature node designed for maximum energy efficiency.'},
  {tag:'iot', name:'LoRaWAN Network (Media Company)', date:'Sept 2017', role:'IoT Developer', desc:'LoRaWAN deployment for smoke detection and door sensor monitoring in buildings.'},
  {tag:'iot', name:'LoRaWAN Network (Network Infra)', date:'Sept 2017', role:'IoT Developer', desc:'LoRaWAN network integration with CISCO gateway for industrial-grade requirements.'},
  {tag:'iot', name:'LoRaWAN Network (Building Mgmt)', date:'Jun 2017', role:'IoT Developer', desc:'Smart building monitoring: temperature, humidity, smoke sensors; feasibility validation for large-scale deployment.'},
  {tag:'iot', name:'LoRaWAN Network (Water Utility)', date:'Mar 2017', role:'IoT Developer', desc:'Real-time water debit monitoring; Grafana 3D visualization with LoRaWAN sensor nodes.'},
];

const tagMeta = {rnd:['[RnD]','pt-rnd','rnd'], logistic:['LOGISTIC','pt-log','logistic'], iot:['IOT / RF','pt-iot','iot'], corp:['OTHER','pt-corp','corp']};
const pGrid = document.getElementById('projectGrid');
pGrid.innerHTML = projects.map(p => {
  const m = tagMeta[p.tag];
  return `
  <article class="proj-card reveal" data-cat="${p.tag}">
    <div class="proj-top">
      <span class="proj-tag ${m[1]}">${m[0]}</span>
      <span class="proj-date">${p.date}</span>
    </div>
    <h3>${p.name.toUpperCase()}</h3>
    <div class="role">▸ ${p.role}</div>
    <p>${p.desc}</p>
  </article>`;
}).join('');

document.querySelectorAll('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(c => {
      c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f);
    });
  });
});

/* ---------- CERTS ---------- */
const certs = [
  {name:'Associate Traditional Web Developer 11', date:'Aug 2019'},
  {name:'Associate Reactive Developer', date:'Mar 2021'},
  {name:'Architecture Specialist', date:'Dec 2021'},
  {name:'Associate Tech Lead', date:'Nov 2023'},
  {name:'Professional DevOps Engineer', date:'Mar 2024'},
];
document.getElementById('certGrid').innerHTML = certs.map((c,i) => `
  <div class="cert-card reveal">
    <div class="cert-medal">${String(i+1).padStart(2,'0')}</div>
    <div>
      <h4>${c.name}</h4>
      <span>${c.date}</span>
    </div>
  </div>`).join('');

/* ---------- REVEAL ON SCROLL ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.1});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- COUNTERS ---------- */
const cio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count;
    let n = 0;
    (function tick(){
      n += Math.max(1, Math.ceil(target/40));
      if(n >= target){ el.textContent = target + '+'; } else { el.textContent = n; requestAnimationFrame(tick); }
    })();
    cio.unobserve(el);
  });
}, {threshold:.6});
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
