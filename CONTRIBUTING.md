# Contributing to PAUL UI

This repository follows the **GitFlow** workflow model.

## Branching Model

- **main**: Stores the official release history. All commits on this branch must be tagged with a version number.
- **develop**: The integration branch for features. This is where all feature branches are merged.
- **feature/* **: Used for developing new features. Branch off from `develop` and merge back into `develop`.
- **release/* **: Used for preparing a new production release. Branch off from `develop` and merge into both `main` and `develop`.
- **hotfix/* **: Used for quickly fixing production issues. Branch off from `main` and merge into both `main` and `develop`.

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries

Example: `feat: add new Button variant`

## Workflow Process

1.  Pull the latest changes from `develop`.
2.  Create a new feature branch: `git checkout -b feature/your-feature-name`.
3.  Commit your changes following the naming convention.
4.  Push your branch: `git push -u origin feature/your-feature-name`.
5.  Run Chromatic locally to verify visual changes (optional but recommended): `pnpm chromatic`.
6.  Open a Pull Request (PR) against the `develop` branch.
7.  Once approved and tests pass, the PR will be merged into `develop`.
