# Product Requirements Document (PRD)

## 1. Project Overview
Pembuatan website personal portfolio untuk Albert Andersen. Website ini bertujuan untuk menampilkan profil profesional, pengalaman riset komputasi material, manajemen sistem HPC, pengembangan web, dan pendidikan.

## 2. Tujuan (Goals)
* Membangun kehadiran online (online presence) yang profesional.
* Menampilkan portofolio proyek dan pengalaman kerja secara terstruktur.
* Menyediakan resume digital yang mudah diakses oleh perekrut atau kolaborator riset.
* Website harus statis, ringan, responsif, dan di-hosting secara gratis di **GitHub Pages**.

## 3. Target Audience
* Recruiter/HRD di bidang IT (HPC, SysAdmin, Fullstack Web Dev).
* Peneliti/Akademisi yang mencari kolaborator riset fisika komputasi/kuantum.
* Klien atau siswa yang mencari jasa tutoring.

## 4. Tech Stack & Platform
* **Hosting:** GitHub Pages (melalui repository `alberttandersen.github.io`).
* **Frontend:** HTML5, CSS3 (bisa menggunakan framework seperti Tailwind CSS atau Bootstrap untuk mempercepat), dan Vanilla JavaScript.
* **Architecture:** Single-Page Application (SPA) dengan *smooth scrolling* atau Multi-page sederhana (menyesuaikan referensi).

## 5. Fitur Utama & Struktur Halaman
* **Hero/Header Section:** Nama, Tagline, Foto Profil, tombol CTA ("Download CV" & "Contact Me").
* **About Section:** Ringkasan singkat sesuai `guide.md`.
* **Experience & Education (Timeline):** Menampilkan riwayat kerja (HPC, Web Dev, Tutor) dan riwayat pendidikan UI.
* **Projects Showcase:** Menampilkan proyek HPC FT UI dan PT Wisu Varia Analitika dengan *card layout* (menyertakan tech stack yang digunakan seperti Laravel, Slurm, Rocky Linux).
* **Skills & Certifications:** Grid berisi logo atau list keahlian (DFT, Quantum ESPRESSO, Linux, Networking) dan badge sertifikasi (Google IT Support, ITIL 4).
* **Contact Section:** Formulir kontak sederhana (bisa via formspree/mailto) dan tautan LinkedIn/GitHub.
