const { InlineKeyboard } = require('../buttons')

module.exports.TextHandler = (bot) => {
  bot.on('message', (ctx) => {
   console.log('message ', ctx.update.message.web_app_data)
  })

}
