let handler = async (m, { conn }) => {
  conn.reply(m.chat, `
Ketoprak 🤤
`.trim(), m)
}
handler.customPrefix = /ketoprak/i
handler.command = new RegExp

module.exports = handler