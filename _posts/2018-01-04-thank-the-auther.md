---
layout: post
title: Thank The Auther
date: 2018-01-04 00:00:00 +0300
description: 这是从Wordpress 向 GitHub 进发的一小步，但这是10#B722大家庭探索新知的一大步 # Add post description (optional)
img: coffee.jpg #david-freeman.jpg 
tags: [Programming, Learn] 
---


I would like to pay tribute to Artem Sheludko for this article.

谨以此文向博客主题的作者 Artem Sheludko 致敬。<br>
浏览该[主题](http://jekyllthemes.org/themes/flexible-jekyll/),和[GitHub](https://github.com/artemsheludko/flexible-jekyll)

![the Auther]({{site.baseurl}}/assets/img/insert/2018-01-04-david-freeman.jpg)

# GitHub
*章鱼猫* <br>
**喜欢GitHub的画风**

根据下图所描述的情形，我们可以想象：元旦的晚上，狗哥欢渡春宵彻夜不归。寝室只剩一半人口，闪闪的彩灯让人倍感寂寞。我（中间最帅的那位）拉开正在搞基的两人（两边），拍下了这副**鄙视图**。注：他们俩在鄙视我
![I and My friends]({{site.baseurl}}/assets/img/insert/2018-01-04-722.jpg)

下边的几种语言，你喜欢哪个？
* [Java](https://www.imooc.com/course/list?c=java)
* [Python](https://www.imooc.com/course/list?c=python)
* [jQuery](https://www.imooc.com/course/list?c=jquery)

**Python测试代码**

``` python
#! python3
# -*- coding:utf-8 -*- 

import time
import urllib.request as ulb


def download(url, proxy=None, num_retries=2):
	headers = {'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6'}
	print ("Downloading: "+url+"...")
	request = ulb.Request(url=url, headers=headers)
	time.sleep(1)
	try:
		html = ulb.urlopen(request).read()
	except ulb.URLError as e:
		print ("Download Error: " + str(e.reason))
		html = None
		if num_retries > 0:
			if hasattr(e, 'code') and 500 <= e.code < 600:
				return download(url, num_retries-1)
	return html
```

飞鸟集

>她的热切的脸，如夜雨似的，搅扰着我的梦魂。
>>Her wiseful face hunts my dreams like the rain at night.

