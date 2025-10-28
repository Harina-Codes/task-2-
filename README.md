# task-2-

Harina - Task 2: Templating with Vite & Nunjucks

This project recreates the three HTML pages from Task 1 (Home, About/Services, Contact) using a modern static site generation stack, as required by the Task 2 specifications.

Mandatory Technology Stack Chosen

Templating Engine: Nunjucks

Reasoning: Nunjucks allows for powerful inheritance (base.html) and macros, making the code DRY (Don't Repeat Yourself) by centralizing the Navbar, Footer, and boilerplate code.

Bundler / Task Runner: Vite

Reasoning: Vite is a modern, fast development server and build tool that simplifies project setup and offers extremely quick rebuilds during development.

Project Structure

The file structure strictly adheres to the task requirements:

/
├── dist/                          <-- Compiled output files (Built by Vite)
├── src/
│   ├── templates/                 <-- All Nunjucks templates
│   │   ├── layouts/
│   │   │   └── base.html          <-- Main layout (Head, Navbar, Footer)
│   │   ├── index.html             <-- Home Page
│   │   ├── about-services.html    <-- About/Services Page
│   │   └── contact.html           <-- Contact Page
├── package.json                   <-- Project dependencies and scripts
└── vite.config.js                 <-- Vite/Nunjucks Configuration


How to Install and Run the Project

1. Installation

Initialize Node.js Project: Ensure you have Node.js installed.

Install Dependencies: Run the following command in the project root directory:

npm install


2. Development (Local Server)

To start the development server with Hot Module Reloading (HMR):

npm run dev


The site will be accessible locally, typically at http://localhost:5173. Changes to the Nunjucks templates will be instantly reflected.

3. Build (Production Output)

To compile the final, optimized static HTML files into the mandatory dist/ directory:

npm run build


This command will execute the Vite build process, resulting in the three final HTML files (index.html, about-services.html, contact.html) inside the dist/ folder.
