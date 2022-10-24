module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Comments.associate = models => {
    Comments.belongsTo(models.Posts)
  }

  return Comments
}