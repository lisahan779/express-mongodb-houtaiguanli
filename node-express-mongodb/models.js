/*
 * @Author: your name
 * @Date: 2020-03-11 15:40:41
 * @LastEditTime: 2020-03-18 13:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /all/node-express-mongodb/models.js
 */
const mongoose = require('mongoose')
// 链接数据库
mongoose.connect('mongodb://localhost:27018/demo', {
    useCreateIndex: true,
    useNewUrlParser: true
}, function (erro, success) {
    if (erro) {
        console.log("数据库连接失败")
    } else {
        console.log("数据库连接成功")
    }
})
// 创建用户Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        unique: true, //字段是否唯一
        set(val) {
            // 通过bcryptjs对密码加密返回值 第一个值返回值， 第二个密码强度
            return require('bcryptjs').hashSync(val, 10)
        }
    }
})
// 创建用户信息Schema
const Customersschema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    education: {
        type: String
    },
    graduationschool: {
        type: String
    },
    job: {
        type: String
    },
    profile: {
        type: String
    },
    id: Number

})
// 图片模型
const Imgchema = new mongoose.Schema({
    url: {
        type: String
    },
    price: {
        type: Number
    },
    title: {
        type: String
    },
    num: {
        type: Number
    },
    checked:{
        type:Boolean
    }
})
const Imguploadchema= new mongoose.Schema(
    {
        filename: String,
        filesize: Number,
        base64: String
    }
)
// 定义user表
const User = mongoose.model('User', UserSchema)
// 产品Customers表
const Customer = mongoose.model('Customers', Customersschema)
// 全部删除
// User.db.dropCollection('users')
const Img = mongoose.model('Img', Imgchema)
const Imgupload=mongoose.model('Imgupload', Imguploadchema)
module.exports = {
    User,
    Customer,
    Img,
    Imgupload
}