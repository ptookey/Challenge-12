INSERT INTO department (name)
VALUES ("Department of Silly Walks"),
       ("Division of Nonsense"),
       ("Office of Random Generation"),
       ("Bureau of Pointless Meetings"),
       ("Ministry of Farcical Finance");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Chief Walking Officer", 200000, 1),
       ("Walkologist", 5000, 1),
       ("Giggle Guide", 15, 1),
       ("Chief Nonsense Officer", 180000, 2),
       ("Absurdity Engineer", 20000, 2),
       ("Quirk Quality Controller", 7000, 2),
       ("Chief Meme Officer", 250000, 3),
       ("Content Chaos Coordinator", 10000, 3),
       ("Social Media Jester", 8000, 3),
       ("Chief Procrastination Officer", 90000, 4),
       ("Time-Wasting Strategist", 18000, 4),
       ("Nonsensical Facilitator", 6000, 4),
       ("Director of Absurd Accounting", 1300000, 5),
       ("Chief Coin Toss Officer", 25000, 5),
       ("Comedy Currency Consultant", 10000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jasper", "McFizzles", 1, 1),
    ("Penelope", "Quibblesworth", 2, 1),
    ("Dexter", "Wobblebottom", 3, 1),
    ("Tallulah", "Bumblebee", 4, 4),
    ("Percy", "McSnort", 5, 4),
    ("Gwendolyn", "Puddlefrost", 6, 4),
    ("Mortimer", "Cacklethorn", 7, 7),
    ("Prudence", "Whifflebottom", 8, 7),
    ("Bartholomew", "Flibbertigibbet", 9, 7),
    ("Winifred", "Piddlewick", 10, 10),
    ("Horace", "Blunderbuss", 11, 10),
    ("Millicent", "Snickerdoodle", 12, 10),
    ("Reginald", "Bumbershoot", 13, 13),
    ("Delilah", "Noodleman", 14, 13),
    ("Ignatius", "Flutterby",15, 13);