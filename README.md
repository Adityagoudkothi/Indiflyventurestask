This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
#First Clone this using Command prompt terminal or Gitbash into your Local code
#Install Packages using npm i --legacy-peer-deps
#Run the application using
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for googlefonts.


**Technology Choices and Reasoning**

Next.js (App Router)
Provides server-side rendering (SSR) and static site generation (SSG) for better performance and SEO.
App Router enables a clean, scalable folder structure.

React
Component-based architecture improves reusability and maintainability.
Efficient UI updates using Virtual DOM.

Javscript
Improves code reliability with dynamic type checking.
This improves developer productivity.

Bootstrap / CSS Modules
Bootstrap ensures rapid UI development and consistency.
CSS Modules prevent global CSS conflicts.

next/font (Geist Font)
Optimized font loading with zero layout shift.
Improves Core Web Vitals and performance.



**Implemented SEO Techniques**

#Server-Side Rendering (SSR)
#Pages are rendered on the server, improving search engine crawlability.

#Meta Tags
#Implemented dynamic title and meta description using Next.js metadata API.

#Semantic HTML
#Used proper HTML tags (header, section, article, footer) to improve accessibility and SEO.

#Optimized Fonts
#Used next/font to reduce render-blocking resources.

#Fast Page Load
#Optimized assets and minimal client-side JavaScript improve Core Web Vitals.


**Responsiveness Strategy**

Bootstrap Grid System
Used responsive breakpoints (sm, md, lg, xl) for layout adaptability.
Ensures proper alignment across mobile, tablet, and desktop devices.

Flexible Units
Used %, rem, and vw instead of fixed pixel values where applicable.

Mobile-First Approach
UI is designed starting from smaller screens and enhanced for larger screens.

Media Queries
Applied for fine-tuning font sizes, spacing, and layout behavior.

Tested On

Mobile devices
Tablets
Desktop screens
