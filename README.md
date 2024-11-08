# AI Resume Builder

### ❤️ Support

If you find this project helpful, please consider giving this repository a ⭐️ on GitHub, and don't forget to **like**, **share**, and **subscribe** to support our journey!

## 📌 Project Overview

Welcome to the **AI Resume Builder** repository! This project leverages cutting-edge tools and frameworks to create a dynamic and efficient resume-building platform powered by AI. The AI Resume Builder provides a seamless experience, making resume creation straightforward and effective.

## 🌟 Features

- 🔐 **Authentication with Kinde** - Google Sign-In
- ➕ **Creating Resumes**
- ✏️ **Editing Resumes**
- 🎨 **Resume Theme Colors**
- 📸 **Resume Thumbnail**
- 🗨️ **Shareable Resume Link**
- 🔎 **Search Trash Resume**
- 📡 **Real-Time Editing**
- 🔗 **Preview Mode**
- 👨‍💻 **Download Resume to PDF Format**
- 🤖 **Resume Generation with AI**
- 🌐 **Built with Next.js 14**
- 🎨 **Styled with TailwindCSS and Shadcn UI**
- 🪝 **Hono API & Tanstack React Query**
- 💾 **Vercel PostgreSQL & Drizzle ORM**
- 🚀 **Deployed on Vercel**

## 🚀 Tools & Technologies

This project is built using:

- **Next.js**: For the fast, SEO-friendly frontend.
- **Hono**: Lightweight framework for building backend APIs.
- **Drizzle ORM**: SQL ORM for easy database management.
- **Gemini AI**: Integrating AI capabilities for building smarter resumes.
- **Tailwind CSS**: Rapid, responsive styling.
- **React Query**: For efficient data fetching and caching.
- **Vercel Postgres**: Reliable, scalable database solution.

## 🔄 Deploy to Vercel

To deploy this project to Vercel, follow these steps:

### 1. Add Environment Variables

After deploying, navigate to **Vercel > Project Settings > Environment Variables** and add the necessary environment variables for production.

Replace all occurrences of `localhost` with your Vercel domain URL, as shown below:

```plaintext
KINDE_SITE_URL=https://cvbuild-ai.vercel.app/
KINDE_POST_LOGOUT_REDIRECT_URL=https://cvbuild-ai.vercel.app/
KINDE_POST_LOGIN_REDIRECT_URL=https://cvbuild-ai.vercel.app/dashboard
NEXT_PUBLIC_APP_URL=https://cvbuild-ai.vercel.app/
```

These variables ensure that the app functions properly on your Vercel deployment.

### 2. Initialize and Deploy

Run the following command to initialize the deployment:

```bash
vercel
```

This command will prompt you to configure the project for the first time if it hasn't been linked to Vercel.

Once configured, deploy the project to production using:

```bash
vercel --prod
```

This will push your latest changes live on Vercel.

## 🔍 Versions & Packages

To view all packages and dependencies used, check out the [Versions](versions/version.md) file.

---

Thank you for being part of this journey, and happy coding! 😊
