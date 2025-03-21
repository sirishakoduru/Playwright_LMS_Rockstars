const xlsx = require('xlsx');

function readExcelFile(filepath, sheetName){
   const workbook = xlsx.readFile(filepath);
   const sheet = workbook.Sheets[sheetName];
   const jsonData =  xlsx.utils.sheet_to_json(sheet);
   return jsonData;

}
function getDataByDataInput(filepath, sheetName, DataInputValue) {
   const data = readExcelFile(filepath, sheetName);
   const matchedEntry = data.find(entry => entry['DataInput'] === DataInputValue);
   return matchedEntry || {};
} 
module.exports = { readExcelFile };

module.exports = {getDataByDataInput};

