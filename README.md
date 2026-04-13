# Frontend Mentor - Photosnap Multi-Page Website

This is a solution to the [Photosnap Multi-Page Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW). The goal of this project was to build a polished multi-page marketing site that matches the provided designs across mobile, tablet, and desktop.

## Overview

Photosnap is a responsive marketing website with four core pages:

- Home
- Stories
- Features
- Pricing

The project focuses on reusable layout patterns, responsive image handling, interactive hover states, and a clean multi-page structure using modern frontend tools.

## Built With

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Responsive image assets from the Frontend Mentor challenge

## Features

- Responsive multi-page layout
- Mobile dropdown navigation menu
- Shared page hero components
- Reusable split-section content blocks
- Story card grid with hover interactions
- Features grid for home and features pages
- Pricing toggle for monthly and yearly plans
- Compare table for pricing features
- Shared CTA banner
- Keyboard focus states for accessibility

## Folder Structure

```txt
app/
  page.tsx
  stories/page.tsx
  features/page.tsx
  pricing/page.tsx

components/
  features/
  layout/
  pricing/
  sections/
  shared/
  stories/

data/
lib/
public/
  assets/
    icons/
    images/
    shared/
```

## What I Worked On

This project was built in vertical slices so the layout and reusable UI patterns could be verified early.

### Core implementation areas

- Set up a clean Next.js and Tailwind foundation
- Organized responsive assets by page and breakpoint
- Created reusable image helpers for consistent responsive paths
- Built shared layout pieces like the header, footer, and CTA banner
- Created reusable story cards and content split sections
- Added pricing toggle behavior and compare table layout
- Refined mobile and desktop layouts to better match the design files

## Design and UX Notes

A big part of this build was keeping the UI consistent while switching between layouts across breakpoints. The most important patterns were:

- consistent spacing and typography
- reusable responsive image handling
- mobile-first layout decisions
- keeping hover and focus states intentional
- avoiding duplicated layout code across pages

## Accessibility

This build includes:

- semantic page structure
- keyboard-focus styles for links and buttons
- accessible button and navigation states
- readable contrast across light and dark sections

## Screenshots

Add screenshots here before publishing.

### Desktop

![Desktop screenshot](./screenshots/desktop-home.png)

### Tablet

![Tablet screenshot](./screenshots/tablet-home.png)

### Mobile

![Mobile screenshot](./screenshots/mobile-home.png)

## Links

- Solution URL: [Add Frontend Mentor solution link here](#)
- Live Site URL: [Add live site URL here](#)

## What I Learned

This project helped reinforce a few important frontend habits:

- responsive systems are easier to manage when filenames and folder structures stay consistent
- reusable components reduce rework across multi-page marketing sites
- layout accuracy often comes down to spacing, proportions, and image behavior more than complex logic
- interactive polish like hover states, active states, and focus states makes a static site feel much more complete

## Continued Development

If I revisit this project later, I would focus on:

- refining micro-interactions and transitions
- tightening any remaining spacing differences against the design files
- adding more robust accessibility testing
- reviewing image optimization and performance details

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Frontend Mentor](https://www.frontendmentor.io)

## Author

- Frontend Mentor - [@your-frontend-mentor-username](https://www.frontendmentor.io/profile/your-frontend-mentor-username)
- Portfolio - [Add your portfolio URL here](#)

