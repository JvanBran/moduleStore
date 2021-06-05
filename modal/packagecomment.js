const db = require('../db/sequelize');
const { sqlClass } = require('./utils');
const Sequelize = db.moduleStore
const PackageComment = Sequelize.import('../schema/packagecomment')
// 标准同步
// 只有当数据库中不存在与模型同名的数据表时，才会同步
UserInfo.sync()
// 动态同步
// 修改同名数据表结构，以适用模型。
// UserInfo.sync({alter: true})
// 强制同步
// 删除同名数据表后同步，谨慎使用，会导致数据丢失
// UserInfo.sync({force: true})
class PackageCommentModel extends sqlClass{
    constructor(){
        super()
        this.sqlModel = PackageComment;
        this.dataType = {
        }
    }
}
let packageComment = new PackageCommentModel()
module.exports = {
    packageComment:packageComment
}