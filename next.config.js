const withPWA = require('next-pwa')

// next.config.js
module.exports = withPWA({
    images: {
        domains: [
            'i.ibb.co',
            'scontent.fkul8-1.fna.fbcdn.net',
            'lh3.googleusercontent.com',
            'pbs.twimg.com'
        ],
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    }
})