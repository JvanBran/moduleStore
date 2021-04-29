module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_package_info', {
        package_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        storehouse_id:{
            type: DataTypes.STRING(255),
            field: 'storehouse_id',
            allowNull: true,
            comment: '仓库id',
            defaultValue:''
        },
        package_name:{
            type: DataTypes.STRING(255),
            field: 'package_name',
            allowNull: false,
            comment: '组件名称'
        },
        package_cname:{
            type: DataTypes.STRING(255),
            field: 'package_cname',
            allowNull: false,
            comment: '组件分类'
        },
        package_pid:{
            type: DataTypes.STRING(255),
            field: 'package_pid',
            allowNull: false,
            comment: '组件分类id'
        },
        package_describe: {
            type: DataTypes.TEXT('long'),
            field: 'package_describe',
            allowNull: false,
            comment: '组件描述'
        },
        package_state: {
            type: DataTypes.INTEGER(4),
            field: 'package_state',
            allowNull: false,
            comment: '发布-0立项-1开发-2受保护-3',
            defaultValue:3
        },
        preview_address:{
            type: DataTypes.TEXT('tiny'),
            field: 'preview_address',
            allowNull: true,
            comment: '预览地址'
        },
        package_version:{
            type: DataTypes.STRING(255),
            field: 'package_version',
            allowNull: true,
            comment: '组件版本',
            defaultValue:''
        },
        package_version_lock:{
            type: DataTypes.STRING(255),
            field: 'package_version_lock',
            allowNull: true,
            comment: '组件版本锁',
            defaultValue:''
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'creat_time',
            defaultValue: sequelize.fn('now')
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updat_time',
            defaultValue: sequelize.fn('now')
        }
    }, {
        // 自定义表名
        freezeTableName: true,
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        timestamps: false,
        createdAt:'creat_time',
        updatedAt:'updat_time',
        comment: "组件描述表"
    })
}