<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200923133703 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE apology_category (apology_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_D43E430A3556B58D (apology_id), INDEX IDX_D43E430A12469DE2 (category_id), PRIMARY KEY(apology_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(64) NOT NULL, description LONGTEXT NOT NULL, slug VARCHAR(64) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, apology_id INT DEFAULT NULL, author VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, INDEX IDX_9474526C3556B58D (apology_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(128) NOT NULL, lastname VARCHAR(128) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE apology_category ADD CONSTRAINT FK_D43E430A3556B58D FOREIGN KEY (apology_id) REFERENCES apology (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE apology_category ADD CONSTRAINT FK_D43E430A12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C3556B58D FOREIGN KEY (apology_id) REFERENCES apology (id)');
        $this->addSql('ALTER TABLE apology ADD author_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE apology ADD CONSTRAINT FK_91F3852CF675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_91F3852CF675F31B ON apology (author_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE apology_category DROP FOREIGN KEY FK_D43E430A12469DE2');
        $this->addSql('ALTER TABLE apology DROP FOREIGN KEY FK_91F3852CF675F31B');
        $this->addSql('DROP TABLE apology_category');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP INDEX IDX_91F3852CF675F31B ON apology');
        $this->addSql('ALTER TABLE apology DROP author_id');
    }
}
