module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  })

  Posts.associate = models => {
    Posts.belongsTo(models.Users)
    Posts.hasMany(models.Comments)
  }

  return Posts
}