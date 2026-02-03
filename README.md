# Vue 3 + Vite + Pinia Todo App

使用 `Antigravity IDE` 开发的 Todo App。使用了最新的vue技术栈来实现。

## 🌟 两个版本

### 📱 Web 应用版本（main 分支）
标准的 Web 应用，可以部署到任何静态托管服务。

### 🔌 Chrome 扩展版本（chrome-dev 分支）
作为 Chrome 扩展，替代你的新标签页！

👉 **想要 Chrome 扩展？** 切换到 `chrome-dev` 分支：
```bash
git checkout chrome-dev
```
查看 [INSTALL.md](./INSTALL.md) 了解如何安装。

## Features

- **Vue 3** with Composition API and `<script setup>`
- **Vite** for lightning-fast development
- **Pinia** for state management
- **TypeScript** for type safety
- **Vanilla CSS** with CSS Variables for a custom, premium design system
- **LocalStorage Persistence** to save your todos
- **Rich Animations** for smooth and delightful user interactions
- **Theme Switching** - Auto/Light/Dark modes with persistent preference
- **Drag & Drop** - Reorder tasks with intuitive drag-and-drop

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Build Chrome Extension (chrome-dev branch only)

```sh
npm run build:extension
```

### Lint with ESLint

```sh
npm run lint
```
