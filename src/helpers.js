/* eslint-disable camelcase */
"use strict";

const mysql = require('promise-mysql');
const config = require('./../config/db/task_scheduler.json');


let helpers = {

    addTask: async function(input) {
        const db = await mysql.createConnection(config);
        let sql = `CALL addTask(?,?,?,?,?,?);`;

        await db.query(sql, [`${input.startingTime}`, `${input.deadline}`, `${input.category}`,
            `${input.estimatedDuration}`, `${input.description}`, `${input.status}`]);
        db.end();
    },
    addCategory: async function(cat) {
        const db = await mysql.createConnection(config);
        let sql = `CALL addCategory(?);`;

        await db.query(sql, [`${cat.category1}`]);
        db.end();
    },
    showAllTask: async function() {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL showAllTasks();`);

        db.end();
        return res;
    },
    showCategory: async function() {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL showCategory();`);

        db.end();
        return res;
    },
    getTaskById: async function(id) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL getTaskById(${id});`);

        db.end();
        return res;
    },
    updateTaskById: async function(id, newInfo) {
        const db = await mysql.createConnection(config);
        let sql = `CALL updateTaskById(?,?,?);`;

        await db.query(sql, [`${id}`, `${newInfo.status}`, `${newInfo.elapsedTime}`]);
        db.end();
    },
    removeTaskById: async function(id) {
        const db = await mysql.createConnection(config);
        let sql = `CALL removeTaskById(${id});`;

        await db.query(sql);
        db.end();
    },
    getCategoryById: async function(id) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL getCategoryById(${id});`);

        db.end();
        return res;
    },
    updateCategoryById: async function(id, newCat) {
        const db = await mysql.createConnection(config);
        let sql = `CALL updateCategoryById(?,?);`;

        await db.query(sql, [`${id}`, `${newCat.categoryName}`]);
        db.end();
    },
    removeCategoryById: async function(id) {
        const db = await mysql.createConnection(config);
        let sql = `CALL removeCategoryById(${id});`;

        await db.query(sql);
        db.end();
    },
    searchTaskByDescription: async function(description) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByDescription('%${description}%');`);

        db.end();
        return res;
    },
    searchTaskByCategory: async function(category) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByCategory('%${category}%');`);

        db.end();
        return res;
    },
    searchTaskByStartingTime: async function(startingTime) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByStartingTime('${startingTime}');`);

        db.end();
        return res;
    },
    searchTaskBydeadline: async function(deadline) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskBydeadline('${deadline}');`);

        db.end();
        return res;
    },
    searchTaskByEstimatedDuration: async function(estimatedDuration) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByEstimatedDuration('${estimatedDuration}');`);

        db.end();
        return res;
    },
    searchTaskByActualDuration: async function(actualDuration) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByActualDuration('${actualDuration}');`);

        db.end();
        return res;
    },
    searchTaskByElapsedTime: async function(elapsedTime) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByElapsedTime('${elapsedTime}');`);

        db.end();
        return res;
    },
    searchTaskByTaskStatus: async function(taskStatus) {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL searchTaskByTaskStatus('%${taskStatus}%');`);

        db.end();
        return res;
    },
    timeLine: async function() {
        const db = await mysql.createConnection(config);
        let res = await db.query(`CALL timeLine();`);

        db.end();
        return res;
    },
    weekStepper: function(weeks = 0) {
        const now = new Date();
        let currentDate = new Date;
        const k = 7 * weeks;
        let week = [];

        for (let i = 2; i < 9; i++) {
            // eslint-disable-next-line max-len
            let result = new Date(now.getFullYear(), now.getMonth(), (now.getDate() - (currentDate.getDay()) + k) + i);

            week.push(result.toISOString().slice(0, 10));
        }
        return week;
    },
    getWeekNumber: function () {
        let currentDate = new Date();
        let startDate = new Date(currentDate.getFullYear(), 0, 1);
        var days = Math.floor((currentDate - startDate) /
            (24 * 60 * 60 * 1000));

        var weekNumber = Math.ceil(days / 7);

        return (weekNumber);
    },
    getUserCapacity: async function() {
        const db = await mysql.createConnection(config);
        let res = await db.query(`SELECT currentCapacity FROM userCapacity;`);

        db.end();
        return res;
    },
    canDeadlineBeMett: async function (body) {
        const db = await mysql.createConnection(config);
        let sql = `CALL capacityLeft(?,?);`;
        let result = await db.query(sql, [`${body.startingTime}`, `${body.deadline}`]);
        let availableCapacity = result[0][0].availableCapacity;

        if (body.estimatedDuration <= availableCapacity || availableCapacity === null) {
            return true;
        } else {
            return false;
        }
    },
    updateUserCapacity: async function(newCapacity) {
        const db = await mysql.createConnection(config);

        await db.query(`CALL updateUserCapacity(${newCapacity.userCapacity});`);

        db.end();
    },
};

module.exports = helpers;
