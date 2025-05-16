const fs = require('Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pnTUsyM1NUNlpDRklFdDVqVWxTUXg5UnR6NERZWVpMUUNUSzJZVFUzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW1BNVZiMzlpQnd1MXZyUVhEVWc1Zm5KU2ltM242RXNKdzB2cW9ma1JSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRi9lMUh3RjFGdjNhZUZqMFZLS2x3VTRySXV3TENHTi94azlCZ2tmUVdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUQWlQWWJLZ2JaOHR1eUZic0FvL3JzZnVmQXljT05Wd3JRTy9TQWNlOXo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIaVFieHplemZUUnNQUW0vcjhBSU8xNWlsd0VCekVSbmtJS3MwZ0ZEM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNrdVVuV0VaSjRPeThraXlBVUs2RkM4Z1lhdkhsbGRPbVR3SXpsaFhpaHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJmL0RDZWpmVzJlb29mK0hIUklJNjdkTnhhN0d6MkRuUGJCanNvMWpXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWdTNk9vSWtpMHZxZERuUG5la21TazIyamxHNjhodFdzNGt5YVBldkxWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFoOGJtQW84RWowNEhSZzB5Z1RGSVYrakQwdmhSM1MwckRHSE5ZaVFwQnFNVFZCSlJvazBoY1IvTWx5Y3FxUDYxdlczazlJcmhicytQOG1DQVp0TWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJBSS9WVUpXWGFCZU9TcnpjSTF1YWlyNTY3MENPeE9ScFFOdGY2Yy9DdHJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNKR2cyeXNRODZ5ZHdRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzbTRvSDN0bXduZTBSNEd2K0E4VzJuOXV4ZVJaTExtZ28xbG83czVyK25BPSIsImFjY291bnRTaWduYXR1cmUiOiJsUEZkZGc3RDM0d0ovbXBNb01HaDQ2UmZjbWw2SEViekMxMzQ3SlRMQ0JEUjBUUndTUXZ4VGtBS1YzcWpWVEpwMzZReGRaVVljMTVKRndFV2M2NG5Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSE1HcEUrVEVhb05rUHo1aGhZaWNaWWJUL0gvS1hKQTdPNUxJck5sN1N1bEl6cm12aU5ld2VzcHE4SVBqMElKUHlnUEU1QzU2Qm9XMzQ0eWo3Z0lDaUE9PSJ9LCJtZSI6eyJpZCI6IjE4Mjk4OTkwOTg1OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRSQVkiLCJsaWQiOiIxOTE2ODA1NjUyNjA0MDg6MTRAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4Mjk4OTkwOTg1OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ1dUtCOTdac0ozdEVlQnIvZ1BGdHAvYnNYa1dTeTVvS05aYU83T2EvcHcifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzQwODUwMSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgwSSJ9
                   ');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'zokk',
     ETAT:process.env.ETAT,
    PREFIXE: process.env.PREFIXE,
    NOM_OWNER: process.env.NOM_OWNER || "Zokou-Md",
    NUMERO_OWNER : process.env.NUMERO_OWNER,              
    LECTURE_AUTO_STATUS: process.env.LECTURE_AUTO_STATUS || "non",
    TELECHARGER_AUTO_STATUS: process.env.TELECHARGER_AUTO_STATUS || 'non',
    MODE: process.env.MODE_PUBLIC,
    PM_PERMIT: process.env.PM_PERMIT || 'non',
    BOT : process.env.NOM_BOT || 'Zokou_MD',
    URL : process.env.LIENS_MENU || 'https://static.animecorner.me/2023/08/op2.jpg',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    //GPT : process.env.OPENAI_API_KEY,
    DP : process.env.STARTING_BOT_MESSAGE || 'oui',
    ATD : process.env.ANTI_DELETE_MESSAGE || 'oui',            
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
