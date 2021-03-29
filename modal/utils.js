class sqlClass{
    async create(dataArr) {
        try {
            const self = this;
            return await self.sqlModel.create(dataArr)
        }catch (err) {
            console.log(err);
            throw new Error(err);
            return errdata(err);
        }
         
    }
    async findAndCountAll(dataArr){
        const self = this;
        return await self.sqlModel.findAndCountAll(dataArr)
    }
}

module.exports = {
    sqlClass:sqlClass
}