
//-------------------------------// #baileys
const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, processTime, processTicksAndRejections, ECONNABORTED, apikey, Browsers, WA_DEAFULT_EPHEMERAL, DataView, TypedArray, ChatModification } = require('@adiwajshing/baileys');
//---------------// fim baileys //
/*
•
•
•
•
•
*/
//-------------------------------// #require
const fs = require('fs'); //File System, para leitura e criação de arquivos

const simple = require('./docs/others/simple.js'); //nos ajuda a obter dados mais precisos das mensagens

const { color, bgcolor } = require('./docs/apis/color.js'); //cores

const ler = require('./edit/text/language.js'); //todos os textos estão presentes aki, exceto menus

const { isFiltered, addFilter } = require('./docs/others/antispam');

const { fetchJson, fetchText } = require('./docs/others/fetcher');

const { getRandom, getGroupAdmins, getBuffer } = require('./docs/others/functions')

const ffmpeg = require('fluent-ffmpeg')

const { exec, spawn } = require("child_process")

const fss = fs.promises
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";


//---------------// fim requires //
/*
•
•
•
•
•
*/
//-------------------------------// #settings
var { dono, prefix } = require('./edit/settings.js');
//---------------// fim settings
/*
•
•
•
•
•
*/
//-------------------------------// #rqrcode
async function starts() { //função que vai iniciar o bot
	const zero = new WAConnection();
	zero.logger.level = 'warn';
	zero.on('qr', () => {
	
		console.log(color('[','white'), color('!','red'), color(']','white'), color(ler.scan)); //escaneie o QR Code
	});

	fs.existsSync('./docs/qrcode.json') && zero.loadAuthInfo('./docs/qrcode.json');
	zero.on('connecting', () => {
    console.log(ler.conectando); //conectando...
	});
	zero.on('open', () => {		
    console.log(ler.conectado); //conectado ✓
	});

	await zero.connect({timeoutMs: 30*1000});
        fs.writeFileSync('./docs/qrcode.json', JSON.stringify(zero.base64EncodedAuthInfo(), null, '\t'));
//•••••••••••••••••••••••••• fim qrcode//
/*
•
•
•
•
•
*/

//-------------------------------// #mek
zero.on('chat-update', async (mek) => {

		try {
 if (!mek.hasNewMessage) return;
 
mek = mek.messages.all()[0]; //obtem todos os dados de uma mensagem

uMek = simple.smsg(zero, mek) //dados precisos

if (!mek.message) return; //se for algo diferente de uma mensagem, retornar

if (mek.key && mek.key.remoteJid == 'status@broadcast') return; //quando for transmissões, retornar

if (mek.key.fromMe) return; //quando a mensagem for minha, retornar	
	
global.blocked;

const content = JSON.stringify(mek.message); //texto da mensagem

const from = mek.key.remoteJid; //grupo da onde venho a mensagem

const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid;

const groupMetadata = isGroup ? await zero.groupMetadata(from) : '';

const type = Object.keys(mek.message)[0]; 

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType; //tipos de Mensagem

//#group
const groupMembers = isGroup ? groupMetadata.participants : '';
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
const isBotGroupAdmins = groupAdmins.includes(zero.user.jid) || false;

//#is
const isOwner = sender.includes(dono);

const isGroupAdmins = groupAdmins.includes(sender) || false || mek.key.fromMe;
//

/////
/*
•
•
•
•
•
*/
// identificar media
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
//quando quoted conter mídia

const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isVideo = type === 'videoMessage';
const isImage = type === 'imageMessage';
const isAudio = type === 'audioMessage';
const isSticker = type === 'stickerMessage';
const isDocument = type === 'documentMessage';
const isContact = type === 'contactMessage';
const isLocation = type === 'locationMessage';
//quando for mídia
/////

const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''.slice(1).trim().split(/ +/).shift().toLowerCase();

 const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '';
 //corpo do texto
 
const selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : '';	

var cmd = body.slice(1).trim().split(/ +/).shift().toLowerCase() || "undefined";
const isCmd = body.startsWith(prefix);

const args = body.trim().split(/ +/).slice(1); //captura o texto que vem após o comando

const cArgs = args.join(' '); 

const argsMin = (teks) => cArgs.length < teks;

const argsMax = (teks) => cArgs.length > teks;

const argsInc = (teks) => cArgs.includes(teks);

const argsIncLC = (teks) => cArgs.toLowerCase().includes(teks);

const argsSplit = (teks) => args.join("").split(teks)

const budyInc = (teks) => budy.includes(teks);
const budyIncLC = (teks) => budy.toLowerCase().includes(teks);
	
const reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted: mek})
			};
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}			





