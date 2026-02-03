# 快速安装 Chrome 扩展

## 📦 一键安装步骤

### 1️⃣ 构建扩展
```bash
npm run build:extension
```

### 2️⃣ 加载到 Chrome

1. 打开 Chrome 浏览器
2. 地址栏输入：`chrome://extensions/`
3. 开启右上角的 **「开发者模式」**
4. 点击 **「加载已解压的扩展程序」**
5. 选择项目中的 **`dist`** 文件夹
6. 完成！✅

### 3️⃣ 测试

打开一个新标签页，你将看到美观的 Todo 应用！

## 🎯 功能验证清单

- [ ] 新标签页显示 Todo 应用
- [ ] 可以添加、完成、删除任务
- [ ] 拖拽排序功能正常
- [ ] 主题切换按钮工作正常
- [ ] 刷新后数据保持
- [ ] 动画效果流畅

## 🔧 开发模式

如果你想修改代码：

```bash
# 1. 修改代码
# 2. 重新构建
npm run build:extension

# 3. 在 Chrome 扩展页面点击刷新图标
```

## 📸 截图

打开新标签页后，你会看到：
- 精美的渐变背景
- 动画标题
- 主题切换按钮（右上角）
- 过滤器（All/Active/Completed）
- Todo 输入框
- 任务列表（支持拖拽）
- 统计信息

## 🚀 下一步

查看 [CHROME_EXTENSION.md](./CHROME_EXTENSION.md) 了解更多详细信息。

---

**提示**：如果遇到问题，请确保：
1. Node.js 版本 >= 20.19.0
2. 已运行 `npm install`
3. Chrome 版本较新（支持 Manifest V3）
