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
const tickerHTML = tickerItems.map(([t,hl]) => `<span class="${hl?'tl':'hl'}">★ ${t}</span>`).join('');
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
  {cat:'Embedded Hardware', cls:'tc', items:['NXP iMX RT','STM32','ESP32','Raspberry Pi','BeagleBone','MilkV Duo','Xilinx ZYNQ 7000','Lattice ECP5','Gowin FPGA'], hot:['STM32','ESP32']},
  {cat:'Edge AI & Tools', cls:'gc', items:['OpenCV','PyTorch','TensorFlow','Ultralytics','Roboflow','ONNX','Edge Impulse','OpenMV','Lite-RT','TDL-SDK']},
  {cat:'Embedded OS & Linux', cls:'', items:['Baremetal','FreeRTOS','RT-Thread','BuildRoot','OpenWRT','PetaLinux','Yocto']},
  {cat:'IoT Protocols & Platforms', cls:'', items:['LoRa / LoRaWAN','MQTT','Azure IoT','Balena','Thingboard','Node-RED'], hot:['LoRaWAN']},
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
  {tag:'rnd', name:'HF/VHF RF Mixer', date:'Nov 2025', role:'Engineer',
   desc:'High-performance HF/VHF RF mixer using MCL ADE-1 (Mini-Circuits). Optimized for low conversion loss, high isolation, wide frequency coverage.'},
  {tag:'logistic', name:'VEGA - Governance & Access', date:'Nov 2025', role:'Developer',
   desc:'Governance layer masking PII on internal APIs. User-level access control by location, department, role; runtime configuration UI for IT Ops.'},
  {tag:'logistic', name:'MOVER - Transport Management', date:'Oct 2025', role:'Developer',
   desc:'Vendor onboarding & bidding, scheduled transport orders, end-to-end tracking from pickup to destination (staging).'},
  {tag:'rnd', name:'FPGA Software Defined Radio', date:'Oct 2025', role:'Engineer',
   desc:'Low-cost SDR on Xilinx ZYNQ-7000 FPGA + AD9226 ADC. Real-time signal acquisition, processing, and demodulation.'},
  {tag:'logistic', name:'IAMS - Internal Audit Mgmt', date:'Sept 2025', role:'Developer',
   desc:'End-to-end audit workflow: planning, site visits, meetings, call logs, loss estimation, structured audit reports.'},
  {tag:'rnd', name:'9th Order Chebyshev LPF (HF)', date:'Sept 2025', role:'Engineer',
   desc:'9th order Chebyshev low-pass filter for HF band. Minimal insertion loss and sharp cutoff for signal integrity.'},
  {tag:'logistic', name:'Aware Web Refactoring', date:'Jul–Sept 2025', role:'Developer',
   desc:'Consolidated 200+ reports into 18 streamlined reports; refined dashboard UI for better operational insights.'},
  {tag:'rnd', name:'CANBus Sniffing & Monitoring', date:'Jul 2025', role:'Engineer',
   desc:'CAN sniffing on NXP i.MX RT1020 FlexCAN. Real-time frame capture/decode + LVGL-based live visualization UI.'},
  {tag:'logistic', name:'Guardian VoIP Client Mgmt', date:'June 2025', role:'Developer',
   desc:'VoIP provider configuration & management for the Guardian App; historical call tracking for auditing and analysis.'},
  {tag:'rnd', name:'MCU Object Detection (STM32 H7)', date:'May 2025', role:'Engineer',
   desc:'Vision AI on MCU: OpenMV + Lite-RT (TFLite) + Edge Impulse for smart, low-power IoT devices.'},
  {tag:'logistic', name:'Staging Productivity Heatmap GIS', date:'Apr–May 2025', role:'Developer',
   desc:'GIS heatmap of staging productivity and parcel flow per region. PostgreSQL geometry, server-side caching, IndexedDB rendering.'},
  {tag:'rnd', name:'FPGA Computer Vision (ZYNQ)', date:'Dec 2024', role:'Engineer',
   desc:'Real-time computer vision on Xilinx ZYNQ-7000 with OV7670 camera for edge image streaming and processing.'},
  {tag:'rnd', name:'Edge AI on Milk-V Duo S', date:'Oct 2024', role:'Engineer',
   desc:'Real-time object detection on RISC-V SBC with on-chip AI accelerator, via TDL SDK + VPSS pipeline.'},
  {tag:'logistic', name:'Data-G Endpoint Generator', date:'Oct–Dec 2023', role:'Developer',
   desc:'APIs dynamically generated from database objects. Multi-engine support, auth providers, ML anomaly alerting, playground, versioning.'},
  {tag:'rnd', name:'License Plate Recognition', date:'Apr 2021', role:'Engineer',
   desc:'Computer vision for automated vehicle ID in smart parking; reduced manual intervention and errors.'},
  {tag:'iot', name:'TrackSense Fleet Management', date:'May 2018', role:'IoT Developer',
   desc:'LoRaWAN fleet GPS tracking with map dashboard, geofencing, polygon alerts, Map Editor with GeoTIFF overlay.'},
];

const tagMeta = {rnd:['[RnD]','pt-rnd','rnd'], logistic:['LOGISTIC','pt-log','logistic'], iot:['IOT / RF','pt-iot','iot']};
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
