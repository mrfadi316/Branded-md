const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "1t4CgB5R#GOrtJxD_NQFDmGXkuzmrGtMz91TkYmcZke_DMpi5IMQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://qu.ax/LTHEX.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO I AM BRANDED-MD ONLINE NOW",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
