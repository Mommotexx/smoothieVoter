# [Live Demo](https://smoothie-voter-mewb-mommotexx.vercel.app/)
username: demo
password: demo

# Project Setup Guide

This project is built using Next.js, Prisma, Clerk, Tailwind CSS, and Shadcn. It provides a foundation for building web applications with authentication features.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Setting Up Prisma](#setting-up-prisma)
- [Setting Up Clerk](#setting-up-clerk)
- [Running the Application](#running-the-application)
- [Dependencies](#dependencies)

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   npm install
   ```

## Setting Up Prisma

1. Create a .env file in the root directory based on .env.example.

2. Set your database connection URL in .env.
   ```bash
    DATABASE_URL="your_database_url"
   ```
3. Run Prisma migrations to create the database schema:
   ```bash
   npx prisma migrate dev
   ```

## Setting Up Clerk

1. Sign up for a Clerk account: [Clerk](https://clerk.com/)
2. Create a Clerk application and note your API Key.

   - Set your Clerk API Key in .env:

   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_public_key

   CLERK_SECRET_KEY=your_secret_key
   ```

3. Go to WebHooks, and add your domain.
   - Set your WebHook secret API key in .env:
   ```bash
   WEBHOOK_SECRET=your_webhook_secret
   ```

## Running the Application

Run the development server:

```bash
npm run dev
```

## Dependencies

- @prisma/client
- clerk
- next
- react
- tailwindcss
- shadcn
