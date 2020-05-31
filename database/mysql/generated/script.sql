-- -----------------------------------------------------
-- Schema parkspace
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS parkspace;
USE parkspace ;

-- -----------------------------------------------------
-- User Privileges
-- -----------------------------------------------------
GRANT ALL PRIVILEGES ON parkspace.* TO 'user'@'%';

-- -----------------------------------------------------
-- Table `parkspace`.`entity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.entity ;

CREATE TABLE IF NOT EXISTS parkspace.entity (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NULL,
    PRIMARY KEY (id));


-- -----------------------------------------------------
-- Table `parkspace`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.location ;

CREATE TABLE IF NOT EXISTS parkspace.location (
    id VARCHAR(255) NOT NULL,
    longitude DECIMAL NULL,
    latitude DECIMAL NULL,
    PRIMARY KEY (id));


-- -----------------------------------------------------
-- Table `parkspace`.`area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.area ;

CREATE TABLE IF NOT EXISTS parkspace.area (
    id VARCHAR(255) NOT NULL,
    location_id VARCHAR(255) NOT NULL,
    entity_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NULL,
    PRIMARY KEY (id),
    INDEX fk_area_location_idx (location_id ASC),
    INDEX fk_area_entity1_idx (entity_id ASC),
    CONSTRAINT fk_area_location
    FOREIGN KEY (location_id)
    REFERENCES parkspace.location (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT fk_area_entity1
    FOREIGN KEY (entity_id)
    REFERENCES parkspace.entity (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `parkspace`.`spot`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.spot ;

CREATE TABLE IF NOT EXISTS parkspace.spot (
    id VARCHAR(255) NOT NULL,
    area_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NULL,
    PRIMARY KEY (id),
    INDEX fk_spot_area1_idx (area_id ASC),
    CONSTRAINT fk_spot_area1
    FOREIGN KEY (area_id)
    REFERENCES parkspace.area (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `parkspace`.`reservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.reservation ;

CREATE TABLE IF NOT EXISTS parkspace.reservation (
    id VARCHAR(255) NOT NULL,
    spot_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NULL,
    start_datetime TIMESTAMP NULL,
    end_datetime TIMESTAMP NULL,
    PRIMARY KEY (id),
    INDEX fk_reservation_spot1_idx (spot_id ASC),
    CONSTRAINT fk_reservation_spot1
    FOREIGN KEY (spot_id)
    REFERENCES parkspace.spot (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
