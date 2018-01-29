---
layout: post
title: 给 GitHub Pages 博客配置云解析
date: 2018-01-28 00:00:00 +0800
description: 
img: 2018-01-28-pencial.jpg
tags: [Github Pages] 
---

> Thank the flame for its light, but do not fotget the lampholder standing in the shade with coonstancy of patience. <br>
> 谢谢火焰给你光明，但是不要忘了那执灯的人，他是坚忍地站在黑暗当中呢。——《飞鸟集》

云解析就是绑定域名，这个域名 “yuwancumian666.top” 是在阿里云注册的，两块钱😄
在 GitHub Pages 上搭好博客之后可以设置云解析。

### 创建 CNAME 文件

首先在博客的根目录新建一个文件：“CNAME”，内容为要解析的域名：“yuwancumian666.top”，注意不要添加 http://或 www 等前缀。在 Windows 下如果不能建立没有后缀名的文件时，则可以 shift + 右键打开 Power Shell 输入 ```echo yuwancumian666.top > CNAME```以建立该文件。

### 设置云解析

在阿里云的控制台找到 “云解析 DNS” 一栏，在域名下添加解析如下：

![cloud-dns]({{site-url}}/assets/img/insert/2018-01-08-cloud-dns.png)

* 设置主机记录www，记录类型为A，记录值是IP192.30.252.153。其中192.30.252.153是Github Pages服务器指定的IP地址，访问该IP地址即表示访问Github Pages
* 设置主机记录www，记录类型为A，记录值是IP192.30.252.154。
* 设置主机记录@，记录类型为CNAME，记录值是yuwancumian666.github.io.。表示将 http://yuwancumian666.top 这个主域名映射到  yuwancumian666.github.io

添加完解析之后，等待大约十分钟，你的博客就可以访问了。