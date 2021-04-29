const dayjs = require('dayjs');
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_user_info', {
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
        avatar_url:{
            type: DataTypes.TEXT('tiny'),
            field: 'avatar_url',
            allowNull: true,
            comment: '用户头像'
        },
        email:{
            type: DataTypes.TEXT('tiny'),
            field: 'email',
            allowNull: true,
            comment: '邮箱'
        },
        question:{
            type: DataTypes.TEXT('long'),
            field: 'question',
            allowNull: true,
            comment: '找回密码问题'
        },
        answer:{
            type: DataTypes.TEXT('long'),
            field: 'answer',
            allowNull: true,
            comment: '找回密码答案'
        },
        role:{
            type: DataTypes.INTEGER(4),
            field: 'role',
            allowNull: true,
            comment: '角色0-管理员,1-项目选购者,2-开发者',
            defaultValue:1
        },
        gitlabid:{
            type: DataTypes.STRING(255),
            field: 'gitlabid',
            allowNull: true,
            comment: 'gitlab对应用户id',
        },
        creat_time: {
            type: DataTypes.DATE,
            field: 'creat_time',
            defaultValue: sequelize.fn('now'),
        },
        updat_time: {
            type: DataTypes.DATE,
            field: 'updat_time',
            defaultValue: sequelize.fn('now')
        }
    }, {
        freezeTableName: true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        timestamps: false,
        createdAt:'creat_time',
        updatedAt:'updat_time',
        comment: "用户表"
    })
}