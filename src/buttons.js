const  Telegraf = require('telegraf')
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
    buttons_start: () => {
        return Markup.inlineKeyboard ([
            [Markup.button.callback('Получить список RSS', 'listRss')]
        ])
    },
    buttons_source: () => {
        return Markup.inlineKeyboard ([
            [Markup.button.callback('Reddit', 'redditRss')], [Markup.button.callback('VCru', 'VCruRss')]
        ])
    },
    buttons_back: () => {
        return Markup.inlineKeyboard ([
            [Markup.button.callback('Назад', 'back')]
        ])
    }
}
