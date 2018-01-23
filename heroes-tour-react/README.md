# Hero tour

## 说明
angular官方教程英雄管理工具虽然是一个很简单的项目，但却使用了前端开发中较多常用功能，比较适合练手，在angular版开发到基本可用后，我考虑用react实现一遍，使用react栈相关技术。

+ react 16.2.0
+ redux 3.7.2
+ react-redux 5.0.6
+ react-router 4.2.0
+ redux-thunk 2.2.0
+ echarts 4.0.2
+ font-awesome

#### 安装运行
在src所在目录下运行CMD工具，执行以下命令，下载相关依赖。
<pre><code>npm install</code></pre>
继续执行以下命令启动本地服务器
<pre><code>npm run start</code></pre>

### 源码目录如下：
<pre><code>src/
├── component/
│   ├── compose/
│   │   └── address-list.js
│   ├── hero/
│   │   ├── search.css
│   │   └── search.js
│   ├── hero-detail/
│   │   ├── hero-detail.css
│   │   ├── hero-detail.js
│   │   ├── hero-edit-form.js
│   │   └── relate-message-list.js
│   ├── item/
│   │   ├── add-item.css
│   │   ├── add-item.js
│   │   ├── editable-item.css
│   │   ├── editable-item.js
│   │   ├── item.css
│   │   └── item.js
│   ├── login/
│   │   ├── login-input.css
│   │   └── login-input.js
│   ├── message-center/
│   │   └── message-item.js
│   └── index.js
├── containers/
│   ├── admin/
│   │   ├── admin.css
│   │   └── admin.js
│   ├── compose/
│   │   ├── compose.css
│   │   └── compose.js
│   ├── crisis/
│   │   └── crisis.js
│   ├── crisis-manage/
│   │   └── crisis-manage.js
│   ├── dashboard/
│   │   ├── dashboard.css
│   │   └── dashboard.js
│   ├── hero/
│   │   ├── hero.css
│   │   └── hero.js
│   ├── hero-manage/
│   │   └── hero-manage.js
│   ├── login/
│   │   ├── login.css
│   │   └── login.js
│   ├── message-center/
│   │   ├── message-center.css
│   │   └── message-center.js
│   └── index.js
├── redux/
│   ├── action-reducer/
│   │   ├── crisisLibary.js
│   │   ├── displayContactPanel.js
│   │   ├── displayLogIn.js
│   │   ├── heroes.js
│   │   ├── isLogin.js
│   │   ├── messages.js
│   │   ├── selectedCrisisId.js
│   │   └── selectedHeroId.js
│   ├── action.js
│   └── reducer.js
├── service/
│   ├── crisisService.js
│   ├── heroService.js
│   ├── index.js
│   └── messageService.js
├── defaultState.js
├── directoryParser.js
├── home.js
├── index.css
├── index.js
└── registerServiceWorker.js
</code></pre>