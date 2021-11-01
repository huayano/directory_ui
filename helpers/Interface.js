const fs = require("fs");
const axios = require ('axios');

const  showHome = async (request, response) => {
    fs.readFile("./pages/home.html", "utf-8", (error, data) => {

        response
            .status(200)
            .end(data);
    })
}

const showAllProducts = async (request, response) => {
    let body = ""; let htmlData_products = "";
    const reqToHost = async () => {
        try {
            return await axios.get(`http://localhost:4402/show`);
        } catch (error) {
            console.error(error)
        }
    }
    body = await reqToHost();
    let htmlData_buffer = "";
    Object.values(body.data).forEach(item => {
        htmlData_buffer += `<tr> <td>${item.id}</td> <td>${item.length}</td> <td>${item.width}</td> 
        <td>${item.height}</td><td>${item.material}</td><td>${item.color}</td><td>${item.type}</td>
        <td>${item.country}</td><td>${item.weight}</td><td>${item.price}</td></tr>`
    } );
    htmlData_products = "<table><tr><th>ID продукта</th><th>Длина</th><th>Ширина</th><th>Высота</th><th>Материал</th><th>Цвет</th><th>Тип</th>" +
        "<th>Страна производитель</th><th>Вес</th><th>Стоимость</th></tr>" + htmlData_buffer + "</table>";

    fs.readFile("./pages/show_all.html", "utf-8", (error, data) => {

        data = data.replace("{selectResult}", htmlData_products);
        response
            .status(200)
            .end(data);
    })
}

module.exports = {
    showHome, showAllProducts
}
