const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config
