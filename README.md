<h1 align="center">Linklist</h1>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack & Features</strong></a>
</p>

<a href="">
  <img alt="Linklist" src="">
</a>

## Introduction

Linklist is a Linktree clone built with Next.js and Tailwind.

## Installation

Yarn
```sh 
git clone git@github.com:gcolombi/linklist.git project-name
cd project-name
yarn install
```

NPM
```sh 
git clone git@github.com:gcolombi/linklist.git project-name
cd project-name
npm install
```

## Tech Stack & Features

### Framework

- [Next.js](https://nextjs.org/) - React framework for building performant apps with the best developer experience

### Language

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale

### Hosting

- [Vercel](https://vercel.com/) - Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration

### UI

- [Tailwind CSS](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework to build rapidly modern websites without ever leaving your HTML
- [GSAP](https://greensock.com/) - GSAP is an industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser. A great place to get started with GSAP and React is to read [GSAP X React](https://greensock.com/react), [Getting Started with GSAP + React](https://greensock.com/react-basics) and [GSAP + React, Advanced Animation Techniques](https://greensock.com/react-advanced)
- [`@next/font`](https://nextjs.org/docs/basic-features/font-optimization) - Optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance

### Hooks

- `useCopyToClipboard` - This React hook provides a `copy` method to save a string in the clipboard and the copied value (default: `null`)
- `useIsomorphicLayoutEffect` - A React helper hook to schedule a layout effect with a fallback to a regular effect for environments where layout effects should not be used (such as server-side rendering)
- `useLockedScroll` - This React hook blocks scrolling on a page, a good example is when opening modals
- `useScrollbar` - A React helper hook to observe scroll position
- `useWindowLocation` - This React Hook retrieves window location
- `useWindowSize` - This React Hook retrives window dimensions also works on resize