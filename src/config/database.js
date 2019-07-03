module.exports = {
  dialect: 'mssql',
  host: 'localhost',
  username: '{your_database_user}',
  password: '{your_database_password}',
  database: '{your_database_name}',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
