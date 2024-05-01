var mysql = require('mysql'); // nhúng module mysql vào trang
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hoitrinh'  //tên database muốn kết nối
});

module.exports = connection