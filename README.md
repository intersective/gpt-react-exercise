## Description

Monorepo powered by [NX](https://nx.dev/)

[TypeScript Getting Started](https://nx.dev/getting-started/nx-and-typescript#create-a-typescript-based-application)

### Create a new TypeScript based library

To test add `--dry-run` on the end.

`nx generate @nx/node:library --name=delay --buildable --directory=library`

### Create a TypeScript based application

To test add `--dry-run` on the end.

`nx generate @nrwl/node:app api --directory apps`

### Create Next App

To test add `--dry-run` on the end.

`nx g @nx/react:app badges --bundler vite --directory apps`

### Create Next Component Library

`nx g @nx/react:lib my-lib --bundler=vite --directory=library`