//-------------------------------//
/*
#
#
#
#
#
*/
//-------------------------------// #functions

const cArgsLC = cArgs.toLowerCase();

//manipular data e hora
var time = new Date;

const bo90 = time.getDay();
const cu52 = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
const diaDaSemana = `${cu52[bo90]}`;

const yu89 = time.getMonth();
const ok99 = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const mes = `${ok99[yu89]}`;

const diaDoMes = `${time.getDate()}`;

const ano = `${time.getFullYear()}`;

const hora = `${time.getHours()}:${time.getMinutes()}`;
///
//// fim data e hora

async function listarArquivos(diretorio, arquivos){
if(!arquivos) arquivos = [];
await sleep(2500);
let listaDeArquivos = await fss.readdir(diretorio);
console.log(listaDeArquivos);
var iyy = "";
for (let i = 0; i < listaDeArquivos.length; i++) {
iyy += `- ${listaDeArquivos[i]}\n`;
}
reply(`
*Lista de arquivos:*

${iyy}

total: ${listaDeArquivos.length}`);
};

//contador de comandos

async function cmdAdd(kpo) {

if ((kpo === 'dev') || (kpo === 'developer')){
let addCmdJson = await JSON.parse(fs.readFileSync('./edit/text/menus/dev.json'));

if (addCmdJson.includes(cmd)) return;

await fs.writeFileSync('./edit/text/menus/dev.json', JSON.stringify(addCmdJson));
await addCmdJson.push(cmd);
await fs.writeFileSync('./edit/text/menus/dev.json', JSON.stringify(addCmdJson));


};

if ((kpo === 'stik') || (kpo === 'sticker')){
let addCmdJson = await JSON.parse(fs.readFileSync('./edit/text/menus/sticker.json'));

if (addCmdJson.includes(cmd)) return;

await fs.writeFileSync('./edit/text/menus/sticker.json', JSON.stringify(addCmdJson));
await addCmdJson.push(cmd);
await fs.writeFileSync('./edit/text/menus/sticker.json', JSON.stringify(addCmdJson));


};

if ((kpo === 'dono')){
let addCmdJson = await JSON.parse(fs.readFileSync('./edit/text/menus/dono.json'));

if (addCmdJson.includes(cmd)) return;
await addCmdJson.push(cmd);
await fs.writeFileSync('./edit/text/menus/dono.json', JSON.stringify(addCmdJson));
}

if ((kpo === 'nsfw')){
let addCmdJson = await JSON.parse(fs.readFileSync('./edit/text/menus/nsfw.json'));

if (addCmdJson.includes(cmd)) return;
await addCmdJson.push(cmd);
await fs.writeFileSync('./edit/text/menus/nsfw.json', JSON.stringify(addCmdJson));
}


};

/*
let contadorCmd = await JSON.parse(fs.readFileSync('./docs/json/contcmd.json'));
if(contadorCmd.includes(cmd)) return;
await fs.writeFileSync('./docs/json/contcmd.json', JSON.stringify(contadorCmd));
await contadorCmd.push(cmd);
await fs.writeFileSync('./docs/json/contcmd.json', JSON.stringify(contadorCmd));
reply ('Novo comando adicionado no bot ✓');


}; //contador de comandos*/

//############//

