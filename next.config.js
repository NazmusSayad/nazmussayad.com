const crypto = require('crypto')
try {
  crypto.createHash('md4')
} catch (e) {
  console.warn('Crypto "md4" is not supported anymore by this Node version')
  const origCreateHash = crypto.createHash
  crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts)
  }
}

module.exports = {
  images: {
    domains: [
      'imagizer.imageshack.com',
      'i.imgur.com',
      'images.unsplash.com',
      'media.giphy.com',
      'cdn-images-1.medium.com',
      'cdn.cloudflare.steamstatic.com',
      'cdn.discordapp.com',
    ],
  },
}
