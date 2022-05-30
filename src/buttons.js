const  Telegraf = require('telegraf')
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
    buttons_start: () => {
        return Markup.inlineKeyboard ([
            [Markup.button.callback('Получить список RSS', 'listRss')]
        ])
    }
}