/* Portfolio content, bilingual EN/ID switcher, live WIB clock, and case-study modal */

const CONTENT = {
  en: {
    downloadPdf: "Download PDF",
    availability: "Open to Data Science & Data Engineering",
    roleTitle: "Data Scientist & AI Engineer",
    secAbout: "About",
    secProjects: "Projects",
    secExperience: "Experience",
    secOrganization: "Organization",
    secEducation: "Education",
    secSkills: "Skills",
    secContact: "Contact",
    aboutP1:
      "I am ‘Aarif Rahmaan Jalaluddin Faqiih, a 5th-semester Informatics student at Telkom University Purwokerto (GPA 3.77/4.00) and Algorithms &amp; Programming Lab Assistant. My focus lies in <mark>end-to-end machine learning and data engineering</mark>, turning messy real-world datasets into <mark>calibrated, production-ready predictive systems</mark>.",
    aboutP2:
      "With hands-on experience in AI dataset optimization, credit risk modeling, and enterprise analytics dashboards, I combine <mark>statistical rigor with full-stack software execution</mark> to ship data products that teams can inspect, trust, and deploy.",
    showEarlierExp: "Show 3 earlier engineering & UI/UX roles (2023–2025)",
    hideEarlierExp: "Hide earlier engineering & UI/UX roles",
    eduDegree: "B.S. in Informatics",
    eduDate: "2024 – Present · Semester 5",
    phoneLabel: "Phone",
    socialLabel: "Profiles",
    copy: "Copy",
    copied: "Copied",
    viewOnGithub: "View GitHub profile",
    eduBullets: [
      "Algorithms & Programming: Built a bank customer loan transaction recording and reporting application in Golang.",
      "Object-Oriented Programming: Developed a Java room reservation system covering relational database design, REST APIs, and Postman QA.",
      "Database Modeling: Designed an SQL relational database for restaurant operations and raw-material inventory management.",
      "AI Foundations: Engineered a passenger satisfaction classification model integrating Fuzzy Logic with Machine Learning and Deep Learning.",
    ],
    projects: [
      {
        id: "cdc-diabetes",
        title: "CDC Diabetes Risk Screening",
        subtitle: "End-to-end ML, TreeSHAP & Streamlit App",
        metric: "ROC-AUC 0.8287",
        period: "Nov 2026",
        thumb: "assets/project-cdc-diabetes.png",
        summary:
          "Clinical diabetes screening pipeline trained on 253,680 CDC BRFSS survey records (UCI ID 891), engineered with strict leakage-free validation, calibrated probabilities, fairness auditing, and a 3-page Streamlit screening app.",
        bullets: [
          "Prevented duplicate profile leakage across train/test splits via 21-feature hash Stratified Group Split (0 profile overlap).",
          "Engineered 8 domain clinical features and proved via inside-CV ablation that Unweighted + OOF threshold tuning outperforms SMOTE (PR-AUC 0.4331 vs 0.3742) and Class Weighting (Brier 0.0966 vs 0.1739).",
          "Optuna-tuned LightGBM reached Hold-Out ROC-AUC 0.8287, PR-AUC 0.4303 (3.1× baseline), Brier 0.0967, and 85.1% Recall in F2 screening mode.",
          "Deployed an interactive 3-page Streamlit Web App featuring real-time TreeSHAP individual risk drivers, a What-If lifestyle simulator, batch CSV triage, and a Model Card.",
        ],
        tags: ["Python", "LightGBM", "Optuna", "TreeSHAP", "Scikit-learn", "Streamlit", "pytest"],
        githubUrl: "https://github.com/aariffaqiih",
      },
      {
        id: "home-credit",
        title: "Credit Default Risk Model",
        subtitle: "Home Credit Indonesia × Rakamin",
        metric: "ROC-AUC 0.7450",
        period: "Feb – Mar 2026",
        thumb: "assets/project-home-credit.svg",
        summary:
          "Project-based Data Scientist internship developing a multi-table credit default scoring model to evaluate borrower repayment risk across seven relational financial tables.",
        bullets: [
          "Aggregated and engineered 192 predictive modeling features from 7 relational bureau, payment, and prior-application tables.",
          "Benchmarked Logistic Regression against gradient-boosted LightGBM with disciplined validation, achieving 0.7450 ROC-AUC.",
          "Translated credit risk drivers into actionable approval and risk-mitigation insights for lending stakeholders.",
        ],
        tags: ["Python", "LightGBM", "Logistic Regression", "Feature Engineering", "Pandas", "SQL"],
        githubUrl: "https://github.com/aariffaqiih",
      },
      {
        id: "gdgoc-dropout",
        title: "Student Drop-out Early Detection",
        subtitle: "GDGoC Championship · 2nd Place Winner",
        metric: "2nd Place",
        period: "Dec 2025 – Jun 2026",
        thumb: "assets/project-gdgoc-dropout.svg",
        summary:
          "Machine learning early-warning system and full-stack web application built with Google Developer Group on Campus to help university counselors proactively support at-risk students.",
        bullets: [
          "Awarded 2nd Place in the GDGoC Member Project Championship at Telkom University Purwokerto.",
          "Preprocessed student academic performance records, evaluated classification algorithms, and shipped a web app serving real-time model predictions.",
          "Collaborated directly with the campus counseling team to refine domain features and intervention usability.",
        ],
        tags: ["Machine Learning", "Python", "Scikit-learn", "Fullstack Web", "Domain Collaboration"],
        githubUrl: "https://github.com/aariffaqiih",
      },
      {
        id: "vehicle-sales",
        title: "Global Vehicle Sales Analytics",
        subtitle: "RevoU Data Analytics Project",
        metric: "KPI Dashboard",
        period: "Apr 2025",
        thumb: "assets/project-vehicle-sales.svg",
        summary:
          "Structured exploratory sales performance analysis uncovering regional revenue drivers, vehicle segment trends, and actionable recommendations for commercial decision-making.",
        bullets: [
          "Analyzed multi-region global vehicle sales datasets using structured Excel Pivot Tables to answer core commercial performance questions.",
          "Designed executive-ready charts highlighting top-performing product lines and seasonal revenue shifts to support data-driven decisions.",
        ],
        tags: ["Excel Pivot Tables", "Data Analytics", "Data Visualization", "Business Storytelling"],
        githubUrl: "https://github.com/aariffaqiih",
      },
    ],
    experiencePrimary: [
      {
        role: "Algorithms & Programming Lab Assistant",
        org: "Informatics Laboratory, Telkom University Purwokerto",
        period: "September 2026 – Present",
        bullets: [
          "Lead laboratory sessions for Algorithms & Programming 1 for undergraduate Informatics cohorts.",
          "Mentor students through algorithmic exercises, debugging workflows, and problem-solving fundamentals.",
        ],
      },
      {
        role: "AI & Data Optimization Intern",
        org: "Eklipse.gg, Jakarta (WFO)",
        period: "August – September 2026",
        bullets: [
          "Collected and processed structured datasets while evaluating and selecting AI models to optimize internal workflows.",
          "Analyzed user behavior and product performance metrics into clear data reports and curated training datasets for model iteration.",
        ],
      },
      {
        role: "Data Scientist Intern (Project-Based)",
        org: "Home Credit Indonesia × Rakamin, Jakarta (WFA)",
        period: "February – March 2026",
        bullets: [
          "Built a credit default prediction pipeline via multi-table feature engineering across 7 tables, producing 192 modeling features.",
          "Benchmarked Logistic Regression and LightGBM models, reaching a best performance of ROC-AUC 0.7450.",
        ],
      },
      {
        role: "Web & Android Developer",
        org: "bikinkreatif.id, Purwokerto (WFO)",
        period: "July 2026",
        bullets: [
          "Delivered custom websites and Android applications tailored to client business workflows, including requirement analysis.",
          "Shipped an official private school website and an LPK Android registration & information app.",
        ],
      },
    ],
    experienceEarlier: [
      {
        role: "Frontend Developer",
        org: "HUMIC (Human Centric Engineering Research Center), Bandung (WFA)",
        period: "May 2025",
        bullets: [
          "Built a seminar certificate management dashboard that accelerated certificate issuance workflows.",
          "Integrated authentication APIs to secure user access and implemented end-to-end application user flows.",
        ],
      },
      {
        role: "Frontend Developer & UI/UX Designer",
        org: "PT Braincode Solution, Jakarta (WFA)",
        period: "May – October 2024",
        bullets: [
          "Developed internal analytics dashboards and ERP systems for operational data management using SolidJS.",
          "Designed Figma interface systems prior to engineering handoff and delivered internal apps for Telkomsel, Pertamina, and Mipcon.",
        ],
      },
      {
        role: "Student Intern (Frontend Developer)",
        org: "PT Mega Giga Solusindo, Yogyakarta (WFO)",
        period: "April – September 2023",
        bullets: [
          "Implemented responsive Vue.js company profile interfaces from UI team specifications.",
          "Built a CodeIgniter CRUD inventory management app for SMEs grounded in user research and verified functionality via Postman QA.",
        ],
      },
    ],
    organization: [
      {
        role: "AI Developer & Fullstack Developer",
        org: "Google Developer Group on Campus · Telkom University Purwokerto",
        period: "December 2025 – June 2026",
        badge: "2nd Place",
        bullets: [
          "Won 2nd Place in the Member Project Championship by building a Machine Learning Student Drop-out Risk Detection System.",
          "Engineered the student performance dataset, selected optimal ML algorithms, and built the full-stack web interface for model serving.",
          "Consulted with the campus counseling team to optimize feature relevance and practical screening workflow.",
        ],
      },
    ],
    skills: [
      {
        name: "Data Science & Machine Learning",
        desc: "Python, Scikit-learn, LightGBM, XGBoost, Optuna, TreeSHAP, Pandas, NumPy, probability calibration, and statistical hypothesis testing.",
      },
      {
        name: "Data Engineering & Analytics",
        desc: "SQL, relational database modeling, multi-table feature engineering, Matplotlib, Seaborn, Plotly, and Excel Pivot analytics.",
      },
      {
        name: "Software & Fullstack Engineering",
        desc: "Streamlit, Golang, Java, REST APIs, SolidJS, Vue.js, CodeIgniter, Git, and API quality assurance with Postman.",
      },
      {
        name: "UI/UX & Analytics Dashboards",
        desc: "Figma prototyping, user research, and clean enterprise analytics & ERP dashboard design.",
      },
      {
        name: "Languages & Working Style",
        desc: "Indonesian (Native), English (Professional Working) — proactive mindset, detail-oriented, and collaborative across technical and domain teams.",
      },
    ],
  },

  id: {
    downloadPdf: "Unduh PDF",
    availability: "Terbuka untuk peran Data Science & Data Engineering",
    roleTitle: "Data Scientist & AI Engineer",
    secAbout: "Tentang",
    secProjects: "Proyek",
    secExperience: "Pengalaman",
    secOrganization: "Organisasi",
    secEducation: "Pendidikan",
    secSkills: "Kemampuan",
    secContact: "Kontak",
    aboutP1:
      "Saya ‘Aarif Rahmaan Jalaluddin Faqiih, mahasiswa Informatika semester 5 Universitas Telkom Purwokerto (IPK 3,77/4,00) dan Asisten Praktikum Algoritma Pemrograman. Fokus utama saya adalah <mark>machine learning end-to-end dan data engineering</mark>, mengolah data mentah menjadi <mark>sistem prediktif yang terkalibrasi dan siap produksi</mark>.",
    aboutP2:
      "Berbekal pengalaman langsung dalam optimasi dataset AI, pemodelan risiko kredit, serta pembangunan dashboard analytics korporasi, saya memadukan <mark>ketajaman statistik dengan eksekusi software full-stack</mark> agar model data benar-benar dapat dipakai dan dipercaya pengguna.",
    showEarlierExp: "Lihat 3 pengalaman rekayasa & UI/UX sebelumnya (2023–2025)",
    hideEarlierExp: "Sembunyikan pengalaman sebelumnya",
    eduDegree: "S1 Informatika",
    eduDate: "2024 – Sekarang · Semester 5",
    phoneLabel: "Telepon",
    socialLabel: "Profil",
    copy: "Salin",
    copied: "Tersalin",
    viewOnGithub: "Buka profil GitHub",
    eduBullets: [
      "Algoritma dan Pemrograman: Membangun aplikasi pencatatan dan pelaporan transaksi pinjaman nasabah bank berbasis Golang.",
      "Pemrograman Berorientasi Objek: Mengembangkan aplikasi reservasi ruangan berbasis Java mencakup desain database, REST API, dan pengujian Postman.",
      "Pemodelan Basis Data: Merancang database relasional SQL untuk manajemen operasional restoran dan pengelolaan bahan baku.",
      "Dasar Kecerdasan Artifisial: Membangun model klasifikasi kepuasan penumpang berbasis Fuzzy Logic terintegrasi Machine Learning dan Deep Learning.",
    ],
    projects: [
      {
        id: "cdc-diabetes",
        title: "Skrining Risiko Diabetes CDC",
        subtitle: "ML End-to-End, TreeSHAP & Web App Streamlit",
        metric: "ROC-AUC 0.8287",
        period: "Nov 2026",
        thumb: "assets/project-cdc-diabetes.png",
        summary:
          "Pipeline skrining risiko diabetes pada 253.680 data survei CDC BRFSS (UCI ID 891) dengan validasi ketat bebas data leakage, kalibrasi probabilitas, audit fairness, dan aplikasi web Streamlit 3 halaman.",
        bullets: [
          "Mencegah kebocoran profil duplikat antar train/test melalui Stratified Group Split berbasis hash 21 fitur (0 overlap profil).",
          "Merekayasa 8 fitur klinis dan membuktikan lewat ablasi dalam CV bahwa Unweighted + tuning threshold OOF mengungguli SMOTE (PR-AUC 0,4331 vs 0,3742) maupun Class Weighting (Brier 0,0966 vs 0,1739).",
          "LightGBM hasil tuning Optuna meraih Hold-Out ROC-AUC 0,8287, PR-AUC 0,4303 (3,1× baseline), Brier 0,0967, dan Recall 85,1% pada mode skrining F2.",
          "Menyajikan Web App Streamlit 3 halaman lengkap dengan penjelasan TreeSHAP individu real-time, simulator What-If gaya hidup, triase CSV massal, dan Kartu Model.",
        ],
        tags: ["Python", "LightGBM", "Optuna", "TreeSHAP", "Scikit-learn", "Streamlit", "pytest"],
        githubUrl: "https://github.com/aariffaqiih",
      },
      {
        id: "home-credit",
        title: "Prediksi Risiko Credit Default",
        subtitle: "Home Credit Indonesia × Rakamin",
        metric: "ROC-AUC 0.7450",
        period: "Feb – Mar 2026",
        thumb: "assets/project-home-credit.svg",
        summary:
          "Magang berbasis proyek sebagai Data Scientist membangun model prediksi gagal bayar kredit dari tujuh tabel relasional keuangan.",
        bullets: [
          "Melakukan agregasi dan feature engineering lintas 7 tabel finansial yang menghasilkan 192 fitur pemodelan.",
          "Membandingkan Logistic Regression dan LightGBM secara terukur, dengan performa terbaik mencapai ROC-AUC 0,7450.",
          "Menyusun rekomendasi mitigasi risiko kredit berbasis faktor pendorong utama gagal bayar.",
        ],
        tags: ["Python", "LightGBM", "Logistic Regression", "Feature Engineering", "Pandas", "SQL"],
        githubUrl: "https://github.com/aariffaqiih",
      },
      {
        id: "gdgoc-dropout",
        title: "Deteksi Dini Potensi Drop-out",
        subtitle: "GDGoC Championship · Juara 2",
        metric: "Juara 2",
        period: "Des 2025 – Jun 2026",
        thumb: "assets/project-gdgoc-dropout.svg",
        summary:
          "Sistem deteksi dini potensi mahasiswa putus kuliah berbasis Machine Learning dan aplikasi web full-stack bersama Google Developer Group on Campus.",
        bullets: [
          "Meraih Juara 2 Member Project Championship GDGoC Universitas Telkom Purwokerto.",
          "Mengolah dataset performa mahasiswa, menyeleksi algoritma ML terbaik, dan membangun web app untuk menyajikan prediksi model.",
          "Berkonsultasi langsung dengan tim konseling kampus untuk mengoptimalkan relevansi fitur klinis dan alur intervensi.",
        ],
        tags: ["Machine Learning", "Python", "Scikit-learn", "Fullstack Web", "Domain Research"],
        githubUrl: "https://github.com/aariffaqiih",
      },
      {
        id: "vehicle-sales",
        title: "Analisis Penjualan Kendaraan Global",
        subtitle: "Proyek Data Analytics · RevoU",
        metric: "KPI Dashboard",
        period: "Apr 2025",
        thumb: "assets/project-vehicle-sales.svg",
        summary:
          "Analisis terstruktur performa penjualan otomotif global untuk memetakan tren segmen pasar dan mendukung keputusan bisnis berbasis data.",
        bullets: [
          "Menganalisis dataset penjualan lintas wilayah menggunakan pivot table Excel untuk menjawab pertanyaan utama performa komersial.",
          "Menyusun visualisasi grafik terstruktur guna menyoroti segmen terkuat dan mendukung pengambilan keputusan berbasis data.",
        ],
        tags: ["Excel Pivot Table", "Data Analytics", "Visualisasi Data", "Business Insight"],
        githubUrl: "https://github.com/aariffaqiih",
      },
    ],
    experiencePrimary: [
      {
        role: "Asisten Praktikum Algoritma Pemrograman",
        org: "Laboratorium Informatika, Telkom University Purwokerto",
        period: "September 2026 – Sekarang",
        bullets: [
          "Mengajar sesi praktikum mata kuliah Algoritma Pemrograman 1 di laboratorium kampus.",
          "Mendampingi mahasiswa menyelesaikan latihan algoritma, debugging, dan pemahaman logika pemrograman.",
        ],
      },
      {
        role: "AI & Data Optimization Intern",
        org: "Eklipse.gg, Jakarta (WFO)",
        period: "Agustus – September 2026",
        bullets: [
          "Mengumpulkan dan memproses dataset serta mengevaluasi dan menyeleksi model AI untuk optimasi workflow internal.",
          "Menganalisis perilaku pengguna dan performa produk menjadi laporan data serta menyiapkan dataset untuk pelatihan model.",
        ],
      },
      {
        role: "Data Scientist Intern (Project-Based)",
        org: "Home Credit Indonesia × Rakamin, Jakarta (WFA)",
        period: "Februari – Maret 2026",
        bullets: [
          "Membangun model prediksi credit default melalui feature engineering dari 7 tabel yang menghasilkan 192 fitur pemodelan.",
          "Membandingkan Logistic Regression dan LightGBM dengan model terbaik mencapai ROC-AUC 0,7450.",
        ],
      },
      {
        role: "Web Developer & Android Developer",
        org: "bikinkreatif.id, Purwokerto (WFO)",
        period: "Juli 2026",
        bullets: [
          "Membangun website dan aplikasi Android sesuai kebutuhan bisnis klien termasuk analisis fitur bersama klien.",
          "Menghasilkan website resmi sekolah swasta dan aplikasi Android LPK untuk publikasi informasi dan pendaftaran.",
        ],
      },
    ],
    experienceEarlier: [
      {
        role: "Frontend Developer",
        org: "HUMIC (Human Centric Engineering Research Center), Bandung (WFA)",
        period: "Mei 2025",
        bullets: [
          "Membangun dashboard sertifikat seminar yang mempercepat alur penerbitan sertifikat.",
          "Mengintegrasikan API autentikasi untuk keamanan pengguna serta merancang dan mengimplementasikan user flow aplikasi.",
        ],
      },
      {
        role: "Frontend Developer & UI/UX Designer",
        org: "PT Braincode Solution, Jakarta (WFA)",
        period: "Mei – Oktober 2024",
        bullets: [
          "Membangun dashboard analytics internal dan sistem ERP berbasis SolidJS untuk pengelolaan data operasional.",
          "Merancang UI/UX dengan Figma dan menghasilkan aplikasi internal untuk tiga perusahaan besar (Telkomsel, Pertamina, dan Mipcon).",
        ],
      },
      {
        role: "Student Intern (Frontend Developer)",
        org: "PT Mega Giga Solusindo, Yogyakarta (WFO)",
        period: "April – September 2023",
        bullets: [
          "Mengimplementasikan tampilan website company profile berbasis Vue.js dari desain tim UI.",
          "Membangun aplikasi manajemen stok UMKM berbasis CodeIgniter dari riset pengguna dan menguji kualitasnya dengan Postman.",
        ],
      },
    ],
    organization: [
      {
        role: "AI Developer & Fullstack Developer",
        org: "Google Developer Group on Campus · Universitas Telkom Purwokerto",
        period: "Desember 2025 – Juni 2026",
        badge: "Juara 2",
        bullets: [
          "Meraih Juara 2 Member Project Championship melalui Sistem Deteksi Potensi Drop-out berbasis Machine Learning.",
          "Mengolah dataset performa mahasiswa, memilih algoritma ML, dan membangun aplikasi web untuk mengimplementasikan model.",
          "Berkonsultasi dengan tim konseling kampus untuk menganalisis dan mengoptimalkan fitur pemodelan.",
        ],
      },
    ],
    skills: [
      {
        name: "Data Science & Machine Learning",
        desc: "Python, Scikit-learn, LightGBM, XGBoost, Optuna, TreeSHAP, Pandas, NumPy, kalibrasi probabilitas, dan pengujian statistik.",
      },
      {
        name: "Data Engineering & Analytics",
        desc: "SQL, pemodelan basis data relasional, feature engineering multi-tabel, Matplotlib, Seaborn, Plotly, dan Excel Pivot.",
      },
      {
        name: "Software & Fullstack Engineering",
        desc: "Streamlit, Golang, Java, REST API, SolidJS, Vue.js, CodeIgniter, Git, serta quality assurance API menggunakan Postman.",
      },
      {
        name: "UI/UX & Analytics Dashboards",
        desc: "Desain antarmuka Figma, riset pengguna, serta perancangan dashboard analitik dan ERP korporasi.",
      },
      {
        name: "Bahasa & Kolaborasi",
        desc: "Indonesia (Aktif), Inggris (Profesional) — pola pikir proaktif, teliti, dan terbiasa berkolaborasi lintas disiplin.",
      },
    ],
  },
};

