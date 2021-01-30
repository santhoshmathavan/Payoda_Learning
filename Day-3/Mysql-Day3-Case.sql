use db;
select * from csv;

SELECT COUNT(response) AS responseCount_1,
CASE
	WHEN Age <= 10 THEN '10s'
    WHEN (Age >10 AND Age <=20) THEN '20s'
    WHEN (Age >20 AND Age <=30) THEN '30s'
    WHEN (Age >30 AND Age <=40) THEN '40s'
    WHEN (Age >40 AND Age <=50) THEN '50s'
	WHEN (Age >50 AND Age <=60) THEN '60s'
	WHEN (Age >60 AND Age <=70) THEN '70s'
	WHEN (Age >70 AND Age <=80) THEN '80s'
	WHEN (Age >80 AND Age <=90) THEN '90s'
	WHEN (Age >90 AND Age <=100) THEN '100s'
    WHEN Age >100 THEN '100s'
END AS 'Age_bucket'
FROM csv WHERE Response =1
GROUP BY Age_bucket;