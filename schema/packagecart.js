module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_cart_info', {
        cart_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: DataTypes.STRING(255),
            field: 'user_id',
            allowNull: false,
            comment: '用户id'
        },
        package_id:{
            type: DataTypes.STRING(255),
            field: 'package_id',
            allowNull: false,
            comment: '组件id'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'creat_time',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updat_time'
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt:'creat_time',
        updatedAt:'updat_time',
        comment: "组件购物车"
    })
}