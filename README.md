# Storybook for React Native in a monorepo

This repository contains a simple example of using Storybook for React Native within a monorepo, coexisting with the app.

This repository accompanies the **Medium article _"A cleaner approach for Storybook with React Native"_** that you can find here 👉🏼 https://medium.com/p/f9f5a59fdfa8


## Requirements

- [Yarn](https://yarnpkg.com) is used as package manager:

  ```sh
  brew install yarn --ignore-dependencies
  ```

  _Yarn [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces) make it easy to develop complex software as a monorepo consisting of several independent packages._

## Monorepo Structure

The application project is organized within a monorepo structure and consists of the following packages:

- **[App Package](packages/mobile)**: This is the mobile app itself and relies on other packages within the project.
- **[Design Package](packages/design)**: Contains UI component and run the Storybook app.
