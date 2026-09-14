/**
 * Albert Andersen - Personal Portfolio Script
 * Features:
 *  - Bilingual Support (English default & Indonesian toggle with technical terms preserved)
 *  - Quantum Lattice Canvas Background (Interactive physics mesh)
 *  - HPC / Slurm Web Terminal Emulator
 *  - Project Filter System & Architecture Modals (4 Featured Case Studies)
 *  - Experience / Education / Organization Timeline Tabs
 *  - Interactive Contact Form & Clipboard Toast
 *  - ScrollSpy Navigation & Mobile Drawer
 */

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initQuantumCanvas();
  initTerminal();
  initProjectFilters();
  initTimelineTabs();
  initProjectModal();
  initContactForm();
  initScrollSpyAndNavbar();
});

/* ==========================================================================
   1. Multi-Language / Bilingual System (EN default / ID)
   ========================================================================== */
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Expertise',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.terminal': 'Terminal',
    'nav.downloadCV': 'Download CV',
    'nav.status': 'Available for Roles & Research',

    // Hero Section
    'hero.badge': 'Physicist • HPC SysAdmin • Fullstack Dev • Educator',
    'hero.headline': 'Bridging <span class="gradient-text-hero">Quantum Physics</span>, Supercomputing & Modern Web.',
    'hero.bio': 'Hello, I am <span class="text-white font-semibold">Albert Andersen</span>. Physics graduate from Universitas Indonesia with specialization in Quantum Materials computation (DFT), HPC cluster administration (Slurm, InfiniBand, Linux), and modern web architecture (Laravel, Filament, Flask).',
    'hero.stat1.val': '5+',
    'hero.stat1.label': 'Labs & Research Centers',
    'hero.stat2.val': '3.51',
    'hero.stat2.label': 'GPA Physics UI',
    'hero.stat3.val': '100+',
    'hero.stat3.label': 'Students Tutored',
    'hero.stat4.val': '130M',
    'hero.stat4.label': 'IDR Net Profit Led',
    'hero.btnProjects': 'Explore Projects',
    'hero.btnContact': 'Contact Me',
    'hero.btnCV': 'Download CV',
    'hero.coordinates': 'Coordinates:',
    'hero.location': 'Depok / Tasikmalaya',
    'hero.roleTag': 'Theoretical & Computational Physics',
    'hero.sysadminBadge': 'SYSADMIN ACTIVE',
    'hero.slurmPillLabel': 'Slurm Workload',
    'hero.slurmPillVal': '100 Gbps InfiniBand',
    'hero.dftPillLabel': 'DFT Simulation',
    'hero.dftPillVal': 'Quantum ESPRESSO',

    // Terminal Section
    'term.badge': 'LIVE CONSOLE EMULATOR',
    'term.heading': 'Interactive Cluster Node Terminal',
    'term.desc': "Explore system architecture, Slurm cluster queue status, and Albert's profile directly through the interactive shell below.",
    'term.quick': 'Quick Run:',
    'term.placeholder': "Type a command (e.g. 'help', 'sinfo', 'whoami')...",

    // About Section
    'about.badge': 'ABOUT ALBERT ANDERSEN',
    'about.heading': 'Creative Problem Solver with Analytical Rigor & Systems Discipline.',
    'about.p1': 'I am a <span class="text-white font-medium">Tutor, Researcher, System Administrator, IT Support, and Video Editor</span>. With a B.Sc in Physics from Universitas Indonesia, I bring strong intrapersonal and interpersonal problem-solving skills to plan, implement, and disseminate digital and analog technical workflows.',
    'about.p2': 'My core scientific and research focus encompasses <span class="text-cyan-400 font-medium">quantum computing</span>, <span class="text-cyan-400 font-medium">condensed matter physics</span> for next-generation eco-friendly batteries, DNA structural electronics, and First-Principles Density Functional Theory (DFT) quantum material simulations.',
    'about.quote': '"Bridging theoretical physics rigor with the resilience of high-performance computing infrastructure."',
    'about.degreeTitle': 'Universitas Indonesia',
    'about.degreeSub': 'B.Sc in Physics (2020 - 2025)',
    'about.gpaLabel': 'Cumulative GPA (IPK):',
    'about.roleLabel': 'Academic Roles:',
    'about.roleVal': 'Teaching Assistant for Solid State Physics & Basic Electronics',
    'about.extraLabel': 'Key Campus Activities:',
    'about.extraVal': 'Project Officer, Video Editor, Secretariat Bureau BPM FMIPA UI',
    'about.copyBtn': 'Copy Email: alberttandersen@gmail.com',
    'about.domainsTitle': 'Core Competency Domains:',

    // Core Capabilities (4 Pillars)
    'services.badge': 'CORE CAPABILITIES',
    'services.heading': '4 Pillars of Engineering & Science',
    'services.desc': 'A distinct intersection of physical simulation precision, supercomputing cluster engineering, and modern web application development.',
    'services.c1.tag': 'Infrastructure',
    'services.c1.title': 'HPC & System Admin',
    'services.c1.desc': 'High-performance cluster management, Slurm workload manager orchestration, InfiniBand RDMA interconnects, Rocky Linux deployment, SSO/LDAP integration, and hardware performance tuning.',
    'services.c2.tag': 'Physics & Research',
    'services.c2.title': 'Computational Physics & DFT',
    'services.c2.desc': 'Ab-initio simulation of electronic band structures and charge densities using Quantum ESPRESSO, Density Functional Theory (DFT), optomechanical sensors, and eco-friendly battery modeling.',
    'services.c3.tag': 'Software Engineering',
    'services.c3.title': 'Fullstack Web & DevOps',
    'services.c3.desc': 'End-to-end web engineering with Laravel 11, Filament PHP, Flask, modern JavaScript, RESTful APIs, containerization, and Smart RFQ quotation workflows.',
    'services.c4.tag': 'Education & Leadership',
    'services.c4.title': 'Academic Dev & STEM Tutoring',
    'services.c4.desc': 'Curriculum development, intensive STEM tutoring (Physics, Math, Chemistry), scientific education mentoring, organizational governance, and strategic secretariat administration.',

    // Projects Section (Revamped Vertical Case Studies)
    'projects.badge': 'SELECTED CASE STUDIES',
    'projects.heading': 'Featured Engineering Projects',
    'projects.desc': 'In-depth case studies spanning high-performance cluster deployments, enterprise B2B software, cloud supercomputing, and laboratory identity infrastructure.',
    'projects.filter.all': 'All Projects',
    'projects.filter.hpc': 'HPC & Systems',
    'projects.filter.web': 'Web & Software',
    'projects.filter.tcqm': 'TCQM Lab',

    // Project 1: FT UI HPC
    'projects.p1.meta': 'Jul - Aug 2026 • FT UI',
    'projects.p1.badge': 'HPC Infrastructure',
    'projects.p1.title': 'Computation Lab Materials & Metallurgy FT UI',
    'projects.p1.desc': 'High-performance computing cluster installation and engineering for materials computation research featuring high-speed Mellanox InfiniBand, RDMA protocols, EasyBuild scientific module compilation, and Rocky Linux enterprise OS.',
    'projects.p1.h1': 'Ultra-low latency Mellanox InfiniBand fabric with RDMA for high-throughput MPI calculations.',
    'projects.p1.h2': 'Centralized Slurm workload manager partition scheduling and resource allocation.',
    'projects.p1.h3': 'Automated scientific module compilation and compiler toolchains via EasyBuild framework.',
    'projects.p1.btn': 'View Architecture',

    // Project 2: PT Wisu Varia Analitika
    'projects.p2.meta': 'Mar - Jun 2026 • Wisu Varia',
    'projects.p2.badge': 'Fullstack Enterprise',
    'projects.p2.title': 'Enterprise B2B E-Catalog & Smart RFQ Platform',
    'projects.p2.desc': 'Integrated B2B web application for analytical laboratory & NDT inspection equipment, featuring automated Smart RFQ quoting, role-based administration, and modern Laravel 11 architecture.',
    'projects.p2.h1': 'Automated Smart RFQ system calculating technical equipment specifications and instant quotation generation.',
    'projects.p2.h2': 'Fullstack architecture with Laravel 11, Filament PHP v3 backoffice, and indexed catalog database.',
    'projects.p2.h3': 'DevOps containerization with Docker and automated deployment pipeline.',
    'projects.p2.btn': 'View Case Study',
    'projects.p2.live': 'Visit Website',

    // Project 3: TCQM JupyterHub
    'projects.p3.meta': '2024 - 2026 • TCQM Lab FMIPA UI',
    'projects.p3.badge': 'Cloud Supercomputing',
    'projects.p3.title': 'TCQM JupyterHub — Cloud Supercomputing & Interactive DFT Platform',
    'projects.p3.desc': 'Multi-user cloud computational platform for researchers and students at Theory and Computation Quantum Materials (TCQM) Lab FMIPA UI, enabling browser-based Quantum ESPRESSO simulations, interactive Python notebooks, and direct Slurm cluster job submission.',
    'projects.p3.h1': 'Interactive JupyterLab environment configured with Quantum ESPRESSO, ASE, NumPy, and SciPy.',
    'projects.p3.h2': 'Seamless Slurm cluster integration allowing users to launch batch DFT calculations directly from notebooks.',
    'projects.p3.h3': 'Centralized scientific storage partition and shared pseudopotential crystal libraries.',
    'projects.p3.btn': 'View Architecture',
    'projects.p3.live': 'Access JupyterHub',

    // Project 4: TCQM SSO
    'projects.p4.meta': '2024 - 2026 • TCQM Lab FMIPA UI',
    'projects.p4.badge': 'Identity & Security',
    'projects.p4.title': 'TCQM SSO — Centralized Identity & Access Management Portal',
    'projects.p4.desc': 'Enterprise-grade Single Sign-On (SSO) and identity federation portal powering secure, unified access control across HPC server clusters, JupyterHub instances, and scientific web services for TCQM Lab FMIPA UI.',
    'projects.p4.h1': 'Unified authentication gateway for SSH cluster access, JupyterHub, and research web portals.',
    'projects.p4.h2': 'Multi-Factor Authentication (2FA) and cryptographic token validation for lab members.',
    'projects.p4.h3': 'Granular Role-Based Access Control (RBAC) synchronized across OpenLDAP and OAuth2 / OIDC providers.',
    'projects.p4.btn': 'View Architecture',
    'projects.p4.live': 'Access SSO Portal',

    // Experience & Education Timeline
    'exp.badge': 'CAREER & ACADEMIC PATH',
    'exp.heading': 'Experience & Education History',
    'exp.desc': 'A proven track record in HPC administration, scientific research, STEM education, and organizational governance.',
    'exp.tab.work': 'Work Experience',
    'exp.tab.edu': 'Education & Awards',
    'exp.tab.org': 'Organizations',

    'exp.work1.date': 'March 2025 - Present',
    'exp.work1.title': 'SIMAKARA',
    'exp.work1.role': 'Academic Development & Private Tutor',
    'exp.work1.desc': 'Developed academic curricula, structured intensive tutoring programs, and delivered high-standard STEM instruction in Mathematics, Physics, and Chemistry.',

    'exp.work2.date': 'May 2024 - August 2026',
    'exp.work2.title': 'PHOELabs Physics FMIPA UI',
    'exp.work2.role': 'System Administrator',
    'exp.work2.desc': 'Administered HPC server clusters, integrated Single Sign-On (SSO) authentication for departmental users, developed internal Flask web portals, and configured local networking.',

    'exp.work3.date': 'August 2024 - August 2025',
    'exp.work3.title': 'Theory & Computation Quantum Materials (TCQM) Lab',
    'exp.work3.role': 'Lab System Admin & Research Assistant',
    'exp.work3.desc': 'Supervised Slurm and OpenHPC supercomputer clusters for quantum materials researchers, providing guidance on running Quantum ESPRESSO DFT calculations.',

    'exp.work4.date': 'February 2024 - January 2025',
    'exp.work4.title': 'BRIN Quantum Physics Research Center',
    'exp.work4.role': 'Research Assistant',
    'exp.work4.desc': 'Conducted theoretical modeling and numerical simulations on optomechanical sensors, analyzing quantum light-matter interactions for ultra-precision sensor applications.',

    'exp.work5.date': 'September 2023 - Present',
    'exp.work5.title': 'Private Tutor Mandiri',
    'exp.work5.role': 'Math, Physics, Chemistry Tutor',
    'exp.work5.desc': 'Provided interactive 1-on-1 tutoring in fundamental math, physics, and chemistry concepts, preparing students for university entrance exams and science competitions.',

    'exp.edu1.date': 'August 2020 - January 2025',
    'exp.edu1.title': 'Universitas Indonesia',
    'exp.edu1.role': 'B.Sc in Physics (Sarjana Sains)',
    'exp.edu1.desc': 'Activities: Teaching Assistant for Solid State Physics and Basic Electronics Laboratory, Project Officer, and Department Video Editor.',

    'exp.edu2.date': '2021',
    'exp.edu2.title': '3rd Place Winner PKM-GT',
    'exp.edu2.role': 'OIM MIPA Universitas Indonesia',
    'exp.edu2.desc': 'Awarded 3rd Place in the Written Idea Student Creativity Program (PKM-GT) at the 2021 MIPA Scientific Olympiad (OIM) Universitas Indonesia.',

    'exp.edu3.date': '2019',
    'exp.edu3.title': 'Pramuka Penegak Garuda',
    'exp.edu3.role': 'Kwartir Cabang Tasikmalaya',
    'exp.edu3.desc': 'Awarded highest scouting rank in Tasikmalaya for demonstrated leadership, community dedication, and technical scouting proficiencies.',

    'exp.org1.date': 'March 2022 - February 2023',
    'exp.org1.title': 'HMD Fisika FMIPA UI',
    'exp.org1.role': 'Staff Adkesma & Project Officer',
    'exp.org1.desc': 'Managed student welfare advocacy, directed department event execution, and aligned academic student initiatives with faculty leadership.',

    'exp.org2.date': 'February 2021 - January 2022',
    'exp.org2.title': 'BPM FMIPA UI',
    'exp.org2.role': 'Head of Secretariat Bureau',
    'exp.org2.desc': 'Directed official administrative correspondence, legislative regulatory archives, standardized meeting minutes, and internal bureaucratic digitization.',

    'exp.org3.date': 'Chairman',
    'exp.org3.title': 'Koperasi Bina Siswa SMAN 1 Tasikmalaya',
    'exp.org3.role': 'Chairman of the Board',
    'exp.org3.desc': 'Led commercial operations of the cooperative enterprise, optimized supply chains, and achieved a record net profit of Rp 130,000,000.',

    // Skills & Certifications
    'skills.badge': 'TECHNICAL STACK',
    'skills.heading': 'Skills & Certifications Matrix',
    'skills.desc': 'Technologies and frameworks rigorously applied across academic research, national computing labs, and software production.',
    'skills.cat1.title': 'HPC & Infrastructure',
    'skills.cat1.sub': 'Clusters, Networking, and OS',
    'skills.cat2.title': 'Physics & Computation',
    'skills.cat2.sub': 'DFT, Simulation, and Data Science',
    'skills.cat3.title': 'Fullstack & Software',
    'skills.cat3.sub': 'Frameworks, Databases, and Tooling',
    'skills.certBanner.title': 'Official Professional Certifications',
    'skills.certBanner.desc': 'Industry-standard credentials in IT service management and technical systems support.',

    // Contact Section
    'contact.badge': 'GET IN TOUCH',
    'contact.heading': "Let's Collaborate",
    'contact.desc': 'Interested in discussing opportunities (HPC / SysAdmin / Web Dev), research collaborations in computational physics, or academic tutoring? Reach out below!',
    'contact.emailTitle': 'Email Address',
    'contact.emailCopy': 'Copy to clipboard',
    'contact.linkedinTitle': 'LinkedIn Profile',
    'contact.linkedinDesc': 'Professional network & career trajectory',
    'contact.githubTitle': 'GitHub Repository & Pages',
    'contact.githubDesc': 'Source code, simulation scripts & project repos',
    'contact.locTitle': 'Location',
    'contact.locDesc': 'Open for onsite (Jabodetabek) and remote roles',
    'contact.formTitle': 'Send a Direct Message',
    'contact.formDesc': 'This form formats your message and launches your default email client immediately.',
    'contact.nameLabel': 'Full Name *',
    'contact.emailLabel': 'Email Address *',
    'contact.subjectLabel': 'Subject *',
    'contact.messageLabel': 'Message *',
    'contact.namePlaceholder': 'e.g. John Doe',
    'contact.emailPlaceholder': 'e.g. john@company.com',
    'contact.subjectPlaceholder': 'e.g. Collaboration Opportunity / HPC Role',
    'contact.messagePlaceholder': 'Describe your inquiry or project details...',
    'contact.direct': 'Direct email routing',
    'contact.sendBtn': 'Send Message',

    // Footer & Modals
    'footer.rights': '&copy; 2026 <span class="text-slate-300 font-medium">Albert Andersen</span>. All Rights Reserved. Built for GitHub Pages.',
    'footer.status': 'System Status: All Nodes Optimal (0.00 Load)',
    'modal.lblOverview': 'Engineering Overview:',
    'modal.lblHighlights': 'Technical Specifications & Highlights:',
    'modal.lblImpact': 'Measurable Impact & Results:'
  },
  id: {
    // Navigation (Technical terms in English)
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Expertise',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.terminal': 'Terminal',
    'nav.downloadCV': 'Download CV',
    'nav.status': 'Available for Roles & Research',

    // Hero Section
    'hero.badge': 'Physicist • HPC SysAdmin • Fullstack Dev • Educator',
    'hero.headline': 'Menghubungkan <span class="gradient-text-hero">Quantum Physics</span>, Supercomputing & Modern Web.',
    'hero.bio': 'Halo, saya <span class="text-white font-semibold">Albert Andersen</span>. Lulusan Fisika Universitas Indonesia dengan keahlian riset komputasi material kuantum (DFT), administrasi kluster HPC (Slurm, InfiniBand, Linux), serta arsitektur web modern (Laravel, Filament, Flask).',
    'hero.stat1.val': '5+',
    'hero.stat1.label': 'Labs & Research Centers',
    'hero.stat2.val': '3.51',
    'hero.stat2.label': 'IPK Fisika UI',
    'hero.stat3.val': '100+',
    'hero.stat3.label': 'Siswa Bimbingan Belajar',
    'hero.stat4.val': '130M',
    'hero.stat4.label': 'Profit Bersih Koperasi',
    'hero.btnProjects': 'Lihat Proyek Unggulan',
    'hero.btnContact': 'Hubungi Saya',
    'hero.btnCV': 'Download CV',
    'hero.coordinates': 'Koordinat:',
    'hero.location': 'Depok / Tasikmalaya',
    'hero.roleTag': 'Theoretical & Computational Physics',
    'hero.sysadminBadge': 'SYSADMIN ACTIVE',
    'hero.slurmPillLabel': 'Slurm Workload',
    'hero.slurmPillVal': '100 Gbps InfiniBand',
    'hero.dftPillLabel': 'DFT Simulation',
    'hero.dftPillVal': 'Quantum ESPRESSO',

    // Terminal Section
    'term.badge': 'LIVE CONSOLE EMULATOR',
    'term.heading': 'Interactive Cluster Node Terminal',
    'term.desc': 'Jelajahi informasi arsitektur sistem, antrean kluster Slurm, dan profil Albert langsung dari shell interaktif di bawah ini.',
    'term.quick': 'Akses Cepat:',
    'term.placeholder': "Ketik perintah (contoh 'help', 'sinfo', 'whoami')...",

    // About Section
    'about.badge': 'TENTANG ALBERT ANDERSEN',
    'about.heading': 'Problem Solver Kreatif dengan Fondasi Analitis & Disiplin Sistem.',
    'about.p1': 'Saya adalah seorang <span class="text-white font-medium">Tutor, Researcher, System Administrator, IT Support, dan Video Editor</span>. Berbekal latar belakang S1 Fisika dari Universitas Indonesia, saya memiliki keterampilan intrapersonal dan interpersonal yang kuat untuk merencanakan, mengimplementasikan, serta mendiseminasikan urusan teknis berbasis digital dan analog.',
    'about.p2': 'Fokus riset dan minat ilmiah saya mencakup <span class="text-cyan-400 font-medium">quantum computing</span>, <span class="text-cyan-400 font-medium">condensed matter physics</span> untuk teori baterai ramah lingkungan generasi baru, analisis struktur DNA untuk mikroelektronika, serta simulasi sifat material kuantum berbasis prinsip pertama (DFT).',
    'about.quote': '"Menggabungkan ketelitian teoritis fisika dengan ketangguhan infrastruktur sistem komputasi berkinerja tinggi."',
    'about.degreeTitle': 'Universitas Indonesia',
    'about.degreeSub': 'S1 Fisika (2020 - 2025)',
    'about.gpaLabel': 'Indeks Prestasi Kumulatif (IPK):',
    'about.roleLabel': 'Peran Akademis:',
    'about.roleVal': 'Asisten Dosen Fisika Zat Padat & Elektronika Dasar',
    'about.extraLabel': 'Kegiatan Kampus Utama:',
    'about.extraVal': 'Project Officer, Video Editor, Biro Kesekretariatan BPM FMIPA UI',
    'about.copyBtn': 'Salin Email: alberttandersen@gmail.com',
    'about.domainsTitle': 'Bidang Keahlian Utama:',

    // Core Capabilities (4 Pillars)
    'services.badge': 'CORE CAPABILITIES',
    'services.heading': '4 Pilar Kompetensi & Layanan',
    'services.desc': 'Kombinasi langka antara ketelitian simulasi fisika, rekayasa infrastruktur superkomputer, dan arsitektur produk perangkat lunak modern.',
    'services.c1.tag': 'Infrastructure',
    'services.c1.title': 'HPC & System Admin',
    'services.c1.desc': 'Manajemen kluster komputasi berperforma tinggi, otomasi Slurm workload manager, konfigurasi InfiniBand RDMA, Rocky Linux, SSO/LDAP, dan tuning performa hardware server.',
    'services.c2.tag': 'Physics & Research',
    'services.c2.title': 'Computational Physics & DFT',
    'services.c2.desc': 'Simulasi ab-initio struktur elektronik material kuantum menggunakan Quantum ESPRESSO, Density Functional Theory (DFT), optomechanical sensors, dan pemodelan baterai hijau.',
    'services.c3.tag': 'Software Engineering',
    'services.c3.title': 'Fullstack Web & DevOps',
    'services.c3.desc': 'Pengembangan aplikasi web end-to-end dengan Laravel 11, Filament PHP, Flask, modern JavaScript, integrasi REST API, DevOps, Docker, serta implementasi sistem Smart RFQ.',
    'services.c4.tag': 'Education & Leadership',
    'services.c4.title': 'Academic Dev & STEM Tutoring',
    'services.c4.desc': 'Pengajaran privat intensif bidang Fisika, Matematika, dan Kimia. Pengembangan kurikulum pembelajaran sains, kepemimpinan organisasi, serta manajemen sekretariat strategis.',

    // Projects Section (Revamped Vertical Case Studies)
    'projects.badge': 'SELECTED CASE STUDIES',
    'projects.heading': 'Proyek Rekayasa Unggulan',
    'projects.desc': 'Studi kasus mendalam mencakup deployment kluster superkomputer, aplikasi enterprise B2B, cloud supercomputing, serta infrastruktur identitas laboratorium.',
    'projects.filter.all': 'Semua Proyek',
    'projects.filter.hpc': 'HPC & Systems',
    'projects.filter.web': 'Web & Software',
    'projects.filter.tcqm': 'TCQM Lab',

    // Project 1: FT UI HPC
    'projects.p1.meta': 'Jul - Agu 2026 • FT UI',
    'projects.p1.badge': 'HPC Infrastructure',
    'projects.p1.title': 'Computation Lab Materials & Metallurgy FT UI',
    'projects.p1.desc': 'Instalasi & rekayasa kluster High Performance Computing (HPC) untuk riset komputasi material dengan jaringan latensi ultra-rendah Mellanox InfiniBand, protokol RDMA, manajemen package EasyBuild, dan OS enterprise Rocky Linux.',
    'projects.p1.h1': 'Interkoneksi Mellanox InfiniBand dengan protokol RDMA untuk kalkulasi MPI berkecepatan tinggi.',
    'projects.p1.h2': 'Konfigurasi penjadwalan partisi antrean dan alokasi resource Slurm Workload Manager.',
    'projects.p1.h3': 'Automasi kompilasi software ilmiah dan toolchain kompilator via EasyBuild framework.',
    'projects.p1.btn': 'Lihat Arsitektur',

    // Project 2: PT Wisu Varia Analitika
    'projects.p2.meta': 'Mar - Jun 2026 • Wisu Varia',
    'projects.p2.badge': 'Fullstack Enterprise',
    'projects.p2.title': 'Enterprise B2B E-Catalog & Smart RFQ Platform',
    'projects.p2.desc': 'Aplikasi web B2B terintegrasi untuk katalog instrumen analisis laboratorium & inspeksi NDT, dilengkapi fitur Smart RFQ untuk kalkulasi penawaran otomatis, administrasi berbasis peran, dan arsitektur modern Laravel 11.',
    'projects.p2.h1': 'Sistem Smart RFQ otomatis untuk kalkulasi spesifikasi teknis dan estimasi penawaran harga instan.',
    'projects.p2.h2': 'Arsitektur fullstack dengan Laravel 11, backoffice Filament PHP v3, dan optimasi query katalog produk.',
    'projects.p2.h3': 'Containerization DevOps menggunakan Docker dengan pipeline deployment terautomasi.',
    'projects.p2.btn': 'Lihat Studi Kasus',
    'projects.p2.live': 'Kunjungi Website',

    // Project 3: TCQM JupyterHub
    'projects.p3.meta': '2024 - 2026 • TCQM Lab FMIPA UI',
    'projects.p3.badge': 'Cloud Supercomputing',
    'projects.p3.title': 'TCQM JupyterHub — Cloud Supercomputing & Interactive DFT Platform',
    'projects.p3.desc': 'Platform komputasi cloud multi-user untuk peneliti dan mahasiswa di Theory and Computation Quantum Materials (TCQM) Lab FMIPA UI, memungkinkan simulasi Quantum ESPRESSO berbasis browser, notebook Python interaktif, dan submit job langsung ke kluster Slurm.',
    'projects.p3.h1': 'Environment interaktif JupyterLab yang terintegrasi dengan Quantum ESPRESSO, ASE, NumPy, dan SciPy.',
    'projects.p3.h2': 'Integrasi langsung kluster Slurm untuk eksekusi kalkulasi batch DFT langsung dari notebook browser.',
    'projects.p3.h3': 'Partisi storage ilmiah terpusat dan shared library data struktur kisi kristal / pseudopotential.',
    'projects.p3.btn': 'Lihat Arsitektur',
    'projects.p3.live': 'Akses JupyterHub',

    // Project 4: TCQM SSO
    'projects.p4.meta': '2024 - 2026 • TCQM Lab FMIPA UI',
    'projects.p4.badge': 'Identity & Security',
    'projects.p4.title': 'TCQM SSO — Centralized Identity & Access Management Portal',
    'projects.p4.desc': 'Portal Single Sign-On (SSO) dan federasi identitas enterprise untuk kontrol akses terpadu dan aman di seluruh kluster server HPC, instance JupyterHub, serta layanan web riset di TCQM Lab FMIPA UI.',
    'projects.p4.h1': 'Gateway otentikasi terpadu untuk akses SSH kluster server, JupyterHub, dan portal web riset.',
    'projects.p4.h2': 'Keamanan Multi-Factor Authentication (2FA) dan validasi token kriptografis bagi anggota lab.',
    'projects.p4.h3': 'Manajemen Role-Based Access Control (RBAC) terperinci yang tersinkronisasi via OpenLDAP dan OAuth2 / OIDC.',
    'projects.p4.btn': 'Lihat Arsitektur',
    'projects.p4.live': 'Akses Portal SSO',

    // Experience & Education Timeline
    'exp.badge': 'CAREER & ACADEMIC PATH',
    'exp.heading': 'Riwayat Pengalaman & Pendidikan',
    'exp.desc': 'Jejak rekam profesional di bidang administrasi sistem HPC, asisten riset, edukasi privat, dan kepemimpinan organisasi.',
    'exp.tab.work': 'Pengalaman Kerja',
    'exp.tab.edu': 'Pendidikan & Prestasi',
    'exp.tab.org': 'Organisasi',

    'exp.work1.date': 'Maret 2025 - Sekarang',
    'exp.work1.title': 'SIMAKARA',
    'exp.work1.role': 'Academic Development & Private Tutor',
    'exp.work1.desc': 'Mengembangkan materi ajar akademik, menyusun kurikulum bimbingan intensif, serta memberikan pengajaran privat berstandar tinggi dalam mata pelajaran sains dan matematika untuk peningkatan prestasi siswa.',

    'exp.work2.date': 'Mei 2024 - Agustus 2026',
    'exp.work2.title': 'PHOELabs Physics FMIPA UI',
    'exp.work2.role': 'System Administrator',
    'exp.work2.desc': 'Bertanggung jawab atas operasional dan pemeliharaan server kluster HPC, integrasi Single Sign-On (SSO) untuk autentikasi civitas, pengembangan portal laboratorium berbasis Flask, serta konfigurasi jaringan internal lab.',

    'exp.work3.date': 'Agustus 2024 - Agustus 2025',
    'exp.work3.title': 'Theory & Computation Quantum Materials (TCQM) Lab',
    'exp.work3.role': 'Lab System Admin & Research Assistant',
    'exp.work3.desc': 'Mengelola kluster superkomputer berbasis Slurm dan OpenHPC untuk riset komputasi material kuantum, mendampingi para peneliti dalam menjalankan simulasi Density Functional Theory (DFT) menggunakan Quantum ESPRESSO.',

    'exp.work4.date': 'Februari 2024 - Januari 2025',
    'exp.work4.title': 'Pusat Riset Fisika Kuantum BRIN',
    'exp.work4.role': 'Research Assistant',
    'exp.work4.desc': 'Melakukan pemodelan teoritis dan simulasi numerik terkait sensor optomekanik (optomechanical sensors), menganalisis interaksi cahaya-materi pada tingkat kuantum untuk aplikasi sensor presisi ultra-tinggi.',

    'exp.work5.date': 'September 2023 - Sekarang',
    'exp.work5.title': 'Private Tutor Mandiri',
    'exp.work5.role': 'Math, Physics, Chemistry Tutor',
    'exp.work5.desc': 'Memberikan bimbingan belajar privat interaktif bagi siswa SMP dan SMA dalam pemahaman konsep fundamental matematika, fisika, dan kimia, persiapan ujian masuk perguruan tinggi, serta kompetisi sains.',

    'exp.edu1.date': 'Agustus 2020 - Januari 2025',
    'exp.edu1.title': 'Universitas Indonesia',
    'exp.edu1.role': 'S1 Fisika (Sarjana Sains)',
    'exp.edu1.desc': 'Aktivitas: Asisten Dosen Praktikum Fisika Zat Padat dan Praktikum Elektronika Dasar, Project Officer kegiatan fakultas, serta Video Editor publikasi departemen.',

    'exp.edu2.date': '2021',
    'exp.edu2.title': '3rd Place Winner PKM-GT',
    'exp.edu2.role': 'OIM MIPA Universitas Indonesia',
    'exp.edu2.desc': 'Meraih Juara ke-3 dalam kompetisi Program Kreativitas Mahasiswa Gagasan Tertulis (PKM-GT) pada Olimpiade Ilmiah Mahasiswa (OIM) MIPA Universitas Indonesia tahun 2021.',

    'exp.edu3.date': '2019',
    'exp.edu3.title': 'Pramuka Penegak Garuda',
    'exp.edu3.role': 'Kwartir Cabang Tasikmalaya',
    'exp.edu3.desc': 'Penghargaan tingkatan tertinggi kepramukaan tingkat penegak di Kota Tasikmalaya atas kepemimpinan, integritas kepanduan, kecakapan hidup, dan pengabdian masyarakat.',

    'exp.org1.date': 'Maret 2022 - Februari 2023',
    'exp.org1.title': 'HMD Fisika FMIPA UI',
    'exp.org1.role': 'Staff Adkesma & Project Officer',
    'exp.org1.desc': 'Mengelola advokasi kesejahteraan mahasiswa fisika, memimpin proyek eksekusi acara fakultas, serta mengoordinasikan aspirasi akademis antara mahasiswa dan departemen.',

    'exp.org2.date': 'Februari 2021 - Januari 2022',
    'exp.org2.title': 'BPM FMIPA UI',
    'exp.org2.role': 'Head of Secretariat Bureau',
    'exp.org2.desc': 'Memimpin tata kelola administrasi surat-menyurat resmi, pengarsipan regulasi legislatif mahasiswa FMIPA UI, standarisasi notulensi persidangan, serta digitalisasi birokrasi internal.',

    'exp.org3.date': 'Chairman',
    'exp.org3.title': 'Koperasi Bina Siswa SMAN 1 Tasikmalaya',
    'exp.org3.role': 'Ketua Umum',
    'exp.org3.desc': 'Memimpin manajemen operasional unit bisnis koperasi sekolah, mengoptimalkan rantai pasok pengadaan, dan sukses mencatatkan laba bersih rekor sebesar Rp 130 juta.',

    // Skills & Certifications
    'skills.badge': 'TECHNICAL STACK',
    'skills.heading': 'Matriks Keahlian & Sertifikasi',
    'skills.desc': 'Keterampilan teknologi yang teruji di lingkungan riset akademik, pusat komputasi nasional, dan produksi perangkat lunak.',
    'skills.cat1.title': 'HPC & Infrastructure',
    'skills.cat1.sub': 'Kluster, Jaringan, dan OS',
    'skills.cat2.title': 'Physics & Computation',
    'skills.cat2.sub': 'DFT, Simulasi, dan Sains Data',
    'skills.cat3.title': 'Fullstack & Software',
    'skills.cat3.sub': 'Framework, Database, dan Tooling',
    'skills.certBanner.title': 'Sertifikasi Profesional Resmi',
    'skills.certBanner.desc': 'Standar industri global dalam manajemen layanan IT dan dukungan teknis sistem.',

    // Contact Section
    'contact.badge': 'GET IN TOUCH',
    'contact.heading': 'Mari Berkolaborasi',
    'contact.desc': 'Tertarik untuk mendiskusikan peluang kerja (HPC / SysAdmin / Web Dev), kolaborasi riset fisika komputasi, atau bimbingan akademik? Kirimkan pesan Anda!',
    'contact.emailTitle': 'Alamat Email',
    'contact.emailCopy': 'Salin ke clipboard',
    'contact.linkedinTitle': 'Profil LinkedIn',
    'contact.linkedinDesc': 'Koneksi profesional & rekam jejak karir',
    'contact.githubTitle': 'GitHub Repository & Pages',
    'contact.githubDesc': 'Source code, skrip simulasi & repositori proyek',
    'contact.locTitle': 'Lokasi',
    'contact.locDesc': 'Terbuka untuk onsite (Jabodetabek) maupun remote',
    'contact.formTitle': 'Kirim Pesan Langsung',
    'contact.formDesc': 'Formulir ini akan langsung menyiapkan email dengan format rapi dan membuka client email Anda.',
    'contact.nameLabel': 'Nama Lengkap *',
    'contact.emailLabel': 'Alamat Email *',
    'contact.subjectLabel': 'Subjek Pesan *',
    'contact.messageLabel': 'Isi Pesan *',
    'contact.namePlaceholder': 'cth. John Doe',
    'contact.emailPlaceholder': 'cth. john@perusahaan.com',
    'contact.subjectPlaceholder': 'cth. Peluang Kolaborasi / Tawaran Posisi HPC',
    'contact.messagePlaceholder': 'Tuliskan detail pertanyaan atau tawaran Anda...',
    'contact.direct': 'Direct email routing',
    'contact.sendBtn': 'Kirim Pesan',

    // Footer & Modals
    'footer.rights': '&copy; 2026 <span class="text-slate-300 font-medium">Albert Andersen</span>. All Rights Reserved. Built for GitHub Pages.',
    'footer.status': 'System Status: All Nodes Optimal (0.00 Load)',
    'modal.lblOverview': 'Ikhtisar Rekayasa:',
    'modal.lblHighlights': 'Spesifikasi & Sorotan Teknis:',
    'modal.lblImpact': 'Dampak & Hasil Terukur:'
  }
};

