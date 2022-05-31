const Parser = require('rss-parser')

const { InlineKeyboard } = require('../buttons')

module.exports.CallbackHandler = (bot) => {
    bot.on('callback_query', async (ctx) => {
        const { callbackQuery } = ctx
        console.log(callbackQuery.data)

        if (callbackQuery.data ==='listRss') {
            await ctx.editMessageText('Выбери источник 👇', InlineKeyboard.buttons_source())
        }

        if (callbackQuery.data ==='redditRss') {
            const parser = new Parser()

            let feed = await parser.parseURL('https://www.reddit.com/.rss');
            console.log(feed.title);

            const newsList = feed.items.map(item => item.title)

            const newsMessageText = newsList.join('\n\n')
            await ctx.editMessageText(`Новости с Reddit:\n\n${newsMessageText}`, InlineKeyboard.buttons_source())
  
        }
        if (callbackQuery.data ==='VCruRss') {
            const parser = new Parser()

            let feed = await parser.parseURL('https://vc.ru/rss/all');
            console.log(feed.title);

            const newsList = feed.items.map(item => item.title)

            const newsMessageText = newsList.join('\n\n')
            await ctx.editMessageText(`Новости с VCru:\n\n${newsMessageText}`, InlineKeyboard.buttons_source())
  
        }

       
    })
}
