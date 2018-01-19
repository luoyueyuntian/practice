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
