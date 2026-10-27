```markdown
# LuxuryHomes

A modern luxury real estate marketing platform designed to showcase high-end properties. The application features an immersive, highly interactive user interface with 3D background effects and responsive UI components.

## Key Features

- **Immersive Visuals:** Integrates Vanta.js for dynamic, 3D background animations.
- **Advanced Search:** Hero section equipped with location, property type, and price range filtering.
- **Component-Driven UI:** Modular architecture separating page sections (Hero, Featured Properties, Testimonials) from common layouts (Header, Footer).
- **Responsive Design:** Fully fluid layouts tailored for desktop, tablet, and mobile viewing using styled-components.
- **Rigorous Engineering Workflow:** Automated GitHub Actions CI pipeline with security audits, type-checking, linting, and enforced test coverage minimums.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** styled-components
- **Testing:** Jest, React Testing Library, jest-dom
- **Quality Gates:** ESLint, TypeScript, GitHub Actions, Dependabot

## Getting Started

### Prerequisites
Ensure you have **Node.js 24** or later installed (aligned with CI execution environments).

### Environment Variables

This project uses environment variables for configuration. 

1. Copy the example configuration file:
   ```bash
   cp .env.example .env.local

```

2. Open `.env.local` and replace the placeholder values with your actual keys as they are added.

### Installation & Execution (Local)

1. Clone the repository and install dependencies:
```bash
npm install

```


2. Start the development server:
```bash
npm run dev

```



The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Running with Docker

To evaluate the repository in an isolated environment, you can run the entire application using Docker Compose:

```bash
docker-compose up

```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Testing

The project maintains comprehensive testing and enforces a minimum 50% test coverage threshold.

To run the standard test suite:

```bash
npm test

```

To run the test suite and generate a coverage report:

```bash
npm run test:coverage

```