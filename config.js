exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://pepper:buckeye@ds163181.mlab.com:63181/gunner'
exports.PORT = process.env.PORT || 8080;