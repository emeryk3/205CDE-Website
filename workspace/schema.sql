DROP TABLE IF EXISTS recordstats_table;
DROP TABLE IF EXISTS legendname_table;

CREATE TABLE recordstats_table (
    Stats_ID integer PRIMARY KEY,
    Location text NOT NULL,
    Exercise text NOT NULL,
    Record text DEFAULT 'kg'
    );
    
CREATE TABLE legendname_table (
    Name_ID integer PRIMARY KEY,
    Name_of_legend text NOT NULL
    Nationality text NOT NUll,
    Age text NOT NULL
    );
    
INSERT into recordstats_table
VALUES (1, 'World Deadlift Championships 2015', 'Deadlift', '465kg');

INSERT into recordstats_table
VALUES (2, 'SN PRO 2015, Russian Federation, Moscow', 'Bench Press', '335kg');

INSERT into recordstats_table
VALUES (3, 'WRPF World Championships 2015', 'Squat', '475kg');

INSERT into legendname_table
VALUES (1, 'Eddie Hall', 'British', '28');

INSERT into legendname_table
VALUES (2, 'Kirill Sarychev', 'Russian', '27');

INSERT into legendname_table
VALUES (3, 'Andrey Malanichev', 'Russian', '38');