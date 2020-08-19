const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('./credentials.json')
 
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('id of your spreadsheet from url');

async function test (){

await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key
});

await doc.loadInfo(); // loads document properties and worksheets
console.log("1 => " + doc.title);

// const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });

// await sheet.addRow({ name: 'abdul', email: 'siddiqui' });

const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
console.log("2 => " + sheet.title);
console.log("3 => " + sheet.rowCount);

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com', phone: 123456789, date:  date ,entry_timing: time});

console.log("4 => " + "successfull")
}

test()


  