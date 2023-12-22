const moment = require("moment-timezone");
const fs = require("fs");
const petik = '```'
const ms = require("parse-ms");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const hariini = moment.tz('Asia/Jakarta').format('dddd DD MMMM YYYY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { creatorNumber, ownerName, botName, } = setting
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")
var ultah = ms(1722685340539 - Date.now())
var thbr = ms(1704065098611 - Date.now())

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (conn, totalFitur, sender, prefix, pushname, isOwner, isCreator, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} @${sender.split('@')[0]}
	
> Bot Name : ${botName}
> Bot Tag : @${conn.user.id.split(':')[0]}
> Version : 6.0
> Lib : [ Baileys-MD ]
> Baileys : [ @whiskeysockets/baileys ]
> Baileys Ver.  : [ 6.5.0 ]
> Platform : Linux
> Date : ${hariini}
> Total Fitur : ${totalFitur()}

╭────「 *User Info* 」
├ Name : ${conn.getName(sender)}
├ Tag : @${sender.split("@")[0]}
├ Status : ${isCreator ? 'Creator' : isPremium ? 'Premium' : 'Free'}
├ Limit Harian : ${isCreator ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
├ Limit Game : ${isCreator ? '-' : cekGLimit(sender, gcount, glimit)}
├ Balance : $${toCommas(getBalance(sender, balance))}
╰─────────────

╭────「*List Menu*」
├ ${prefix}menu main
├ ${prefix}menu conver
├ ${prefix}menu tools
├ ${prefix}menu stiker
├ ${prefix}menu anonymous
├ ${prefix}menu ai
├ ${prefix}menu download
├ ${prefix}menu religion
├ ${prefix}menu photooxy
├ ${prefix}menu random
├ ${prefix}menu search
├ ${prefix}menu game
├ ${prefix}menu payment
├ ${prefix}menu group
├ ${prefix}menu bug
├ ${prefix}menu owner
├ ${prefix}menu all
╰─────────────
Creator : @${creatorNumber.split('@')[0]}
Powered By : @0`
}
exports.menuall = (conn, totalFitur, sender, prefix, pushname, isOwner, isCreator, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} @${sender.split('@')[0]}
	
> Bot Name : ${botName}
> Bot Tag : @${conn.user.id.split(':')[0]}
> Version : 6.0
> Lib : [ Baileys-MD ]
> Baileys : [ @whiskeysockets/baileys ]
> Baileys Ver.  : [ 6.5.0 ]
> Platform : Linux
> Date : ${hariini}
> Total Fitur : ${totalFitur()}

╭────「 *User Info* 」
├ Name : ${pushname}
├ Tag : @${sender.split("@")[0]}
├ Status : ${isCreator ? 'Creator' : isPremium ? 'Premium' : 'Free'}
├ Limit Harian : ${isCreator ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
├ Limit Game : ${isCreator ? '-' : cekGLimit(sender, gcount, glimit)}
├ Balance : $${toCommas(getBalance(sender, balance))}
╰─────────────

╭────「 *Main Menu* 」 
├ ${prefix}menu
├ ${prefix}owner
├ ${prefix}donasi
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}speed
├ ${prefix}runtime
├ ${prefix}cekprem
├ ${prefix}listprem 
╰─────────────

╭────「 *Converter Menu* 」 
├ ${prefix}toimg <for sticker>
├ ${prefix}tovid <for sticker>
├ ${prefix}tomp3
├ ${prefix}tourl 
╰─────────────

╭────「 *Tools Menu* 」 
├ ${prefix}say 
├ ${prefix}nulis
├ ${prefix}ss 
├ ${prefix}ssweb 
├ ${prefix}sertifikat <new> 
╰─────────────

╭────「 *Artificial Intelligence* 」 
├ ${prefix}openai <ChatGPT-4>
├ ${prefix}openai1 <ChatGPT-3>
├ ${prefix}bard <Google AI>
├  vanz 
├ ${prefix}chatty
├ ${prefix}txt2img
├ ${prefix}remini
├ ${prefix}removebg 
├ ${prefix}jadianime 
╰─────────────

╭────「 *Sticker Menu* 」 
├ ${prefix}emojimix
├ ${prefix}meme
├ ${prefix}qc
├ ${prefix}sticker
├ ${prefix}smeme <new>
├ ${prefix}ttp
├ ${prefix}attp
├ ${prefix}smeta
├ ${prefix}swm 
╰─────────────

╭────「 *Anonymous Chat* 」 
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}skip
├ ${prefix}stop
├ ${prefix}sendprofile
├ ${prefix}menfess 
╰─────────────

╭────「 *Download Menu* 」 
├ ${prefix}tiktokaudio
├ ${prefix}tiktokvideo 
├ ${prefix}igreels
├ ${prefix}igphotos
├ ${prefix}play
├ ${prefix}ytmp4 <youtube.com/>
├ ${prefix}ytmp3 <youtube.com/>
├ ${prefix}ytvideo <youtu.be/>
├ ${prefix}ytaudio <youtu.be/> 
╰─────────────

╭────「 *Random Menu* 」 
├ ${prefix}quote
├ ${prefix}fakta
├ ${prefix}quoteanime
├ ${prefix}waifu
├ ${prefix}neko 
╰─────────────

╭────「 *Search Menu* 」 
├ ${prefix}ytsearch
├ ${prefix}lirik
├ ${prefix}igstalk
├ ${prefix}tiktokstalk
├ ${prefix}pinterest 
├ ${prefix}gimage <google> 
╰─────────────

╭────「 *Game Menu* 」 
├ ${prefix}asahotak
├ ${prefix}caklontong
├ ${prefix}family100
├ ${prefix}siapakahaku
├ ${prefix}susunkata
├ ${prefix}tebakbendera
├ ${prefix}tebakgambar
├ ${prefix}tebakkalimat
├ ${prefix}tebakkata
├ ${prefix}tebakkimia
├ ${prefix}tebaklirik
├ ${prefix}tictactoe
├ ${prefix}werewolf
├ ${prefix}kuis
├ ${prefix}math
├ ${prefix}nyerah 
╰─────────────

╭────「 *Photooxy* 」 
├ ${prefix}flaming
├ ${prefix}night
├ ${prefix}shadow
├ ${prefix}paper
├ ${prefix}rainbow
├ ${prefix}grass
├ ${prefix}cube
├ ${prefix}glow
├ ${prefix}growing
├ ${prefix}fabric 
╰─────────────

╭────「 *Payment & Bank* 」 
├ ${prefix}buylimit
├ ${prefix}buyglimit
├ ${prefix}transfer
├ ${prefix}limit
├ ${prefix}balance 
╰─────────────

╭────「 *Group Menu* 」 
├ ${prefix}linkgrup
├ ${prefix}setnamegc
├ ${prefix}setppgc
├ ${prefix}setdesc
├ ${prefix}bcgc
├ ${prefix}afk
├ ${prefix}add
├ ${prefix}kick
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}group
├ ${prefix}revoke
├ ${prefix}delete
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}antilink
├ ${prefix}welcome 
╰─────────────

╭────「 *Bug By Vanz* 」 
├ ${prefix}bugcall
├ ${prefix}bugvideo
├ ${prefix}virtex 
╰─────────────

╭────「 *Religion* 」 
├ ${prefix}kisahnabi
├ ${prefix}jadwalsholat 
╰─────────────

╭────「 *Owner Menu* 」 
├ > evalcode
├ < evalcode-2
├ $ executor
├ ${prefix}join
├ ${prefix}mode
├ ${prefix}broadcast
├ ${prefix}pushkontak
├ ${prefix}addowner
├ ${prefix}setreply
├ ${prefix}setlistmenu 
├ ${prefix}setnamegrup
├ ${prefix}setnamebot 
├ ${prefix}autoread
├ ${prefix}autotyping
├ ${prefix}autorecording
├ ${prefix}delowner
├ ${prefix}setppbot
├ ${prefix}exif
├ ${prefix}leave
├ ${prefix}shutdown
├ ${prefix}addprem
├ ${prefix}delprem 
╰─────────────`
}
exports.menumain = (prefix) => {
	return `╭────「 *Main Menu* 」 
├ ${prefix}menu
├ ${prefix}owner
├ ${prefix}donasi
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}speed
├ ${prefix}runtime
├ ${prefix}cekprem
├ ${prefix}listprem 
╰─────────────`
}
exports.menuconver = (prefix) => {
	return `╭────「 *Converter Menu* 」 
├ ${prefix}toimg <for sticker>
├ ${prefix}tovid <for sticker>
├ ${prefix}tomp3
├ ${prefix}tourl 
╰─────────────`
}
exports.menutools = (prefix) => {
	return `╭────「 *Tools Menu* 」 
├ ${prefix}say 
├ ${prefix}nulis
├ ${prefix}ss 
├ ${prefix}ssweb 
├ ${prefix}sertifikat <new> 
╰─────────────`
}
exports.menustiker = (prefix) => {
	return `╭────「 *Sticker Menu* 」 
├ ${prefix}emojimix
├ ${prefix}meme
├ ${prefix}qc
├ ${prefix}sticker
├ ${prefix}smeme <new>
├ ${prefix}ttp
├ ${prefix}attp
├ ${prefix}smeta
├ ${prefix}swm 
╰─────────────`
}
exports.menuai = (prefix) => {
	return `╭────「 *Artificial Intelligence* 」 
├ ${prefix}openai <ChatGPT-4>
├ ${prefix}openai1 <ChatGPT-3>
├ ${prefix}bard <Google AI>
├  vanz 
├ ${prefix}chatty
├ ${prefix}txt2img
├ ${prefix}remini
├ ${prefix}removebg 
├ ${prefix}jadianime 
╰─────────────`
}
exports.menuanon = (prefix) => {
	return `╭────「 *Anonymous Chat* 」 
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}skip
├ ${prefix}stop
├ ${prefix}sendprofile
├ ${prefix}menfess 
╰─────────────`
}
exports.menurandom = (prefix) => {
	return `╭────「 *Random Menu* 」 
├ ${prefix}quote
├ ${prefix}fakta
├ ${prefix}quoteanime
├ ${prefix}waifu
├ ${prefix}neko 
╰─────────────`
}
exports.menudownload = (prefix) => {
	return `╭────「 *Download Menu* 」 
├ ${prefix}tiktokaudio
├ ${prefix}tiktokvideo 
├ ${prefix}igreels
├ ${prefix}igphotos
├ ${prefix}play
├ ${prefix}ytmp4 <youtube.com/>
├ ${prefix}ytmp3 <youtube.com/>
├ ${prefix}ytvideo <youtu.be/>
├ ${prefix}ytaudio <youtu.be/> 
╰─────────────`
}
exports.menusearch = (prefix) => {
	return `╭────「 *Search Menu* 」 
├ ${prefix}ytsearch
├ ${prefix}lirik
├ ${prefix}igstalk
├ ${prefix}tiktokstalk
├ ${prefix}pinterest 
├ ${prefix}gimage <google> 
╰─────────────`
}
exports.menugame = (prefix) => {
	return `╭────「 *Game Menu* 」 
├ ${prefix}asahotak
├ ${prefix}caklontong
├ ${prefix}family100
├ ${prefix}siapakahaku
├ ${prefix}susunkata
├ ${prefix}tebakbendera
├ ${prefix}tebakgambar
├ ${prefix}tebakkalimat
├ ${prefix}tebakkata
├ ${prefix}tebakkimia
├ ${prefix}tebaklirik
├ ${prefix}tictactoe
├ ${prefix}werewolf
├ ${prefix}kuis
├ ${prefix}math
├ ${prefix}nyerah 
╰─────────────`
}
exports.menupo = (prefix) => {
	return `╭────「 *Photooxy* 」 
├ ${prefix}flaming
├ ${prefix}night
├ ${prefix}shadow
├ ${prefix}paper
├ ${prefix}rainbow
├ ${prefix}grass
├ ${prefix}cube
├ ${prefix}glow
├ ${prefix}growing
├ ${prefix}fabric 
╰─────────────`
}
exports.menupb = (prefix) => {
	return `╭────「 *Payment & Bank* 」 
├ ${prefix}buylimit
├ ${prefix}buyglimit
├ ${prefix}transfer
├ ${prefix}limit
├ ${prefix}balance 
╰─────────────`
}
exports.menureligion = (prefix) => {
	return `╭────「 *Religion* 」 
├ ${prefix}kisahnabi
├ ${prefix}jadwalsholat 
╰─────────────`
}
exports.menugrup = (prefix) => {
	return `╭────「 *Group Menu* 」 
├ ${prefix}linkgrup
├ ${prefix}setnamegc
├ ${prefix}setppgc
├ ${prefix}setdesc
├ ${prefix}bcgc
├ ${prefix}afk
├ ${prefix}add
├ ${prefix}kick
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}group
├ ${prefix}revoke
├ ${prefix}delete
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}antilink
├ ${prefix}welcome 
╰─────────────`
}
exports.menuowner = (prefix) => {
	return `╭────「 *Owner Menu* 」 
├ > evalcode
├ < evalcode-2
├ $ executor
├ ${prefix}join
├ ${prefix}mode
├ ${prefix}broadcast
├ ${prefix}pushkontak
├ ${prefix}addowner
├ ${prefix}setreply
├ ${prefix}setlistmenu 
├ ${prefix}setnamegrup
├ ${prefix}setnamebot 
├ ${prefix}autoread
├ ${prefix}autotyping
├ ${prefix}autorecording
├ ${prefix}delowner
├ ${prefix}setppbot
├ ${prefix}exif
├ ${prefix}leave
├ ${prefix}shutdown
├ ${prefix}addprem
├ ${prefix}delprem 
╰─────────────`
}
exports.menubug = (prefix) => {
	return `╭────「 *Bug By Vanz* 」 
├ ${prefix}bugcall
├ ${prefix}bugvideo
├ ${prefix}virtex 
╰─────────────`
}

