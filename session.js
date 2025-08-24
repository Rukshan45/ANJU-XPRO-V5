//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJmVlpXWFoxaVQxSnhzbEIvUjlKOVZBaDhNOVhYcldGWmYwZFJ2dmtIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGtKdVhlTmErdXIybXV3eEIyM3RMUUp5SWF6Y1JvbG9yc05COXk5WXptbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R3RCaytsMDJxNXpvSVhNa2JTWjJ5UUVLTGpKdVpsblpqajBrZTlRcGxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNck9SR2RmM3l0cUtIU3hUQ1I2dHRSL2Z4QmVVTVpyckJUWlZrN3RualhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGNU9ObzRWMnE2RUJxWVRuMnd1Vzd6SUNMWEZXQlhwczZkYStHN2N2MlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNxeEJKRExvTU4yTnUzZk9JOWllTGd2VGlzSkoyUExZUWFDRUYrMFJER2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEk3NzZaanAzQ0RkLzlyMUp0Vk85TWEzNWVObW1SUFh5TmVmU1JqaG9FTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkw1Wk5ETzBoMWNTOFZScmpCMVY0Ui9yVXpPbnRwNkRkN04vR1RmTEFoZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLeTgyd3owRmlYdkJwYUtZbzg4SVpaSjVMRElsbmg2TFVIWGdUclA1aGJvZkVYNllxZ0c1aENEMm1halZ5K3ZWOGhNNnRyazRuOExZd3JkazlnWWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJGN0JHYVNTRVBJdEp4SnNhOVNzZFBnMFVRNGdJeVVSZzBYbytsRFlsNVVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBNXpIamNVbVNqcWE5Q0xkd3F1b09nIiwicGhvbmVJZCI6ImQ4ZGZlZGM1LTdjOTEtNDcxYS05ZGE0LTIyYjgyN2NlMDIzNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZGhMbFMzTDhHdFR4d2tjOTNkaGpxRzRPQzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2ZjbHAwQ3hXd0pjVkM2VFMwNWtVUkxBL3FvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhXQ0JXN1E0IiwibWUiOnsiaWQiOiI5NDc2MDgxNDEyMzoyMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNzA2MDE4MzEyMzY2OjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlBCK3JJR0VJK25yY1VHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieE5zNG0xWnIzbXJPQ2VxbWx0K08rRWc5K3l4UzhKclFoWkdEeFNCTkMyZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaUtyZXp4SFd6a21YVGF2UjlmanN4amJiK3FHQnhVRXZYMFlBUGNReXZKbGhtbzM0OFdqSnpaSGtRa0Q0NEU4a3RSb3NWemZwUTR4dFVxQ3RUMlNWQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IldxOFJGa3lGM2MyRklGcmhQZjB6UTBCVEFHbmpyY2c1QWQwWmMraEMrRm1QaGdYRzFidWQyNmJlMGhGcG9pYlJUR0xPOElMVmJCcnlPa3RmYURWM2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA4MTQxMjM6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1RiT0p0V2E5NXF6Z25xcHBiZmp2aElQZnNzVXZDYTBJV1JnOFVnVFF0byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDU4NTI0LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhKTSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