function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('portfolio_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
    currentLang = savedLang;
  } else {
    currentLang = 'en'; // Default is English
  }

  applyLanguage(currentLang, false);

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        currentLang = selected;
        localStorage.setItem('portfolio_lang', currentLang);
        applyLanguage(currentLang, true);
      }
    });
  });
}

function applyLanguage(lang, triggerToast = false) {
  document.documentElement.lang = lang;

  // Update button active classes
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update all elements with data-i18n
  const dict = translations[lang] || translations.en;
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Re-render terminal welcome message if terminal exists
  if (window.renderTerminalWelcome) {
    window.renderTerminalWelcome();
  }

  if (triggerToast) {
    const msg = lang === 'en' ? 'Language switched to English' : 'Bahasa diubah ke Bahasa Indonesia';
    showToast(msg, 'info');
  }
}

/* ==========================================================================
   2. Quantum Lattice & HPC Network Canvas
   ========================================================================== */
function initQuantumCanvas() {
  const canvas = document.getElementById('quantum-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 40 : 75;
  const maxDistance = 140;

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  function resize() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
  resize();

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.baseColor = Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(16, 185, 129, ';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse influence
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const fx = (dx / dist) * force * 1.5;
          const fy = (dy / dist) * force * 1.5;
          this.x -= fx;
          this.y -= fy;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.baseColor + '0.7)';
      ctx.fill();
    }
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  createParticles();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse if close
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const opacity = (1 - dist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      particles[i].update();
      particles[i].draw();
    }

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   3. Interactive HPC Terminal Emulator
   ========================================================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const commandChips = document.querySelectorAll('.terminal-command-chip');
  if (!terminalInput || !terminalOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  window.renderTerminalWelcome = function() {
    const isID = currentLang === 'id';
    const initialWelcome = `
<div class="text-cyan-400 font-bold mb-1">
  ⚡ Albert Andersen HPC & Quantum Node Console [v4.8.2-lts]
</div>
<div class="text-slate-400 text-xs mb-3">
  System Architecture: Rocky Linux 9 / Slurm 23.02 / InfiniBand RDMA Enabled<br>
  Connected to: <span class="text-emerald-400">master.phoelabs.ui.ac.id</span>
</div>
<div class="text-slate-300 text-xs mb-3">
  ${isID ? "Ketik <span class='text-amber-400 font-bold'>'help'</span> untuk melihat daftar perintah atau klik tombol cepat di bawah." : "Type <span class='text-amber-400 font-bold'>'help'</span> to see available commands or click quick command chips below."}
</div>
`;
    terminalOutput.innerHTML = initialWelcome;
  };

  window.renderTerminalWelcome();

  const commands = {
    help: () => {
      const isID = currentLang === 'id';
      return `
<div class="text-cyan-400 font-bold mb-1">${isID ? 'Daftar Perintah Tersedia:' : 'Available Commands:'}</div>
<table class="w-full text-xs text-left border-collapse">
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">whoami</td><td class="text-slate-300">${isID ? 'Tampilkan identitas dan peran saat ini' : 'Display identity and current roles'}</td></tr>
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">cat bio.txt</td><td class="text-slate-300">${isID ? 'Baca ringkasan riset & profil saintifik' : 'Read research summary & profile overview'}</td></tr>
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">sinfo</td><td class="text-slate-300">${isID ? 'Simulasi status kluster node Slurm' : 'Simulate Slurm cluster nodes & queue status'}</td></tr>
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">skills</td><td class="text-slate-300">${isID ? 'Daftar kompetensi HPC, Quantum, dan Web engineering' : 'List HPC, Quantum, and Web engineering competencies'}</td></tr>
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">projects</td><td class="text-slate-300">${isID ? 'Daftar 4 studi kasus rekayasa utama' : 'List 4 featured engineering case studies'}</td></tr>
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">contact</td><td class="text-slate-300">${isID ? 'Tampilkan email, LinkedIn, dan GitHub' : 'Show email, LinkedIn, and GitHub coordinates'}</td></tr>
  <tr><td class="text-emerald-400 font-mono py-0.5 pr-4">clear</td><td class="text-slate-300">${isID ? 'Bersihkan buffer layar terminal' : 'Clear terminal output buffer'}</td></tr>
</table>
`;
    },
    whoami: () => `
<div class="text-emerald-400 font-bold">Albert Andersen</div>
<div class="text-slate-300 text-xs">
  • Physicist (B.Sc Physics, Universitas Indonesia | GPA: 3.51/4.00)<br>
  • High Performance Computing (HPC) System Administrator (PHOELabs & TCQM Lab UI)<br>
  • Fullstack Web Developer (Laravel 11, Filament PHP, Flask, Modern JavaScript)<br>
  • Educator & STEM Tutor (Math, Physics, Chemistry)
</div>
`,
    'cat bio.txt': () => {
      const isID = currentLang === 'id';
      if (isID) {
        return `
<div class="text-slate-300 text-xs space-y-1">
  <p><span class="text-cyan-400 font-bold">[BIO]</span> Tutor, Researcher, Administrator, IT Support, dan Video Editor. Problem solver kreatif dengan kompetensi intrapersonal dan interpersonal yang kuat.</p>
  <p><span class="text-cyan-400 font-bold">[RESEARCH INTERESTS]</span> Komputasi kuantum, fisika benda terkondensasi (condensed matter physics) untuk teori baterai ramah lingkungan, struktur DNA untuk mikroelektronika, karakteristik material kuantum via DFT & Quantum ESPRESSO, serta optomechanical sensors.</p>
  <p><span class="text-cyan-400 font-bold">[LOCATION]</span> Depok / Tasikmalaya, Jawa Barat, Indonesia</p>
</div>
`;
      }
      return `
<div class="text-slate-300 text-xs space-y-1">
  <p><span class="text-cyan-400 font-bold">[BIO]</span> Tutor, Researcher, System Administrator, IT Support, and Video Editor. Creative problem solver with strong intrapersonal and interpersonal proficiencies.</p>
  <p><span class="text-cyan-400 font-bold">[RESEARCH INTERESTS]</span> Quantum computing, condensed matter physics for green battery theory, DNA structural electronics, quantum material characterization via DFT & Quantum ESPRESSO, and optomechanical sensors.</p>
  <p><span class="text-cyan-400 font-bold">[LOCATION]</span> Depok / Tasikmalaya, West Java, Indonesia</p>
</div>
`;
    },
    sinfo: () => `
<div class="text-amber-400 font-bold mb-1">PARTITION AVAIL  TIMELIMIT  NODES  STATE  NODELIST</div>
<div class="font-mono text-xs text-slate-300 space-y-0.5">
  <div>quantum*    up   infinite      2   alloc  node[01-02] (TCQM JupyterHub / QE Simulation Active)</div>
  <div>hpc-batch   up   infinite      4   alloc  node[03-06] (Materials & Metallurgy FTUI)</div>
  <div>gpu-accel   up   infinite      2   idle   gpu[01-02]  (NVIDIA Tensor Core Ready)</div>
  <div>auth-proxy  up   infinite      1   idle   proxy01     (TCQM SSO / OpenLDAP Gateway)</div>
</div>
<div class="text-emerald-400 text-xs mt-2">✔ All partitions operating at nominal throughput (InfiniBand 100 Gbps RDMA OK)</div>
`,
    squeue: () => `
<div class="text-amber-400 font-bold mb-1">JOBID PARTITION     NAME       USER ST       TIME  NODES NODELIST(REASON)</div>
<div class="font-mono text-xs text-slate-300 space-y-0.5">
  <div>10421   quantum  tcqm_dft   aandersen  R   14:28:12      2 node[01-02]</div>
  <div>10422 hpc-batch  rdma_bench   sysadmin  R    2:14:05      4 node[03-06]</div>
  <div>10423   quantum  jhub_qe_nb    tcqm_ui  R   04:12:30      1 node01</div>
</div>
`,
    skills: () => `
<div class="text-xs space-y-2">
  <div><span class="text-cyan-400 font-bold">[HPC & Systems]:</span> Rocky Linux, Ubuntu Server, Slurm, InfiniBand, RDMA, OpenHPC, EasyBuild, Bash, SSO/LDAP, Hardware Troubleshooting.</div>
  <div><span class="text-emerald-400 font-bold">[Physics & Computational Science]:</span> DFT (Density Functional Theory), Quantum ESPRESSO, Optomechanical Sensors, Python (NumPy, SciPy, Matplotlib), Condensed Matter Physics.</div>
  <div><span class="text-indigo-400 font-bold">[Web & Software Dev]:</span> Laravel 11, Filament PHP, Flask, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, MySQL, PostgreSQL, RESTful APIs, Git, DevOps.</div>
  <div><span class="text-amber-400 font-bold">[Certifications]:</span> Google IT Support (2026), ITIL 4: Foundations and Framework (2026).</div>
</div>
`,
    projects: () => {
      const isID = currentLang === 'id';
      return `
<div class="text-xs space-y-2 text-slate-300">
  <div><span class="text-cyan-400 font-bold">1. FTUI HPC Systems Engineering</span> (Jul - Aug 2026): InfiniBand, RDMA, EasyBuild, Rocky Linux high performance cluster configuration.</div>
  <div><span class="text-emerald-400 font-bold">2. PT Wisu Varia Analitika B2B Platform</span> (Mar - Jun 2026): Laravel 11, Filament PHP, Smart RFQ, enterprise e-catalog and DevOps integration.</div>
  <div><span class="text-indigo-400 font-bold">3. TCQM JupyterHub</span> (2024 - 2026): Multi-user cloud supercomputing platform, interactive Quantum ESPRESSO DFT notebooks, and Slurm cluster integration.</div>
  <div><span class="text-amber-400 font-bold">4. TCQM SSO Portal</span> (2024 - 2026): Unified Single Sign-On, 2FA, OpenLDAP and OAuth2 identity management infrastructure.</div>
  <div class="text-slate-400 mt-1">💡 ${isID ? 'Tip: Scroll ke bagian Proyek di bawah untuk melihat arsitektur lengkap!' : 'Tip: Scroll down to the Projects section to see vertical case studies & architecture deep-dives!'}</div>
</div>
`;
    },
    contact: () => `
<div class="text-xs space-y-1 text-slate-300">
  <div>Email: <a href="mailto:alberttandersen@gmail.com" class="text-cyan-400 underline">alberttandersen@gmail.com</a></div>
  <div>LinkedIn: <a href="https://www.linkedin.com/in/alberttandersen" target="_blank" rel="noopener" class="text-cyan-400 underline">linkedin.com/in/alberttandersen</a></div>
  <div>GitHub: <a href="https://alberttandersen.github.io/" target="_blank" rel="noopener" class="text-cyan-400 underline">alberttandersen.github.io</a></div>
  <div>Location: Depok / Tasikmalaya, Jawa Barat, Indonesia</div>
</div>
`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Echo input
    const inputLine = document.createElement('div');
    inputLine.className = 'flex items-center gap-2 text-xs font-mono my-1.5';
    inputLine.innerHTML = `
      <span class="text-emerald-400">visitor@albert-node:~$</span>
      <span class="text-white">${escapeHTML(cmd)}</span>
    `;
    terminalOutput.appendChild(inputLine);

    if (cmd.toLowerCase() === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const commandKey = cmd.toLowerCase();
    const resultContainer = document.createElement('div');
    resultContainer.className = 'mb-3 font-mono text-xs';

    if (commands[commandKey]) {
      resultContainer.innerHTML = commands[commandKey]();
    } else {
      resultContainer.innerHTML = `
        <div class="text-rose-400">
          bash: command not found: "${escapeHTML(cmd)}".
          <span class="text-slate-400">${currentLang === 'id' ? "Ketik <span class='text-cyan-400 font-bold'>'help'</span> untuk melihat perintah yang tersedia." : "Type <span class='text-cyan-400 font-bold'>'help'</span> to see valid commands."}</span>
        </div>
      `;
    }

    terminalOutput.appendChild(resultContainer);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex] || '';
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  commandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
        terminalInput.value = '';
        terminalInput.focus();
      }
    });
  });

  // Global trigger button
  const triggerBtn = document.getElementById('open-terminal-btn');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const terminalSection = document.getElementById('terminal-section');
      if (terminalSection) {
        terminalSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => terminalInput.focus(), 600);
      }
    });
  }
}

