//  MODULE TO READ AND WRITE ON LOG FILE
import fs from 'fs';
const LOG_FILE = "./logs.txt";
if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, '');
}
/**
 * Read the logs
 * @returns the current log file content
 */
export function readLog() {
  let content = fs.readFileSync(LOG_FILE).toString(); 
  return content;
}

//  Write a cleaner version of writeLog() function, in  logger.js file
//    - You will need to use  appendFilesync() from fs module  - instead of writeFileSync()
//    - You can check the docuement :   https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/

/**
 * Add a new log to the file
 * @param {string} newLog - the log to add to the file
 */
export function writeLog(newLog) {
  let content = newLog + " - at " + new Date().toLocaleTimeString() + "\n"; 
  fs.appendFileSync(LOG_FILE, content);
}