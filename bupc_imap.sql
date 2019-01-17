-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2019 at 03:50 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bupc_imap`
--

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--

CREATE TABLE `buildings` (
  `id` int(255) NOT NULL,
  `building_code` varchar(4) NOT NULL,
  `building_name` varchar(555) NOT NULL,
  `image_link` varchar(555) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `updated_by` varchar(555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`id`, `building_code`, `building_name`, `image_link`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
(1, 'CESD', 'COMPUTER AND ENGINEERING STUDIES DEPARTMENT', 'img/real_img/CESD Building.jpg', '2019-01-10 00:00:00', '2019-01-10 00:00:00', '2019-01-10 00:00:00', 'Administrator'),
(2, 'SB', 'SALCEDA BUILDING', 'img/real_img/Salceda Building.jpg', '2019-01-10 00:00:00', '2019-01-10 00:00:00', '2019-01-10 00:00:00', 'Administrator'),
(3, 'AB', 'ADMIN BUILDING', 'img/real_img/Admin Building.jpg', '2019-01-10 00:00:00', '2019-01-10 00:00:00', '2019-01-10 00:00:00', 'Administrator'),
(4, 'TB', 'TECHNOLOGY BUILDING', 'img/real_img/Technology Building.jpg', '2019-01-10 00:00:00', '2019-01-10 00:00:00', '2019-01-10 00:00:00', 'Administrator'),
(5, 'MWSB', 'MACHINE AND WELDING SHOP BUILDING', 'img/real_img/Machine and Welding Shop Building.jpg', '2019-01-13 00:00:00', '2019-01-13 00:00:00', '2019-01-13 00:00:00', 'Administrator'),
(6, 'CB', 'CACAPIT BUILDING', 'img/real_img/Cacapit Building 1.jpg', '2019-01-13 00:00:00', '2019-01-13 00:00:00', '2019-01-13 00:00:00', 'Administrator'),
(7, 'AREC', 'AFFILIATED RENEWABLE ENERGY CENTER FOR REGION V', 'img/real_img/AREC Building.jpg', '2019-01-13 00:00:00', '2019-01-13 00:00:00', '2019-01-13 00:00:00', ''),
(8, 'ND', 'NURSING DEPARTMENT', 'img/real_img/Nursing Building.jpg', '2019-01-13 00:00:00', '2019-01-13 00:00:00', '2019-01-13 00:00:00', ''),
(9, 'FTB', 'FOOD TECHNOLOGY BUILDING', 'img/real_img/Food Technology Building.jpg', '2019-01-13 00:00:00', '0000-00-00 00:00:00', '2019-01-13 00:00:00', ''),
(10, 'REPC', 'RESEARCH, EXTENSION, AND PRODUCTION CENTER', 'img/real_img/Research Extension and Production Center Building.jpg', '2019-01-13 00:00:00', '0000-00-00 00:00:00', '2019-01-13 00:00:00', ''),
(11, 'ATB', 'AUTOMOTIVE BUILDING', 'img/real_img/Automotive Building.jpg\r\n', '2019-01-13 00:00:00', '0000-00-00 00:00:00', '2019-01-13 00:00:00', ''),
(12, 'CSS', 'COUNCIL STUDENT SERVICE', 'img/real_img/Council Student Service Building.jpg', '2019-01-13 00:00:00', '0000-00-00 00:00:00', '2019-01-13 00:00:00', ''),
(13, 'BG', 'BUPC Gymnasium', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', ''),
(14, 'AVR', 'AUDIO VISUAL ROOM BUILDING', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', ''),
(15, 'D', 'DORMSTEL AND BUSINESS CENTER', 'img/real_img/Dorm.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', ''),
(16, 'C', 'CANTEEN', '	\r\nimg/real_img/Canteen.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(255) NOT NULL,
  `building_id` int(5) NOT NULL,
  `room_name` varchar(555) NOT NULL,
  `room_type` varchar(555) NOT NULL COMMENT '0 = room, 1 =  faculty office, 2 = comfort room, 3 = Office, 4 = School Facility, 5 = EVENT Room',
  `created_at` datetime NOT NULL,
  `updated_at` varchar(555) NOT NULL,
  `updated_by` varchar(555) NOT NULL,
  `created_by` varchar(555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `building_id`, `room_name`, `room_type`, `created_at`, `updated_at`, `updated_by`, `created_by`) VALUES
(1, 1, 'EBC11', '0', '2019-01-10 00:00:00', '', '', ''),
(2, 1, 'EBC12', '0', '2019-01-10 00:00:00', '', '', ''),
(3, 1, 'EBC13', '0', '2019-01-10 00:00:00', '', '', ''),
(4, 1, 'EBC14', '4', '2019-01-10 00:00:00', '', '', ''),
(5, 1, 'ECB15', '4', '2019-01-10 00:00:00', '', '', ''),
(6, 1, 'ECB16', '4', '2019-01-10 00:00:00', '', '', ''),
(7, 1, 'ECB17', '4', '2019-01-10 00:00:00', '', '', ''),
(8, 1, 'ECB18', '4', '2019-01-10 00:00:00', '', '', ''),
(9, 1, 'ECB19', '4', '2019-01-10 00:00:00', '', '', ''),
(10, 1, 'CESD OFFICE', '1', '2019-01-10 00:00:00', '', '', ''),
(11, 1, 'CR Female 1', '2', '2019-01-10 00:00:00', '', '', ''),
(12, 1, 'CR Female 2', '2', '2019-01-10 00:00:00', '', '', ''),
(13, 1, 'CR Male 1', '2', '2019-01-10 00:00:00', '', '', ''),
(14, 1, 'CR Male 2', '2', '2019-01-10 00:00:00', '', '', ''),
(15, 2, 'SB 1', '0', '2019-01-10 00:00:00', '', '', ''),
(16, 2, 'SB 2', '0', '0000-00-00 00:00:00', '', '', ''),
(17, 2, 'SB 3', '0', '0000-00-00 00:00:00', '', '', ''),
(18, 2, 'SB 4', '0', '0000-00-00 00:00:00', '', '', ''),
(19, 2, 'SB 5', '0', '0000-00-00 00:00:00', '', '', ''),
(20, 2, 'SB 6', '0', '0000-00-00 00:00:00', '', '', ''),
(21, 2, 'SB 7', '0', '0000-00-00 00:00:00', '', '', ''),
(22, 2, 'SB 8', '0', '0000-00-00 00:00:00', '', '', ''),
(23, 2, 'SB 9', '0', '0000-00-00 00:00:00', '', '', ''),
(24, 2, 'SB 11 (GENERAL/ANALYTICAL CHEMISTRY LABORATORY)', '4', '0000-00-00 00:00:00', '', '', ''),
(25, 2, 'BIOCHEMISTRY/ORGANIC CHEMISTRY LABORATORY', '4', '0000-00-00 00:00:00', '', '', ''),
(26, 2, 'SB 13', '0', '0000-00-00 00:00:00', '', '', ''),
(27, 2, 'SB 14', '0', '0000-00-00 00:00:00', '', '', ''),
(28, 2, 'SB 15', '0', '0000-00-00 00:00:00', '', '', ''),
(29, 2, 'SB 16', '0', '0000-00-00 00:00:00', '', '', ''),
(30, 2, 'SB 17 (SPEECH LAB)', '4', '0000-00-00 00:00:00', '', '', ''),
(31, 2, 'SB 23', '0', '0000-00-00 00:00:00', '', '', ''),
(32, 2, 'SB 22', '0', '0000-00-00 00:00:00', '', '', ''),
(33, 2, 'SB 21', '0', '0000-00-00 00:00:00', '', '', ''),
(34, 2, 'MUSIC ROOM', '4', '0000-00-00 00:00:00', '', '', ''),
(35, 2, 'EXTENSION LIBRARY', '4', '0000-00-00 00:00:00', '', '', ''),
(36, 2, 'OLD LIBRARY', '4', '0000-00-00 00:00:00', '', '', ''),
(37, 2, 'STOCK ROOM', '4', '0000-00-00 00:00:00', '', '', ''),
(38, 2, 'ACCREDITATION ROOM', '4', '0000-00-00 00:00:00', '', '', ''),
(39, 2, 'OFFICE OF STUDENTS AFFFAIRS', '3', '0000-00-00 00:00:00', '', '', ''),
(40, 2, 'OFFICE OF THE LIBRARIAN', '4', '0000-00-00 00:00:00', '', '', ''),
(41, 2, 'TEACHER EDUCATION DEPARTMENT OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(42, 2, 'TEACHER EDUCATION FACULTY ROOM', '1', '0000-00-00 00:00:00', '', '', ''),
(43, 2, 'CR FEMALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(44, 2, 'CR FEMALE 2', '2', '0000-00-00 00:00:00', '', '', ''),
(45, 2, 'CR FEMALE 3', '2', '0000-00-00 00:00:00', '', '', ''),
(46, 2, 'CR FEMALE 4', '2', '0000-00-00 00:00:00', '', '', ''),
(47, 2, 'CR FEMALE 5', '2', '0000-00-00 00:00:00', '', '', ''),
(48, 2, 'CR MALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(49, 2, 'CR MALE 2', '2', '0000-00-00 00:00:00', '', '', ''),
(50, 2, 'CR MALE 3', '2', '0000-00-00 00:00:00', '', '', ''),
(51, 2, 'CR MALE 4', '2', '0000-00-00 00:00:00', '', '', ''),
(52, 2, 'CR MALE 5', '2', '0000-00-00 00:00:00', '', '', ''),
(53, 3, 'AB 12', '0', '0000-00-00 00:00:00', '', '', ''),
(54, 3, 'AB 13', '0', '0000-00-00 00:00:00', '', '', ''),
(55, 3, 'AB 14', '0', '0000-00-00 00:00:00', '', '', ''),
(56, 3, 'AB 21', '0', '0000-00-00 00:00:00', '', '', ''),
(57, 3, 'IMO', '3', '0000-00-00 00:00:00', '', '', ''),
(58, 3, 'ADMIN OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(59, 3, 'DEAN\'S OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(60, 3, 'ASSISTANT DEAN\'S OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(61, 3, 'CASHIER', '3', '0000-00-00 00:00:00', '', '', ''),
(62, 3, 'CR FEMALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(63, 3, 'CR MALE 2', '2', '0000-00-00 00:00:00', '', '', ''),
(64, 5, 'AB18', '0', '0000-00-00 00:00:00', '', '', ''),
(65, 4, 'TB 1', '0', '0000-00-00 00:00:00', '', '', ''),
(66, 4, 'TB 2', '0', '0000-00-00 00:00:00', '', '', ''),
(67, 4, 'TB 3', '0', '0000-00-00 00:00:00', '', '', ''),
(68, 4, 'TB 4', '3', '0000-00-00 00:00:00', '', '', ''),
(69, 4, 'OFFICE OF THE DEPARTMENT CHAIRMAN (TECHNOLOGY DEPT OFFICE)', '3', '0000-00-00 00:00:00', '', '', ''),
(70, 4, 'CR FEMALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(71, 4, 'CR MALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(72, 5, 'MTB1', '0', '0000-00-00 00:00:00', '', '', ''),
(73, 5, 'MTB2', '0', '0000-00-00 00:00:00', '', '', ''),
(74, 5, 'MTB3', '0', '0000-00-00 00:00:00', '', '', ''),
(75, 6, 'ER1', '0', '0000-00-00 00:00:00', '', '', ''),
(76, 6, 'ER2', '0', '0000-00-00 00:00:00', '', '', ''),
(77, 6, 'REGISTRAR', '3', '0000-00-00 00:00:00', '', '', ''),
(78, 6, 'SUPPLY OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(79, 6, 'BAC OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(80, 7, 'EE-B-1', '0', '0000-00-00 00:00:00', '', '', ''),
(81, 7, 'EE-B-2', '0', '0000-00-00 00:00:00', '', '', ''),
(82, 7, 'AREC OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(83, 8, 'RM1', '0', '0000-00-00 00:00:00', '', '', ''),
(84, 8, 'RM2', '0', '0000-00-00 00:00:00', '', '', ''),
(85, 8, 'RM3', '0', '0000-00-00 00:00:00', '', '', ''),
(86, 8, 'RM4', '0', '0000-00-00 00:00:00', '', '', ''),
(87, 8, 'RM5', '0', '0000-00-00 00:00:00', '', '', ''),
(88, 8, 'RM6 (ORTHOPEDIA ROOM)', '4', '0000-00-00 00:00:00', '', '', ''),
(89, 8, 'RM7 (RESEARCH ROOM)', '4', '0000-00-00 00:00:00', '', '', ''),
(90, 8, 'RM8 (NURSING OFFICE)', '1', '0000-00-00 00:00:00', '', '', ''),
(91, 8, 'RSB-4', '4', '0000-00-00 00:00:00', '', '', ''),
(92, 8, 'SKILLS LAB', '4', '0000-00-00 00:00:00', '', '', ''),
(93, 8, 'NURSING AVR', '4', '0000-00-00 00:00:00', '', '', ''),
(94, 8, 'MEDICAL AND DENTAL CLINIC', '4', '0000-00-00 00:00:00', '', '', ''),
(95, 8, 'CR FEMALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(96, 8, 'CR MALE 1', '2', '0000-00-00 00:00:00', '', '', ''),
(97, 9, 'FTB1', '0', '0000-00-00 00:00:00', '', '', ''),
(98, 9, 'FTB2', '0', '0000-00-00 00:00:00', '', '', ''),
(99, 9, 'FTB3', '0', '0000-00-00 00:00:00', '', '', ''),
(100, 10, 'COLLEGE DEVELOPMENT AND EXTENSION OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(101, 10, 'PDMO (PHYSICAL DEVELOPMENT MANAGEMENT OFFICE)', '3', '0000-00-00 00:00:00', '', '', ''),
(102, 11, 'ATB1', '0', '0000-00-00 00:00:00', '', '', ''),
(103, 11, 'ATB2', '0', '0000-00-00 00:00:00', '', '', ''),
(104, 12, 'GUIDANCE OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(105, 12, 'PUBLICATION CENTER', '3', '0000-00-00 00:00:00', '', '', ''),
(106, 12, 'CSC OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(107, 12, 'NSTP OFFICE', '3', '0000-00-00 00:00:00', '', '', ''),
(108, 0, 'Dummy Room', '', '0000-00-00 00:00:00', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
