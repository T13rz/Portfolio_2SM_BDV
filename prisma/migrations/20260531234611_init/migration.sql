-- CreateTable
CREATE TABLE `apresentacao` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `nome` VARCHAR(100) NOT NULL,
    `titulo` VARCHAR(150) NOT NULL,
    `bio` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contatos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icone` VARCHAR(50) NOT NULL,
    `texto` VARCHAR(100) NOT NULL,
    `href` VARCHAR(200) NOT NULL,
    `apresentacaoId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(150) NOT NULL,
    `org` VARCHAR(150) NOT NULL,
    `periodo` VARCHAR(50) NOT NULL,
    `desc` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cursos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `categoria` VARCHAR(80) NOT NULL,
    `carga` VARCHAR(20) NOT NULL,
    `ano` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projetos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `imagem` VARCHAR(200) NOT NULL,
    `categoria` VARCHAR(80) NOT NULL,
    `descricao` TEXT NOT NULL,
    `tecnologias` JSON NOT NULL,
    `links` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experiencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cargo` VARCHAR(150) NOT NULL,
    `empresa` VARCHAR(150) NOT NULL,
    `periodo` VARCHAR(80) NOT NULL,
    `descricao` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `competencias_tecnicas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(80) NOT NULL,
    `icone` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `competencias_soft` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(80) NOT NULL,
    `icone` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `links` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plataforma` VARCHAR(80) NOT NULL,
    `handle` VARCHAR(100) NOT NULL,
    `icone` VARCHAR(80) NOT NULL,
    `url` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contatos` ADD CONSTRAINT `contatos_apresentacaoId_fkey` FOREIGN KEY (`apresentacaoId`) REFERENCES `apresentacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