// dados da msg
async function mekDados () {
if (mek.quoted === null) {
reply(`
𝐷𝐴𝐷𝑂𝑆 𝐷𝐴 𝑀𝐸𝑁𝑆𝐴𝐺𝐸𝑀:

message:
• remoteJid: ${mek.key.remoteJid}
• ID: ${mek.key.id}
• conversation: "${mek.message.conversation}"
• participant: ${mek.participant}
• mtype: ${mek.mtype}
`)

}
if (mek.quoted != null) if (mek.quoted.mtype === 'conversation') {
reply(`
𝐷𝐴𝐷𝑂𝑆 𝐷𝐴 𝑀𝐸𝑁𝑆𝐴𝐺𝐸𝑀:

quoted:
• text: "${mek.quoted.text}"
• mtype: ${mek.quoted.mtype}
• id: ${mek.quoted.id}
• sender: ${mek.quoted.sender.split("@")[0]}
• mentionedJid: ${JSON.stringify(mek.quoted.mentionedJid)}
• fakeObj: ${JSON.stringify(mek.quoted.fakeObj)}
`)
} else {
reply (`${JSON.stringify(mek)}`);
};
}; //dados da Msg

//############//

//valor aleatório
function mathHelp (valor1, valor2) {
valorMath = Math.floor(Math.random() * (valor1 - valor2) + valor2);
mathResult = valorMath
 } //valor aleatório
 
//############//

//reply botão
const sendButMessage = (id, quoo, text1, desc1, but = [], options = {}) => {
try {
if (!quoo) quoo = mek
try {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
zero.sendMessage(id, buttonMessage, MessageType.buttonsMessage, { quoted: quoo, options})
} catch(e) {
return reply (`📌 *Algo deu errado*`)
}} catch(e) {
console.log(e)
}
}; //reply botão

//############//

// reply audio
function sendAudio (id, arquivo, options = {}) {

const sendAudio = new Promise((resolve, reject) => {

try {
async function funcSendAudio () {
let kk = await fs.readFileSync('./edit/media/audio/' + arquivo);

await zero.sendMessage(
    id, 
    kk,
    MessageType.audio,
options)
    };
    
resolve(funcSendAudio())
} catch(e) {
reject(e)
};

});

sendAudio
.then(() => "")
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
});

} //reply áudio

//############//

// reply fotos
function sendImage (id, arquivo, options = {}) {

const sendImage = new Promise((resolve, reject) => {

try {
async function funcSendImage () {
let kk = await fs.readFileSync('./edit/media/image/' + arquivo);

await zero.sendMessage(
    id, 
    kk,
    MessageType.image,
options)
    };
    
resolve(funcSendImage())
} catch(e) {
reject(e)
};

});

sendImage
.then(() => "")
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
});

} //reply fotos

//############//

// reply vídeo
function sendVideo (id, arquivo, options = {}) {

const sendVideo = new Promise((resolve, reject) => {

try {
async function funcSendVideo () {
let kk = await fs.readFileSync('./edit/media/video/' + arquivo);

await zero.sendMessage(
    id, 
    kk,
    MessageType.video,
options)
    };
    
resolve(funcSendVideo())
} catch(e) {
reject(e)
};

});

sendVideo
.then(() => "")
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
});

} //reply vídeo

//############//

// reply sticker
function sendSticker (id, arquivo, options = {}) {

const sendSticker = new Promise((resolve, reject) => {

try {
async function funcSendSticker () {
let kk = await fs.readFileSync('./edit/media/sticker/' + arquivo);

await zero.sendMessage(
    id, 
    kk,
    MessageType.sticker,
options)
    };
    
resolve(funcSendSticker())
} catch(e) {
reject(e)
};

});

sendSticker
.then(() => "")
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
});

} //reply sticker

//############//

/*
async function jsonWrite (qualjson, caminho, teks){
await qualjson.push(teks)
await fs.writeFileSync(caminho, JSON.stringify(qualjson))
};

async function jsonDelete (qualjson, caminho, teks){
await qualjson.splice(teks)
await fs.writeFileSync(caminho, JSON.stringify(qualjson))
}

async function jsonOn (teks) {
let egg = await JSON.parse(fs.readFileSync(teks));
var isJsonOn = egg.includes("on");
var isJsonOfff = egg.includes("off");
if (!isJsonOn) {
if (isJsonOfff) await jsonDelete(egg, teks, 'off')
await jsonWrite(egg, teks, 'on')
reply(`✓ ativado`)
}
if (isJsonOn) {
reply(`Já estava ativado antes`)
}
}

async function jsonOff (teks) {
let egg = await JSON.parse(fs.readFileSync(teks));
var isJsonOff = egg.includes("off");
var isJsonOnn = egg.includes("on");
if (!isJsonOff) {
if (isJsonOnn) await jsonDelete(egg, teks, 'on')
await jsonWrite(egg, teks, 'off')
reply(`✓ desativado`)
}
if (isJsonOff) {
reply(`Já estava desativado antes`)
}
};
// fim functions json
*/


