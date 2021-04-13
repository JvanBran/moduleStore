module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_package_comment', {
        comment_id: {
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
        content:{
            type: DataTypes.TEXT('long'),
            field: 'content',
            allowNull: false,
            comment: '评论内容'
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
        timestamps: true,
        createdAt:'creat_time',
        updatedAt:'updat_time',
        comment: "组件评论表"
    })
}