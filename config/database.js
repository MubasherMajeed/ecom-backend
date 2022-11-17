module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3000), // set port according to your database
      database: env('DATABASE_NAME', 'aima'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'mubasher001'), // set password according to your database
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    debug: false,
  },
});
