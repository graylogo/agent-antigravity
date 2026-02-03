# 📦 发布包内容清单

## ✅ 已准备完成

### 1. 扩展包
- **文件**: `todo-chrome-extension-v1.0.0.zip` (515 KB)
- **用途**: 直接上传到 Chrome Web Store
- **内容**: 
  - index.html
  - manifest.json
  - assets/ (JS 和 CSS)
  - icons/ (16x16, 48x48, 128x128)
  - favicon.ico

### 2. 宣传素材
位置: `promo-assets/`

- **小型宣传图块**: `promo-440x280.png` (439 KB)
  - 尺寸: 440x280
  - 用途: Chrome Web Store 小图块
  
- **大型宣传图块**: `promo-920x680.png` (479 KB)
  - 尺寸: 920x680
  - 用途: Chrome Web Store 大图块

### 3. 文档
- **PUBLISH_CHECKLIST.md** - 发布清单和步骤
- **PRIVACY_POLICY.md** - 隐私政策
- **TESTING_GUIDE.md** - 测试指南
- **CHROME_EXTENSION.md** - 扩展详细文档
- **INSTALL.md** - 安装指南

## 🚀 立即测试

### 方法 1: 加载未打包的扩展（推荐用于测试）

```bash
# 1. 确保已构建
npm run build:extension

# 2. 在 Chrome 中加载
# - 打开 chrome://extensions/
# - 开启开发者模式
# - 加载已解压的扩展程序
# - 选择 dist 文件夹
```

### 方法 2: 加载 ZIP 包

```bash
# 1. 解压 ZIP 文件
unzip todo-chrome-extension-v1.0.0.zip -d test-extension

# 2. 在 Chrome 中加载
# - 打开 chrome://extensions/
# - 开启开发者模式
# - 加载已解压的扩展程序
# - 选择 test-extension 文件夹
```

## 📋 测试清单

参考 `TESTING_GUIDE.md` 进行完整测试。

快速测试：
- [ ] 打开新标签页，看到 Todo 应用
- [ ] 添加任务
- [ ] 完成任务（看到动画）
- [ ] 切换主题
- [ ] 拖拽排序
- [ ] 刷新页面，数据保持

## 🌐 发布到 Chrome Web Store

### 准备工作
1. ✅ 注册 Chrome 开发者账号（$5 一次性费用）
2. ✅ 准备好扩展包 ZIP 文件
3. ✅ 准备好宣传图片
4. ✅ 准备好描述文本

### 上传步骤

1. **访问开发者控制台**
   https://chrome.google.com/webstore/devconsole

2. **创建新项目**
   - 点击「新增项」
   - 上传 `todo-chrome-extension-v1.0.0.zip`

3. **填写商店详情**
   
   **基本信息**:
   - 名称: Todo - New Tab
   - 简短描述: 一个美观且功能丰富的 Todo 应用，替代你的新标签页
   - 详细描述: 见 `PUBLISH_CHECKLIST.md`
   - 分类: Productivity
   - 语言: 中文（简体）

   **图片素材**:
   - 图标: 已包含在 ZIP 中
   - 小型宣传图块: `promo-assets/promo-440x280.png`
   - 大型宣传图块: `promo-assets/promo-920x680.png`
   - 截图: 需要实际截图（建议 3-5 张）

   **隐私**:
   - 隐私政策: 使用 `PRIVACY_POLICY.md` 内容
   - 权限说明: storage - 用于本地保存任务数据

4. **提交审核**
   - 检查所有信息
   - 提交审核
   - 等待 1-3 个工作日

## 📸 建议截图内容

使用实际扩展截图（1280x800 或 640x400）：

1. **主界面** - 白天模式，显示几个任务
2. **黑夜模式** - 展示主题切换功能
3. **任务管理** - 展示添加、完成、删除操作
4. **拖拽排序** - 展示拖拽功能
5. **过滤器** - 展示三种过滤模式

## 🔧 如果需要修改

```bash
# 1. 修改代码
# 2. 重新构建
npm run build:extension

# 3. 重新打包
cd dist && zip -r ../todo-chrome-extension-v1.0.1.zip . && cd ..

# 4. 在 Chrome Web Store 上传新版本
```

## 📞 支持

- GitHub: https://github.com/graylogo/agent-antigravity
- Issues: https://github.com/graylogo/agent-antigravity/issues

## 🎉 准备就绪！

所有文件都已准备完成，可以开始测试和发布了！

**下一步**:
1. 在本地测试扩展
2. 确认所有功能正常
3. 准备实际截图
4. 提交到 Chrome Web Store

祝发布顺利！🚀
