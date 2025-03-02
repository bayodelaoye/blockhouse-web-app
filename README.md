# Blockhouse Web App

This project includes a Crypto Price Tracker built with Next.js for the web app and Docusaurus for the developer documentation. The tracker displays live cryptocurrency prices using data from the CoinGecko API. This documentation provides setup instructions, API integration details, and more.

## Table of Contents

1. [Project Setup Guide](#setup-guide)

   - [Web App (Next.js)](#web-app-nextjs)
   - [Docusaurus Documentation](#docusaurus-documentation)

2. [Technologies Used](#technologies-used)
3. [Project Features](#project-features)

## Setup Guide

### Web App (Next.js)

**To run the web app locally:**

1. Clone the repository:

   ```bash
   git clone https://github.com/bayodelaoye/blockhouse-web-app.git
   cd app
   ```

2. Install dependencies for the web app:

   Install necessary dependencies, including React Query and Axios:

   ```bash
   npm install framer-motion
   npm install
   ```

3. Start the development server:

   Run the Next.js app in development mode:

   ```bash
   npm run dev
   ```

4. Visit the app:

   Open your browser and go to http://localhost:3000 to view the Crypto Price Tracker.

### Docusaurus Documentation

**To run the Docusaurus documentation locally:**

1. Navigate to the docs folder:

   ```bash
   cd docs
   ```

2. Install dependencies for the documentation:

   Install necessary dependencies for Docusaurus:

   ```bash
   npm install
   ```

3. Start the development server:

   Run the Docusaurus documentation in development mode:

   ```bash
   npm run start
   ```

4. Visit the documentation:

   Open your browser and go to http://localhost:3000 to view the documentation.

## Technologies Used

- **Next.js:** A React-based framework for building fast, scalable web applications.
- **React Query:** A library for fetching, caching, and synchronizing remote data in React.
- **Axios:** A promise-based HTTP client for making API requests.
- **Docusaurus:** A documentation generator tool to create clean and responsive docs websites.
- **Tailwind CSS:** A utility-first CSS framework for creating custom designs quickly.

## Project Features

- **Crypto Price Display:** Shows live prices for five popular cryptocurrencies fetched from the CoinGecko API.
- **Search Bar:** Allows users to filter the displayed cryptocurrencies by name.
- **Manual Refresh:** A "Refresh" button to manually fetch the latest prices from the API.
- **Responsive Design:** The app is fully responsive and looks great on both desktop and mobile devices.
