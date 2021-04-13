module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_modify_log', {
        modify_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        storehouse_id:{
            type: DataTypes.STRING(255),
            field: 'storehouse_id',
            allowNull: false,
            comment: '仓库id'
        },
        modify_user_id:{
            type: DataTypes.STRING(255),
            field: 'modify_user_id',
            allowNull: false,
            comment: '修改用户'
        },
        modify_comment_describe:{
            type: DataTypes.TEXT('long'),
            field: 'modify_comment_describe',
            allowNull: false,
            comment: '修改描述'
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
        comment: "仓库修改记录"
    })
}