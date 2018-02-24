# hero-tour

### 说明
angular官方教程英雄管理工具虽然是一个很简单的项目，但却使用了前端开发中较多常用功能，比较适合练手，基于此，我使用了vue相关技术，做了一个基本一样的应用。

+ vue 2.5.2
+ vuex 3.0.1
+ vue-router 3.0.1
+ echarts 4.0.2

#### 安装运行
在src所在目录下运行CMD工具，执行以下命令，下载相关依赖。
<pre><code>npm install</code></pre>
继续执行以下命令启动本地服务器
<pre><code>npm run dev</code></pre>

### 源码目录如下：
<pre><code>src/
├── assets/
│   └── logo.png
├── components/
│   ├── AddItem.vue
│   ├── ClickableItem.vue
│   ├── editable-item.vue
│   ├── hero-detail.vue
│   ├── index.js
│   └── Item.vue
├── page/
│   ├── admin/
│   │   ├── children/
│   │   │   ├── crisis-manage.vue
│   │   │   ├── dashboard.vue
│   │   │   ├── hero-manage.vue
│   │   │   └── message-center.vue
│   │   └── admin.vue
│   ├── compose/
│   │   └── compose.vue
│   ├── crisis/
│   │   └── crisis.vue
│   ├── hero/
│   │   └── hero.vue
│   ├── hero-detail/
│   │   └── hero-detail-page.vue
│   ├── login/
│   │   └── login.vue
│   ├── page-not-found/
│   │   └── PageNotFound.vue
│   └── index.js
├── router/
│   └── index.js
├── service/
│   └── idleDataId.js
├── vuex/
│   ├── action/
│   │   └── login.js
│   ├── mutation/
│   │   ├── contactPanel.js
│   │   ├── crisisLibary.js
│   │   ├── heroes.js
│   │   ├── login.js
│   │   └── message.js
│   ├── action.js
│   ├── constant.js
│   ├── mutation.js
│   └── store.js
├── App.vue
├── directoryParser.bat
├── directoryParser.js
└── main.js
</code></pre>
