---
layout: post
title: 在LaTex中使用自定义字体
date: 2019-02-22 00:00:00 +0800
description: 
categories:
- LaTex
tags: 
- LaTex
- 字体 
---

<blockquote class="blockquote-center">
    先把坑都踩一遍是为了以后踩更多的坑。
</blockquote>

刚接触LaTex，不太了解，网上搜了好多种方法都一直报错。这个例子刚测试的时候还编译不了，据猜测问题原因应该是编译缓存未清理或导入宏包的问题。

下边是找到的仅有的一种自定义字体的方法，来自[LaTeX技巧006：使用不同的英文字体](https://blog.csdn.net/ProgramChangesWorld/article/details/51502730)

{% highlight latex linenos %}
\documentclass[UTF8]{article}
\usepackage{fontspec}
\setmainfont{Times New Roman}%fontspec下这个命令设置全局默认字体
\begin{document}
Hello World!\\
%这也是一种调用方式，无须fontspec宏包
\font\rm="Calibri" at 14pt \rm This is Calibri\\
\font\rm="Candara" at 14pt \rm This is Candara\\
\font\rm="Mistral" at 14pt \rm This is Mistral\\
\font\rm="Bahnschrift" at 14pt \rm This is Bahnschrift\\
\font\rm="Pristina" at 14pt \rm This is Pristina\\
\font\rm="Microsoft Uighur" at 14pt \rm This is Microsoft Uighur\\
\font\rm="Bradley Hand ITC" at 14pt \rm This is Bradley Hand ITC\\
\font\rm="Nirmala UI" at 14pt \rm This is Nirmala UI\\
\font\rm="CCBackBeat" at 14pt \rm This is CCBackBeat\\
\font\rm="Supercell-Magic" \rm This is Supercell-Magic\\
\font\rm="Supercell-Magic" at 14pt \rm This is Supercell-Magic\\
\font\rm="Supercell-Magic" at 18pt \rm This is Supercell-Magic\\
\end{document}
{% endhighlight %}

显示结果

![](https://kxchww.sn.files.1drv.com/y4pax8dqvZMf73-k6bwxCONZDE-xBunsCaXU5yi_fC3KuD95_uO-srbavq59JeWL9T40CeidcOHJ6GI2nT9iDdaa43cab0DIdEljyXameTDztmu97x8noms_9A6kJe97wfnMoBY4w59196zdloPBfKuK2xUYubWintjuRbECeLm1hk9LYEjy_0MhR2tsRaGuexo_KmEfhFU5y3SK7GMaKXn4A/2019-02-22%20-fonts.jpg) 

