# Todo - Chrome Extension (New Tab)

🎯 一个美观且功能丰富的 Todo 应用，作为 Chrome 扩展替代你的新标签页。

## ✨ 特性

- 🎨 **精美动画** - 流畅的交互动画和视觉效果
- 🌓 **主题切换** - 支持自动/白天/黑夜三种模式
- 💾 **本地存储** - 所有数据保存在本地，永不丢失
- 🎯 **拖拽排序** - 直观的拖放功能重新排序任务
- 🔍 **智能过滤** - 快速查看全部/活跃/已完成任务
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- ⚡ **快速访问** - 每次打开新标签页即可查看和管理任务

## 🚀 安装方法

### 方法一：从源码构建（开发者模式）

1. **克隆仓库**
   ```bash
   git clone https://github.com/graylogo/agent-antigravity.git
   cd agent-antigravity
   git checkout chrome-dev
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **构建扩展**
   ```bash
   npm run build:extension
   ```

4. **加载到 Chrome**
   - 打开 Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 开启右上角的「开发者模式」
   - 点击「加载已解压的扩展程序」
   - 选择项目中的 `dist` 文件夹

5. **完成！**
   - 打开新标签页，你将看到 Todo 应用
   - 开始管理你的任务吧！

### 方法二：开发模式（实时预览）

如果你想在开发时实时预览：

```bash
npm run dev
```

然后在浏览器中访问 `http://localhost:5173/`

## 📖 使用指南

### 基本操作

- **添加任务**：在输入框中输入任务内容，按 Enter 或点击「Add」按钮
- **完成任务**：点击任务前的圆形复选框
- **删除任务**：悬停在任务上，点击右侧的删除按钮
- **拖拽排序**：在「全部」视图下，拖动任务左侧的手柄图标重新排序

### 过滤器

- **All（全部）**：显示所有任务
- **Active（活跃）**：只显示未完成的任务
- **Completed（已完成）**：只显示已完成的任务

### 主题切换

点击右上角的主题按钮，可以在三种模式间切换：
- 🌓 **Auto**：跟随系统主题
- ☀️ **Light**：白天模式
- 🌙 **Dark**：黑夜模式

你的主题偏好会自动保存。

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全
- **Vite** - 下一代前端构建工具
- **Pinia** - Vue 状态管理
- **Chrome Extension Manifest V3** - 最新的扩展规范

## 📁 项目结构

```
agent-antigravity/
├── public/
│   ├── manifest.json       # Chrome 扩展配置
│   └── icons/              # 扩展图标
├── src/
│   ├── components/         # Vue 组件
│   ├── stores/             # Pinia 状态管理
│   ├── assets/             # 样式和资源
│   └── App.vue             # 主应用组件
├── build-extension.sh      # 构建脚本
└── vite.config.ts          # Vite 配置
```

## 🔧 开发

### 修改代码

1. 修改 `src/` 目录下的文件
2. 运行 `npm run build:extension` 重新构建
3. 在 Chrome 扩展页面点击刷新按钮

### 调试

- 右键点击扩展图标 → 「检查弹出内容」
- 或在新标签页按 F12 打开开发者工具

## 📝 许可证

MIT License

## 🙏 致谢

使用 [Antigravity IDE](https://antigravity.dev) 开发
