module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_storehouse_info', {
        storehouse_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        storehouse_name:{
            type: DataTypes.STRING(255),
            field: 'storehouse_name',
            allowNull: false,
            comment: '仓库名称'
        },
        storehouse_describe: {
            type: DataTypes.TEXT('long'),
            field: 'storehouse_describe',
            allowNull: false,
            comment: '仓库描述'
        },
        storehouse_state: {
            type: DataTypes.INTEGER(4),
            field: 'package_state',
            allowNull: false,
            comment: '发布-0立项-1开发-2受保护-3',
            defaultValue:3
        },
        storehouse_address:{
            type: DataTypes.TEXT('tiny'),
            field: 'storehouse_address',
            allowNull: true,
            comment: '仓库地址'
        },
        storehouse_organization:{
            type: DataTypes.STRING(255),
            field: 'storehouse_organization',
            allowNull: true,
            comment: '仓库组织',
            defaultValue:''
        },
        storehouse_keyword:{
            type: DataTypes.TEXT('long'),
            field: 'storehouse_keyword',
            allowNull: true,
            comment: '仓库关键字',
            defaultValue:'',
            get: function() {
                return JSON.parse(this.getDataValue('storehouse_keyword'));
            }, 
            set: function(val) {
                return this.setDataValue('storehouse_keyword', JSON.stringify(val));
            }
        },
        storehouse_dependencies:{
            type: DataTypes.STRING(255),
            field: 'storehouse_dependencies',
            allowNull: true,
            comment: '仓库依赖项',
            defaultValue:''
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
        comment: "仓库详情表"
    })
}