module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_user_storehouse', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: DataTypes.TEXT('long'),
            field: 'user_id',
            allowNull: false,
            comment: '用户id'
        },
        storehouse_id:{
            type: DataTypes.TEXT('long'),
            field: 'storehouse_id',
            allowNull: false,
            comment: '仓库id'
        },
        storehouse_role:{
            type: DataTypes.INTEGER(4),
            field: 'storehouse_role',
            allowNull: false,
            comment: '角色0-仓库管理员,1-仓库开发者,2-代码Review',
            defaultValue:1
        },
        ssh_key_content:{
            type: DataTypes.TEXT('long'),
            field: 'ssh_key_content',
            allowNull: false,
            comment: 'sshkey内容'
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
        comment: "用户仓库表"
    })
}