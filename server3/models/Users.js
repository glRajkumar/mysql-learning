module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Users.associate = models => {
    Users.hasMany(models.Posts)
  }

  return Users
}