-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2022 at 02:43 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mgr`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--
CREATE Database `mgr`;
CREATE TABLE `movie` (
  `mid` int(11) NOT NULL,
  `title` text NOT NULL,
  `year` int(11) NOT NULL,
  `runtime` text NOT NULL,
  `genre` text NOT NULL,
  `director` text NOT NULL,
  `writer` text NOT NULL,
  `actor` text NOT NULL,
  `metascore` int(11) NOT NULL,
  `imdb` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`mid`, `title`, `year`, `runtime`, `genre`, `director`, `writer`, `actor`, `metascore`, `imdb`) VALUES
(1, 'Avatar', 2011, '162 min', 'Action', 'Hollywood', 'Bollywood', 'Tom holland', 50, 8),
(2, 'Avengers', 2019, '130 min', 'Adventure', 'Russo brothers', 'Human', 'Iron Man', 92, 9),
(3, 'Spiderman', 2020, '149 min', 'Comedy', 'Man', 'Women', 'Jackie chan', 81, 7),
(4, 'Batman', 2014, '120 min', 'Action', 'Human', 'Man', 'Batman', 72, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`mid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
