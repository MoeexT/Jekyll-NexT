---
layout: post
title: Hive 文本格式
subtitle: 哈哈哈
date: 2018-02-06 00:00:00 +0800
description: 上课跟着老师写的博客
img: 2018-02-06-hive-text-encoding.jpg
tags: [Hive, 大数据] 
---

> 
> 

### 文本格式

给定数据格式：![]()

建表：

``` SQL
CREATE TABLE employees(
ename STRING,
salary FLOAT,
subordinates ARRAY<STRING>,
deductions MAP<STRING, FLOAT>,
address STRUCT<street:STRING, city:STRING, state:STRING, zip:INT>)
ROW FORMAT DELIMITED FIELDS TERMINATED BY '\001'
COLLECTION ITEMS TERMINATED   BY '\002'
MAP KEYS TERMINATED BY '\003'
LINES TERMINATED BY '\n' 
STORED AS TEXTFILE
;
```

导入数据：```LOAD DATA LOCAL INPATH '/home/user/test_data/employees.txt' INTO TABLE employees;```

----------------------------------------------

### HQL 日期

日期啊，对于大多数据库来说都是一个坎儿，
1. 在 Hive 里建立一个叫 “Dual {DUMMY} value:X” 的表，能做到存进去什么值，取出来什么值

```
CREATE TABLE dual (dummy STRING);
LOAD DATA LOCAL INPATH '/home/user/dual.txt' # dual.txt的内容:X
```
获得时间戳：```select unix_timestamp() from dual;```
查询时间：```select from_unixtime(1517882632, 'yyyyMMdd') from dual;```

### 表操作

**表名的更改：**

1. ALTER <br>
ALTER TABLE re_useri RENAME TO u_re_useri; 前后对比元数据，DFS文件夹，show tables表名均发生改变。

2. 元数据 <br>
直接更改元数据TBLS，show tables表名发生改变，DFS文件夹没有改变。
更改DBS表后，DFS文件夹没有改变，查询更新后的表，没有数据。
更改DFS文件夹名后，查询更新后表名成功。

3.导数据 复制表，改名，导数据

**列名更改**

1. 元数据

2. ALTER
```
ALTER TABLE u_useri 
CHANGE COLUMN reid id INT
COMMENT 'rename in 20180206'; # 注释
```

**增加列**
```
ALTER TABLE u_useri
ADD COLUMN(
addcol3 STRING COMMENT 'add in 20180206'
addcol4 INT);
```














