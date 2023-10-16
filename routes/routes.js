"use strict";

const express = require('express');
const helpers = require('./../src/helpers.js');
const router = express.Router();


//Timeline Weekly
router.get("/task-scheduler/", async (req, res) => {
    let data = {};
    let results = await helpers.timeLine();
    let week = helpers.weekStepper();
    let weekNumber = helpers.getWeekNumber();
    let lastWeek12 = helpers.weekStepper(-13);
    let lastWeek11 = helpers.weekStepper(-12);
    let lastWeek10 = helpers.weekStepper(-11);
    let lastWeek9 = helpers.weekStepper(-10);
    let lastWeek8 = helpers.weekStepper(-9);
    let lastWeek7 = helpers.weekStepper(-8);
    let lastWeek6 = helpers.weekStepper(-7);
    let lastWeek5 = helpers.weekStepper(-6);
    let lastWeek4 = helpers.weekStepper(-5);
    let lastWeek3 = helpers.weekStepper(-4);
    let lastWeek2 = helpers.weekStepper(-3);
    let lastWeek1 = helpers.weekStepper(-2);
    let lastWeek = helpers.weekStepper(-1);
    let nextWeek = helpers.weekStepper(1);
    let nextWeek1 = helpers.weekStepper(2);
    let nextWeek2 = helpers.weekStepper(3);
    let nextWeek3 = helpers.weekStepper(4);
    let nextWeek4 = helpers.weekStepper(5);
    let nextWeek5 = helpers.weekStepper(6);
    let nextWeek6 = helpers.weekStepper(7);
    let nextWeek7 = helpers.weekStepper(8);
    let nextWeek8 = helpers.weekStepper(9);
    let nextWeek9 = helpers.weekStepper(10);
    let nextWeek10 = helpers.weekStepper(11);
    let nextWeek11 = helpers.weekStepper(12);
    let nextWeek12 = helpers.weekStepper(13);

    data.title = "Timeline";
    data.tasks = results[0];
    data.daysOfTheWeek = week;
    data.weekNumber = weekNumber;
    data.currentWeek = weekNumber;
    data.lastWeek12 = lastWeek12;
    data.lastWeek11 = lastWeek11;
    data.lastWeek10 = lastWeek10;
    data.lastWeek9 = lastWeek9;
    data.lastWeek8 = lastWeek8;
    data.lastWeek7 = lastWeek7;
    data.lastWeek6 = lastWeek6;
    data.lastWeek5 = lastWeek5;
    data.lastWeek4 = lastWeek4;
    data.lastWeek3 = lastWeek3;
    data.lastWeek2 = lastWeek2;
    data.lastWeek1 = lastWeek1;
    data.lastWeek = lastWeek;
    data.nextWeek = nextWeek;
    data.nextWeek1 = nextWeek1;
    data.nextWeek2 = nextWeek2;
    data.nextWeek3 = nextWeek3;
    data.nextWeek4 = nextWeek4;
    data.nextWeek5 = nextWeek5;
    data.nextWeek6 = nextWeek6;
    data.nextWeek7 = nextWeek7;
    data.nextWeek8 = nextWeek8;
    data.nextWeek9 = nextWeek9;
    data.nextWeek10 = nextWeek10;
    data.nextWeek11 = nextWeek11;
    data.nextWeek12 = nextWeek12;
    res.render("pages/view-timeline.ejs", data);
});

