class sqlClass{
    // 增加
    async create(dataArr) {
        const self = this;
        return new Promise((resolve, reject) => {
            self.sqlModel.create(dataArr).then(res => {
                resolve(res)
              }).catch(err => {
                reject(err)
              })
        })
    }
    // 删除
    async deleteItem(dataArr){
        const self = this;
        return new Promise((resolve, reject) => {
            self.sqlModel.destroy({
                where: {
                    id: id
                }
            }).then(res => {
            resolve(res)
            }).catch(err => {
            reject(err)
            })
        })
    }
    async findAndCountAll(dataArr){
        const self = this;
        return new Promise((resolve, reject) => {
            self.sqlModel.findAndCountAll(dataArr).then(res => {
            resolve(res)
            }).catch(err => {
            reject(err)
            })
        })
    }
    async findOne(dataArr){
        const self = this;
        return new Promise((resolve, reject) => {
            self.sqlModel.findOne(dataArr).then(res => {
            resolve(res)
            }).catch(err => {
            reject(err)
            })
        })
    }
    async findAll(dataArr){
        const self = this;
        return new Promise((resolve, reject) => {
            self.sqlModel.findAll(dataArr).then(res => {
              resolve(res)
            }).catch(err => {
              reject(err)
            })
        })
    }
}

module.exports = {
    sqlClass:sqlClass
}