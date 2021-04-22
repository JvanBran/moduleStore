module.exports = function (sequelize, DataTypes) {
    return sequelize.define('store_project', {
        project_id: {
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
        project_name:{
            type: DataTypes.TEXT('long'),
            field: 'project_name',
            allowNull: false,
            comment: '项目名'
        },
        project_organization:{
            type: DataTypes.TEXT('long'),
            field: 'project_organization',
            allowNull: false,
            comment: '项目组织'
        },
        project_organization_img:{
            type: DataTypes.TEXT('long'),
            field: 'project_img',
            allowNull: false,
            comment: '项目组织logo'
        },
        project_package:{
            type: DataTypes.TEXT('long'),
            field: 'project_package',
            allowNull: false,
            comment: '项目使用组件'
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
        comment: "组件评论表"
    })
}