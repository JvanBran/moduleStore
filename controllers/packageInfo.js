const { packageInfoModel } = require('../modal/packageInfo');
const Op = require('sequelize').Op;
module.exports = {
    //获取组件列表
    packageList : async (ctx, next) => {
        let { pageNo, pageSize, package_name } = ctx.request.query
        let offset = (Number(pageNo) - 1) * Number(pageSize);
        let Filter = package_name ? { package_name: { [Op.like]: `%${package_name}%` } } : {}
        await packageInfoModel.findAndCountAll({
            where: Filter,
            //offet去掉前多少个数据
            offset,
            attributes: ['id', 'name', 'role', 'open_id', 'describe'],
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
    //获取组件详情
    packageInfo : async (ctx, next) => {
        let { id } = ctx.request.query
        ctx.success({
            data: ''
        })
    }
}