router.get("/time-traveler/:week", async (req, res) => {
    let data = {};
    let inputWeekNumber = parseInt(req.params.week);
    let results = await helpers.timeLine();
    let weekNumber = helpers.getWeekNumber();
    let week;
    let weekDifference = inputWeekNumber - weekNumber;
    let lastWeek12, lastWeek11, lastWeek10, lastWeek9, lastWeek8, lastWeek7, lastWeek6;
    let lastWeek5, lastWeek4, lastWeek3, lastWeek2, lastWeek1, lastWeek;
    let nextWeek, nextWeek1, nextWeek2, nextWeek3, nextWeek4, nextWeek5, nextWeek6, nextWeek7;
    let nextWeek8, nextWeek9, nextWeek10, nextWeek11, nextWeek12;

    if (weekDifference <= 6 && weekDifference >= -1) {
        switch (weekDifference) {
            case 0:
                res.redirect("/task-scheduler/");
                break;
            case 1:
                lastWeek12 = helpers.weekStepper(-12);
                lastWeek11 = helpers.weekStepper(-11);
                lastWeek10 = helpers.weekStepper(-10);
                lastWeek9 = helpers.weekStepper(-9);
                lastWeek8 = helpers.weekStepper(-8);
                lastWeek7 = helpers.weekStepper(-7);
                lastWeek6 = helpers.weekStepper(-6);
                lastWeek5 = helpers.weekStepper(-5);
                lastWeek4 = helpers.weekStepper(-4);
                lastWeek3 = helpers.weekStepper(-3);
                lastWeek2 = helpers.weekStepper(-2);
                lastWeek1 = helpers.weekStepper(-1);
                lastWeek = helpers.weekStepper();
                week = helpers.weekStepper(1);
                nextWeek = helpers.weekStepper(2);
                nextWeek1  = helpers.weekStepper(3);
                nextWeek2 = helpers.weekStepper(4);
                nextWeek3 = helpers.weekStepper(5);
                nextWeek4 = helpers.weekStepper(6);
                nextWeek5  = helpers.weekStepper(7);
                nextWeek6 = helpers.weekStepper(8);
                nextWeek7 = helpers.weekStepper(9);
                nextWeek8 = helpers.weekStepper(10);
                nextWeek9  = helpers.weekStepper(11);
                nextWeek10 = helpers.weekStepper(12);
                nextWeek11 = helpers.weekStepper(13);
                nextWeek12 = helpers.weekStepper(14);
                break;
            case 2:
                lastWeek12 = helpers.weekStepper(-11);
                lastWeek11 = helpers.weekStepper(-10);
                lastWeek10 = helpers.weekStepper(-9);
                lastWeek9 = helpers.weekStepper(-8);
                lastWeek8 = helpers.weekStepper(-7);
                lastWeek7 = helpers.weekStepper(-6);
                lastWeek6 = helpers.weekStepper(-5);
                lastWeek5 = helpers.weekStepper(-4);
                lastWeek4 = helpers.weekStepper(-3);
                lastWeek3 = helpers.weekStepper(-2);
                lastWeek2 = helpers.weekStepper(-1);
                lastWeek1 = helpers.weekStepper();
                lastWeek = helpers.weekStepper(1);
                week = helpers.weekStepper(2);
                nextWeek = helpers.weekStepper(3);
                nextWeek1  = helpers.weekStepper(4);
                nextWeek2 = helpers.weekStepper(5);
                nextWeek3 = helpers.weekStepper(6);
                nextWeek4 = helpers.weekStepper(7);
                nextWeek5  = helpers.weekStepper(8);
                nextWeek6 = helpers.weekStepper(9);
                nextWeek7 = helpers.weekStepper(10);
                nextWeek8 = helpers.weekStepper(11);
                nextWeek9  = helpers.weekStepper(12);
                nextWeek10 = helpers.weekStepper(13);
                nextWeek11 = helpers.weekStepper(14);
                nextWeek12 = helpers.weekStepper(15);
                break;
            case 3:
                lastWeek12 = helpers.weekStepper(-10);
                lastWeek11 = helpers.weekStepper(-9);
                lastWeek10 = helpers.weekStepper(-8);
                lastWeek9 = helpers.weekStepper(-7);
                lastWeek8 = helpers.weekStepper(-6);
                lastWeek7 = helpers.weekStepper(-5);
                lastWeek6 = helpers.weekStepper(-4);
                lastWeek5 = helpers.weekStepper(-3);
                lastWeek4 = helpers.weekStepper(-2);
                lastWeek3 = helpers.weekStepper(-1);
                lastWeek2 = helpers.weekStepper();
                lastWeek1 = helpers.weekStepper(1);
                lastWeek = helpers.weekStepper(2);
                week = helpers.weekStepper(3);
                nextWeek = helpers.weekStepper(4);
                nextWeek1  = helpers.weekStepper(5);
                nextWeek2 = helpers.weekStepper(6);
                nextWeek3 = helpers.weekStepper(7);
                nextWeek4 = helpers.weekStepper(8);
                nextWeek5  = helpers.weekStepper(9);
                nextWeek6 = helpers.weekStepper(10);
                nextWeek7 = helpers.weekStepper(11);
                nextWeek8 = helpers.weekStepper(12);
                nextWeek9  = helpers.weekStepper(13);
                nextWeek10 = helpers.weekStepper(14);
                nextWeek11 = helpers.weekStepper(15);
                nextWeek12 = helpers.weekStepper(16);
                break;
            case 4:
                lastWeek12 = helpers.weekStepper(-9);
                lastWeek11 = helpers.weekStepper(-8);
                lastWeek10 = helpers.weekStepper(-7);
                lastWeek9 = helpers.weekStepper(-6);
                lastWeek8 = helpers.weekStepper(-5);
                lastWeek7 = helpers.weekStepper(-4);
                lastWeek6 = helpers.weekStepper(-3);
                lastWeek5 = helpers.weekStepper(-2);
                lastWeek4 = helpers.weekStepper(-1);
                lastWeek3 = helpers.weekStepper();
                lastWeek2 = helpers.weekStepper(1);
                lastWeek1 = helpers.weekStepper(2);
                lastWeek = helpers.weekStepper(3);
                week = helpers.weekStepper(4);
                nextWeek = helpers.weekStepper(5);
                nextWeek1  = helpers.weekStepper(6);
                nextWeek2 = helpers.weekStepper(7);
                nextWeek3 = helpers.weekStepper(8);
                nextWeek4 = helpers.weekStepper(9);
                nextWeek5  = helpers.weekStepper(10);
                nextWeek6 = helpers.weekStepper(11);
                nextWeek7 = helpers.weekStepper(12);
                nextWeek8 = helpers.weekStepper(13);
                nextWeek9  = helpers.weekStepper(14);
                nextWeek10 = helpers.weekStepper(15);
                nextWeek11 = helpers.weekStepper(16);
                nextWeek12 = helpers.weekStepper(17);
                break;
            case 5:
                lastWeek12 = helpers.weekStepper(-8);
                lastWeek11 = helpers.weekStepper(-7);
                lastWeek10 = helpers.weekStepper(-6);
                lastWeek9 = helpers.weekStepper(-5);
                lastWeek8 = helpers.weekStepper(-4);
                lastWeek7 = helpers.weekStepper(-3);
                lastWeek6 = helpers.weekStepper(-2);
                lastWeek5 = helpers.weekStepper(-1);
                lastWeek4 = helpers.weekStepper();
                lastWeek3 = helpers.weekStepper(1);
                lastWeek2 = helpers.weekStepper(2);
                lastWeek1 = helpers.weekStepper(3);
                lastWeek = helpers.weekStepper(4);
                week = helpers.weekStepper(5);
                nextWeek = helpers.weekStepper(6);
                nextWeek1  = helpers.weekStepper(7);
                nextWeek2 = helpers.weekStepper(8);
                nextWeek3 = helpers.weekStepper(9);
                nextWeek4 = helpers.weekStepper(10);
                nextWeek5  = helpers.weekStepper(11);
                nextWeek6 = helpers.weekStepper(12);
                nextWeek7 = helpers.weekStepper(13);
                nextWeek8 = helpers.weekStepper(14);
                nextWeek9  = helpers.weekStepper(15);
                nextWeek10 = helpers.weekStepper(16);
                nextWeek11 = helpers.weekStepper(17);
                nextWeek12 = helpers.weekStepper(18);
                break;
            case 6:
                lastWeek12 = helpers.weekStepper(-7);
                lastWeek11 = helpers.weekStepper(-6);
                lastWeek10 = helpers.weekStepper(-5);
                lastWeek9 = helpers.weekStepper(-4);
                lastWeek8 = helpers.weekStepper(-3);
                lastWeek7 = helpers.weekStepper(-2);
                lastWeek6 = helpers.weekStepper(-1);
                lastWeek5 = helpers.weekStepper();
                lastWeek4 = helpers.weekStepper(1);
                lastWeek3 = helpers.weekStepper(2);
                lastWeek2 = helpers.weekStepper(3);
                lastWeek1 = helpers.weekStepper(4);
                lastWeek = helpers.weekStepper(5);
                week = helpers.weekStepper(6);
                nextWeek = helpers.weekStepper(7);
                nextWeek1  = helpers.weekStepper(8);
                nextWeek2 = helpers.weekStepper(9);
                nextWeek3 = helpers.weekStepper(10);
                nextWeek4 = helpers.weekStepper(11);
                nextWeek5  = helpers.weekStepper(12);
                nextWeek6 = helpers.weekStepper(13);
                nextWeek7 = helpers.weekStepper(14);
                nextWeek8 = helpers.weekStepper(15);
                nextWeek9  = helpers.weekStepper(16);
                nextWeek10 = helpers.weekStepper(17);
                nextWeek11 = helpers.weekStepper(18);
                nextWeek12 = helpers.weekStepper(19);
                break;
            case -1:
                lastWeek12 = helpers.weekStepper(-14);
                lastWeek11 = helpers.weekStepper(-13);
                lastWeek10 = helpers.weekStepper(-12);
                lastWeek9 = helpers.weekStepper(-11);
                lastWeek8 = helpers.weekStepper(-10);
                lastWeek7 = helpers.weekStepper(-9);
                lastWeek6 = helpers.weekStepper(-8);
                lastWeek5 = helpers.weekStepper(-7);
                lastWeek4 = helpers.weekStepper(-6);
                lastWeek3 = helpers.weekStepper(-5);
                lastWeek2 = helpers.weekStepper(-4);
                lastWeek1 = helpers.weekStepper(-3);
                lastWeek = helpers.weekStepper(-2);
                week = helpers.weekStepper(-1);
                nextWeek = helpers.weekStepper();
                nextWeek1  = helpers.weekStepper(1);
                nextWeek2 = helpers.weekStepper(2);
                nextWeek3 = helpers.weekStepper(3);
                nextWeek4 = helpers.weekStepper(4);
                nextWeek5  = helpers.weekStepper(5);
                nextWeek6 = helpers.weekStepper(6);
                nextWeek7 = helpers.weekStepper(7);
                nextWeek8 = helpers.weekStepper(8);
                nextWeek9  = helpers.weekStepper(9);
                nextWeek10 = helpers.weekStepper(10);
                nextWeek11 = helpers.weekStepper(11);
                nextWeek12 = helpers.weekStepper(12);
                break;
            case -2:
                lastWeek12 = helpers.weekStepper(-15);
                lastWeek11 = helpers.weekStepper(-14);
                lastWeek10 = helpers.weekStepper(-13);
                lastWeek9 = helpers.weekStepper(-12);
                lastWeek8 = helpers.weekStepper(-11);
                lastWeek7 = helpers.weekStepper(-10);
                lastWeek6 = helpers.weekStepper(-9);
                lastWeek5 = helpers.weekStepper(-8);
                lastWeek4 = helpers.weekStepper(-7);
                lastWeek3 = helpers.weekStepper(-6);
                lastWeek2 = helpers.weekStepper(-5);
                lastWeek1 = helpers.weekStepper(-4);
                lastWeek = helpers.weekStepper(-3);
                week = helpers.weekStepper(-2);
                nextWeek = helpers.weekStepper(-1);
                nextWeek1  = helpers.weekStepper();
                nextWeek2 = helpers.weekStepper(1);
                nextWeek3 = helpers.weekStepper(2);
                nextWeek4 = helpers.weekStepper(3);
                nextWeek5  = helpers.weekStepper(4);
                nextWeek6 = helpers.weekStepper(5);
                nextWeek7 = helpers.weekStepper(6);
                nextWeek8 = helpers.weekStepper(7);
                nextWeek9  = helpers.weekStepper(8);
                nextWeek10 = helpers.weekStepper(9);
                nextWeek11 = helpers.weekStepper(10);
                nextWeek12 = helpers.weekStepper(11);
                break;
            default:
                break;
        }
        data.weekNumber = weekNumber;
        data.lastWeek12 = lastWeek12;
        data.lastWeek11 = lastWeek11;
        data.lastWeek10 = lastWeek10;
        data.lastWeek9 = lastWeek9;
        data.lastWeek8 = lastWeek8;
        data.lastWeek7 = lastWeek7;
        data.lastWeek6 = lastWeek6;
        data.lastWeek5 = lastWeek5;
        data.lastWeek4 = lastWeek4;
        data.lastWeek3 = lastWeek3;
        data.lastWeek2 = lastWeek2;
        data.lastWeek1 = lastWeek1;
        data.lastWeek = lastWeek;
        data.nextWeek = nextWeek;
        data.nextWeek1 = nextWeek1;
        data.nextWeek2 = nextWeek2;
        data.nextWeek3 = nextWeek3;
        data.nextWeek4 = nextWeek4;
        data.nextWeek5 = nextWeek5;
        data.nextWeek6 = nextWeek6;
        data.nextWeek7 = nextWeek7;
        data.nextWeek8 = nextWeek8;
        data.nextWeek9 = nextWeek9;
        data.nextWeek10 = nextWeek10;
        data.nextWeek11 = nextWeek11;
        data.nextWeek12 = nextWeek12;
        data.title = "Time Machine";
        data.tasks = results[0];
        data.daysOfTheWeek = week;
        data.weekNumber = inputWeekNumber;
        data.currentWeek = weekNumber;
        res.render("pages/view-timeline.ejs", data);
    } else {
        res.redirect("/task-scheduler/");
    }
});
//userCapacity
router.get("/task-scheduler/userCapacity", async (req, res) => {
    let data = {};
    let cap = await helpers.getUserCapacity();

    data.title = "User Capacity";
    data.capacity = cap[0].currentCapacity;
    res.render("pages/userCapacity.ejs", data);
});
//setup
router.get("/task-scheduler/setup", async (req, res) => {
    let data = {};
    let result = await helpers.showCategory();
    let cap = await helpers.getUserCapacity();

    data.title = "Setup";
    data.categories = result[0];
    data.capacity = cap[0].currentCapacity;
    res.render("pages/setup.ejs", data);
});

