# webpack test1



需要做的是把当前的专题用webpack包装起来.




<br /><br />
## log

0710 主题

webpack html-loader









<br /><br />
## PART 1







- 故事的第一阶段

  保留index.html中的主要内容.

  ​

- 故事的第二阶段

  ​全面的js化.




<br /><br />


# PART 2





最后的最后, 我很想说的一句话是:



```
欢迎进入黑暗世界:)
```







by wanglinzhizhi














<br /><br />


## 这是项目的修改日志

Tips: 时间点不用记录,因为每次push,每次commit系统都有时间记录的.






<br /><br />

## 关于webpack的log

1. 我尝试把所有的script的标签全部去掉,只引入style. 测试.对css样式的压缩.
    成功了一半,样式确实是引入了. 但是显然不够.
    因为最后的图片的路径变化了,所以的我的图片有些的加载错误.
    但是主体样式确实 是出来了.  


   ```
   done:其实这里需要注意的出口的时候, 设置publicPath
   ```

   ​

   ​

2 . next to pack -> js








## 标准化 的过程

目录结果

```
├─dev
│  ├─css
│  ├─img
│  └─js
├─dist
│  ├─css
│  ├─img
│  └─js
└─src
    ├─css
    ├─img
    └─js
```



- src  : 源码目录
- dev : 开发时候产生的目录
- dist : 最终产品的目录








<br /><br />



## -

#### 该不该用模板呢? 怎么用模板?

```
可以直接把html 作为模板使用.这里面连变量都不需要要设置.
```









<br /><br />

#### next hash 化,去缓存 -> 必须hash的原因, 缓存. -> html-webpack-plugin









<br />



#### 经典问题, 第三方插件对jquery的依赖问题.怎么解决呢?

```
new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
```

部分代码正确执行了. 还有些代码没有正确执行.




<br /><br />
## logo 0715

我试着把jquery 换成了1.12.x版本, 额,基本没事儿,因为我把jquery1.12.x版本的内容放到原版中没有问题.虽然有个小报错, 但是没有关系.     


<br /><br />
## #1

// 发现新的 问题, 我知道了成千上万个报错来自于哪儿了, jquery 的版本过低, 我卸载了jquery 1.12.x之后, 安装了1.8.3 就报错了. 现在试一下装回来,然后看看报错会不会消失,如果报错消失,说明,问题在这儿

test...

// done 果然.



<br /><br />
## #2

那么新的问题是,如果我们必须用1.8.3 版本的 jquery ,因为滚动条的那个插件需要的1.8.3 之前的.解决依赖问题.

有两种思路
- 用require的方法把jquery引进来
- 将插件中的1.8.3 之后不兼容的 属性重写一下不就得了



<br /><br />
## #3
发现一个新的问题. 就是,如果我的代码注入的在head中貌似也会引起问题. 加载顺序的问题吧,我猜



<br /><br />
## #4 
整理下, 现在解决的问题

1.  jquery的 依赖问题 done
2.  html代码直接作为模板打包到dist的目录


需要继续解决的问题

- 各个模块的加载顺序 就是 `html-webpack-plugin` 的注入顺序的问题.
- 对低版本的 jquery的依赖怎么搞.另外,我想把部分的内容inject 到head 另一部分inject 到body怎么整.
- 关于调试, 怎么方便的 调试, 使得迁移成本尽可能小, 无痛, 无缝......... loading....
- 关于 怎么优化webpack的性能.....loading....

<br /><br />

## #6

关于调试
可以用映射,映射到源文件上 这样调试的时候不会不知道代码在哪儿.

使用`devtool: 'eval-source-map' ` 放在配置文件中.
需要注意的是, `css?sourceMap` 对于css ,只需要给css-laoder加


<br /><br /><br /><br /><br /><br /><br /><br /><br />
## vscode 快捷键收集
```
快捷键

alt+shift+F 代码格式化

ctrl+` 内嵌终端

主要是可以不用页面切换, 缺点是, cmd的终端太弱.... mac上好一点. 可以用zsh :)



```


Terminal 中不能输入中文.恩....(T_T)