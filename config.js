const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285717281107@s.whatsapp.net"]
global.nomerOwner = "6285717281107"
global.nomorOwner = ['6285717281107']
global.nameGEDE = "BILZKETCEH"
global.namaDeveloper = "NabilZTamvan"
global.namaBot = "BILZ WhatsApp"
global.packname = ""
global.author = "Sticker By BilzTamvan"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By 4KSANZZ
Base Ori By KirBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Harap Jangan Jual Sc Ini
Karena Sc Ini Free Langsung Dari
Youtube : https://youtube.com/@kangbotwhatsapp

*/