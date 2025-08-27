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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05IK3FYaFlUVjR1UHUyMVhGSkI0MFpqSkZFZXVZRjlwT0ZhdC9vbXVXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODEyNW55TjRaeGFhZkJ0Y0V2TUg2dUJCTGI1TVZRT090cC9ML0pYditXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR0F0anJ1SkgrQStyUVp6VEZTanlZTnBZU2diN1F3cG9wRERTNWZyMkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOWN3TjNobUxuUnJYQy9wQVBCSDBEeGlOalNTNXNHZU9JT2lqTDVnR1NZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FblYzWm5sUWE5elA3L1BxSUs0aitoS0YrODVIcWVaTCs1UUl6VEhCMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndjbGdEUHFJRTJPbzgxTUN1NzhTYXBsWVlYYnUwTmJBT1BYVUhiK2NsbFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNQaUVESk5mTlYvNVZFLzBBeHd4d1hFVGFaNmNPMDdBVmpqRzFKbnFVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTlsZnViU1hseWRSVFltbWJ0KzFVVmtieDM0cDYxQVUrU2lyd2FPV3J3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DQmh3a2pPR2t5K2Z2aTVKQmoxYk5VazJhSXR2cWpCbjRINzdhNU9wMytUUVBzZEQrQ2ZNNlJNb3c0ZTZ3cThabjRXWVNHUXN5U0pyOFdOWjgvRmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoidytYbGRkVnR3Q1RNUm1vdW1XMXV5dm1pVTZxdjZrdXJYR1JreUczNVdPQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc2MDgxNDEyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMTdEQjVBRDgzN0RGRkYwRjQyRTIyNzE4NTJGRjE5OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2Mjg5MDA3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSZlJocUtTOVJzS0Y5M0hXMXdXX01nIiwicGhvbmVJZCI6IjlhNmUyZTNmLWM4OWUtNDNhMS04MTViLWM1MjcwYmM0YmUzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWXVteGtnNDRzRWlNYXF2THpoYlpJREJtZU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzRjeXp0S0R4cHVkc3BFU2tsTklvM3cwdE9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjYzNjFIV0JMIiwibWUiOnsiaWQiOiI5NDc2MDgxNDEyMzo0OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNzA2MDE4MzEyMzY2OjQ4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5CK3JJR0VONnZ1OFVHR0JFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieE5zNG0xWnIzbXJPQ2VxbWx0K08rRWc5K3l4UzhKclFoWkdEeFNCTkMyZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS08zTDA3NmxqdTRqN00valJZMXdDdHpUZWhHZmdJdWFWdnc5Y3hIdXV1bERQMk9icTZ2aWdleWpaZzNZcTJLVHJjOUpHSEk1RXpVQkdsU1lOSVE1QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IktXTTJJalRRaWIyNGNRb09wcnFsSzNuRVdrK0JPZ0R3TFZxOUxRSDFaN25kUmVpRzlPM3MxOGc3T1ExVzNneXl2Y1pRWWZwLy9QWm84bmw0NHJZUWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA4MTQxMjM6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1RiT0p0V2E5NXF6Z25xcHBiZmp2aElQZnNzVXZDYTBJV1JnOFVnVFF0byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2Mjg5MDAzLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJRayJ9",
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
