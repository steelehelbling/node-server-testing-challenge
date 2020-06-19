const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/users";

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./users.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },

    testing: {
        client: "sqlite3",
        connection: {
            filename: "./test.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },

    production: {
        client: "pg",
        connection: pgConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },
};
