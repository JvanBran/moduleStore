module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userInfo', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        version:{
            type: DataTypes.STRING(255),
            field: 'version',
            allowNull: true,
            comment: '系统版本'
        },
        category:{
            type: DataTypes.TEXT,
            field: 'category',
            allowNull: true,
            comment: '错误枚举'
        },
        logType:{
            type: DataTypes.TEXT('tiny'),
            field: 'logType',
            allowNull: true,
            comment: '日志类型'
        },
        url:{
            type: DataTypes.TEXT,
            field: 'url',
            allowNull: true,
            comment: '请求地址'
        },
        post:{
            type: DataTypes.TEXT,
            field: 'post',
            allowNull: true,
            comment: '请求参数'
        },
        path:{
            type: DataTypes.TEXT,
            field: 'path',
            allowNull: true,
            comment: '错误页面地址'
        },
    }, {
        freezeTableName: true,
        comment: "用户信息表",
    })
}