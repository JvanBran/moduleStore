const db = require('../service/sequelize');
const { sqlClass } = require('./utils');
const Sequelize = db.moduleStore
const PackageCart = Sequelize.import('../schema/packagecart')
// 标准同步
// 只有当数据库中不存在与模型同名的数据表时，才会同步
UserInfo.sync()
// 动态同步
// 修改同名数据表结构，以适用模型。
// UserInfo.sync({alter: true})
// 强制同步
// 删除同名数据表后同步，谨慎使用，会导致数据丢失
// UserInfo.sync({force: true})
class PackageCartModel extends sqlClass{
    constructor(){
        super()
        this.sqlModel = PackageCart;
        this.dataType = {
        }
    }
}
let packageCart = new PackageCartModel()
module.exports = {
    packageCart:packageCart
}