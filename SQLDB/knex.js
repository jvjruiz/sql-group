var knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'ubuntu',
        password: '1234',
        database: 'recipify_api'
    },
});

module.exports = knex;