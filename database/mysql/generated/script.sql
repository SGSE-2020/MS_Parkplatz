-- -----------------------------------------------------
-- Schema parkspace
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS parkspace;
USE parkspace;

-- -----------------------------------------------------
-- User Privileges
-- -----------------------------------------------------
GRANT ALL PRIVILEGES ON parkspace.* TO 'user'@'%';

-- -----------------------------------------------------
-- Table `parkspace`.`area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.area;

CREATE TABLE IF NOT EXISTS parkspace.area
(
    id          VARCHAR(255) NOT NULL,
    displayName VARCHAR(255) NULL,
    totalSpots  INT          NULL,
    food_drink  TINYINT(4)   NULL,
    bar         TINYINT(4)   NULL,
    fast_food   TINYINT(4)   NULL,
    amenities   TINYINT(4)   NULL,
    shopping    TINYINT(4)   NULL,
    facilities  TINYINT(4)   NULL,
    two_wheeler TINYINT(4)   NULL,
    hotel       TINYINT(4)   NULL,
    grill       TINYINT(4)   NULL,
    medical_aid TINYINT(4)   NULL,
    gas         TINYINT(4)   NULL,
    charging    TINYINT(4)   NULL,
    PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Table `parkspace`.`reservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS parkspace.reservation;

