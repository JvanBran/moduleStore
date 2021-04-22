const { packageInfoModel } = require('../modal/packageInfo');
const Op = require('sequelize').Op;
module.exports = {
    packageList : async (ctx, next) => {
        let { pageNo, pageSize, package_name } = ctx.request.query
        let offset = (Number(pageNo) - 1) * Number(pageSize);
        let packageNameFilter = package_name ? { package_name: { [Op.like]: `%${package_name}%` } } : {}
        await packageInfo.findAndCountAll({
            where: packageNameFilter,
            //offet去掉前多少个数据
            offset,
            //limit每页数据数量
            limit: Number(pageSize)
        }).then(res => {
            ctx.success({
                data: res.rows,
                total: res.count,
                pageNo: Number(pageNo),
                pageSize: Number(pageSize)
            })
        });
    },
    packageInfo : async (ctx, next) => {
        let { id } = ctx.request.query
        console.log(id)
        ctx.success({
            data: ''
        })
    }
}