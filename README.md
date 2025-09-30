# 💰 Expense Tracker AI

AI-powered expense tracker with receipt scanning, PDF bank statement import, duplicate detection, and SQLite database. Built with React, Node.js, and OCR technology.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Node](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)
![SQLite](https://img.shields.io/badge/SQLite-3.x-003B57?logo=sqlite)

## Features

### 📸 AI Receipt Scanner
- Take photos of receipts or upload images
- Automatically extracts amount, merchant name, date, and category
- Uses Tesseract.js OCR technology

### 📄 PDF Bank Statement Import
- Upload PDF bank statements
- Bulk import all transactions at once
- Preview and review before adding to database

### 🔍 Smart Duplicate Detection
- Detects potential duplicate transactions
- Checks by amount, date, and merchant name
- Manual override option

### 💾 Reliable Data Storage
- SQLite database backend
- No data loss from browser clearing
- Full REST API for data management

### 📊 Visual Analytics
- Pie chart showing expenses by category
- Bar chart of last 7 days activity
- Monthly budget tracking with progress bar

### 🇬🇧 UK Merchant Recognition
Auto-detects categories for UK retailers including:
- **Food**: Tesco, Sainsbury's, Asda, Morrisons, Greggs, Costa
- **Transport**: TfL, Shell, BP, Esso
- **Shopping**: Amazon, Argos, Next, Primark
- **Bills**: Vodafone, EE, O2, BT, Sky
- And many more...

### 💰 Budget Management
- Set monthly spending budgets
- Visual progress indicators
- Color-coded warnings (green → orange → red)

### 📤 CSV Export
Export all transactions to CSV for backup or analysis in Excel

## Tech Stack

**Frontend:**
- React 18
- Tailwind CSS
- Recharts (data visualization)
- Lucide React (icons)
- Tesseract.js (OCR)
- PDF.js (PDF parsing)

**Backend:**
- Node.js
- Express
- SQLite3
- CORS enabled

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Installation

### 1. Clone the Repository
```bash
