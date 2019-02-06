-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2019 at 11:56 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `post_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `likes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`comment_id`, `post_id`, `user_id`, `comment`, `created_at`, `likes`) VALUES
(1, 2, 4, 'coment on 2nd post', '2019-02-05 11:25:54', 0),
(2, 2, 4, 'coment on 2nd post 2nd commwn', '2019-02-05 11:26:18', 0),
(3, 11, 6, 'sdfdsf', '2019-02-06 07:56:10', 0),
(4, 11, 6, 'dhg', '2019-02-06 08:06:08', 0),
(5, 11, 6, 'new one', '2019-02-06 08:14:04', 0),
(6, 12, 6, 'my first comment on first status', '2019-02-06 08:15:53', 0);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_id`, `user_id`, `post`, `created_at`, `updated_at`) VALUES
(1, 5, 'Hello', '2019-02-05 10:05:16', '2019-02-05 10:05:16'),
(2, 6, 'Hello', '2019-02-05 10:05:46', '2019-02-05 10:05:46'),
(3, 6, 'This is fisrt test from web', '2019-02-06 06:08:00', '2019-02-06 06:08:00'),
(4, 6, 'This is Second test from web', '2019-02-06 06:15:33', '2019-02-06 06:15:33'),
(5, 6, 'This is 3test from web', '2019-02-06 06:18:20', '2019-02-06 06:18:20'),
(6, 6, 'This is Second test from web', '2019-02-06 06:21:34', '2019-02-06 06:21:34'),
(7, 6, 'Testing testingfd gfdgfdgfdgfdg fgdgfdgfdg', '2019-02-06 06:21:51', '2019-02-06 06:21:51'),
(8, 6, 'vgfdgfdgd fgdhfghfgd', '2019-02-06 06:40:50', '2019-02-06 06:40:50'),
(9, 6, 'Last test', '2019-02-06 06:42:21', '2019-02-06 06:42:21'),
(10, 6, 'sdfsd', '2019-02-06 06:42:26', '2019-02-06 06:42:26'),
(11, 6, 'vgfdgfdgd fgdhfghfgd Last', '2019-02-06 06:44:59', '2019-02-06 06:44:59'),
(12, 6, 'My first status', '2019-02-06 08:15:10', '2019-02-06 08:15:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `created_date`) VALUES
(5, 'Naveen', 'Dogra', 'Naveen.intersoft@gmail.com', 'f855d132705ddcf839f3b16ec39b74d36d8dc40e508f', '2019-02-05 14:16:59'),
(6, 'f12', 'f12', 'Navi@yopmail.com', 'a3a79d0ce2459c7c6f31003c49f8b90d7243a1', '2019-02-06 05:00:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