//setup Remove
router.get("/task-scheduler/setup/delete/:id", async (req, res) => {
    await helpers.removeCategoryById(req.params.id);
    res.redirect("/task-scheduler/setup");
});

//setup Update input
router.get("/task-scheduler/setup/update/:id", async (req, res) => {
    let data = {};
    let result = await helpers.getCategoryById(req.params.id);


    data.title = "Update Category";
    data.categories = result[0];
    res.render("pages/show-a-category.ejs", data);
});

//setup Update post
router.post("/task-scheduler/setup/update/:id", async (req, res) => {
    await helpers.updateCategoryById(req.params.id, req.body);

    res.redirect("/task-scheduler/setup");
});


//Add categories
router.post("/task-scheduler/setup", async (req, res) => {
    await helpers.addCategory(req.body);
    res.redirect("/task-scheduler/setup");
});

//Update Capacity
router.post("/task-scheduler/userCapacity", async (req, res) => {
    await helpers.updateUserCapacity(req.body);
    res.redirect("/task-scheduler/userCapacity");
});

//Add Task - get input
router.get("/task-scheduler/add-task", async (req, res) => {
    let data = {};
    let result = await helpers.showCategory();


    data.title = "Add Task";
    data.categories = result[0];
    data.hasCapacity = true;
    res.render("pages/add-task.ejs", data);
});

