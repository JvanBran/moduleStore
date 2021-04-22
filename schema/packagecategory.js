module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_category', {
        category_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_cname:{
            type: DataTypes.STRING(255),
            field: 'category_cname',
            allowNull: false,
            comment: '分类名'
        },
        category_pid:{
            type: DataTypes.STRING(255),
            field: 'category_pid',
            allowNull: false,
            comment: '父分类的id'
        },
        category_title:{
            type: DataTypes.STRING(255),
            field: 'category_title',
            allowNull: false,
            comment: '分类标题'
        },
        category_description:{
            type: DataTypes.STRING(255),
            field: 'category_description',
            allowNull: false,
            comment: '分类描述'
        },
        category_sort:{
            type: DataTypes.STRING(255),
            field: 'category_sort',
            allowNull: false,
            comment: '分类排序'
        },
        category_display:{
            type: DataTypes.INTEGER(4),
            field: 'package_id',
            allowNull: false,
            comment: '仅用-0启用-1',
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
        timestamps: false,
        createdAt:'creat_time',
        updatedAt:'updat_time',
        comment: "组件分类表"
    })
}