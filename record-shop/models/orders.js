const newRecord=require("../schema/recordsShopSchema");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('../data/db.json');
const db = low(adapter);
const record = db.get("records").value();