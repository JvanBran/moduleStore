const db = require('../plugin/sequelize');
const { sqlClass } = require('./utils');
const Sequelize = db.moduleStore
const UserProject = Sequelize.import('../schema/userproject')
// 标准同步
// 只有当数据库中不存在与模型同名的数据表时，才会同步
UserProject.sync()
// 动态同步
// 修改同名数据表结构，以适用模型。
// UserProject.sync({alter: true})
// 强制同步
// 删除同名数据表后同步，谨慎使用，会导致数据丢失
// UserProject.sync({force: true})
class UserProjectModel extends sqlClass{
    constructor(){
        super()
        this.sqlModel = UserProject;
        this.dataType = {
        }
    }
}
let userProject = new UserProjectModel()
module.exports = {
    userProject:userProject
}