

/*

  package.json  定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称，版本号等）

  创建package.json:
    1、npm init
    2、npm init -yes

  安装模块并把模块写入package.json:

    1、npm install ModuleNmae --save         配置当前程序所依赖的其他包
    2、npm install ModuleNmae --save-dev     同上，但只会下载模块，而不会下载这些模块的测试和文档框架

  --save 安装时把模块写入package.json的dependencies字段
  --save-dev 安装时把模块写入package.json的devDependencies字段

  文件中依赖版本号前面的符号：
    再次npm install时
    ^ 表示第一位版本号不变，后面两位取最新；
    ~ 表示前两位不变，最后一个取最新；
    * 表示全部取最新


*/
