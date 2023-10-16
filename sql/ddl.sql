-- 
-- DATA DEFINITION FOR TASK SCHEDULER
--

USE taskScheduler;

-- 
-- TABLES
--

DROP TABLE IF EXISTS task;
CREATE TABLE task (
id INT AUTO_INCREMENT PRIMARY KEY,
startingTime DATE,
deadline DATE,
category VARCHAR(20),
estimatedDuration INT,
usedCapDaily INT,
taskDescription VARCHAR(100),
actualDuration INT DEFAULT 0,
elapsedTime INT DEFAULT 0,
taskStatus VARCHAR(20),
removed BOOL DEFAULT FALSE
);


DROP TABLE IF EXISTS category;
CREATE TABLE category (
id INT AUTO_INCREMENT PRIMARY KEY,
categoryName VARCHAR(20) 
);


--
-- PROCEDURES
--

-- ADD CATEGORY

DROP PROCEDURE IF EXISTS addCategory;
DELIMITER ;;
CREATE PROCEDURE addCategory (
    tCategory1 VARCHAR(20)
    )
BEGIN
	INSERT INTO
		category (categoryName)
	VALUES
		(tCategory1);
END;;
DELIMITER ;

-- ADD TASK

DROP PROCEDURE IF EXISTS addTask;
DELIMITER ;;
CREATE PROCEDURE addTask (
    tStartingTime DATETIME,
    tDeadline DATETIME,
    tCategory VARCHAR(20),
    tEstimatedDuration INT,
    tTaskDescription VARCHAR(500),
    tTaskStatus VARCHAR(20)
    )
BEGIN
	INSERT INTO
		task (startingTime, deadline, category, estimatedDuration, usedCapDaily, taskDescription, taskStatus)
	VALUES
		(tStartingTime, tDeadline, tCategory, tEstimatedDuration, (tEstimatedDuration/(calculateDurationInDays(startingTime, deadline) + 1)), tTaskDescription, tTaskStatus);
END;;
DELIMITER ;

-- GET TASK BY ID

DROP PROCEDURE IF EXISTS getTaskById;
DELIMITER ;;
CREATE PROCEDURE getTaskById (
	tId INT
    )
BEGIN
	SELECT 
		id,
        taskStatus,
        actualDuration,
        elapsedTime
	FROM
		task
		WHERE
			tId = id
            ;
END;;
DELIMITER ;

-- GET CATEGORY BY ID

DROP PROCEDURE IF EXISTS getCategoryById;
DELIMITER ;;
CREATE PROCEDURE getCategoryById (
	cId INT
    )
BEGIN
	SELECT 
		id,
		categoryName
	FROM
		category
		WHERE
			cId = id
            ;
END;;
DELIMITER ;

-- GET CATEGORY

DROP PROCEDURE IF EXISTS showCategory;
DELIMITER ;;
CREATE PROCEDURE showCategory ()
BEGIN
	SELECT 
		id,
		categoryName
	FROM
		category
            ;
END;;
DELIMITER ;

-- SHOW ALL TASKS

DROP PROCEDURE IF EXISTS showAllTasks;
DELIMITER ;;
CREATE PROCEDURE showAllTasks()
BEGIN
	SELECT
		id,
        taskDescription,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        taskStatus
	FROM
		task
		WHERE
			removed = False;
END;;
DELIMITER ;

-- SHOW TASK BY A SEARCH PARAMETER

