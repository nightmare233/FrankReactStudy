# FrankReactStudy
Frank React Study
安装Nodejs
升级NodeJS   
npm install -g npm
创建文件夹frankreactdemo
打开CMD 进入frankreactdemo
创建package.json 项目身份证
npm init
创建webpack.config.js 配置文件：

按照config中的entry配置，创建app文件夹和main.js文件，boundle.js和build文件夹会自动创建。

全局安装webpack
npm install webpack -g
本地安装 npm install --save-dev webpack

至此可以试用webpack命令。


引用bable-loader ，改写config文件。


安装babel：
先后安装
npm -install --save-dev babel-core 
npm -install --save-dev babel-loader
npm -install --save-dev  babel-preset-es2015

至此能够用webpack+babel进行自动打包和解析了。

安装react
npm install --save-dev react
npm install --save-dev react-dom
npm install --save-dev babel-preset-react
编辑config文件。增加react的preset


至此已经完成初始配置。
结果：

