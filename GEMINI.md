# GEMINI.md

## Project Overview
This project is a personal profile and link-in-bio application built with **Next.js 16 (breaking changes)**, **Tailwind CSS 4**, **TypeScript**, and **React 19**. The main application code resides in the `my-profile/` directory.

### Key Technologies
- **Framework:** Next.js 16 (Note: This version may contain breaking changes relative to earlier documentation).
- **Styling:** Tailwind CSS 4 with `@import "tailwindcss"` and inline theme configurations.
- **Languages:** TypeScript, CSS.
- **State Management:** React 19.
- **Fonts:** Geist and Geist Mono from Vercel.

## Building and Running

### Prerequisites
- Node.js installed.
- Access to the `my-profile/` directory.

### Commands
To interact with the application, navigate to the `my-profile/` directory:

```bash
cd my-profile
```

| Action | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts the development server at `http://localhost:3000`. |
| **Build** | `npm run build` | Creates an optimized production build. |
| **Start** | `npm run start` | Runs the built application in production mode. |
| **Lint** | `npm run lint` | Runs ESLint to check for code quality issues. |

## Development Conventions

### Architecture
- **App Router:** The project uses the Next.js App Router pattern (`my-profile/app/`).
- **Layouts:** Shared layouts are defined in `layout.tsx` files.
- **Styling:** Tailwind 4 is configured in `my-profile/app/globals.css`. Use `@theme inline` for custom theme variables.
- **Assets:** Static assets are stored in the `my-profile/public/` directory.

### Standards
- **TypeScript:** Use TypeScript for all component and logic files.
- **ESLint:** Maintain code quality by adhering to the rules defined in `eslint.config.mjs`.
- **Accessibility:** Ensure HTML elements follow standard semantic patterns.

## Important Note
The `AGENTS.md` file indicates that the version of Next.js used (`16.2.3`) may have breaking changes. Refer to the documentation in `node_modules/next/dist/docs/` for specific guidance when encountering unexpected behavior or deprecated APIs.
