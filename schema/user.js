module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userInfo', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(255),
            field: 'name',
            allowNull: false,
            comment: '用户名称'
        },
        password: {
            type: DataTypes.STRING(255),
            field: 'password',
            allowNull: false,
            comment: '用户密码'
        },
        phone:{
            type: DataTypes.TEXT('tiny'),
            field: 'phone',
            allowNull: true,
            comment: '手机号码'
        },
    }, {
        freezeTableName: true,
        comment: "用户表",
    })
}