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

#### 我去！！！！今晚就折腾了两个事
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
但是在执行webpack 的时候，即在编译main.js的时候，老是提醒没办法找到正确的loader，我就醉了，在react-demo是正常编译的，后来发现，js文件也要使用babel-loader

- 在安装的sass-loader的时候。老是报错安装失败！！！我又醉了！！！在react-demo里面也是正常安装的！！！后来发现，在 WINDOWS 环境下，需要手动安装python环境！！！（顺便一题，现在安装sass-loder需要依赖node-sass）
- 日起狗来，真的是键盘都永不顺畅。。。
