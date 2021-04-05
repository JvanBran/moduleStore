module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userInfo', {
        userid: {
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
        question:{
            type: DataTypes.STRING(255),
            field: 'question',
            allowNull: true,
            comment: '找回密码问题',
            defaultValue:''
        },
        answer:{
            type: DataTypes.STRING(255),
            field: 'answer',
            allowNull: true,
            comment: '找回密码答案',
            defaultValue:''
        },
        role:{
            type: DataTypes.INTEGER(4),
            field: 'role',
            allowNull: true,
            comment: '角色0-管理员,1-普通用户',
            defaultValue:1
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
        comment: "用户表"
    })
}