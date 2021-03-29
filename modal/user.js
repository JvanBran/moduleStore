const db = require('../config/sequelize');
const { sqlClass } = require('./utils');
const Sequelize = db.moduleStore
const UserInfo = Sequelize.import('../schema/user')
UserInfo.sync({});
class UserInfoModel extends sqlClass{
    constructor(){
        super()
        this.sqlModel = UserInfo;
        this.dataType = {
        }
    }
}
let userInfoModel = new UserInfoModel()
module.exports = {
    userInfoModel:userInfoModel
}