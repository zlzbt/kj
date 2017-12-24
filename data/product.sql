##设置下面SQL语句的字符集
SET NAMES UTF8;
##删除数据库kj如果存在的话
DROP DATABASE IF EXISTS kj;
##创建数据库kj，字符集UTF8
CREATE DATABASE kj CHARSET=UTF8;
##进入数据库kj
USE kj;

##创建型号种类表
CREATE TABLE kj_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

##创建产品表
CREATE TABLE kj_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  lname VARCHAR(32),          #商品名称
  price DECIMAL(10,2),        #价格
/*--  spec VARCHAR(64),           #规格*/
 /* color VARCHAR(64),          #颜色*/
/*--  details VARCHAR(1024),      #产品详细说明*/
/*--  shelf_time BIGINT,          #上架时间*/
  save_count INT             #库存
/*--  is_onsale BOOLEAN           #是否促销中*/
);

##创建产品图片表
CREATE TABLE kj_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #科技产品编号
  sm VARCHAR(128),            #小图片路径
/*--  md VARCHAR(128),            #中图片路径*/
  lg VARCHAR(128)             #大图片路径
);

##创建用户表
CREATE TABLE kj_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  avatar VARCHAR(128),
  user_name VARCHAR(32),
  gender INT
);

/**收货地址信息**/
CREATE TABLE kj_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE kj_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE kj_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**创建用户订单详情表**/
CREATE TABLE kj_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);
/****首页轮播广告商品****/
CREATE TABLE kj_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64)
/*--  href VARCHAR(128)*/
);

/****首页商品****/
CREATE TABLE kj_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
/*--  details VARCHAR(128),*/
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

/*******************/
/******数据导入******/
/*******************/

/**科技型号种类家族**/
INSERT INTO kj_laptop_family VALUES
(NULL,'智能手表'),
(NULL,'智能眼镜'),
(NULL,'机器人'),
(NULL,'体感车'),
(NULL,'无人机');

/**产品**/
INSERT INTO kj_laptop VALUES
(1,1,"Apple Watch Sport",2288.00,99),
(2,1,"儿童手表",2288.00,22),
(3,1,"公子小白",2288.00,44),
(4,2,"Gear VR",2288.00,6),
(5,2,"Pico Neo",2288.00,78),
(6,2,"Apple Watch Sport",2288.00,99),
(7,3,"ALPHA 2",2288.00,12),
(8,3,"Apple Watch Sport",2288.00,43),
(9,3,"ALPHA 2",2288.00,55),
(10,4,"九号平衡车",2288.00,2),
(11,4,"公子小白",2288.00,3),
(12,4,"Pico Neo",2288.00,5),
(13,5,"Phantom 4",2288.00,6),
(14,6,"Phantom 4",2288.00,9),
(15,7,"公子小白",2288.00,23);


/*创建产品图片表*/
INSERT INTO kj_laptop_pic VALUES
(NULL, 1, 'img/thumb1_1sm.jpg','img/thumb1.jpg'),
(NULL, 2, 'img/thumb1_2sm.jpg','img/thumb1_2.jpg'),
(NULL, 3, 'img/thumb1_3sm.jpg','img/thumb1_3.jpg'),
(NULL, 4, 'img/thumb1_4sm.jpg','img/thumb1_4.jpg'),
(NULL, 5, 'img/thumb1_5sm.jpg','img/thumb1_5.jpg'),
(NULL, 6, 'img/thumb1_6sm.jpg','img/thumb1_6.jpg'),
(NULL, 7, 'img/thumb1.jpg','img/thumb3.jpg'),
(NULL, 8, 'img/thumb1.jpg','img/thumb4.jpg'),
(NULL, 5, 'img/thumb1.jpg','img/thumb5.jpg'),
(NULL, 6, 'img/thumb6_.jpg','img/thumb6.jpg'),
(NULL, 7, 'img/thumb7.jpg','img/thumb7.jpg'),
(NULL, 8, 'img/thumb8.jpg','img/thumb8.jpg'),
(NULL, 9, 'img/thumb9.jpg','img/thumb9.jpg'),
(NULL, 10, 'img/thumb10.jpg','img/thumb10.jpg');

/**用户信息**/
INSERT INTO kj_user VALUES
(NULL,'dingding','123456','img/avatar/default.png', '丁然', 1),
(NULL,'dangdang','123456','img/avatar/default.png', '当当', 0),
(NULL,'doudou','123456','img/avatar/default.png', '张豆', 1),
(NULL,'yaya','123456','img/avatar/default.png', '王小丫', 0);

/****首页轮播广告商品****/
INSERT INTO kj_index_carousel VALUES
(NULL, 'img/bg-1.png','轮播广告商品1'),
(NULL, 'img/ng-2.png','轮播广告商品2');

/****首页商品****/
INSERT INTO kj_index_product VALUES
(NULL, 'Apple Watch Sport','img/thumb1.png', 6988, 'product_details.html?lid=1', 1, 1, 1),
(NULL, '儿童手表', 'img/thumb1.png', 3488, 'product_details.html?lid=2', 2, 2, 2),
(NULL, '公子小白', 'img/thumb1.png', 5399, 'product_details.html?lid=3', 3, 3, 3),
(NULL, 'Gear VR', 'img/thumb1.png', 4966, 'product_details.html?lid=4', 4, 4, 4),
(NULL, 'Pico Neo','img/thumb1.png', 6299, 'product_details.html?lid=5', 5, 5, 5),
(NULL, 'ALPHA 2','img/thumb1.png', 5199, 'product_details.html?lid=7', 6, 6, 6),
(NULL, '九号平衡车', 'img/index/thumb1.png', 5799, 'product_details.html?lid=10', 7, 7, 7),
(NULL, 'Phantom 4','img/thumb1.png', 5199, 'product_details.html?lid=13', 8, 8, 8);
