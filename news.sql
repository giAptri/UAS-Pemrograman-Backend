-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 09.49
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_news_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `url` varchar(50) NOT NULL,
  `url_image` varchar(50) NOT NULL,
  `publish_at` datetime NOT NULL,
  `category` enum('kategori partai') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `title`, `author`, `content`, `url`, `url_image`, `publish_at`, `category`, `timestamp`) VALUES
(1, 'molly pacaran sama mickey', 'fadhilah neza', 'molly merupakan kucing persia coklat dan putih, telah memiliki hubungan asmara dengan micker si kucing persia berwarna putih', 'https://www.liputan6.com/citizen6/read/3920454/cir', 'https://image.com', '2024-01-19 07:04:56', 'kategori partai', '2024-01-19 06:13:30'),
(2, 'pak jokowi lengser', 'tasya aulia', 'dikabarkan ada pemilu baru dan calon presidennya yaitu pak anie, pak prabowo, dan pa ganja', 'https://pemilu.com', 'https://image.com', '2024-01-19 07:04:56', 'kategori partai', '2024-01-19 06:13:30'),
(3, 'molly pacaran sama mickey', 'fadhilah neza', 'molly merupakan kucing persia coklat dan putih, telah memiliki hubungan asmara dengan micker si kucing persia berwarna putih', 'https://www.liputan6.com/citizen6/read/3920454/cir', 'https://image.com', '2024-01-19 07:04:56', 'kategori partai', '2024-01-19 06:13:43'),
(4, 'pak jokowi lengser', 'tasya aulia', 'dikabarkan ada pemilu baru dan calon presidennya yaitu pak anie, pak prabowo, dan pa ganja', 'https://pemilu.com', 'https://image.com', '2024-01-19 07:04:56', 'kategori partai', '2024-01-19 06:13:43');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
