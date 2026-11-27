/* Portfolio v2 — Tailored for AI Engineer, Data Engineer & Data Analyst roles
   (PT Wiratek Solusi Asia, PT NexWave Indonesia, & enterprise AI/Data teams). */

const CONTENT = {
  en: {
    downloadPdf: "Download PDF",
    availability: "Open to AI Engineer, Data Engineer & Data Analyst roles",
    roleTitle: "AI & Data Engineer · Data Analyst",
    secAbout: "About",
    secProjects: "Projects",
    secExperience: "Experience",
    secOrganization: "Organization",
    secEducation: "Education",
    secSkills: "Skills",
    secContact: "Contact",
    aboutP1:
      "I am ‘Aarif Rahmaan Jalaluddin Faqiih, a 5th-semester Informatics student at Telkom University Purwokerto (GPA 3.77/4.00) and Algorithms &amp; Programming Lab Assistant. I build <mark>end-to-end Hybrid RAG &amp; resilient LLM systems</mark> (pgvector HNSW, FastAPI, Celery, Redis, Gemini/Groq failover) alongside <mark>reliable SQL/Python data pipelines</mark> and <mark>clinical &amp; financial ML models</mark>.",
    aboutP2:
      "Having optimized AI datasets at Eklipse.gg, engineered 192-feature credit models for Home Credit, and shipped internal analytics dashboards for <mark>enterprise telecom &amp; energy clients (Telkomsel, Pertamina, Mipcon)</mark>, I bridge AI engineering, data pipelines, and clear business reporting.",
    showEarlierExp: "Show 3 earlier web & mobile roles (2023–2026)",
    hideEarlierExp: "Hide earlier web & mobile roles",
    eduDegree: "B.S. in Informatics",
    eduDate: "2024 – Present · Semester 5",
    phoneLabel: "Phone",
    socialLabel: "Profiles",
    copy: "Copy",
    copied: "Copied",
    filters: [
      { key: "all", label: "All (5)" },
      { key: "ai", label: "AI & RAG" },
      { key: "de", label: "Data Engineering" },
      { key: "da", label: "Data Analytics & ML" },
    ],
    eduBullets: [
      "Database Modeling: Designed an SQL relational database schema for restaurant operations and raw-material inventory tracking.",
      "AI Foundations: Built a passenger satisfaction classification model integrating Fuzzy Logic with Machine Learning and Deep Learning.",
      "Algorithms & Programming: Engineered a bank customer loan transaction recording and reporting system in Golang.",
      "Object-Oriented Programming: Developed a Java room reservation backend covering relational database design, REST APIs, and Postman QA.",
    ],
    projects: [
      {
        id: "modellyng",
        tracks: ["ai", "de"],
        title: "Modellyng — AI Research & RAG Platform",
        subtitle: "pgvector HNSW + RRF Hybrid RAG, FastAPI, Celery & Redis",
        metric: "Web + Mobile",
        period: "2026",
        thumb: "assets/project-modellyng.svg",
        summary:
          "Evidence-centered academic literature intelligence platform (Web in React 19/TypeScript & Mobile in Flutter) that turns private PDFs into verified 13-parameter extractions, interactive research graphs, and bounding-box-cited Hybrid RAG chat.",
        bullets: [
          "Engineered a Hybrid RAG engine combining pgvector HNSW cosine search (768-dim Gemini text-embedding-004) with PostgreSQL GIN Full-Text Search (ts_rank_cd) fused via Reciprocal Rank Fusion (RRF, k=60), linking every [S1]/[S2] citation to exact PDF bounding-box coordinates for PDF.js highlighting.",
          "Built a resilient dual-provider ModelRegistry (Gemini Core → Groq Backup failover) featuring TPM/RPM token-bucket rate limiting, exponential backoff with jitter, strict Pydantic JSON validation, and 4-batch divide-and-conquer extraction with zero fake fallbacks.",
          "Implemented a 10-stage idempotent Celery + Redis PDF pipeline (PyMuPDF block/coverage parser, scanned-PDF & academic doc gatekeeper, Crossref/DataCite DOI credibility verification, and 11 PostgreSQL/PLpgSQL migrations with Supabase RLS).",
          "Built prompt-injection-safe Knowledge Graph Synthesis (React Flow & native Flutter Mermaid), LLM concept/method clustering, SHA-256 cached gap recommendations, multi-style bibliography export (APA 7/IEEE/Harvard/Vancouver/Chicago), and Excel/PDF exports.",
        ],
        tags: [
          "pgvector HNSW",
          "Hybrid RAG (RRF)",
          "FastAPI",
          "Celery + Redis",
          "Gemini → Groq Failover",
          "Pydantic",
          "PostgreSQL / RLS",
          "React 19 & Flutter",
        ],
        links: [
          { label: "Web Repo (Hybrid RAG + React 19)", url: "https://github.com/Extluke/Modellying-web", primary: true },
          { label: "Mobile Repo (Flutter + FastAPI)", url: "https://github.com/Extluke/modellyng", primary: false },
        ],
      },
      {
        id: "cdc-diabetes",
        tracks: ["ai", "de", "da"],
        title: "CDC Diabetes Clinical Risk Screening",
        subtitle: "Clinical AI, Data Quality Pipeline & Streamlit App",
        metric: "ROC-AUC 0.8287",
        period: "Nov 2026",
        thumb: "assets/project-cdc-diabetes.png",
        summary:
          "Production-grade clinical AI & data quality pipeline trained on 253,680 CDC BRFSS survey records (UCI ID 891), featuring automated schema contracts, leakage-free validation, calibrated probabilities, fairness auditing, and a 3-page Streamlit screening app.",
        bullets: [
          "Built reproducible Parquet ingestion and automated BRFSS codebook/schema validation protected by 9 pytest unit & UI AppTest checks.",
          "Eliminated duplicate profile leakage via 21-feature hash Stratified Group Split (0 profile overlap) and proved via inside-CV ablation that Unweighted + OOF threshold tuning outperforms SMOTE (PR-AUC 0.4331 vs 0.3742) and Class Weighting (Brier 0.0966 vs 0.1739).",
          "Optuna-tuned LightGBM reached Hold-Out ROC-AUC 0.8287, PR-AUC 0.4303 (3.1× baseline), Brier 0.0967, and 85.1% Recall in F2 clinical screening mode.",
          "Shipped a 3-page Streamlit clinical app with real-time TreeSHAP explanations, a What-If lifestyle simulator, batch CSV triage, and subgroup fairness Model Card.",
        ],
        tags: ["Python", "LightGBM", "Optuna", "TreeSHAP", "Parquet", "Streamlit", "pytest", "Git"],
        links: [
          { label: "View GitHub Profile", url: "https://github.com/aariffaqiih", primary: true },
        ],
      },
      {
        id: "home-credit",
        tracks: ["de", "da"],
        title: "Credit Default Risk Pipeline",
        subtitle: "7-Table Feature Pipeline · Home Credit × Rakamin",
        metric: "ROC-AUC 0.7450",
        period: "Feb – Mar 2026",
        thumb: "assets/project-home-credit.svg",
        summary:
          "Multi-table relational data engineering and predictive credit default modeling across seven financial datasets to support borrower risk evaluation.",
        bullets: [
          "Joined and aggregated 7 relational bureau, installment, POS, and prior-application tables into a clean 192-feature modeling dataset.",
          "Benchmarked Logistic Regression and LightGBM models with structured evaluation, achieving a best Hold-Out ROC-AUC of 0.7450.",
          "Translated key delinquency and debt-ratio signals into clear analytical findings for credit risk review.",
        ],
        tags: ["Python", "SQL", "Pandas", "Feature Engineering", "LightGBM", "Logistic Regression"],
        links: [
          {
            label: "GitHub Repository (Notebook)",
            url: "https://github.com/aariffaqiih/FINAL-TASK-PBI-DATA-SCIENTIST-HCI",
            primary: true,
          },
        ],
      },
      {
        id: "gdgoc-dropout",
        tracks: ["ai", "da"],
        title: "StayLearn — AI Drop-out Platform",
        subtitle: "SHAP Counterfactuals, Llama 3 Chatbot & Analytics",
        metric: "2nd Place",
        period: "Dec 2025 – Jun 2026",
        thumb: "assets/project-gdgoc-dropout.svg",
        summary:
          "Award-winning (2nd Place GDGoC Championship) student retention platform combining ML drop-out prediction, SHAP + counterfactual explainability, a zero-PII Groq/Llama 3 mentoring chatbot, and a multi-view counselor analytics suite.",
        bullets: [
          "Awarded 2nd Place in the GDGoC Member Project Championship at Telkom University Purwokerto, co-designed with the campus counseling team.",
          "Built a Scikit-learn preprocessing & classification pipeline with per-prediction SHAP feature attributions and actionable counterfactual explanations ('if attendance rises to 80%, risk drops Z%').",
          "Engineered a unified zero-PII LLM engine (Groq Llama 3.3 70B / 3.1 8B + Hugging Face fallback) powering personalized intervention plans, SDG 4.4 career advice, and a mentoring chatbot.",
          "Shipped SQLite persistence, batch CSV screening, counselor analytics dashboards (equity, effectiveness, wellbeing trends), and automated unit tests.",
        ],
        tags: [
          "Python",
          "Groq / Llama 3",
          "SHAP & Counterfactuals",
          "Scikit-learn",
          "SQLite",
          "Counselor BI",
          "Unit Tests",
        ],
        links: [
          { label: "Live Web App", url: "https://staylearn.rakhafeb.online/", primary: true },
          { label: "StayLearn App Repo", url: "https://github.com/aariffaqiih/STAYLEARN", primary: false },
          { label: "GDGoC AI & Notebooks", url: "https://github.com/aariffaqiih/GDGoC-AI", primary: false },
        ],
      },
      {
        id: "vehicle-sales",
        tracks: ["da"],
        title: "Global Vehicle Sales Analytics",
        subtitle: "Excel Pivot Reporting & KPI Insights · RevoU",
        metric: "BI & Excel",
        period: "Apr 2025",
        thumb: "assets/project-vehicle-sales.svg",
        summary:
          "Structured business data analysis identifying regional automotive sales drivers, product mix performance, and executive KPI visualizations for commercial decision-making.",
        bullets: [
          "Analyzed multi-region global vehicle sales datasets using structured Microsoft Excel Pivot Tables to answer core revenue and unit-volume questions.",
          "Built clear, decision-ready KPI charts translating raw operational records into actionable business reports.",
        ],
        tags: ["Microsoft Excel", "Pivot Tables", "Data Analytics", "KPI Visualization", "Reporting"],
        links: [
          { label: "View GitHub Profile", url: "https://github.com/aariffaqiih", primary: true },
        ],
      },
    ],
    experiencePrimary: [
      {
        role: "Algorithms & Programming Lab Assistant",
        org: "Informatics Laboratory, Telkom University Purwokerto",
        period: "September 2026 – Present",
        bullets: [
          "Teach Algorithms & Programming 1 lab sessions and coach undergraduate cohorts on algorithmic logic and clean problem-solving.",
          "Mentor students through debugging exercises, data structures fundamentals, and structured code workflows.",
        ],
      },
      {
        role: "AI & Data Optimization Intern",
        org: "Eklipse.gg, Jakarta (WFO)",
        period: "August – September 2026",
        bullets: [
          "Collected, cleaned, and curated training datasets while evaluating and selecting AI models to optimize internal production workflows.",
          "Analyzed user behavior and product performance metrics into actionable analytical reports to guide product and model iterations.",
        ],
      },
      {
        role: "Data Scientist Intern (Project-Based)",
        org: "Home Credit Indonesia × Rakamin, Jakarta (WFA)",
        period: "February – March 2026",
        bullets: [
          "Built a multi-table credit default data pipeline across 7 relational tables, engineering 192 clean modeling features.",
          "Evaluated Logistic Regression and LightGBM classifiers, achieving a best performance of ROC-AUC 0.7450.",
        ],
      },
      {
        role: "Frontend Developer & UI/UX Designer (Analytics & ERP)",
        org: "PT Braincode Solution, Jakarta (WFA)",
        period: "May – October 2024",
        bullets: [
          "Built internal analytics dashboards and operational ERP systems using SolidJS and Figma specifications.",
          "Delivered internal reporting interfaces and operational apps for major telecom & enterprise clients: Telkomsel, Pertamina, and Mipcon.",
        ],
      },
    ],
    experienceEarlier: [
      {
        role: "Web & Android Developer",
        org: "bikinkreatif.id, Purwokerto (WFO)",
        period: "July 2026",
        bullets: [
          "Delivered custom websites and Android applications tailored to client requirements, including requirement discovery.",
          "Shipped an official private school portal and an LPK Android registration & information app.",
        ],
      },
      {
        role: "Frontend Developer",
        org: "HUMIC (Human Centric Engineering Research Center), Bandung (WFA)",
        period: "May 2025",
        bullets: [
          "Built a seminar certificate management dashboard that accelerated certificate issuance workflows.",
          "Integrated authentication APIs for secure user access and implemented end-to-end application user flows.",
        ],
      },
      {
        role: "Student Intern (Frontend Developer)",
        org: "PT Mega Giga Solusindo, Yogyakarta (WFO)",
        period: "April – September 2023",
        bullets: [
          "Implemented responsive Vue.js company profile interfaces and a CodeIgniter CRUD inventory app for SMEs grounded in user research.",
          "Executed API and web quality assurance testing using Postman.",
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
          "Won 2nd Place in the Member Project Championship by building an ML-powered Student Drop-out Risk Detection System.",
          "Processed student performance datasets, selected optimal ML algorithms, and developed the full-stack web app for live inference.",
          "Consulted with the campus counseling team to align feature engineering with real operational decision-making.",
        ],
      },
    ],
    skills: [
      {
        name: "AI Engineering, Hybrid RAG & LLM Systems",
        desc: "Python (async), end-to-end Hybrid RAG (pgvector HNSW 768-dim embeddings + PostgreSQL GIN FTS + Reciprocal Rank Fusion), dual-provider LLM failover (Gemini → Groq), token-bucket rate limiting, Pydantic strict JSON, FastAPI, Celery, Redis, and prompt-injection-safe synthesis.",
      },
      {
        name: "Data Engineering & Quality Pipelines",
        desc: "SQL & PLpgSQL (relational modeling, versioned migrations, RLS), Python ETL (Pandas, PyMuPDF, Parquet), multi-table feature engineering, automated schema contracts (pytest), and Git version control.",
      },
      {
        name: "Data Analytics, BI & Machine Learning",
        desc: "Microsoft Excel (Pivot Tables & KPI reporting), statistical testing, LightGBM, XGBoost, Scikit-learn, Optuna, TreeSHAP explainability, Matplotlib, Seaborn, Plotly, ECharts, and analytical dashboard design.",
      },
      {
        name: "Full-Stack Product & API Integration",
        desc: "React 19 / TypeScript, SolidJS, Vue.js, Flutter (Dart), Streamlit, Golang, Java REST APIs, Docker, Figma UI/UX, and Postman QA.",
      },
      {
        name: "Languages & Working Style",
        desc: "Indonesian (Native), English (Professional Working) — analytical problem-solver, proactive, detail-oriented, and experienced collaborating with technical and enterprise stakeholders.",
      },
    ],
  },

  id: {
    downloadPdf: "Unduh PDF",
    availability: "Terbuka untuk peran AI Engineer, Data Engineer & Data Analyst",
    roleTitle: "AI & Data Engineer · Data Analyst",
    secAbout: "Tentang",
    secProjects: "Proyek",
    secExperience: "Pengalaman",
    secOrganization: "Organisasi",
    secEducation: "Pendidikan",
    secSkills: "Kemampuan",
    secContact: "Kontak",
    aboutP1:
      "Saya ‘Aarif Rahmaan Jalaluddin Faqiih, mahasiswa Informatika semester 5 Universitas Telkom Purwokerto (IPK 3,77/4,00) dan Asisten Praktikum Algoritma Pemrograman. Saya membangun <mark>sistem Hybrid RAG &amp; LLM tangguh end-to-end</mark> (pgvector HNSW, FastAPI, Celery, Redis, failover Gemini/Groq) sekaligus <mark>data pipeline SQL/Python yang terukur</mark> dan <mark>model ML klinis maupun finansial</mark>.",
    aboutP2:
      "Berbekal pengalaman optimasi dataset AI di Eklipse.gg, rekayasa 192 fitur risiko kredit untuk Home Credit, serta pembangunan dashboard analytics internal bagi <mark>klien korporasi telekomunikasi &amp; energi (Telkomsel, Pertamina, Mipcon)</mark>, saya menjembatani AI engineering, data pipeline, dan pelaporan bisnis yang jernih.",
    showEarlierExp: "Lihat 3 pengalaman pengembangan web & mobile lainnya (2023–2026)",
    hideEarlierExp: "Sembunyikan pengalaman lainnya",
    eduDegree: "S1 Informatika",
    eduDate: "2024 – Sekarang · Semester 5",
    phoneLabel: "Telepon",
    socialLabel: "Profil",
    copy: "Salin",
    copied: "Tersalin",
    filters: [
      { key: "all", label: "Semua (5)" },
      { key: "ai", label: "AI & RAG" },
      { key: "de", label: "Data Engineering" },
      { key: "da", label: "Data Analytics & ML" },
    ],
    eduBullets: [
      "Pemodelan Basis Data: Merancang skema database relasional SQL untuk manajemen operasional restoran dan pengelolaan bahan baku.",
      "Dasar Kecerdasan Artifisial: Membangun model klasifikasi kepuasan penumpang berbasis Fuzzy Logic terintegrasi Machine Learning dan Deep Learning.",
      "Algoritma dan Pemrograman: Membangun aplikasi pencatatan dan pelaporan transaksi pinjaman nasabah bank berbasis Golang.",
      "Pemrograman Berorientasi Objek: Mengembangkan backend reservasi ruangan berbasis Java mencakup desain database, REST API, dan pengujian Postman.",
    ],
    projects: [
      {
        id: "modellyng",
        tracks: ["ai", "de"],
        title: "Modellyng — Platform Riset AI & RAG",
        subtitle: "pgvector HNSW + RRF Hybrid RAG, FastAPI, Celery & Redis",
        metric: "Web + Mobile",
        period: "2026",
        thumb: "assets/project-modellyng.svg",
        summary:
          "Platform analisis literatur akademis berbasis bukti (Web React 19/TypeScript & Mobile Flutter) yang mengubah PDF privat menjadi ekstraksi terstruktur 13 parameter terverifikasi, graf pengetahuan interaktif, dan obrolan Hybrid RAG dengan sorotan kutipan halaman PDF.",
        bullets: [
          "Membangun mesin Hybrid RAG yang menggabungkan pencarian vektor pgvector HNSW (Gemini text-embedding-004 768 dimensi) dan PostgreSQL GIN Full-Text Search (ts_rank_cd) lewat Reciprocal Rank Fusion (RRF, k=60), menautkan tiap sitasi [S1]/[S2] ke koordinat bounding-box PDF.js.",
          "Merancang ModelRegistry dual-provider tangguh (failover otomatis Gemini Core → Groq Backup) dilengkapi token-bucket rate limiting (TPM/RPM), exponential backoff + jitter, validasi ketat Pydantic JSON, serta ekstraksi 4-batch divide-and-conquer tanpa fallback palsu.",
          "Mengimplementasikan pipeline PDF Celery + Redis 10 tahap idempoten (parser blok PyMuPDF + deteksi scan/DOI, Academic Gatekeeper, verifikasi kredibilitas DOI via Crossref & DataCite, serta 11 migrasi PostgreSQL/PLpgSQL + Supabase RLS).",
          "Menyusun Sintesis Graf Pengetahuan anti prompt-injection (React Flow & Flutter Mermaid), klasterisasi konsep LLM, rekomendasi research gap ter-cache SHA-256, pemformat sitasi (APA 7/IEEE/Harvard/Vancouver/Chicago), dan ekspor Excel/PDF.",
        ],
        tags: [
          "pgvector HNSW",
          "Hybrid RAG (RRF)",
          "FastAPI",
          "Celery + Redis",
          "Failover Gemini → Groq",
          "Pydantic",
          "PostgreSQL / RLS",
          "React 19 & Flutter",
        ],
        links: [
          { label: "Repo Web (Hybrid RAG + React 19)", url: "https://github.com/Extluke/Modellying-web", primary: true },
          { label: "Repo Mobile (Flutter + FastAPI)", url: "https://github.com/Extluke/modellyng", primary: false },
        ],
      },
      {
        id: "cdc-diabetes",
        tracks: ["ai", "de", "da"],
        title: "Skrining Risiko Klinis Diabetes CDC",
        subtitle: "Clinical AI, Data Quality Pipeline & Web App Streamlit",
        metric: "ROC-AUC 0.8287",
        period: "Nov 2026",
        thumb: "assets/project-cdc-diabetes.png",
        summary:
          "Pipeline Clinical AI & kualitas data pada 253.680 data survei CDC BRFSS (UCI ID 891) dengan kontrak skema otomatis, validasi bebas data leakage, kalibrasi probabilitas, audit fairness, dan aplikasi Streamlit 3 halaman.",
        bullets: [
          "Membangun caching data Parquet dan validasi kontrak skema BRFSS otomatis yang dilindungi 9 pengujian pytest & Streamlit AppTest.",
          "Menghilangkan kebocoran duplikat profil lewat Stratified Group Split hash 21 fitur (0 overlap) dan membuktikan melalui ablasi CV bahwa Unweighted + tuning threshold OOF mengungguli SMOTE (PR-AUC 0,4331 vs 0,3742) maupun Class Weighting (Brier 0,0966 vs 0,1739).",
          "LightGBM hasil tuning Optuna meraih Hold-Out ROC-AUC 0,8287, PR-AUC 0,4303 (3,1× baseline), Brier 0,0967, dan Recall 85,1% pada mode skrining F2.",
          "Menyajikan aplikasi klinis 3 halaman berisi penjelasan TreeSHAP individu real-time, simulator What-If gaya hidup, triase CSV massal, dan Kartu Model.",
        ],
        tags: ["Python", "LightGBM", "Optuna", "TreeSHAP", "Parquet", "Streamlit", "pytest", "Git"],
        links: [
          { label: "Buka Profil GitHub", url: "https://github.com/aariffaqiih", primary: true },
        ],
      },
      {
        id: "home-credit",
        tracks: ["de", "da"],
        title: "Pipeline Risiko Credit Default",
        subtitle: "Feature Pipeline 7 Tabel · Home Credit × Rakamin",
        metric: "ROC-AUC 0.7450",
        period: "Feb – Mar 2026",
        thumb: "assets/project-home-credit.svg",
        summary:
          "Rekayasa data multi-tabel relasional dan pemodelan prediksi gagal bayar kredit lintas tujuh tabel finansial untuk mendukung evaluasi risiko peminjam.",
        bullets: [
          "Menggabungkan dan mengagregasi 7 tabel relasional (bureau, angsuran, riwayat pengajuan) menjadi 192 fitur pemodelan yang bersih.",
          "Membandingkan Logistic Regression dan LightGBM secara terukur dengan performa terbaik mencapai ROC-AUC 0,7450.",
          "Menerjemahkan indikator risiko keterlambatan dan rasio utang menjadi rekomendasi analitik bagi tim risiko kredit.",
        ],
        tags: ["Python", "SQL", "Pandas", "Feature Engineering", "LightGBM", "Logistic Regression"],
        links: [
          {
            label: "Repositori GitHub (Notebook)",
            url: "https://github.com/aariffaqiih/FINAL-TASK-PBI-DATA-SCIENTIST-HCI",
            primary: true,
          },
        ],
      },
      {
        id: "gdgoc-dropout",
        tracks: ["ai", "da"],
        title: "StayLearn — Platform AI Drop-out",
        subtitle: "SHAP Counterfactual, Chatbot Llama 3 & Analitik",
        metric: "Juara 2",
        period: "Des 2025 – Jun 2026",
        thumb: "assets/project-gdgoc-dropout.svg",
        summary:
          "Platform retensi mahasiswa peraih Juara 2 GDGoC Championship yang menggabungkan prediksi ML drop-out, explainable AI (SHAP & counterfactual), chatbot pendamping berbasis Groq/Llama 3 tanpa PII, serta dashboard analitik konselor.",
        bullets: [
          "Meraih Juara 2 Member Project Championship GDGoC Universitas Telkom Purwokerto melalui kolaborasi langsung bersama tim konseling kampus.",
          "Membangun pipeline Scikit-learn dilengkapi atribusi SHAP per prediksi dan penjelasan counterfactual yang dapat ditindaklanjuti ('jika kehadiran naik ke 80%, risiko turun Z%').",
          "Merancang mesin LLM terpadu bebas PII (Groq Llama 3.3 70B / 3.1 8B + fallback Hugging Face) untuk rekomendasi intervensi personal, saran karier SDG 4.4, dan chatbot mentoring.",
          "Dilengkapi basis data SQLite, skrining batch CSV, dashboard analitik konselor (equity, effectiveness, wellbeing trend), dan pengujian otomatis.",
        ],
        tags: [
          "Python",
          "Groq / Llama 3",
          "SHAP & Counterfactual",
          "Scikit-learn",
          "SQLite",
          "Counselor BI",
          "Unit Tests",
        ],
        links: [
          { label: "Buka Live Web App", url: "https://staylearn.rakhafeb.online/", primary: true },
          { label: "Repo Aplikasi StayLearn", url: "https://github.com/aariffaqiih/STAYLEARN", primary: false },
          { label: "Repo GDGoC AI & Notebook", url: "https://github.com/aariffaqiih/GDGoC-AI", primary: false },
        ],
      },
      {
        id: "vehicle-sales",
        tracks: ["da"],
        title: "Analisis Penjualan Kendaraan Global",
        subtitle: "Pelaporan Excel Pivot & KPI · RevoU",
        metric: "BI & Excel",
        period: "Apr 2025",
        thumb: "assets/project-vehicle-sales.svg",
        summary:
          "Analisis data bisnis terstruktur untuk memetakan penggerak penjualan otomotif global, performa segmen produk, dan visualisasi KPI untuk pengambilan keputusan.",
        bullets: [
          "Menganalisis dataset penjualan lintas wilayah menggunakan Microsoft Excel Pivot Table untuk menjawab pertanyaan utama performa komersial.",
          "Menyusun visualisasi grafik KPI yang jelas untuk mengubah data operasional menjadi laporan keputusan bisnis.",
        ],
        tags: ["Microsoft Excel", "Pivot Tables", "Data Analytics", "Visualisasi KPI", "Reporting"],
        links: [
          { label: "Buka Profil GitHub", url: "https://github.com/aariffaqiih", primary: true },
        ],
      },
    ],
    experiencePrimary: [
      {
        role: "Asisten Praktikum Algoritma Pemrograman",
        org: "Laboratorium Informatika, Telkom University Purwokerto",
        period: "September 2026 – Sekarang",
        bullets: [
          "Mengajar sesi praktikum Algoritma Pemrograman 1 dan melatih logika pemecahan masalah mahasiswa Informatika.",
          "Mendampingi debugging, pemahaman struktur data dasar, dan alur penulisan kode yang terstruktur.",
        ],
      },
      {
        role: "AI & Data Optimization Intern",
        org: "Eklipse.gg, Jakarta (WFO)",
        period: "Agustus – September 2026",
        bullets: [
          "Mengumpulkan, membersihkan, dan mengkurasi dataset pelatihan sekaligus mengevaluasi serta menyeleksi model AI untuk optimasi workflow internal.",
          "Menganalisis perilaku pengguna dan performa produk menjadi laporan data yang dapat ditindaklanjuti untuk iterasi produk dan model.",
        ],
      },
      {
        role: "Data Scientist Intern (Project-Based)",
        org: "Home Credit Indonesia × Rakamin, Jakarta (WFA)",
        period: "Februari – Maret 2026",
        bullets: [
          "Membangun pipeline data risiko kredit lintas 7 tabel relasional yang menghasilkan 192 fitur pemodelan bersih.",
          "Membandingkan Logistic Regression dan LightGBM dengan performa terbaik mencapai ROC-AUC 0,7450.",
        ],
      },
      {
        role: "Frontend Developer & UI/UX Designer (Analytics & ERP)",
        org: "PT Braincode Solution, Jakarta (WFA)",
        period: "Mei – Oktober 2024",
        bullets: [
          "Membangun dashboard analytics internal dan sistem ERP pengelolaan data operasional berbasis SolidJS dan desain Figma.",
          "Menghasilkan aplikasi analitik & operasional internal bagi klien besar telekomunikasi dan energi: Telkomsel, Pertamina, dan Mipcon.",
        ],
      },
    ],
    experienceEarlier: [
      {
        role: "Web Developer & Android Developer",
        org: "bikinkreatif.id, Purwokerto (WFO)",
        period: "Juli 2026",
        bullets: [
          "Membangun website dan aplikasi Android sesuai kebutuhan bisnis klien termasuk analisis kebutuhan fitur bersama klien.",
          "Menghasilkan portal resmi sekolah swasta dan aplikasi Android LPK untuk publikasi informasi dan pendaftaran.",
        ],
      },
      {
        role: "Frontend Developer",
        org: "HUMIC (Human Centric Engineering Research Center), Bandung (WFA)",
        period: "Mei 2025",
        bullets: [
          "Membangun dashboard manajemen sertifikat seminar yang mempercepat proses penerbitan sertifikat.",
          "Mengintegrasikan API autentikasi untuk keamanan pengguna serta mengimplementasikan alur aplikasi end-to-end.",
        ],
      },
      {
        role: "Student Intern (Frontend Developer)",
        org: "PT Mega Giga Solusindo, Yogyakarta (WFO)",
        period: "April – September 2023",
        bullets: [
          "Mengimplementasikan website company profile berbasis Vue.js serta aplikasi CRUD manajemen stok UMKM berbasis CodeIgniter dari riset pengguna.",
          "Melakukan pengujian kualitas fungsionalitas API dan web menggunakan Postman.",
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
          "Mengolah dataset performa mahasiswa, memilih algoritma ML terbaik, dan membangun aplikasi web full-stack untuk inferensi langsung.",
          "Berkonsultasi dengan tim konseling kampus guna menyelaraskan rekayasa fitur dengan alur keputusan operasional.",
        ],
      },
    ],
    skills: [
      {
        name: "AI Engineering, Hybrid RAG & Sistem LLM",
        desc: "Python (async), Hybrid RAG end-to-end (pgvector HNSW 768-dim embeddings + PostgreSQL GIN FTS + Reciprocal Rank Fusion), failover LLM dual-provider (Gemini → Groq), token-bucket rate limiting, Pydantic strict JSON, FastAPI, Celery, Redis, dan sintesis anti prompt-injection.",
      },
      {
        name: "Data Engineering & Quality Pipelines",
        desc: "SQL & PLpgSQL (pemodelan relasional, migrasi terversi, RLS), Python ETL (Pandas, PyMuPDF, Parquet), feature engineering multi-tabel, validasi kontrak skema otomatis (pytest), dan version control Git.",
      },
      {
        name: "Data Analytics, BI & Machine Learning",
        desc: "Microsoft Excel (Pivot Table & pelaporan KPI), uji statistik, LightGBM, XGBoost, Scikit-learn, Optuna, explainability TreeSHAP, Matplotlib, Seaborn, Plotly, ECharts, serta perancangan dashboard analitik.",
      },
      {
        name: "Full-Stack Product & Integrasi API",
        desc: "React 19 / TypeScript, SolidJS, Vue.js, Flutter (Dart), Streamlit, Golang, Java REST API, Docker, Figma UI/UX, dan pengujian Postman.",
      },
      {
        name: "Bahasa & Gaya Kerja",
        desc: "Indonesia (Aktif), Inggris (Profesional) — analitis dalam pemecahan masalah, proaktif, teliti, dan terbiasa berkolaborasi dengan tim teknis maupun stakeholder bisnis.",
      },
    ],
  },
};

let currentLang = localStorage.getItem("af-lang") === "id" ? "id" : "en";
let activeFilter = "all";
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

function renderProjects() {
  const t = CONTENT[currentLang];

  // Filter pills
  const filterBar = document.getElementById("projectFilters");
  filterBar.innerHTML = "";
  t.filters.forEach((f) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "filter-pill";
    pill.setAttribute("role", "tab");
    pill.setAttribute("aria-selected", String(activeFilter === f.key));
    pill.textContent = f.label;
    pill.addEventListener("click", () => {
      activeFilter = f.key;
      renderProjects();
    });
    filterBar.appendChild(pill);
  });

  // Filtered project cards
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  const visible =
    activeFilter === "all"
      ? t.projects
      : t.projects.filter((p) => p.tracks.includes(activeFilter));

  visible.forEach((proj) => {
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

  renderProjects();

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
  (proj.links || []).forEach((lnk) => {
    const a = document.createElement("a");
    a.className = lnk.primary ? "modal-link" : "modal-link secondary";
    a.href = lnk.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = lnk.label;
    actions.appendChild(a);
  });
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

  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "id" : "en";
    localStorage.setItem("af-lang", currentLang);
    renderContent();
  });

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