let currentLang = localStorage.getItem("af-lang") === "id" ? "id" : "en";
let earlierExpanded = false;
let activeProjectId = null;

function createEntryCard(item) {
  const article = document.createElement("article");
  article.className = "entry-card";

  const head = document.createElement("div");
  head.className = "entry-head";

  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "entry-title";
  title.textContent = item.role;

  const org = document.createElement("p");
  org.className = "entry-org";
  org.textContent = item.org;

  titleWrap.append(title, org);
  head.appendChild(titleWrap);

  if (item.badge) {
    const badge = document.createElement("span");
    badge.className = "entry-badge mono";
    badge.textContent = item.badge;
    head.appendChild(badge);
  }

  const date = document.createElement("p");
  date.className = "entry-date";
  date.textContent = item.period;

  const ul = document.createElement("ul");
  ul.className = "entry-bullets";
  item.bullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    ul.appendChild(li);
  });

  article.append(head, date, ul);
  return article;
}

function renderContent() {
  const t = CONTENT[currentLang];
  document.documentElement.lang = currentLang;
  document.getElementById("langLabel").textContent = currentLang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key]) el.innerHTML = t[key];
  });

  // Projects grid
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  t.projects.forEach((proj) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "project-card";
    btn.setAttribute("aria-label", `${proj.title} — ${proj.subtitle}`);
    btn.innerHTML = `
      <div class="project-thumb">
        <img src="${proj.thumb}" alt="${proj.title} preview" loading="lazy" />
      </div>
      <div class="project-info">
        <div class="project-title-row">
          <h3 class="project-title">${proj.title}</h3>
          <span class="project-metric">${proj.metric}</span>
        </div>
        <p class="project-subtitle">${proj.subtitle}</p>
      </div>
    `;
    btn.addEventListener("click", () => openProjectModal(proj.id));
    grid.appendChild(btn);
  });

  // Experience stacks
  const expPrimary = document.getElementById("experiencePrimary");
  expPrimary.innerHTML = "";
  t.experiencePrimary.forEach((item) => expPrimary.appendChild(createEntryCard(item)));

  const expEarlier = document.getElementById("experienceEarlier");
  expEarlier.innerHTML = "";
  t.experienceEarlier.forEach((item) => expEarlier.appendChild(createEntryCard(item)));
  document.getElementById("toggleEarlierLabel").textContent = earlierExpanded
    ? t.hideEarlierExp
    : t.showEarlierExp;

  // Organization
  const orgStack = document.getElementById("organizationStack");
  orgStack.innerHTML = "";
  t.organization.forEach((item) => orgStack.appendChild(createEntryCard(item)));

  // Education bullets
  const eduList = document.getElementById("eduBullets");
  eduList.innerHTML = "";
  t.eduBullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    eduList.appendChild(li);
  });

  // Skills
  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = "";
  t.skills.forEach((s) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="skill-name">${s.name}</span><span class="skill-desc">${s.desc}</span>`;
    skillsList.appendChild(li);
  });

  if (activeProjectId) {
    populateModal(activeProjectId);
  }
}

function populateModal(projectId) {
  const t = CONTENT[currentLang];
  const proj = t.projects.find((p) => p.id === projectId);
  if (!proj) return;

  const img = document.getElementById("modalThumb");
  img.src = proj.thumb;
  img.alt = `${proj.title} preview`;

  document.getElementById("modalPeriod").textContent = proj.period;
  document.getElementById("modalHighlight").textContent = proj.metric;
  document.getElementById("modalTitle").textContent = proj.title;
  document.getElementById("modalSummary").textContent = proj.summary;

  const bullets = document.getElementById("modalBullets");
  bullets.innerHTML = "";
  proj.bullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    bullets.appendChild(li);
  });

  const tags = document.getElementById("modalTags");
  tags.innerHTML = "";
  proj.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tags.appendChild(span);
  });

  const actions = document.getElementById("modalActions");
  actions.innerHTML = "";
  if (proj.githubUrl) {
    const a = document.createElement("a");
    a.className = "modal-link";
    a.href = proj.githubUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = t.viewOnGithub;
    actions.appendChild(a);
  }
}

function openProjectModal(projectId) {
  activeProjectId = projectId;
  populateModal(projectId);
  const modal = document.getElementById("projectModal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalCloseBtn").focus();
}

function closeProjectModal() {
  activeProjectId = null;
  const modal = document.getElementById("projectModal");
  modal.hidden = true;
  document.body.style.overflow = "";
}

function updateWibClock() {
  const el = document.getElementById("localTime");
  if (!el) return;
  try {
    const formatted = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());
    el.textContent = `${formatted} WIB`;
  } catch {
    el.textContent = "UTC+7 WIB";
  }
}

function initInteractions() {
  // Theme toggle
  const themeBtn = document.getElementById("themeToggle");
  const syncThemeAria = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-pressed", String(isDark));
  };
  syncThemeAria();

  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("af-theme", next);
    syncThemeAria();
  });

  // Language toggle
  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "id" : "en";
    localStorage.setItem("af-lang", currentLang);
    renderContent();
  });

  // Earlier experience accordion
  const toggleBtn = document.getElementById("toggleEarlierExp");
  const earlierBox = document.getElementById("experienceEarlier");
  toggleBtn.addEventListener("click", () => {
    earlierExpanded = !earlierExpanded;
    earlierBox.hidden = !earlierExpanded;
    toggleBtn.setAttribute("aria-expanded", String(earlierExpanded));
    document.getElementById("toggleEarlierLabel").textContent = earlierExpanded
      ? CONTENT[currentLang].hideEarlierExp
      : CONTENT[currentLang].showEarlierExp;
  });

  // Copy email helper
  const copyBtn = document.getElementById("copyEmailBtn");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("aarifrjf@gmail.com");
      const label = copyBtn.querySelector("span");
      label.textContent = CONTENT[currentLang].copied;
      setTimeout(() => {
        label.textContent = CONTENT[currentLang].copy;
      }, 1800);
    } catch {
      window.location.href = "mailto:aarifrjf@gmail.com";
    }
  });

  // Modal close handlers
  document.getElementById("modalCloseBtn").addEventListener("click", closeProjectModal);
  document.getElementById("projectModal").addEventListener("click", (e) => {
    if (e.target.id === "projectModal") closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeProjectId) closeProjectModal();
  });
}

renderContent();
initInteractions();
updateWibClock();
setInterval(updateWibClock, 30_000);
