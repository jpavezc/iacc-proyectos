// run_backup.js
require("dotenv").config()
const execFile = require("child_process").execFile
const date = new Date()
const current_date = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`
const backup_file = `export_${current_date}`
const backup_file_ext = `export_${current_date}.tar`

const username = 'postgres';
const database = 'iacc-test';
const dbHost = 'localhost';
const dbPort = '5432';
const dbPassword = 'admin';

let backup_script = `pg_dump --username=${username} ${database}`

var script = execFile(
  `./backup.sh`,
  [backup_script, backup_file, process.env.DB_PASSWORD],
  (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`)
    }
    console.log("Backup complete!")
  }
)