//Add Task - post input
router.post("/task-scheduler/add-task", async (req, res) => {
    let result = await helpers.canDeadlineBeMett(req.body);

    if (result) {
        await helpers.addTask(req.body);
        res.redirect("/task-scheduler/");
    } else {
        let data = {};
        let result = await helpers.showCategory();

        data.title = "Add Task";
        data.categories = result[0];
        data.hasCapacity = false;
        res.render("pages/add-task.ejs", data);
    }
});

//Show All Tasks
router.get("/task-scheduler/show-all-tasks", async (req, res) => {
    let data = {};
    let results = await helpers.showAllTask();

    data.title = "All Tasks";
    data.all_tasks = results[0];

    res.render("pages/show-all-tasks.ejs", data);
});
//Search for task
router.post("/task-scheduler/show-all-tasks", async (req, res) => {
    let data = {};
    let results;
    let truth = true;

    switch (req.body.searchParameter[0]) {
        case 'ID':
            if (parseInt(req.body.searchParameter[1])) {
                results = await helpers.searchTaskById(req.body.searchParameter[1]);
                break;
            } else {
                truth = false;
                break;
            }
        case 'DESCRIPTION':
            results = await helpers.searchTaskByDescription(req.body.searchParameter[1]);
            break;
        case 'CATEGORY':
            results = await helpers.searchTaskByCategory(req.body.searchParameter[1]);
            break;
        case 'STARTING TIME':
            if (typeof parseInt((req.body.searchParameter[1])) == typeof 1) {
                results = await helpers.searchTaskByStartingTime(req.body.searchParameter[1]);
                break;
            } else {
                truth = false;
                break;
            }
        case 'DEADLINE':
            if (typeof parseInt((req.body.searchParameter[1])) == typeof 1) {
                results = await helpers.searchTaskBydeadline(req.body.searchParameter[1]);
                break;
            } else {
                truth = false;
                break;
            }
        case 'ESTIMATED DURATION':
            if (parseInt(req.body.searchParameter[1])) {
                results = await helpers.searchTaskByEstimatedDuration(req.body.searchParameter[1]);
                break;
            } else {
                truth = false;
                break;
            }
        case 'ACTUAL DURATION':
            if (parseInt(req.body.searchParameter[1])) {
                results = await helpers.searchTaskByActualDuration(req.body.searchParameter[1]);
                break;
            } else {
                truth = false;
                break;
            }
        case 'ELAPSED TIME':
            if (parseInt(req.body.searchParameter[1])) {
                results = await helpers.searchTaskByElapsedTime(req.body.searchParameter[1]);
                break;
            } else {
                truth = false;
                break;
            }
        case 'TASK STATUS':
            results = await helpers.searchTaskByTaskStatus(req.body.searchParameter[1]);
            break;
        default:
            results = [];
            break;
    }

    if (!truth) {
        results = [];
        data.all_tasks = results;
    } else {
        data.all_tasks = results[0];
    }
    data.title = "All Tasks";
    res.render("pages/show-all-tasks.ejs", data);
});

//Get a task by id
router.get("/task-scheduler/show-a-task/:id", async (req, res) => {
    let data = {};
    let results = await helpers.getTaskById(req.params.id);

    data.title = `Task ${req.params.id}`;
    data.taskInfo = results[0];
    res.render("pages/show-a-task.ejs", data);
});

//Update task by id - post input
router.post("/task-scheduler/show-a-task/:id", async (req, res) => {
    await helpers.updateTaskById(req.params.id, req.body);

    res.redirect("/task-scheduler/");
});

//Remove task by id
router.get("/task-scheduler/remove-task-by-id/:id", async (req, res) => {
    console.log(req.params.id);
    await helpers.removeTaskById(req.params.id);
    res.redirect("/task-scheduler/");
});

module.exports = router;
