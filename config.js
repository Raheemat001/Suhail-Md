const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145625318";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_47_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMyLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDk1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY1LFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJES2lwQmFPZ3RCNnVxT3dUYjZoL0FsU0hqTThLd1d1UE9NZjkrRzV3eFV3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxMVNDaEI5SFRsYXNfbGlVeUVFX2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkYjAwNmQ1LTdmYjktNDAzMi1iYmU3LTUwNTc2NWI5YzFiNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAyNDAsXG4gICAgICAyMzYsXG4gICAgICAxMTYsXG4gICAgICAxODcsXG4gICAgICAxNzUsXG4gICAgICAxNDIsXG4gICAgICA3NixcbiAgICAgIDU2LFxuICAgICAgMTcsXG4gICAgICAyMDksXG4gICAgICAxMjEsXG4gICAgICAxMTQsXG4gICAgICAxMTEsXG4gICAgICAxNTEsXG4gICAgICA0LFxuICAgICAgMTQ3LFxuICAgICAgODksXG4gICAgICAxMzAsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgODAsXG4gICAgICAxNjEsXG4gICAgICAxNTAsXG4gICAgICA5NixcbiAgICAgIDEyMixcbiAgICAgIDM5LFxuICAgICAgODMsXG4gICAgICA5MCxcbiAgICAgIDE2MCxcbiAgICAgIDExNixcbiAgICAgIDE1LFxuICAgICAgMCxcbiAgICAgIDIwLFxuICAgICAgMTAyLFxuICAgICAgMTQ3LFxuICAgICAgNzksXG4gICAgICAxNixcbiAgICAgIDI0MyxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxU0RSQU42QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NTYyNTMxODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiZGVzaWduIGJpbnRcIixcbiAgICBcImxpZFwiOiBcIjc2ODkzMDAwODI3MTA5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERMeXB3RUVLU2h6clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpMkxOVFprSFJHRWpad0dVbHFMMVdicHhoUHFHa1BNU0JOdnRsTkoyUldBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhtYU5qWkVWSjE4QjlJVFhGMDhhRTFvT28wa1dncTUvaWFkRlJWK2ZiemhLTjFBQnZncG5EZEdRWnVwekdCeHVQS1pJVHBPYmdPRU5KSThjOC85L0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNRVFRuRTdUbUw1UjlDbVRjWXovTFdNd3A4ZVBOeGsxUlpodVJPN083dVdiVlUwU0I1SUFJMm1XZ0hYSytDdmg5d2VSYnRqN2UyR0VhenJQdFFEMEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDU2MjUzMTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk0Njg1NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
