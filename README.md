# Link page - Next.js linktree

This project is a simple link tree app which you can host for free on [Vercel](https://vercel.com).

Demo site: [link-page-demo.vercel.app](https://link-page-demo.vercel.app)

## How to customize

First you'll want to fork this repository.

All the links are located in `app/lib/config.ts` file. 
Also title, subtitle and avatar alt title are in the same file.

In order to change avatar just replace file `public/avatar.png` with your own version.

## How to host on Vercel

This process takes one minute, after that whenever you change your repository it'll be deployed on autopilot.

### Steps

1. Open your Vercel account
2. Click **Add new** and choose **Project**
3. Import your version of link page repository
4. Choose Project name and hit **Deploy**

That's it. Your project will be hosted on vercel.app domain which is high authority domain (DA 91)

Video tutorial (you only need first 2 minutes): [https://www.youtube.com/watch?v=AiiGjB2AxqA](https://www.youtube.com/watch?v=AiiGjB2AxqA)

## Next.js Readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
