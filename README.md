#### 重新构建建立（2016.12.4）
1. 使用React重新构建
2. 使用webpack打包
3. Nginx部署Node应用
4. 一如既往使用scss预编译css
5. ECMAScript 2015

#### welcome React Resume
- to be continue(next())

### 使用原生node建了一个架子(简陋的(┬＿┬))
- 原生的果然比express难写啊(┬＿┬)
- url = url.parse(request.url).pathname;//解析url
- 记得在response的时候设置返回类型
```javascript
response.writeHead(200,{'content-type':'text/html'});
```

#### 今晚就折腾了两个事
- 在resume这个仓库里面，在 WINDOWS 环境下，已经在webpack.config.js里面写好了loader
```javascript
loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                    presets: ['es2015', 'react']
                }
}]
```
但是在执行webpack 的时候，即在编译main.js的时候，老是提醒没办法找到正确的loader，在react-demo是正常编译的，后来发现，js文件也要使用babel-loader

- 在安装的sass-loader的时候。老是报错安装失败，但是在react-demo里面是正常安装的。后来发现，在 WINDOWS 环境下，需要手动安装python环境。（顺便一提，现在安装sass-loder需要依赖node-sass）
- 日起狗来，真的是键盘都用不顺畅。。。
- 然后，我安装了python2，再次安装node-sass的时候提示缺少.net Frame2.0的SDk，最后我换成了pyhthon3
- 然后再次安装node-sass的时候 --save不行，最终进行了全局安装
- 安装sass-loder的时候提示node版本过低（4.6），卸载node从官网下载最新稳定版本
- 最终安装成功


#### ================== 这里是分割线 ==================

#### 接着上面的(2017.2.14)
说一点废话，连续两个月了终于把项目弄上线了，本来三个人做的项目结果最后只剩我一个人搞，哈哈，憔悴得很。

##### 使用webpack2
嗯，前面的所写的东西都是用`webpack1.14.0`写的，当然，可能是以为新的更酷炫（那不然人家为什么要更新），所以这里改用`webpack2.2.1`。到目前为止体验到了一点的不同，首先感觉就是编译更快了：在配置文件中将loaders改成了rules，然后再加载loader的时候必须要把名字写全比如`css-loader`不能写作`css`，必须写作`css-loader`

##### `scss`文件中的图片打包
* 在scss文件中，图片的引入使用相对路径即可
* 打包的时候我用到了`url-loader`和`img-loader`（应该还有`file-loader`），具体说明可以上[npmjs](http://www.npmjs.com)上面查看。

#### 使用ES6
* 将语法替换成了ES6的语法，但是还不是很熟练，所以还不是很规范
* 然后今天下午折腾了个事情，就是写好组件过后死活加载不出来，结果没想到同时一定要记住`Class`首字母一定要大写！

#### 那么，新的问题
* 使用NODE搭建的时候，模板引擎使用的是`swig-templates`，但是每次模板加载完毕过后，在模板里面的标签
```HTML
<script src="./index.js"></script>
```
总会被NODE当做一个路由来解析，导致无法正常加载这个webpack打包后的静态资源，我现在才意识到，以前使用`express`的时候，静态资源管理已经做好了，这就是框架啊。
* 在NODE中添加静态资源，虽然没成功，因为没想到这个实现的思路，完善中。。。(2017.2.15)
* 这里要说一下，在`Express`主要使用了[serve-static](https://www.npmjs.com/package/serve-static)这个静态文件服务器来处理静态文件，但是在原生的nodejs并没有这个中间件，所以这里我打算起一个静态文件管理服务器来处理静态文件，那么这里就应该要使用pm2来管理进程以及nginx的映射了，先搞起来
* 可以，很强势，已经基本完成了，整体开发技术栈为：
    1. NODE(原生)
    2. React
    3. Webpack2.2.1
* 然后使用Nginx部署这个NODE项目，使用pm2监听服务
* 最后的工作就是完善以及优化代码了

#### 错误的理解
其实上面的问题不是问题，只是在下的理解错误而已。静态资源管理服务器如字面意思一样，只是用来管理静态资源的。而我无法正常加载是因为在写路由的时候，读取文件时的路由判断是没写对的😂

### ================== 我又是分割线（2017.2.16） ===================

#### 终于算是把架子搭建好，那么就是样式以及内容的修改
* 🤣自己封装了一下[Promise](https://github.com/Neras/Resume/blob/master/scripts/promise.js)
* 稍微改变了promise的调用方式
* 使用流（stream）和管道（pipe）来传输静态文件
* 通过选择不同的导航来显示不用的内容
* webhook test
* webhook test
* webhook success finally

#### 分支说明
- dev: 测试开发分支
