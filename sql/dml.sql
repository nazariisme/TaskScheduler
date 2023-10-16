--
-- Test the features
--

USE taskScheduler;

DELETE FROM task;
DELETE FROM category;
CALL addCategory("School");
CALL addCategory("Work");
CALL addCategory("Hobby");
CALL addCategory("Family");
CALL searchTaskByDescription('Task Four');
CALL searchTaskByStartingTime('2022-10-01');
CALL searchTaskByDeadline('2022-09-30');
CALL searchTaskByCategory('School');
CALL searchTaskByEstimatedDuration('20');
CALL searchTaskByTaskStatus('Open');
Select * from task where removed = True;
CALL getUserCapacity();
call updateUserCapacity(8);

CALL capacityLeft('2022-10-20', '2022-10-20');


--