/* ==========================================================================
   4. Project Filter & Showcase (Supports multiple category tags)
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.98)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Timeline Tabs (Work / Education & Honors / Organization)
   ========================================================================== */
function initTimelineTabs() {
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  const tabPanels = document.querySelectorAll('.timeline-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-slate-900', 'border-cyan-400');
        b.classList.add('text-slate-400', 'border-slate-800');
      });

      btn.classList.add('active', 'bg-cyan-500', 'text-slate-900', 'border-cyan-400');
      btn.classList.remove('text-slate-400', 'border-slate-800');

      const targetTab = btn.getAttribute('data-tab');

      tabPanels.forEach(panel => {
        if (panel.id === targetTab) {
          panel.classList.remove('hidden');
          panel.style.opacity = '0';
          setTimeout(() => {
            panel.style.opacity = '1';
          }, 20);
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   6. Project Architecture Modal (Bilingual & 4 Projects)
   ========================================================================== */
const projectData = {
  hpc: {
    en: {
      title: 'HPC Systems Engineering & Cluster Deployment',
      subtitle: 'Computation Lab Materials and Metallurgy Engineering FT UI (Jul - Aug 2026)',
      image: './assets/images/project-hpc.jpg',
      tags: ['Rocky Linux 9', 'InfiniBand RDMA', 'EasyBuild', 'Slurm Workload Manager', 'Hardware Diagnostics'],
      overview: 'Designed and deployed high-performance computing (HPC) cluster infrastructure to accelerate advanced materials computation and metallurgical research at the Faculty of Engineering, Universitas Indonesia.',
      highlights: [
        'Configured ultra-low latency interconnects using Mellanox InfiniBand with Remote Direct Memory Access (RDMA) protocols for optimal inter-node bandwidth.',
        'Deployed enterprise Rocky Linux with centralized user authentication and high-throughput network storage partitions.',
        'Automated scientific application stack and optimized compilers (MPI, GCC, Intel OneAPI) via EasyBuild framework.',
        'Structured Slurm partition queues and scheduling policies to efficiently distribute finite element simulations and molecular dynamics jobs.'
      ],
      impact: 'Achieved a 3.4x compute throughput acceleration compared to previous standalone setups, with zero packet loss across the InfiniBand fabric.'
    },
    id: {
      title: 'HPC Systems Engineering & Cluster Deployment',
      subtitle: 'Computation Lab Materials and Metallurgy Engineering FT UI (Jul - Agu 2026)',
      image: './assets/images/project-hpc.jpg',
      tags: ['Rocky Linux 9', 'InfiniBand RDMA', 'EasyBuild', 'Slurm Workload Manager', 'Hardware Diagnostics'],
      overview: 'Perancangan dan deployment infrastruktur kluster High Performance Computing (HPC) untuk kebutuhan riset komputasi material maju dan teknik metalurgi di Fakultas Teknik Universitas Indonesia.',
      highlights: [
        'Konfigurasi jaringan latensi ultra-rendah menggunakan Mellanox InfiniBand dengan protokol Remote Direct Memory Access (RDMA) untuk throughput inter-node optimal.',
        'Deployment sistem operasi enterprise Rocky Linux dengan manajemen user tersentralisasi dan partisi storage jaringan berkecepatan tinggi.',
        'Automasi instalasi software ilmiah dan kompilator optimized (MPI, GCC, Intel OneAPI) menggunakan EasyBuild toolkit framework.',
        'Penyusunan alokasi partisi dan queue scheduler Slurm untuk mendistribusikan job komputasi simulasi elemen hingga dan dinamika molekuler.'
      ],
      impact: 'Peningkatan efisiensi waktu komputasi riset material hingga 3.4x dibandingkan setup standalone sebelumnya, dengan zero packet loss pada interkoneksi InfiniBand.'
    }
  },
  wisuka: {
    en: {
      title: 'Enterprise B2B E-Catalog & Smart RFQ Platform',
      subtitle: 'PT Wisu Varia Analitika (Mar - Jun 2026)',
      image: './assets/images/poster-wisuka.png',
      tags: ['Laravel 11', 'Filament PHP 3', 'Tailwind CSS', 'MySQL', 'DevOps & Docker', 'Smart RFQ'],
      overview: 'Engineered an integrated B2B enterprise web platform for scientific analytics instrumentation catalogs, automated Request for Quotation (RFQ) pricing, and role-based administration.',
      highlights: [
        'Constructed scalable backend architecture with Laravel 11 and interactive administrative backoffice via Filament PHP v3.',
        'Developed Smart RFQ engine: automated technical specifications calculation and instant quotation generation for laboratory and industrial clients.',
        'Implemented strict Role-Based Access Control (RBAC) across vendors, sales engineers, and system administrators.',
        'Designed containerized Docker CI/CD pipelines and indexed MySQL queries for catalogs spanning thousands of specialized SKUs.'
      ],
      impact: 'Reduced quote turnaround time from 48 hours to under 15 minutes, measurably driving enterprise client conversion rates.'
    },
    id: {
      title: 'Enterprise B2B E-Catalog & Smart RFQ Platform',
      subtitle: 'PT Wisu Varia Analitika (Mar - Jun 2026)',
      image: './assets/images/poster-wisuka.png',
      tags: ['Laravel 11', 'Filament PHP 3', 'Tailwind CSS', 'MySQL', 'DevOps & Docker', 'Smart RFQ'],
      overview: 'Pengembangan platform web B2B terintegrasi untuk katalog produk analitik instrumentasi ilmiah, manajemen Request for Quotation (RFQ) otomatis, dan portal administrasi berbasis peran.',
      highlights: [
        'Membangun arsitektur backend scalable dengan Laravel 11 dan dashboard backoffice interaktif menggunakan Filament PHP v3.',
        'Fitur Smart RFQ: Kalkulasi spesifikasi teknis dan estimasi harga otomatis untuk klien B2B industri laboratorium dan riset.',
        'Sistem otorisasi bertingkat (Role-Based Access Control) untuk vendor, sales engineer, dan super-admin.',
        'Konfigurasi pipeline DevOps, containerization Docker, dan optimasi query database untuk ribuan SKU katalog produk.'
      ],
      impact: 'Mempercepat siklus pembuatan penawaran harga dari 48 jam menjadi di bawah 15 menit, serta meningkatkan konversi prospek B2B secara terukur.'
    }
  },
  tcqm_jhub: {
    en: {
      title: 'TCQM JupyterHub — Cloud Supercomputing & Interactive DFT Platform',
      subtitle: 'Theory & Computation Quantum Materials Lab FMIPA UI (2024 - 2026)',
      image: './assets/images/poster-tcqm-jupyterhub.jpg',
      tags: ['JupyterHub', 'Python', 'Slurm Workload Manager', 'Quantum ESPRESSO', 'Docker', 'Linux'],
      overview: 'Engineered a centralized multi-user cloud computing platform for researchers and students at TCQM Lab FMIPA UI. Enabled browser-based interactive notebooks for First-Principles DFT calculations with direct Slurm cluster job submission.',
      highlights: [
        'Configured multi-user JupyterLab environment bundled with Quantum ESPRESSO, ASE (Atomic Simulation Environment), NumPy, and SciPy.',
        'Integrated Slurm batch cluster scheduling directly from notebook sessions, enabling real-time partition selection and GPU/CPU allocation.',
        'Built shared scientific filesystem partitions for pseudopotential libraries and crystal structure dataset caches.',
        'Optimized system memory limits and container isolation per user session to maintain zero downtime during heavy SCF calculations.'
      ],
      impact: 'Democratized supercomputer access for over 30+ quantum physics researchers, reducing environment setup time from days to instant web login.'
    },
    id: {
      title: 'TCQM JupyterHub — Cloud Supercomputing & Interactive DFT Platform',
      subtitle: 'Theory & Computation Quantum Materials Lab FMIPA UI (2024 - 2026)',
      image: './assets/images/poster-tcqm-jupyterhub.jpg',
      tags: ['JupyterHub', 'Python', 'Slurm Workload Manager', 'Quantum ESPRESSO', 'Docker', 'Linux'],
      overview: 'Pengembangan platform komputasi cloud terpusat multi-user bagi civitas peneliti dan mahasiswa TCQM Lab FMIPA UI untuk eksekusi simulasi First-Principles DFT dan analisis data kuantum berbasis browser.',
      highlights: [
        'Konfigurasi environment multi-user JupyterLab yang siap pakai dengan paket Quantum ESPRESSO, ASE, NumPy, dan SciPy.',
        'Integrasi langsung dengan scheduler kluster Slurm untuk eksekusi komputasi batch paralel langsung dari sesi notebook.',
        'Penyediaan partisi storage saintifik terpusat dan shared library data struktur kisi kristal serta pseudopotensial.',
        'Optimasi alokasi RAM per sesi pengguna dan isolasi container untuk stabilitas kluster saat kalkulasi energi kuantum intensif.'
      ],
      impact: 'Mempermudah akses komputasi kuantum bagi 30+ peneliti lab dan mengeliminasi kendala instalasi lokal dari hitungan hari menjadi login instan via web.'
    }
  },
  tcqm_sso: {
    en: {
      title: 'TCQM SSO — Centralized Identity & Access Management Portal',
      subtitle: 'Theory & Computation Quantum Materials Lab FMIPA UI (2024 - 2026)',
      image: './assets/images/poster-tcqm-sso.jpg',
      tags: ['Authentik', 'OAuth2 / OIDC', 'OpenLDAP', '2FA / MFA', 'Flask', 'Rocky Linux'],
      overview: 'Architected an enterprise-grade Single Sign-On (SSO) and identity management infrastructure to secure and streamline authentication across all supercomputing clusters, web apps, and storage resources in TCQM Lab FMIPA UI.',
      highlights: [
        'Unified authentication system connecting Linux cluster SSH accounts, JupyterHub, and research portals under a single credential.',
        'Enforced Multi-Factor Authentication (2FA) with cryptographic security tokens and automated session timeouts.',
        'Configured synchronized user directory using OpenLDAP and OAuth2 / OpenID Connect (OIDC) identity providers.',
        'Established granular Role-Based Access Control (RBAC) distinguishing faculty advisors, research assistants, and student apprentices.'
      ],
      impact: 'Centralized access control for all laboratory computing assets, eliminating fragmented passwords and achieving 100% compliant security auditing.'
    },
    id: {
      title: 'TCQM SSO — Centralized Identity & Access Management Portal',
      subtitle: 'Theory & Computation Quantum Materials Lab FMIPA UI (2024 - 2026)',
      image: './assets/images/poster-tcqm-sso.jpg',
      tags: ['Authentik', 'OAuth2 / OIDC', 'OpenLDAP', '2FA / MFA', 'Flask', 'Rocky Linux'],
      overview: 'Perancangan arsitektur Single Sign-On (SSO) dan manajemen identitas terpusat untuk mengamankan serta menyederhanakan akses ke seluruh kluster superkomputer, aplikasi web, dan repositori riset TCQM Lab FMIPA UI.',
      highlights: [
        'Sistem otentikasi terpadu yang menghubungkan akun SSH kluster Linux, JupyterHub, dan portal web riset dalam satu kredensial aman.',
        'Implementasi Multi-Factor Authentication (2FA) dengan token kriptografis dan pemantauan sesi login secara real-time.',
        'Sinkronisasi direktori pengguna menggunakan OpenLDAP dan protokol federasi OAuth2 / OpenID Connect (OIDC).',
        'Penerapan Role-Based Access Control (RBAC) bertingkat untuk dosen pembimbing, asisten peneliti, dan mahasiswa praktikum.'
      ],
      impact: 'Sentralisasi penuh seluruh kredensial komputasi laboratorium, menghilangkan redundansi akun lokal, dan menjamin standar kepatuhan keamanan 100%.'
    }
  }
};

function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const viewDetailBtns = document.querySelectorAll('.view-project-detail');

  if (!modalOverlay) return;

  function openModal(projectId) {
    const projGroup = projectData[projectId];
    if (!projGroup) return;

    const data = projGroup[currentLang] || projGroup.en;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-impact').textContent = data.impact;

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-pill text-xs';
      span.textContent = t;
      tagsContainer.appendChild(span);
    });

    // Highlights
    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach(h => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-xs text-slate-300';
      li.innerHTML = `<span class="text-cyan-400 font-bold mt-0.5">▹</span> <span>${h}</span>`;
      highlightsContainer.appendChild(li);
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const proj = btn.getAttribute('data-project');
      openModal(proj);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. Contact Form, Email Copy & Toast Notification
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? '✔' : 'ℹ';
  const iconColor = type === 'success' ? 'text-emerald-400' : 'text-cyan-400';

  toast.innerHTML = `
    <span class="${iconColor} font-bold text-base">${icon}</span>
    <span class="text-slate-200">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'alberttandersen@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const msg = currentLang === 'en' ? 'Email copied to clipboard: alberttandersen@gmail.com' : 'Email alberttandersen@gmail.com berhasil disalin ke clipboard!';
        showToast(msg);
      }).catch(() => {
        showToast('Direct: alberttandersen@gmail.com', 'info');
      });
    });
  });

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Inquiry via Albert Andersen Portfolio';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      const warn = currentLang === 'en' ? 'Please complete all required fields.' : 'Harap lengkapi semua bidang form yang bertanda bintang.';
      showToast(warn, 'info');
      return;
    }

    // Build mailto URI
    const greeting = currentLang === 'en' ? 'Hello Albert,' : 'Halo Albert,';
    const nameLabel = currentLang === 'en' ? 'Name:' : 'Nama:';
    const msgLabel = currentLang === 'en' ? 'Message:' : 'Pesan:';
    const bodyContent = `${greeting}\n\n${nameLabel} ${name}\nEmail: ${email}\n\n${msgLabel}\n${message}`;
    const mailtoUrl = `mailto:alberttandersen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;

    const sentMsg = currentLang === 'en' ? 'Your email application is opening with the formatted message!' : 'Aplikasi email Anda sedang dibuka. Pesan siap dikirim!';
    showToast(sentMsg);
    form.reset();
  });
}

/* ==========================================================================
   8. ScrollSpy & Sticky Navbar
   ========================================================================== */
function initScrollSpyAndNavbar() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar shadow on scroll
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('bg-slate-950/85', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg');
      } else {
        navbar.classList.remove('bg-slate-950/85', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg');
      }
    }

    // ScrollSpy active link
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* Utility to prevent HTML injection */
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
