module.exports = (sequelize, DataTypes) => {
  const MetaData = sequelize.define('meta_data', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artists: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lyric: {
      type: DataTypes.STRING,
      allowNull: false
    },
    composer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    years: {
      type: DataTypes.STRING,
      allowNull: false
    },
    compilation: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
}