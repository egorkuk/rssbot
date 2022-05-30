module.exports.CallbackHandler = (bot) => {
    bot.on('callback_query', async (ctx) => {
        const { callbackQuery } = ctx
        console.log(callbackQuery)
    })
}