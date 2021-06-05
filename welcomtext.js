const welcome = (number, groupname) => {
    return `𝐎𝐥𝐚 @${number}. 𝐒𝐞𝐣𝐚 𝐛𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 se apresente com nome,foto,cidase e idade ${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. Sei nem porque entrou  👋`
}
exports.bye = bye