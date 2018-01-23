# HeroesTour

## 说明
该项目是在angular的官方教程英雄管理工具上进行扩展而来，增加了Rxjs的应用以及一些官方教程中没有涉及到的重要特性，目前已经有了大体的结构，基本功能可用，后续会逐渐继续扩展。

+ angular 5.0
+ echarts 4.0.0
+ font-awesome
+ rxjs 5.5.2

#### 安装依赖
运行本项目需全局安装Angular CLI，如果已经安装，可忽略该项
<pre><code>npm install -g @angular/cli</code></pre>
在src所在目录下运行CMD工具，执行以下命令，下载相关依赖。
<pre><code>npm install</code></pre>
继续执行以下命令启动本地服务器
<pre><code>ng server --open</code></pre>

#### 修改本地服务器端口
在`.angular-cli.json`文件最后面有以下配置：
<pre><code>"port": {
    "default": 4203
}</code></pre>
修改`default`的值为期望使用的端口，即可更换本地服务器默认使用端口

### 源码目录结构
<pre><code>src/
├── app/
│   ├── admin/
│   │   ├── admin/
│   │   │   ├── admin-routing.module.ts
│   │   │   ├── admin.component.css
│   │   │   ├── admin.component.html
│   │   │   ├── admin.component.spec.ts
│   │   │   ├── admin.component.ts
│   │   │   └── admin.module.ts
│   │   ├── crisis-detail/
│   │   │   ├── crisis-detail.component.css
│   │   │   ├── crisis-detail.component.html
│   │   │   ├── crisis-detail.component.spec.ts
│   │   │   └── crisis-detail.component.ts
│   │   ├── crisis-manage/
│   │   │   ├── crisis-manage.component.css
│   │   │   ├── crisis-manage.component.html
│   │   │   ├── crisis-manage.component.spec.ts
│   │   │   └── crisis-manage.component.ts
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.css
│   │   │   ├── dashboard.component.html
│   │   │   ├── dashboard.component.spec.ts
│   │   │   └── dashboard.component.ts
│   │   ├── hero-detail/
│   │   │   ├── hero-detail.component.css
│   │   │   ├── hero-detail.component.html
│   │   │   ├── hero-detail.component.spec.ts
│   │   │   └── hero-detail.component.ts
│   │   ├── hero-manage/
│   │   │   ├── hero-manage.component.css
│   │   │   ├── hero-manage.component.html
│   │   │   ├── hero-manage.component.spec.ts
│   │   │   └── hero-manage.component.ts
│   │   └── message-center/
│   │       ├── message-center.component.css
│   │       ├── message-center.component.html
│   │       ├── message-center.component.spec.ts
│   │       └── message-center.component.ts
│   ├── animation/
│   ├── compose/
│   │   ├── compose.component.css
│   │   ├── compose.component.html
│   │   ├── compose.component.spec.ts
│   │   └── compose.component.ts
│   ├── crisis center/
│   │   ├── crisis.component.css
│   │   ├── crisis.component.html
│   │   ├── crisis.component.spec.ts
│   │   └── crisis.component.ts
│   ├── heroes/
│   │   ├── hero/
│   │   │   ├── hero.component.css
│   │   │   ├── hero.component.html
│   │   │   ├── hero.component.spec.ts
│   │   │   └── hero.component.ts
│   │   └── hero-search/
│   │       ├── hero-search.component.css
│   │       ├── hero-search.component.html
│   │       ├── hero-search.component.spec.ts
│   │       └── hero-search.component.ts
│   ├── login/
│   │   ├── login.component.css
│   │   ├── login.component.html
│   │   ├── login.component.spec.ts
│   │   └── login.component.ts
│   ├── mock/
│   │   ├── crisis-mock.ts
│   │   └── heroes-mock.ts
│   ├── model/
│   │   ├── crisis.ts
│   │   ├── hero.ts
│   │   └── message.ts
│   ├── page-not-found/
│   │   ├── page-not-found.component.spec.ts
│   │   └── page-not-found.component.ts
│   ├── service/
│   │   ├── auth-guard.service.spec.ts
│   │   ├── auth-guard.service.ts
│   │   ├── auth.service.spec.ts
│   │   ├── auth.service.ts
│   │   ├── crisis.service.spec.ts
│   │   ├── crisis.service.ts
│   │   ├── hero.service.spec.ts
│   │   ├── hero.service.ts
│   │   ├── message.service.spec.ts
│   │   └── message.service.ts
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
│   └── .gitkeep
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.css
├── test.ts
├── tsconfig.app.json
├── tsconfig.spec.json
└── typings.d.ts
</code></pre>
