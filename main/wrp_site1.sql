-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Feb 09, 2016 at 02:21 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wrp_site1`
--

-- --------------------------------------------------------

--
-- Table structure for table `games_info`
--

CREATE TABLE `games_info` (
  `game_id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(800) NOT NULL,
  `img_src` varchar(100) NOT NULL,
  `brief` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `games_info`
--

INSERT INTO `games_info` (`game_id`, `title`, `description`, `img_src`, `brief`) VALUES
(1, 'Run Sheeda Run', 'Run Sheeda Run is an endless runner unlike any other- it has a desi core and is a roller coaster cultural ride. Full of desi humor and great gameplay- it is an ode to the popularity of rickshaws, cricket, filmi music, and the whimsical plot of an unlikely friendship between a boy and his chicken. All the action takes place in the cultural heartbeat of Pakistan - Lahore! Sheeda is your average Pakistani boy in a not so average endless runner! Guide Sheeda as he saves his beloved friend and sidekick chicken from a butcher who dreams only of making a tikka soup out of it.', 'rsr.jpg', 'All the action takes place in the cultural heartbeat of Pakistan - Lahore! Sheeda is your average Pakistani boy in a not so average endless runner!'),
(2, 'HEX:99', 'Mercilessly Difficult, Daringly Addictive! HEX:99 can be explained with a simple equation : (simple controls + awesome music) x insane difficulty + frenzied action = SUPER ADDICTIVE. HEX:99 is an incredibly simple, yet incredibly challenging action game. It is accessible due to the simple controls, awesome music and beautiful, vivid visuals. It''s challenge level is high but ultimately rewarding for those who eventually overcome it.', 'hex.png', 'Mercilessly Difficult, Daringly Addictive! HEX:99 can be explained with a simple equation : (simple controls + awesome music) x insane difficulty + frenzied action = SUPER ADDICTIVE.'),
(3, 'Lost Twins', 'Poor little Ben and Abi! They are left adrift in a magical room, hopeless and lost. Never fear, for you can reunite them! Guide the young siblings by matching up rooms and directing them to the magical red door! It’s a mind bending puzzle game that takes the sliding puzzle mechanics and blends them with platforming gameplay. Assort rooms and reunite the siblings while collecting stars along the way. But beware, for obstacles are bound to flow your way. Swap, Shift and Shuffle your way to the end! Are you up for the challenge?\r\n', 'lt2.png', 'Poor little Ben and Abi! They are left adrift in a magical room, hopeless and lost. Never fear, for you can reunite them! Guide the young siblings by matching up rooms and directing them to the magical red door!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `games_info`
--
ALTER TABLE `games_info`
  ADD PRIMARY KEY (`game_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `games_info`
--
ALTER TABLE `games_info`
  MODIFY `game_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
