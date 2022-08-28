module.exports = (sequelize, DataTypes) => {
  const contacts = sequelize.define('contacts', {
    nome: {
      type: DataTypes.STRING,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    whatsapp: {
      type: DataTypes.STRING,
    },
  },
    { tableName: 'contacts', timestamps: false },
  );
  return contacts;
};