// #menus


async function menu() {

//dev
let devMenu = await JSON.parse(fs.readFileSync('./edit/text/menus/dev.json'));
let devin = "";
for (let i = 0; i < devMenu.length; i++){
devin += `│➠ ${devMenu[i]}\n┊`;
}
devY = `*Menu dev:*\n\n${devin}\ntotal: ${devMenu.length}`;
//fim dev

buttons = [{buttonId:`BUTTON1`, //id
buttonText:{displayText: 'botão 1'},type:1},

{buttonId:`BUTTON2`, //id
buttonText:{displayText:'botão 2' },type:1},

{buttonId:`BUTTON3`, //id
buttonText:{displayText:'bot 3' },type:1},
               ]

await mathHelp(1, 29);

               imageMsg = (await zero.prepareMessageMedia(fs.readFileSync('./edit/media/image/menu/' + `${mathResult}` + '.jpg'), 'imageMessage', {thumbnail: null})).imageMessage // foto 

               buttonsMessage = {
 contentText: `🄼🄴🄽🅄🅂`,
footerText: `${readmore}${devY}${readmore}`,
imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               zero.relayWAMessage(prep)               
               

}


//-------------------------------// #fim #functions
/*
#
#
#
#
#
*/


const executCase = new Promise((resolve, reject) => {
try {
async function funcExecutCase () {           
//#cases
switch(cmd) {

case 'blowjob':
try {
let blow = await fetchJson('https://momonga-api.herokuapp.com/hentai/blowjob')
let blowjob = await getBuffer(blow.blowjob);

await zero.sendMessage(from, blowjob, image, {
thumbnail: null,
quoted: mek,
})
} catch(e) {
console.log(e)
reply('Erro ao enviar imagem');
}
cmdAdd('nsfw')
break

case 'cosplay':
try {
let cos = await fetchJson('https://momonga-api.herokuapp.com/cosplay')
let cosplay = await getBuffer(cos.cosplay);

await zero.sendMessage(from, cosplay, image, {
thumbnail: null,
quoted: mek,
})
} catch(e) {
console.log(e)
reply('Erro ao enviar imagem');
}
cmdAdd('nsfw')
break

case 'menu':


let devMenu = await JSON.parse(fs.readFileSync('./edit/text/menus/dev.json')).sort();
let stikMenu = await JSON.parse(fs.readFileSync('./edit/text/menus/sticker.json')).sort();
let ownerMenu = await JSON.parse(fs.readFileSync('./edit/text/menus/dono.json')).sort();
let nsfwMenu = await JSON.parse(fs.readFileSync('./edit/text/menus/nsfw.json')).sort();

let devin = "";
for (let i = 0; i < devMenu.length; i++){
devin += `│➠ ${prefix}${devMenu[i]}\n`;
}
let stikin = "";
for (let i = 0; i < stikMenu.length; i++){
stikin += `│➠ ${prefix}${stikMenu[i]}\n`;
}
let dozin = "";
for (let i = 0; i < ownerMenu.length; i++){
dozin += `│➠ ${prefix}${ownerMenu[i]}\n`;
}
let nsfwin = "";
for (let i = 0; i < nsfwMenu.length; i++){
nsfwin += `│➠ ${prefix}${nsfwMenu[i]}\n`;
}

let texto99 = `╭──────────╮
│   ❯❯ menus ❮❮
╭──────────╯
│▣ 𝑝𝑟𝑒𝑓𝑖𝑥: 「 ${prefix} 」
│▣ 𝑡𝑜𝑡𝑎𝑙 𝑐𝑚𝑑:「 ${parseInt(devMenu.length + stikMenu.length + ownerMenu.length + nsfwMenu.length)} 」
╰──────────╯`;
let desc99 = `${readmore}
╭─────────
│◆ 𝑚𝑒𝑛𝑢 𝑑𝑒𝑣
╰──────────
${devin}
◉ total: ${devMenu.length}\n
╰─────────╮
╰─────────╯

╭─────────
│◆ 𝑚𝑒𝑛𝑢 𝑠𝑡𝑖𝑐𝑘𝑒𝑟
╰──────────
${stikin}
◉ total: ${stikMenu.length}\n
╰─────────╮
╰─────────╯

╭─────────
│◆ 𝑚𝑒𝑛𝑢 𝑑𝑜𝑛𝑜
╰──────────
${dozin}
◉ total: ${ownerMenu.length}\n
╰─────────╮
╰─────────╯

╭─────────
│◆ 𝑚𝑒𝑛𝑢 𝑛𝑠𝑓𝑤
╰──────────
${nsfwin}
◉ total: ${nsfwMenu.length}\n
╰─────────╮
╰─────────╯
`;
			sendButMessage(from, mek, texto99, desc99, [
			
            {              
              buttonId: `v`, //id
              buttonText: {
                displayText:  `vagina`, //texto do botão
              },
              type: 1,
            }, //botão 1

            
          ]);                  
break

/*
•
•
•
•
•
*/
case 'exist': // verifica se o número existe no Whatsapp
const existso = await zero.isOnWhatsApp (cArgs)
if (isNaN(cArgs)) return reply ('precisa ser em formato numérico!');

    if (existso) reply(`o número ${cArgs} está no Whatsapp`)
    if (!existso) reply(`o número ${cArgs} *não* está no Whatsapp`)
await cmdAdd('dev');
break

////// comandos dono

case 'chat': //fixar, excluir ou arquivar chat

if (!isOwner) return reply(ler.onlyOwner)
try {
if ((cArgsLC === 'arquivar')){
await zero.modifyChat (from, ChatModification.archive);
return reply('chat arquivado')
}

if ((cArgsLC === 'desarquivar')){
await zero.modifyChat (from, ChatModification.unarchive);
return reply('chat desarquivado')
};

if ((cArgsLC === 'fixar')){
await zero.modifyChat (from, ChatModification.pin);
return reply('chat fixado')
};

if ((cArgsLC === 'desfixar')){
await zero.modifyChat (from, ChatModification.unpin);
return reply('chat desfixado')
};

if ((cArgsLC === 'excluir') || (cArgsLC === 'limpar') || (cArgsLC === 'clear')) {
await zero.modifyChat (from, ChatModification.delete);
return reply('chat deletado')
};

if ((cArgsLC === 'mutar')){
await zero.modifyChat (from, ChatModification.mute, 24*60*60*1000);
return reply('chat mutado por 24h')
};

if ((cArgsLC === 'desmutar')){
await zero.modifyChat (from, ChatModification.unmute)
return reply('chat desmutado')
};

reply(' não entendi')
} catch(e) {
reply(e);
};
await cmdAdd('dono');
break
/*
•
•
•
•
•
*/
case 'deadfake': //banir todos os fakes do grupo
if (!isOwner) return reply(ler.onlyOwner);
if (!isBotGroupAdmins) return;

reply('limpando fakes do grupo...');
await sleep(1000);
var bou = 0;

for (let ku = 0; ku < groupMembers.length; ku++){

try {
var boi = await groupMetadata.participants[ku].jid.split("@")[0];
} catch(e) {
console.log(e)
}

if (!boi.startsWith(55)) if (!boi.includes(zero.user.jid.split("@")[0])) if (!groupAdmins.includes(boi)) {
await sleep(1000);
zero.groupRemove(from, [boi + '@s.whatsapp.net'])
bou ++;
 };

};

await sleep(1000);
reply(`removido ${bou} fakes`);

await cmdAdd('dono')
break
/*
•
•
•
•
•
*/
case 'logfs':
var stats = fs.statSync('./teste.mp4');

var fileSizeInBytes = stats.size;
// Convert the file size to megabytes (optional)
var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);

reply(`
o tamanho do arquivo é ${fileSizeInMegabytes.toFixed(2)} MB`)
break
/*
•
•
•
•
•
*//// fim comandos dono

case 'data':

reply(`Hoje é ${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}\n${hora}`)

break

case 'teste2':
if (hora == '21:57') reply('ta na hora do sexo kkkk')
break



case 'lista':

ioo = {"title": "menu admins", "rowId": `${prefix}` + "menuadmins"}

 listMsg = {

 buttonText: 'ver lista',

 footerText: `Lista com os comandos do bot separados por categorias\n${readmore}`,

 description: `*LISTA DE COMANDOS*`,

 sections: [

                     {
                      "title": `LISTA DE MENUS:`,

 rows: [

ioo,
  
                        ]

                     }],

 listType: 1

}

zero.sendMessage(from, listMsg, MessageType.listMessage,  {quoted: mek})
break





case 'wm': case 'wame':
if (cArgs.includes('*')){
let oxikk = `${argsSplit("*")[1]}`;


var armX = argsSplit("*")[0].includes("@") ? argsSplit("*")[0].split("@")[1]: argsSplit("*")[0];

let pizza = 'https://api.whatsapp.com/send?phone=' + armX + '&text=' + `%20${oxikk}`;

reply(pizza)
}
else {
var cuD = cArgs;
if (cuD.startsWith("@")) cuD = cArgs.split('@')[1];

reply('wa.me//' + cuD + '?text=oii%20☘️');
};
break

case 'fakelist':
if (!isOwner) return reply(ler.onlyOwner);

var mtu = '*lista de n° fakes:*\n\n';
var popp = 0;
for (let ku = 0; ku < groupMembers.length; ku++){

var boi = await groupMetadata.participants[ku].jid.split("@")[0];

if (!boi.startsWith(55)){
 mtu += `• ${boi}\n`;
 popp++;
 }
}

mtu += `\ntotal: ${popp}`;

reply(mtu);

break





case 'totag':
if(!isGroupAdmins) if (!isOwner) return reply('só admin')
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zero.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zero.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zero.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zero.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zero.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
zero.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + cmd}`)
}
break

case 'hidetag':
if (!isGroup) return reply(dizer.onlyGroup)
if (!isOwner) if (!isGroupAdmins) return reply(dizer.onlyAdmin)
if (!isBotGroupAdmins) return reply(dizer.onlyBotAdmin)
var value = body.slice(9)
var group = await zero.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
zero.sendMessage(from, options, text)
break


case 'sfundo':  
if (isFiltered(sender)) return reply(`📍 *Aguarde 5 segundos antes de executar esse comando*`);
await addFilter(sender);

let {convertSticker} = require("./docs/others/swm.js") 

try {
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await zero.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `ZeroBot`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `Momonga`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
zero.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await zero.downloadAndSaveMediaMessage(encmedia2, `./docs/others/trash/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(from)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falha, no momento da conversão de ${type} em adesivo`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./docs/others/trash/stickwm_${sender}.exif ./docs/others/trash/${sender}.webp -o ./docs/others/trash/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./docs/others/trash/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./docs/others/trash/${sender}.webp`)
fs.unlinkSync(`./docs/others/trash/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./docs/others/trash/${sender}.webp`)
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch(e) {
console.log(e)
}
await cmdAdd('sticker');
break


//#sticker
case 's':
if (isFiltered(sender)) return reply(`📍 *Aguarde 5 segundos antes de executar esse comando*`);
await addFilter(sender);

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./docs/others/trash/${name}.exif`)) return `./docs/others/trash/${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./docs/others/trash/${name}.exif`, buffer, (err) => {	
		return `./docs/others/trash/${name}.exif`	
	})	

} 



if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('k')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('ZERO-bot', 'Momonga')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('k')
zero.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply('Espere')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('ZERO-bot', 'Momonga')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('Erro')
zero.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await zero.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply('Espere')
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('Erro')
exec(`webpmux -set exif ${addMetadata('ZERO-bot', 'Momonga')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply('Erro')
zero.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
await cmdAdd('sticker');
break

case 'rename': case 'take':
try {
var namaPackss = argsSplit[0];
var authorPackss = argsSplit[1];
if (!regex) if (!cArgs.includes("|")) return reply('🤖⚠️ Não é permitido letras modificadas!!')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await zero.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
zero.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
//fs.unlinkSync('./docs/src/undefined.webp')
})
});
} catch(e) {
console.log(e);
reply (`${ler.error}`)
}
break













// #developer
case 'mek':
if (!isOwner) return reply(ler.onlyOwner);
console.log(uMek)
reply(JSON.stringify(uMek))
cmdAdd('dev');
break



case 'spy':
if (!isOwner) return reply(ler.onlyOwner);
if (argsMin(1)) return reply (`Insira algo!`);

try {
var lista = await fss.readdir(cArgs);
} catch {
return reply('Diretório não encontrado');
}

let listaDeArquivos = lista.sort(); //sort() classifica em ordem alfabética
console.log(listaDeArquivos);

let opo = ""; //string vazia para poder agregar dados depois
let ppk = "";
let cont = 0;
let cont2 = 0;
var batata = '💿';

for (let y = 0; y < listaDeArquivos.length; y++){

/*
try {
var stats = await fs.statSync(listaDeArquivos[y])
var fileSizeInBytes = await stats.size;
var fileSizeInMegabytes = await fileSizeInBytes / (1024*1024);
} catch {
fileSizeInMegabytes = '#'
}*/

if (listaDeArquivos[y].includes(".jpeg") || (listaDeArquivos[y].includes(".jpg") || (listaDeArquivos[y].includes(".png")))) batata = '🖼️';
if (listaDeArquivos[y].includes(".mp3") || (listaDeArquivos[y].includes(".wav"))) batata = '🎵';
if (listaDeArquivos[y].includes(".mp4") || (listaDeArquivos[y].includes(".gif"))) batata = '▶️';
if (listaDeArquivos[y].includes(".js") || (listaDeArquivos[y].includes(".text") || (listaDeArquivos[y].includes(".docx") || (listaDeArquivos[y].includes(".sh"))))) batata = '📃';
if (listaDeArquivos[y].includes(".zip") || (listaDeArquivos[y].includes(".rar"))) batata = '📦';

if (listaDeArquivos[y].includes(".")) {
//lista de arquivos

cont++;
opo += `「${cont}」${batata} ${listaDeArquivos[y]}\n`
};


if (!listaDeArquivos[y].includes(".")){
//lista de pastas
 cont2++;
 ppk += `「${cont2}」📂 ${listaDeArquivos[y]}\n`;
 };

}; //fim do laço for

reply(`*arquivos:*\n\n${opo}\n\n*pastas:*\n${ppk}\n*total:* ${listaDeArquivos.length}`)

cmdAdd('dev');
break



//início da case get
case 'get':
if (!isOwner) return reply(ler.onlyOwner);
if (argsMin(1)) return reply ('Insira algo!!');

if (!argsSplit('*')[1]) return reply (`Vc precisa digitar assim:\n${cmd} ./edit/media/image/teste.jpg*image\n\nna parte um você digita o caminho do arquivo, na parte dois você digita o tipo (image, audio)`);

try {
var cuCab = await fs.readFileSync(`${argsSplit('*')[0]}`);
} catch {
reply('arquivo não encontrado');
}

if (argsSplit('*')[1].includes('image')) {
zero.sendMessage(from, cuCab, MessageType.image, {
caption: `${argsSplit('*')[0]}`,
quoted: mek,
}
);
};

if (argsSplit('*')[1].includes('audio')) {
zero.sendMessage(from, cuCab, document, {
mimetype: 'audio/mp3',
filename: `zero-bot.mp3`, quoted: mek});
};


break



case 'button':
if (!argsInc('kk')) return reply ('no');

let texto = 'texto maior';
let desc = 'descrição';
			sendButMessage(from, mek, texto, desc, [
			
            {              
              buttonId: `v`, //id
              buttonText: {
                displayText:  `kkk`, //texto do botão
              },
              type: 1,
            }, //botão 1

            
          ]);                        
          break
          
default:
cmd = "undefined";          

}; // #fim das cases

}
resolve(funcExecutCase())
} catch(e) {
reject(e)
};
});                
executCase
.then(() => "")
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})


} catch(e) {
console.log(e)
}

});// fim mek
}; // fim da function starts
starts();
