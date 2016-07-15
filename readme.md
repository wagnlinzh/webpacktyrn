# webpack test1



需要做的是把当前的专题用webpack包装起来.

## log

0710 主题

webpack html-loader










## PART 1







- 故事的第一阶段

  保留index.html中的主要内容.

  ​

- 故事的第二阶段

  ​全面的js化.







# PART 2





最后的最后, 我很想说的一句话是:



```
欢迎进入黑暗世界:)
```







by wanglinzhizhi














<br /><br /><br /><br /><br /><br />



## 这是项目的修改日志

Tips: 时间点不用记录,因为每次push,每次commit系统都有时间记录的.






<br /><br /><br /><br /><br /><br /><br />

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








<br /><br /><br /><br /><br /><br /><br /><br />



## -

#### 该不该用模板呢? 怎么用模板?

```
可以直接把html 作为模板使用.这里面连变量都不需要要设置.
```









<br /><br /><br /><br /><br />

#### next hash 化,去缓存 -> 必须hash的原因, 缓存. -> html-webpack-plugin









<br /><br /><br /><br /><br /><br /><br />



#### 经典问题, 第三方插件对jquery的依赖问题.怎么解决呢?

```
new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
```

部分代码正确执行了. 还有些代码没有正确执行.




<br /><br /><br /><br /><br /><br /><br />
## logo 0715

我试着把jquery 换成了1.12.x版本, 额,基本没事儿,因为我把jquery1.12.x版本的内容放到原版中没有问题.虽然有个小报错, 但是没有关系.     



// 发现新的 问题, 我知道了成千上万个报错来自于哪儿了, jquery 的版本过低, 我卸载了jquery 1.12.x之后, 安装了1.8.3 就报错了. 现在试一下装回来,然后看看报错会不会消失,如果报错消失,说明,问题在这儿

test...

// done 果然.


那么新的问题是,如果我们必须用1.8.3 版本的 jquery ,因为滚动条的那个插件需要的1.8.3 之前的.解决依赖问题.