CREATE TABLE IF NOT EXISTS parkspace.reservation
(
    id             VARCHAR(255) NOT NULL,
    user_id        VARCHAR(255) NULL,
    start_datetime TIMESTAMP    NULL,
    end_datetime   TIMESTAMP    NULL,
    cancelled      BOOLEAN      NULL,
    PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Sample Data `parkspace`.`area`
-- -----------------------------------------------------
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("19CA1484-7D7A-C22E-2A58-4CE010F9F1E5", "Class Aptent Taciti LLP", 161, "1", "0", "1", "1", "0", "0", "0", "0",
        "0", "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("95E3BAF2-52F1-0A7A-AC9B-535C66525196", "Sem Foundation", 110, "0", "1", "1", "0", "1", "0", "0", "0", "1", "0",
        "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("F12967D7-A8C9-CC7E-93CA-EB0FFD42401D", "Mauris Corporation", 36, "1", "1", "0", "1", "0", "1", "0", "0", "0",
        "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("55E31C93-E455-E951-A884-7958C591D5BE", "Tincidunt Pede Ac LLP", 98, "0", "1", "1", "1", "0", "0", "1", "0",
        "1", "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("C54CC6AC-EE64-E534-86A6-2864C9A8775A", "Sapien Cras Dolor PC", 136, "1", "0", "1", "0", "0", "1", "0", "1",
        "0", "1", "1", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("C9B08697-B0BB-F2C0-4A85-D0FA73092525", "Justo Institute", 167, "0", "1", "1", "0", "0", "0", "0", "0", "0",
        "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("84861779-ACEF-C4FD-047F-C3341B1ACB98", "Praesent Luctus LLC", 188, "1", "0", "1", "1", "1", "0", "0", "0", "1",
        "0", "1", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("E461BBE2-22AC-9529-69EB-15F57D222BB3", "Scelerisque Neque Incorporated", 147, "1", "0", "1", "0", "1", "0",
        "0", "0", "1", "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("04E744AF-5087-6041-2886-E83DD8C97C64", "A Feugiat Tellus Consulting", 97, "0", "0", "1", "1", "0", "0", "0",
        "1", "1", "1", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("0058B2D1-FCDC-C80E-BA82-F9E1F5A53F89", "Malesuada Incorporated", 154, "0", "1", "0", "0", "1", "0", "0", "1",
        "1", "1", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("CA2C9606-B155-7215-94D0-CE75EC5D26AD", "Cum Sociis Associates", 69, "1", "0", "1", "1", "0", "1", "1", "1",
        "1", "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("397A9674-CABD-D3F3-FD43-27FE312100D6", "Amet LLP", 93, "0", "1", "1", "1", "0", "0", "1", "1", "0", "0", "0",
        "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("3642761B-EEC2-11E9-2C4A-6CB5C4D0B1C2", "A Dui Foundation", 52, "0", "0", "0", "0", "0", "0", "0", "1", "1",
        "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("CCD97A93-3C20-B372-180D-C2412C78AE8A", "Ultrices Inc.", 135, "1", "0", "0", "0", "0", "0", "0", "0", "0", "0",
        "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("7FD6B091-6F0C-10C5-C608-9EE332C6129C", "Quis Turpis Vitae Inc.", 188, "1", "1", "0", "1", "1", "0", "0", "1",
        "0", "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("69096555-313C-099D-E51C-05537AF85777", "Pharetra Foundation", 124, "0", "0", "1", "1", "0", "0", "1", "1", "0",
        "0", "1", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("F9E5836B-EB0D-30D5-69BD-F2EFCA92AAA0", "Euismod Corporation", 157, "1", "0", "0", "0", "1", "1", "1", "1", "0",
        "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("D05A33ED-A8C8-A742-4798-6DE02B2A564E", "Ultrices A Auctor Industries", 100, "0", "1", "1", "1", "0", "0", "1",
        "0", "0", "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("B4D84A89-E7B2-2231-FD7E-8071401DD85E", "Ac Ipsum LLP", 96, "1", "0", "0", "1", "1", "1", "0", "0", "1", "1",
        "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("5C8770FE-0989-3401-2482-0B2D18D59ECE", "Consequat Lectus Ltd", 130, "0", "1", "0", "1", "0", "1", "1", "1",
        "0", "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("021984B1-BA87-92CC-1749-FC3F602D1EDE", "Sem Consequat Nec Company", 142, "1", "0", "0", "1", "1", "1", "1",
        "1", "1", "0", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("16B7E311-E7BF-47F3-F319-3A57EA8D8571", "Non Ltd", 192, "1", "1", "1", "0", "0", "0", "0", "0", "1", "0", "0",
        "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("43F54976-E8DD-789C-08CF-9FF7813D4F53", "Sodales At Velit Corporation", 52, "1", "1", "0", "1", "1", "1", "1",
        "0", "0", "1", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("ADD75934-A29E-5760-AD3F-D610C7CCEF6C", "Lobortis Incorporated", 44, "1", "1", "0", "0", "0", "1", "1", "0",
        "0", "1", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("71E8051E-F14C-FE88-E768-0CCD733719FF", "Purus Nullam Institute", 100, "0", "1", "1", "1", "1", "0", "0", "0",
        "0", "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("4A03BF75-5E0D-6A56-DDC7-7E847C70FAD9", "Lorem Ac Institute", 87, "0", "0", "0", "1", "1", "0", "0", "1", "1",
        "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("034F9241-1DAF-D100-AE84-7FAC05E61929", "Integer Eu Corporation", 42, "1", "1", "0", "0", "0", "1", "1", "1",
        "0", "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("7ED4129E-AFBD-B21B-F05F-4AA515C22D03", "Auctor Industries", 95, "0", "0", "1", "0", "1", "0", "1", "1", "1",
        "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("DF6A5165-91C7-BF3D-F942-D6AA5B945046", "Cras Sed LLC", 116, "1", "0", "0", "0", "1", "1", "0", "0", "1", "1",
        "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("5CA08C6E-401A-B834-34D0-3101E97D9F0B", "Suspendisse Commodo PC", 92, "0", "1", "0", "0", "0", "1", "0", "1",
        "0", "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("57BBDA42-173C-8395-8B4B-65779C723024", "Urna Vivamus LLP", 42, "0", "1", "1", "1", "1", "1", "0", "1", "0",
        "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("F464A779-A61F-39EB-602B-29FF60C6E724", "Eu Industries", 119, "1", "0", "1", "1", "0", "1", "0", "1", "0", "1",
        "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("8696C9C4-3767-8CE4-C138-8FE5C5D48D73", "Litora Torquent Institute", 125, "0", "0", "0", "0", "1", "1", "0",
        "1", "0", "0", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("E6B4A925-B253-1BB5-3408-2F6881FD72EE", "Semper Erat Limited", 101, "1", "1", "1", "0", "1", "1", "0", "1", "1",
        "1", "1", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("57AD3378-F58A-3D1B-31FA-9146E1EA260A", "Eu Lacus PC", 172, "0", "1", "1", "1", "1", "1", "1", "1", "0", "1",
        "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("6908D916-C00A-72A4-B157-CC8E7182BED0", "Faucibus Orci Luctus Corporation", 92, "0", "0", "1", "1", "0", "1",
        "1", "1", "0", "1", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("6B57D715-02C5-48FC-868A-79ECA20804A2", "Sagittis Associates", 90, "1", "0", "0", "1", "0", "0", "0", "1", "1",
        "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("2A8D6A5A-17C8-A446-99DD-0E4541527127", "Porta Elit A Corp.", 148, "1", "1", "0", "0", "1", "1", "0", "0", "0",
        "1", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("4ECCC6A9-735B-DBAC-F36E-DF359823A251", "Cursus Purus Nullam Ltd", 135, "1", "0", "1", "1", "1", "0", "1", "1",
        "0", "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("5C81B643-D203-83D5-7561-E2BA094AA3D8", "A Ultricies Inc.", 180, "0", "1", "0", "1", "1", "0", "0", "0", "0",
        "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("29F2ADBA-D445-A0CD-C337-83207170E879", "Eu Placerat Eget Inc.", 165, "1", "1", "0", "0", "1", "1", "1", "1",
        "1", "0", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("5FEC2681-C34A-F5AF-579A-E9915B2B9ADA", "A Nunc In Ltd", 131, "1", "0", "1", "0", "1", "1", "1", "1", "1", "0",
        "1", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("51BAC2DD-E209-4E31-31D6-23F0789C4A5A", "Nibh Donec Est Foundation", 90, "0", "0", "0", "0", "0", "1", "0", "1",
        "1", "1", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("BDFEC7DA-59D2-EE55-D495-7290E2EDDDA0", "Et Libero Incorporated", 64, "1", "1", "0", "0", "1", "0", "0", "1",
        "1", "1", "0", "1");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("85A74EB6-8EDA-B9C8-7AA3-88AA0F9E27DA", "Ut Molestie In Limited", 58, "0", "1", "1", "1", "1", "1", "1", "0",
        "0", "1", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("CD2F10EE-5234-C825-2400-75047A08D575", "A Enim Suspendisse Ltd", 78, "1", "1", "0", "1", "1", "1", "0", "0",
        "1", "0", "1", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("A29AC739-3E7B-4A3F-ECF7-5F6FB0A21C5D", "Id Nunc Foundation", 75, "0", "0", "0", "1", "0", "1", "1", "1", "1",
        "1", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("DD0181CA-836A-1744-754B-027302AC518A", "Pede Nunc Sed Foundation", 170, "0", "1", "1", "1", "0", "1", "0", "0",
        "0", "1", "0", "0");
INSERT INTO `area` (`id`, `displayName`, `totalSpots`, `food_drink`, `bar`, `fast_food`, `amenities`, `shopping`,
                    `facilities`, `two_wheeler`, `hotel`, `grill`, `medical_aid`, `gas`, `charging`)
VALUES ("FDC898ED-346E-2C6D-0CED-EFD501E09B40", "Donec LLC", 67, "0", "0", "0", "1", "0", "0", "1", "0", "1", "0", "0",
        "0");
