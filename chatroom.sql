-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-08-19 11:12:36
-- 伺服器版本： 10.4.20-MariaDB
-- PHP 版本： 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `chatroom`
--

-- --------------------------------------------------------

--
-- 資料表結構 `chat_msg`
--

CREATE TABLE `chat_msg` (
  `username` varchar(255) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `timestamp` varchar(255) NOT NULL,
  `purpose` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `chat_msg`
--

INSERT INTO `chat_msg` (`username`, `msg`, `timestamp`, `purpose`) VALUES
('COCO', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sed', '03:40', 'group'),
('Steven', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '03:50', 'group'),
('COCO', '安安你好', '03:59', 'group'),
('Steven', '畫面很亂 畫面很亂', '14:32', 'group'),
('COCO', '123456123456', '14:35', 'group'),
('COCO', 'AAAAAAAAAAA', '10:55', 'group'),
('May', '新人報到 123123', '11:54', 'group'),
('Jan', '又舔 又舔嘴唇', '13:17', 'group'),
('Steven', 'yoyoyoyoyoyoyoyo', '15:55', 'group'),
('Steven', '話不要這麼多啦', '15:57', 'group'),
('Steven', 'YOOOOOOOOOOOO', '15:58', 'group'),
('May', 'TESTTEST', '16:15', 'group'),
('COCO', '安安你好', '16:46', 'undefined'),
('COCO', '安安你好', '16:47', 'May'),
('COCO', 'YOYOYO', '16:48', 'Jan'),
('Jan', '吃飯去 gogo', '16:52', 'Steven'),
('Jan', 'HAHAHAHAHA', '16:53', 'May'),
('Jan', 'mmmmm', '17:24', 'COCO'),
('Jan', 'yoyoyo', '17:27', 'group'),
('Jan', 'yoyoyoyoyo', '17:28', 'group'),
('Jan', 'ccccccccccccccc', '17:28', 'group'),
('Jan', '22222222222222', '17:30', 'group'),
('May', '33333333333', '09:10', 'group'),
('May', '5555555555', '09:10', 'group'),
('May', '7777777777777', '10:01', 'Jan'),
('May', '66666666666', '10:03', 'group'),
('Steven', 'gogogo', '11:28', 'Jan'),
('May', 'HELLO 午安', '13:28', 'COCO'),
('May', '123123123123123', '13:28', 'COCO'),
('COCO', '中秋節烤肉阿', '14:01', 'May'),
('May', 'GOGOGO', '14:18', 'COCO'),
('Steven', '不要笑 不要笑', '15:22', 'group'),
('Steven', '又舔 又舔嘴唇', '15:31', 'group'),
('Steven', '123123123', '15:42', 'Jan'),
('Jan', '666666666666', '15:54', 'May'),
('Jan', '5555555555', '15:55', 'May');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT '自增ID',
  `username` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `token` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `token`) VALUES
(15, 'COCO', '12345', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvY28iLCJwYXNzd29yZCI6IjEyMzQ1IiwiaWF0IjoxNjI5MTYwNjMwLCJleHAiOjE2MjkxNjQyMzB9.ubT6-xmWY27CynKPFyH64IWrZ8ONS8x6UwnvIpsyAPI'),
(16, 'Steven', '12345', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0ZXZlbiIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2MjkxNzczNTQsImV4cCI6MTYyOTE4MDk1NH0.RgE44mvNPOCVdQC79SNmorEYNoc27pVzN4zzhbRkxa4'),
(17, 'May', '12345', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2MjkyNDk3NTgsImV4cCI6MTYyOTI1MzM1OH0.Z5s1lL72_7fNteA-O3_iCDgUWseGntp72GmfNU5suFQ'),
(19, 'Jan', '12345', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphbiIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2MjkyNTMxNTksImV4cCI6MTYyOTI1Njc1OX0.qBvneckUGZbS-tTb0-g3qgW_QFbgidPd4w_3x1xDrGw');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID', AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
