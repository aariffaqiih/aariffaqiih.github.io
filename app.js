/* Portfolio v2 - Tailored for AI Engineer, Data Engineer & Data Analyst roles
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
    showEarlierExp: "Show 3 earlier web & mobile roles (2023-2026)",
    hideEarlierExp: "Hide earlier web & mobile roles",
    eduDegree: "B.S. in Informatics",
    eduDate: "2024 - Present · Semester 5",
    phoneLabel: "Phone",
    socialLabel: "Profiles",
    copy: "Copy",
    copied: "Copied",
    filters: [
      { key: "all", label: "All (7)" },
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
        title: "Modellyng: AI & RAG Platform",
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
        id: "meteor",
        tracks: ["ai", "de", "da"],
        title: "Meteor: AI Chat & STEM Lab",
        subtitle: "Multi-LLM Router, 40 AI/Math Solvers, Plot Studio & Lean 4",
        metric: "Live · 56k LOC",
        period: "2025 - 2026",
        thumb: "assets/project-meteor.svg",
        summary:
          "Zero-framework, solo-engineered AI chat platform and interactive STEM/ML laboratory (348 ES modules, 56.4k LOC, 381 commits, 80 Vitest suites / 683 test cases) combining resilient multi-LLM SSE streaming, 40 KaTeX solvers, a 4-chart data viz studio, and 6 Lean 4 formal proofs.",
        bullets: [
          "Architected a client-side Multi-LLM Chat Engine with intent-based 3-tier model routing (heavy/fast/last across 13 OpenRouter models), rolling 3-model failover arrays, per-key & per-model health cooldowns (401/429 Retry-After/5xx), two-tier SSE timeouts (10s TTFT → 30s stream), <think> tag stripping, and usage telemetry.",
          "Built 40 pre-rendered KaTeX STEM & AI calculators (OLS Linear Regression, Logistic Regression, Genetic Algorithms & NSGA-II Pareto, Simulated Annealing, Bayes' Theorem, 12 EVM KPI calculators) plus 60 FPS ML Gradient Descent, Brandes Betweenness Centrality, and a Web-to-Markdown AI article extractor.",
          "Engineered a from-scratch /plot Data Visualization Studio with delimiter-detecting CSV/TSV parsers, NLP stopword/frequency Word Cloud, Bar, nullable Time-Series Line, and Multi-Series Pie/Donut/Polar Area renderers.",
          "Authored 6 Lean 4 formal proofs (BubbleSort, InsertionSort, MergeSort, Stack, Queue, CaesarCipher) alongside Pure WebGL 2.0 Voxel (12.5k LOC), Three.js + JoltPhysics WASM (5.1k LOC), and Float64 Kepler 3D engines.",
        ],
        tags: [
          "Multi-LLM Routing",
          "SSE Streaming",
          "ES Modules (56k LOC)",
          "Vitest (80 Suites)",
          "Data Viz Parsers",
          "WebGL 2 & Three.js",
          "Lean 4 Proofs",
          "Node Build Pipeline",
        ],
        links: [
          { label: "Open Live Platform", url: "https://meteor-chat.github.io/", primary: true },
          { label: "GitHub Repository", url: "https://github.com/meteor-chat/meteor-chat.github.io", primary: false },
        ],
      },
      {
        id: "cdc-diabetes",
        tracks: ["ai", "de", "da"],
        title: "CDC Diabetes Risk Screening",
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
        id: "gdgoc-dropout",
        tracks: ["ai", "de", "da"],
        title: "StayLearn: AI Drop-out App",
        subtitle: "Flask, SHAP Counterfactuals, KMeans & Groq Llama 3",
        metric: "2nd · AUC 0.967",
        period: "Dec 2025 - Jun 2026",
        thumb: "assets/project-staylearn.png",
        summary:
          "Award-winning (2nd Place GDGoC Championship) live Flask & SQLite retention platform trained on 7,000 student records (ROC-AUC 0.9673, 92% Dropout Recall), combining SHAP + counterfactual XAI, 5-cluster KMeans intervention ranking, a zero-PII Groq/Llama 3 engine, and 11 counselor BI dashboards.",
        bullets: [
          "Built a Scikit-learn ColumnTransformer + balanced Logistic Regression pipeline (log1p + StandardScaler + OneHotEncoder across 13 student features; 5,600 train / 1,400 test) reaching Hold-Out ROC-AUC 0.9673, 92% Dropout Recall (550/600), 84% Precision, and 89% Accuracy with strict batch CSV validation up to 10,000 rows.",
          "Implemented DropoutExplainer (shap.LinearExplainer + linear coefficient fallback) with a 6-feature actionable Counterfactual engine, plus a 5-cluster KMeans InterventionRecommender ranking proven historical interventions from SQLite counseling outcomes.",
          "Engineered a zero-PII LLM engine (Groq Llama 3.1 8B for intervention plans & SDG 4.4 career advice, Llama 3.3 70B for 10-turn mentoring chat → Hugging Face Zephyr-7B → rule-based fallback) with output sanitization and zero student name/NIM leakage.",
          "Shipped a 52-route Flask backend (Swagger /api/docs, Flask-Login, CSRFProtect, rate limiting, 7-table SQLite DB) powering 11 counselor BI views (Priority Queue, Analytics, Equity SDG 4.5, Effectiveness significance, Peer Mentors, Wellbeing trends) and 95 pytest test cases across 3 suites.",
        ],
        tags: [
          "Flask & Swagger",
          "Scikit-learn (AUC 0.967)",
          "SHAP & Counterfactuals",
          "KMeans Recommender",
          "Groq / Llama 3",
          "SQLite (7 Tables)",
          "Counselor BI",
        ],
        links: [
          { label: "Live Web App", url: "https://staylearn.rakhafeb.online/", primary: true },
          { label: "StayLearn App Repo", url: "https://github.com/aariffaqiih/STAYLEARN", primary: false },
          { label: "GDGoC Notebooks & Code", url: "https://github.com/aariffaqiih/GDGoC-AI", primary: false },
        ],
      },
      {
        id: "fmcg-bi",
        tracks: ["da"],
        title: "FMCG Sales & Leakage BI",
        subtitle: "Excel Pivot, SQL CTEs & Looker Studio · KarirNex",
        metric: "Looker · Expert",
        period: "Jan 2026",
        thumb: "assets/project-fmcg-bi.png",
        summary:
          "End-to-end commercial analytics and interactive Google Looker Studio BI dashboard over 20,000 FMCG orders (Rp 875.6M revenue, 93 customers, 3 channels), completed with an 'Expert' predicate at the KarirNex Data Analyst Bootcamp.",
        bullets: [
          "Built a dark-mode Google Looker Studio dashboard featuring price-range sliders, multi-dimension filters, daily demand trends, and channel × product matrices across Rp 875.6M total revenue and Rp 341.2M shipping spend.",
          "Wrote SQLite SQL queries (CTEs, CASE WHEN campaign flags, strftime grouping) proving April as peak successful revenue month (Rp 20.26M), Online - Toko Hijau as lowest-discount valid channel (Rp 387.8k across 1,698 orders), and normal-day dominance over Payday/Double Date promos for Minyak Goreng.",
          "Diagnosed critical operational leakage where Failed (5,089 orders / Rp 222.3M), Returned (4,998 / Rp 217.9M), and Pending (4,870 / Rp 213.4M) nearly equaled Success (5,043 / Rp 222.0M), concentrated in Makanan and the Offline channel.",
          "Quantified price elasticity via interactive slicing: revenue peaked at Rp 15,001-20,000 (Rp 406.7M, 8,004 orders) before dropping steeply above Rp 20,000 (Rp 243.7M, 3,980 orders); certified with Predicate: Expert (No. 1085/B-1/KBT.DA.3/KRX/I/2026).",
        ],
        tags: [
          "Google Looker Studio",
          "SQL (SQLite CTEs)",
          "Microsoft Excel",
          "Pivot Tables",
          "BI Dashboard",
          "KPI Reporting",
        ],
        links: [
          {
            label: "Open Full Portfolio & Certificate (PDF)",
            url: "assets/KarirNex_Data_Analyst_Portfolio.pdf",
            primary: true,
          },
        ],
      },
      {
        id: "home-credit",
        tracks: ["de", "da"],
        title: "Credit Default Risk Pipeline",
        subtitle: "7-Table Feature Pipeline · Home Credit × Rakamin",
        metric: "ROC-AUC 0.7450",
        period: "Feb - Mar 2026",
        thumb: "assets/project-home-credit.svg",
        summary:
          "End-to-end 12-phase credit default modeling pipeline over 38,848 Home Credit applicants (8.1% default rate) joining 7 relational CSV tables in Pandas/Scikit-learn into 192 zero-NaN features, complete with threshold-based Rp 191.9M projected business impact.",
        bullets: [
          "Joined 7 relational CSV tables (application_train, bureau, bureau_balance, previous_application, installments_payments, POS_CASH_balance, credit_card_balance) from 122 raw columns into 192 zero-NaN features with leakage-free train-only imputation, 6 MNAR missing flags, 6 domain ratios, and unseen-safe label encoding.",
          "Benchmarked Logistic Regression (Imputer → StandardScaler → lbfgs, class_weight='balanced', RandomizedSearchCV C=0.0012) vs LightGBM: Logistic Regression on all 7 tables won with Test ROC-AUC 0.7450 (+0.0138 over App-Only 0.7312; Default Recall 0.66), outperforming LightGBM (0.6976) which degraded on sparse zero-filled subsidiary aggregates.",
          "Identified top predictive signals from LGBM split importance (ext_source_mean 1,424, ext_source_2 785, days_id_publish 754, ext_source_3 742, days_registration 723) and EDA risk segments (ages 20-30, Laborers/Drivers, EXT_SOURCE_2 < 0.3).",
          "Quantified financial impact under 45% LGD on the 7,770-applicant test set: threshold 0.6 prevented 282 defaults for Rp 38.4M optimal Net Benefit (Rp 191.9M projected at full 38,848-applicant scale) with a 3-tier scoring policy (<0.45 Auto-approve, 0.45-0.70 Manual review, >0.70 Auto-reject).",
        ],
        tags: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Logistic Regression",
          "LightGBM",
          "Feature Engineering",
          "Business Impact",
        ],
        links: [
          {
            label: "GitHub Notebook (final_task.ipynb)",
            url: "https://github.com/aariffaqiih/FINAL-TASK-PBI-DATA-SCIENTIST-HCI",
            primary: true,
          },
          {
            label: "Open 10-Slide Presentation (PDF)",
            url: "assets/Home_Credit_Default_Prediction_Deck.pdf",
            primary: false,
          },
        ],
      },
      {
        id: "vehicle-sales",
        tracks: ["da"],
        title: "Global Vehicle Sales Analytics",
        subtitle: "Excel Pivot, Seasonality & Shipped-Only Audit · RevoU",
        metric: "$10M · Excel",
        period: "Apr 2025",
        thumb: "assets/project-vehicle-sales.svg",
        summary:
          "23-slide commercial analytics report on 2003-2005 global vehicle sales ($10.03M across 7 product lines), combining manual Excel Pivot Table diagnostics, AI-assisted quarterly/customer drill-downs, and a proactive Shipped-Only data-hygiene audit.",
        bullets: [
          "Identified 2004 as the peak revenue year ($4,724,162.60, +34.3% vs 2003's $3,516,979.54; 2005 YTD $1,791,486.71) with recurring Q4/November seasonality peaks ($1.03M in Nov 2003, $1.09M in Nov 2004).",
          "Proved Classic Cars dominated both 2004 country revenue led by the USA ($560,448.26 across 4,870 units; top US buyer Mini Gifts Distributors Ltd. at 700 units) and Sep 2003 - Mar 2004 volume (11,083 units vs 6,127 Vintage Cars).",
          "Proactively flagged ambiguous/risky order statuses (Cancelled, Disputed, On Hold, In Process, Resolved) and validated all KPIs under a strict Shipped-Only filter (2004: $4,528,047.22; USA Classic Cars: $557,537.86; 10,979 units).",
          "Benchmarked top vs bottom B2B accounts (Euro Shopping Channel at 1,879 units vs Baane Mini Imports at 22 units) to deliver executive retention and Q4 inventory recommendations.",
        ],
        tags: ["Microsoft Excel", "Pivot Tables", "Data Hygiene Audit", "Seasonality Analysis", "KPI Reporting"],
        links: [
          {
            label: "Open 23-Slide Analysis Deck (PDF)",
            url: "assets/RevoU_Global_Vehicle_Sales_Analysis.pdf",
            primary: true,
          },
        ],
      },
    ],
    experiencePrimary: [
      {
        role: "Algorithms & Programming Lab Assistant",
        org: "Informatics Laboratory, Telkom University Purwokerto",
        period: "September 2026 - Present",
        bullets: [
          "Teach Algorithms & Programming 1 lab sessions and coach undergraduate cohorts on algorithmic logic and clean problem-solving.",
          "Mentor students through debugging exercises, data structures fundamentals, and structured code workflows.",
        ],
      },
      {
        role: "AI & Data Optimization Intern",
        org: "Eklipse.gg, Jakarta (WFO)",
        period: "August - September 2026",
        bullets: [
          "Collected, cleaned, and curated training datasets while evaluating and selecting AI models to optimize internal production workflows.",
          "Analyzed user behavior and product performance metrics into actionable analytical reports to guide product and model iterations.",
        ],
      },
      {
        role: "Data Scientist Intern (Project-Based)",
        org: "Home Credit Indonesia × Rakamin, Jakarta (WFA)",
        period: "February - March 2026",
        bullets: [
          "Built a multi-table credit default data pipeline across 7 relational tables, engineering 192 clean modeling features.",
          "Evaluated Logistic Regression and LightGBM classifiers, achieving a best performance of ROC-AUC 0.7450.",
        ],
      },
      {
        role: "Frontend Developer & UI/UX Designer (Analytics & ERP)",
        org: "PT Braincode Solution, Jakarta (WFA)",
        period: "May - October 2024",
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
        period: "April - September 2023",
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
        period: "December 2025 - June 2026",
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
        desc: "Python (async), end-to-end Hybrid RAG (pgvector HNSW 768-dim embeddings + PostgreSQL GIN FTS + Reciprocal Rank Fusion), multi-tier LLM intent routing & failover (Gemini → Groq, OpenRouter pools), SSE streaming, token-bucket rate limiting, Pydantic strict JSON, FastAPI, Celery, and Redis.",
      },
      {
        name: "Data Engineering & Quality Pipelines",
        desc: "SQL & PLpgSQL (relational modeling, versioned migrations, RLS), Python ETL (Pandas, PyMuPDF, Parquet), multi-table feature engineering, automated schema contracts (pytest), and Git version control.",
      },
      {
        name: "Data Analytics, BI & Machine Learning",
        desc: "Google Looker Studio (interactive BI dashboards), Microsoft Excel (Pivot Tables & KPI reporting), SQL analytics (CTEs, aggregations), statistical testing, LightGBM, XGBoost, Scikit-learn, Optuna, TreeSHAP explainability, Matplotlib, Seaborn, Plotly, and ECharts.",
      },
      {
        name: "Full-Stack Product, Testing & Interactive Systems",
        desc: "React 19 / TypeScript, Vanilla ES Modules, SolidJS, Vue.js, Flutter (Dart), Streamlit, WebGL 2.0 / Three.js, Vitest & pytest automated suites, Lean 4 formal proofs, Golang, Java REST APIs, Docker, Figma UI/UX, and Postman QA.",
      },
      {
        name: "Languages & Working Style",
        desc: "Indonesian (Native), English (Professional Working). Analytical problem-solver, proactive, detail-oriented, and experienced collaborating with technical and enterprise stakeholders.",
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
    showEarlierExp: "Lihat 3 pengalaman pengembangan web & mobile lainnya (2023-2026)",
    hideEarlierExp: "Sembunyikan pengalaman lainnya",
    eduDegree: "S1 Informatika",
    eduDate: "2024 - Sekarang · Semester 5",
    phoneLabel: "Telepon",
    socialLabel: "Profil",
    copy: "Salin",
    copied: "Tersalin",
    filters: [
      { key: "all", label: "Semua (7)" },
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
        title: "Modellyng: Platform AI & RAG",
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
        id: "meteor",
        tracks: ["ai", "de", "da"],
        title: "Meteor: AI Chat & Lab STEM",
        subtitle: "Router Multi-LLM, 40 Solver AI/Math, Plot Studio & Lean 4",
        metric: "Live · 56k LOC",
        period: "2025 - 2026",
        thumb: "assets/project-meteor.svg",
        summary:
          "Platform chat AI tanpa framework dan laboratorium STEM/ML interaktif yang dibangun mandiri (348 modul ES, 56,4 ribu LOC, 381 commit, 80 test suite Vitest / 683 kasus uji), menggabungkan streaming SSE multi-LLM tangguh, 40 solver KaTeX, studio visualisasi 4 chart, dan 6 bukti formal Lean 4.",
        bullets: [
          "Merancang mesin Chat AI multi-LLM dengan routing berbasis intensi 3-tier (heavy/fast/last pada 13 model OpenRouter), failover rolling 3 model per permintaan, circuit breaker kesehatan key & model (401/429 Retry-After/5xx), timeout SSE dua lapis (10 dtk TTFT → 30 dtk stream), pembersihan tag <think>, dan telemetri token.",
          "Membangun 40 kalkulator STEM & AI berbasis KaTeX ter-prerender (Regresi Linear OLS, Regresi Logistik, Algoritma Genetika & Pareto NSGA-II, Simulated Annealing, Teorema Bayes, 12 KPI EVM) plus lab 60 FPS Gradient Descent ML, Brandes Betweenness Centrality, dan ekstraktor Web-to-Markdown AI.",
          "Mengembangkan studio visualisasi data /plot dari nol dengan parser CSV/TSV deteksi delimiter otomatis, Word Cloud NLP (stopword & frekuensi), Bar, Line deret waktu (mendukung null), serta Pie/Donut/Polar Area multi-seri.",
          "Menulis 6 pembuktian formal Lean 4 (BubbleSort, InsertionSort, MergeSort, Stack, Queue, CaesarCipher) serta mesin 3D Pure WebGL 2.0 Voxel (12,5 ribu LOC), Three.js + JoltPhysics WASM (5,1 ribu LOC), dan Tata Surya Kepler Float64.",
        ],
        tags: [
          "Routing Multi-LLM",
          "SSE Streaming",
          "ES Modules (56k LOC)",
          "Vitest (80 Suite)",
          "Parser Visualisasi Data",
          "WebGL 2 & Three.js",
          "Bukti Formal Lean 4",
          "Build Pipeline Node",
        ],
        links: [
          { label: "Buka Platform Live", url: "https://meteor-chat.github.io/", primary: true },
          { label: "Repositori GitHub", url: "https://github.com/meteor-chat/meteor-chat.github.io", primary: false },
        ],
      },
      {
        id: "cdc-diabetes",
        tracks: ["ai", "de", "da"],
        title: "Skrining Risiko Diabetes CDC",
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
        id: "gdgoc-dropout",
        tracks: ["ai", "de", "da"],
        title: "StayLearn: Aplikasi Drop-out",
        subtitle: "Flask, SHAP Counterfactual, KMeans & Groq Llama 3",
        metric: "Juara 2 · 0.967",
        period: "Des 2025 - Jun 2026",
        thumb: "assets/project-staylearn.png",
        summary:
          "Platform web Flask & SQLite peraih Juara 2 GDGoC Championship (7.000 data mahasiswa; ROC-AUC 0,9673; Recall Dropout 92%), memadukan SHAP + counterfactual XAI, rekomendasi intervensi KMeans 5-klaster, mesin LLM Groq/Llama 3 bebas PII, dan 11 dashboard BI konselor.",
        bullets: [
          "Membangun pipeline Scikit-learn ColumnTransformer + balanced Logistic Regression (log1p + StandardScaler + OneHotEncoder pada 13 fitur; 5.600 train / 1.400 test) meraih Hold-Out ROC-AUC 0,9673, Recall Dropout 92% (550/600), Precision 84%, dan Accuracy 89% lengkap dengan validasi batch CSV hingga 10.000 baris.",
          "Mengimplementasikan DropoutExplainer (shap.LinearExplainer + fallback koefisien linear) beserta mesin Counterfactual 6 fitur actionable, serta InterventionRecommender berbasis KMeans 5-klaster untuk memeringkat efektivitas intervensi historis di SQLite.",
          "Merancang mesin LLM terpadu bebas PII (Groq Llama 3.1 8B untuk rekomendasi & saran karier SDG 4.4, Llama 3.3 70B untuk chatbot 10-turn → fallback Hugging Face Zephyr-7B → rule-based) dengan sanitasi output tanpa mengirim nama/NIM.",
          "Mengembangkan backend Flask 52 route (Swagger /api/docs, Flask-Login, CSRFProtect, rate limiting, SQLite 7 tabel) yang melayani 11 tampilan analitik konselor (Priority Queue, Analytics, Equity SDG 4.5, signifikansi efektivitas, Peer Mentors, tren Wellbeing) serta 95 test case pytest di 3 suite.",
        ],
        tags: [
          "Flask & Swagger",
          "Scikit-learn (AUC 0,967)",
          "SHAP & Counterfactual",
          "KMeans Recommender",
          "Groq / Llama 3",
          "SQLite (7 Tabel)",
          "Counselor BI",
        ],
        links: [
          { label: "Buka Live Web App", url: "https://staylearn.rakhafeb.online/", primary: true },
          { label: "Repo Aplikasi StayLearn", url: "https://github.com/aariffaqiih/STAYLEARN", primary: false },
          { label: "Notebook & Kode GDGoC", url: "https://github.com/aariffaqiih/GDGoC-AI", primary: false },
        ],
      },
      {
        id: "fmcg-bi",
        tracks: ["da"],
        title: "BI Penjualan & Kebocoran FMCG",
        subtitle: "Excel Pivot, SQL CTE & Looker Studio · KarirNex",
        metric: "Looker · Expert",
        period: "Jan 2026",
        thumb: "assets/project-fmcg-bi.png",
        summary:
          "Analisis komersial end-to-end dan dashboard BI interaktif Google Looker Studio atas 20.000 pesanan FMCG (total revenue Rp 875,6 juta, 93 pelanggan, 3 channel), lulus dengan predikat 'Expert' di KarirNex Data Analyst Bootcamp.",
        bullets: [
          "Membangun dashboard dark-mode Google Looker Studio berisi slider rentang harga, filter multi-dimensi, tren penjualan harian, dan matriks channel × produk atas total revenue Rp 875,6 juta serta ongkir Rp 341,2 juta.",
          "Menulis kueri SQL SQLite (CTE, CASE WHEN periode promo, pengelompokan strftime) yang membuktikan April sebagai bulan transaksi sukses tertinggi (Rp 20,26 juta), Online - Toko Hijau sebagai channel sukses dengan diskon terendah (Rp 387,8 ribu dari 1.698 order), serta dominasi hari Normal dibanding Payday/Double Date untuk Minyak Goreng.",
          "Mengaudit kebocoran operasional signifikan di mana status Failed (5.089 order / Rp 222,3 juta), Returned (4.998 / Rp 217,9 juta), dan Pending (4.870 / Rp 213,4 juta) hampir menyamai Success (5.043 / Rp 222,0 juta), terkonsentrasi pada kategori Makanan dan channel Offline.",
          "Mengukur sensitivitas harga melalui slicing interaktif: revenue memuncak pada rentang Rp 15.001-20.000 (Rp 406,7 juta; 8.004 order) lalu turun tajam di atas Rp 20.000 (Rp 243,7 juta; 3.980 order); tersertifikasi Predikat Expert (No. 1085/B-1/KBT.DA.3/KRX/I/2026).",
        ],
        tags: [
          "Google Looker Studio",
          "SQL (SQLite CTE)",
          "Microsoft Excel",
          "Pivot Tables",
          "BI Dashboard",
          "Pelaporan KPI",
        ],
        links: [
          {
            label: "Buka Deck Portofolio & Sertifikat (PDF)",
            url: "assets/KarirNex_Data_Analyst_Portfolio.pdf",
            primary: true,
          },
        ],
      },
      {
        id: "home-credit",
        tracks: ["de", "da"],
        title: "Pipeline Risiko Credit Default",
        subtitle: "Feature Pipeline 7 Tabel · Home Credit × Rakamin",
        metric: "ROC-AUC 0.7450",
        period: "Feb - Mar 2026",
        thumb: "assets/project-home-credit.svg",
        summary:
          "Pipeline 12 fase prediksi gagal bayar kredit atas 38.848 pemohon Home Credit (default 8,1%) yang menggabungkan 7 tabel CSV relasional di Pandas/Scikit-learn menjadi 192 fitur tanpa NaN, lengkap dengan proyeksi net benefit bisnis Rp 191,9 juta.",
        bullets: [
          "Menggabungkan 7 tabel CSV (application_train, bureau, bureau_balance, previous_application, installments_payments, POS_CASH_balance, credit_card_balance) dari 122 kolom awal menjadi 192 fitur tanpa NaN dengan imputasi bebas leakage (train-only), 6 MNAR missing flags, 6 rasio domain, dan label encoding aman unseen.",
          "Membandingkan Logistic Regression (Imputer → StandardScaler → lbfgs, class_weight='balanced', RandomizedSearchCV C=0,0012) vs LightGBM: Logistic Regression pada 7 tabel unggul dengan Test ROC-AUC 0,7450 (+0,0138 vs App-Only 0,7312; Recall Default 0,66), mengungguli LightGBM (0,6976) yang terdampak noise agregasi nol.",
          "Mengidentifikasi fitur prediktif utama dari importance LGBM (ext_source_mean 1.424, ext_source_2 785, days_id_publish 754, ext_source_3 742, days_registration 723) dan segmen risiko EDA (usia 20-30 tahun, Laborers/Drivers, EXT_SOURCE_2 < 0,3).",
          "Menghitung dampak finansial (LGD 45%) pada 7.770 pemohon uji: threshold 0,6 mencegah 282 default dengan Net Benefit optimal Rp 38,4 juta (proyeksi Rp 191,9 juta pada skala 38.848 pemohon) serta kebijakan scoring 3-tier (<0,45 Auto-approve, 0,45-0,70 Manual review, >0,70 Auto-reject).",
        ],
        tags: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Logistic Regression",
          "LightGBM",
          "Feature Engineering",
          "Dampak Bisnis",
        ],
        links: [
          {
            label: "Notebook GitHub (final_task.ipynb)",
            url: "https://github.com/aariffaqiih/FINAL-TASK-PBI-DATA-SCIENTIST-HCI",
            primary: true,
          },
          {
            label: "Buka Deck Presentasi 10 Slide (PDF)",
            url: "assets/Home_Credit_Default_Prediction_Deck.pdf",
            primary: false,
          },
        ],
      },
      {
        id: "vehicle-sales",
        tracks: ["da"],
        title: "Analitik Penjualan Kendaraan",
        subtitle: "Excel Pivot, Musiman & Audit Shipped-Only · RevoU",
        metric: "$10M · Excel",
        period: "Apr 2025",
        thumb: "assets/project-vehicle-sales.svg",
        summary:
          "Laporan analitik komersial 23 slide atas penjualan kendaraan global 2003-2005 ($10,03 juta pada 7 lini produk), memadukan diagnostik Excel Pivot manual, pendalaman kuartalan/pelanggan berbantuan AI, dan audit kebersihan data Shipped-Only.",
        bullets: [
          "Mengidentifikasi 2004 sebagai puncak penjualan ($4.724.162,60; naik 34,3% dari 2003 sebesar $3.516.979,54; 2005 YTD $1.791.486,71) dengan pola puncak musiman konsisten di Q4/November ($1,03 juta Nov 2003; $1,09 juta Nov 2004).",
          "Membuktikan Classic Cars mendominasi baik pendapatan negara 2004 yang dipimpin AS ($560.448,26 dari 4.870 unit; pembeli AS terbesar Mini Gifts Distributors Ltd. 700 unit) maupun volume Sep 2003 - Mar 2004 (11.083 unit vs 6.127 Vintage Cars).",
          "Menandai secara proaktif status order bermasalah (Cancelled, Disputed, On Hold, In Process, Resolved) lalu memvalidasi ulang seluruh KPI pada filter ketat Shipped-Only (2004: $4.528.047,22; Classic Cars AS: $557.537,86; 10.979 unit).",
          "Memetakan akun B2B teratas vs terendah (Euro Shopping Channel 1.879 unit vs Baane Mini Imports 22 unit) guna merumuskan rekomendasi retensi dan stok Q4.",
        ],
        tags: ["Microsoft Excel", "Pivot Tables", "Audit Kebersihan Data", "Analisis Musiman", "Pelaporan KPI"],
        links: [
          {
            label: "Buka Deck Analisis 23 Slide (PDF)",
            url: "assets/RevoU_Global_Vehicle_Sales_Analysis.pdf",
            primary: true,
          },
        ],
      },
    ],
    experiencePrimary: [
      {
        role: "Asisten Praktikum Algoritma Pemrograman",
        org: "Laboratorium Informatika, Telkom University Purwokerto",
        period: "September 2026 - Sekarang",
        bullets: [
          "Mengajar sesi praktikum Algoritma Pemrograman 1 dan melatih logika pemecahan masalah mahasiswa Informatika.",
          "Mendampingi debugging, pemahaman struktur data dasar, dan alur penulisan kode yang terstruktur.",
        ],
      },
      {
        role: "AI & Data Optimization Intern",
        org: "Eklipse.gg, Jakarta (WFO)",
        period: "Agustus - September 2026",
        bullets: [
          "Mengumpulkan, membersihkan, dan mengkurasi dataset pelatihan sekaligus mengevaluasi serta menyeleksi model AI untuk optimasi workflow internal.",
          "Menganalisis perilaku pengguna dan performa produk menjadi laporan data yang dapat ditindaklanjuti untuk iterasi produk dan model.",
        ],
      },
      {
        role: "Data Scientist Intern (Project-Based)",
        org: "Home Credit Indonesia × Rakamin, Jakarta (WFA)",
        period: "Februari - Maret 2026",
        bullets: [
          "Membangun pipeline data risiko kredit lintas 7 tabel relasional yang menghasilkan 192 fitur pemodelan bersih.",
          "Membandingkan Logistic Regression dan LightGBM dengan performa terbaik mencapai ROC-AUC 0,7450.",
        ],
      },
      {
        role: "Frontend Developer & UI/UX Designer (Analytics & ERP)",
        org: "PT Braincode Solution, Jakarta (WFA)",
        period: "Mei - Oktober 2024",
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
        period: "April - September 2023",
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
        period: "Desember 2025 - Juni 2026",
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
        desc: "Python (async), Hybrid RAG end-to-end (pgvector HNSW 768-dim embeddings + PostgreSQL GIN FTS + Reciprocal Rank Fusion), routing & failover multi-LLM berbasis intensi (Gemini → Groq, pool OpenRouter), SSE streaming, token-bucket rate limiting, Pydantic strict JSON, FastAPI, Celery, dan Redis.",
      },
      {
        name: "Data Engineering & Quality Pipelines",
        desc: "SQL & PLpgSQL (pemodelan relasional, migrasi terversi, RLS), Python ETL (Pandas, PyMuPDF, Parquet), feature engineering multi-tabel, validasi kontrak skema otomatis (pytest), dan version control Git.",
      },
      {
        name: "Data Analytics, BI & Machine Learning",
        desc: "Google Looker Studio (dashboard BI interaktif), Microsoft Excel (Pivot Table & pelaporan KPI), analitik SQL (CTE, agregasi), uji statistik, LightGBM, XGBoost, Scikit-learn, Optuna, explainability TreeSHAP, Matplotlib, Seaborn, Plotly, dan ECharts.",
      },
      {
        name: "Full-Stack Product, Testing & Sistem Interaktif",
        desc: "React 19 / TypeScript, Vanilla ES Modules, SolidJS, Vue.js, Flutter (Dart), Streamlit, WebGL 2.0 / Three.js, otomatisasi uji Vitest & pytest, bukti formal Lean 4, Golang, Java REST API, Docker, Figma UI/UX, dan pengujian Postman.",
      },
      {
        name: "Bahasa & Gaya Kerja",
        desc: "Indonesia (Aktif), Inggris (Profesional). Analitis dalam pemecahan masalah, proaktif, teliti, dan terbiasa berkolaborasi dengan tim teknis maupun stakeholder bisnis.",
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
    btn.setAttribute("aria-label", `${proj.title}: ${proj.subtitle}`);
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