DROP PROCEDURE IF EXISTS searchTaskById;
DELIMITER ;;
CREATE PROCEDURE searchTaskById(
	searchParameter INT
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
        id = searchParameter
        AND
        removed = False
        ;
        
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByDescription;
DELIMITER ;;
CREATE PROCEDURE searchTaskByDescription(
	searchParameter VARCHAR(100)
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
		taskDescription LIKE searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByCategory;
DELIMITER ;;
CREATE PROCEDURE searchTaskByCategory(
	searchParameter VARCHAR(20)
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
		category LIKE searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByStartingTime;
DELIMITER ;;
CREATE PROCEDURE searchTaskByStartingTime(
	searchParameter DATE
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
        DATE_FORMAT(startingTime,'%Y-%m-%d') = searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByDeadline;
DELIMITER ;;
CREATE PROCEDURE searchTaskByDeadline(
	searchParameter DATE
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
        DATE_FORMAT(deadline,'%Y-%m-%d') = searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByEstimatedDuration;
DELIMITER ;;
CREATE PROCEDURE searchTaskByEstimatedDuration(
	searchParameter INT
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
		estimatedDuration = searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByActualDuration;
DELIMITER ;;
CREATE PROCEDURE searchTaskByActualDuration(
	searchParameter INT
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
		actualDuration = searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByElapsedTime;
DELIMITER ;;
CREATE PROCEDURE searchTaskByElapsedTime(
	searchParameter INT
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
		elapsedTime = searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;

DROP PROCEDURE IF EXISTS searchTaskByTaskStatus;
DELIMITER ;;
CREATE PROCEDURE searchTaskByTaskStatus(
	searchParameter VARCHAR(20)
)
BEGIN
	SELECT
		id,
        taskDescription,
        DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        category,
        estimatedDuration,
        actualDuration,
        elapsedTime,
        taskStatus
	FROM
		task
	WHERE
		taskStatus LIKE searchParameter
        AND
        removed = False
        ;
END;;
DELIMITER ;
-- UPDATE TASK BY ID
DROP PROCEDURE IF EXISTS updateTaskById;
DELIMITER ;;
CREATE PROCEDURE updateTaskById(
	n_id INT,
    n_status VARCHAR(20),
    n_elapsedTime INT
)
BEGIN
	UPDATE 
		task
		SET
			taskStatus = n_status,
			actualDuration = n_elapsedTime,
			elapsedTime = n_elapsedTime
	WHERE
		id = n_id;
END;;
DELIMITER ;

-- REMOVE TASK BY ID
DROP PROCEDURE IF EXISTS removeTaskById;
DELIMITER ;;
CREATE PROCEDURE removeTaskById(
	n_id INT
)
BEGIN
	UPDATE 
		task
        SET
			removed = True
	WHERE
		id = n_id;
END;;
DELIMITER ;

-- UPDATE TASK BY ID
DROP PROCEDURE IF EXISTS updateTaskById;
DELIMITER ;;
CREATE PROCEDURE updateTaskById(
	n_id INT,
    n_status VARCHAR(20),
    n_elapsedTime INT
)
BEGIN
	UPDATE 
		task
		SET
			taskStatus = n_status,
			actualDuration = n_elapsedTime,
			elapsedTime = n_elapsedTime
	WHERE
		id = n_id;
END;;
DELIMITER ;


-- REMOVE CATEGORY BY ID
DROP PROCEDURE IF EXISTS removeCategoryById;
DELIMITER ;;
CREATE PROCEDURE removeCategoryById(
	cId INT
)
BEGIN
	DELETE FROM 
		category
	WHERE
		id = cId;
END;;
DELIMITER ;

-- UPDATE CATEGORY BY ID
DROP PROCEDURE IF EXISTS updateCategoryById;
DELIMITER ;;
CREATE PROCEDURE updateCategoryById(
	cId INT,
    cCategoryName VARCHAR(20)
)
BEGIN
	UPDATE 
		category
		SET
			categoryName = cCategoryName
	WHERE
		id = cId;
END;;
DELIMITER ;


-- REMOVE TASK BY ID
DROP PROCEDURE IF EXISTS removeTaskById;
DELIMITER ;;
CREATE PROCEDURE removeTaskById(
	n_id INT
)
BEGIN
	UPDATE 
		task
        SET
			removed = True
	WHERE
		id = n_id;
END;;
DELIMITER ;

-- Get Task Timeline
DROP PROCEDURE IF EXISTS timeLine;
DELIMITER ;;
CREATE PROCEDURE timeLine()
BEGIN
	SELECT 
		id,
		DATE_FORMAT(startingTime,'%Y-%m-%d') AS startingTime,
        DATE_FORMAT(deadline,'%Y-%m-%d') AS deadline,
        taskDescription,
        taskStatus
	FROM
		task
        
        WHERE
			removed = False;
	END;;
DELIMITER ;

DROP TABLE IF EXISTS userCapacity;
CREATE TABLE userCapacity (
currentCapacity INT DEFAULT null
);

DROP PROCEDURE IF EXISTS updateUserCapacity;
DELIMITER ;;
CREATE PROCEDURE updateUserCapacity (
	newCapacity int
    )
BEGIN
	DELETE FROM userCapacity;
    INSERT INTO userCapacity (currentCapacity) 
    VALUES (newCapacity);
END;;

DELIMITER ;

DROP PROCEDURE IF EXISTS capacityLeft;
DELIMITER ;;
CREATE PROCEDURE capacityLeft (
	n_startingTime DATETIME,
    n_deadline DATETIME)
BEGIN
	SELECT 
		showDuration(calculateDurationInDays(n_startingTime, n_deadline)) * (SELECT currentCapacity FROM userCapacity) as totalCapacity,
        SUM(usedCapDaily * showDuration((calculateDurationInDays(n_startingTime, deadline)))) as capacityInUse,
        showDuration(calculateDurationInDays(n_startingTime, n_deadline)) * (SELECT currentCapacity FROM userCapacity) -
        SUM(usedCapDaily * showDuration((calculateDurationInDays(n_startingTime, deadline)))) AS availableCapacity
	FROM 
		task 
		WHERE
         deadline 
         BETWEEN
         n_startingTime
         AND
         n_deadline
		AND
			removed =false
		;
END;;
DELIMITER ;

--
-- Filters the negative hours
-- 

DROP FUNCTION IF EXISTS showDuration;
DELIMITER ;;

CREATE FUNCTION showDuration(
    duration int
)
RETURNS INT
DETERMINISTIC
BEGIN
	IF duration = 0 THEN
		RETURN 1;
	ELSEIF duration > 0 THEN
		RETURN duration + 1;
	ELSE
		RETURN 0;
	END IF;
END
;;

DELIMITER ;

--
-- CALCULATES THE ACTUAL DURATION
-- 

DROP FUNCTION IF EXISTS calculateDurationInDays;

DELIMITER ;;
CREATE FUNCTION calculateDurationInDays(
    deadline DATETIME,
    startingTime DATETIME
)
RETURNS INT
DETERMINISTIC
BEGIN
		RETURN TIMESTAMPDIFF(day,deadline, startingTime);
END
;;

DELIMITER ;


