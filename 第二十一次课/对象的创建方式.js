let melon = {}
let melon2 = {
    name: "我是甜瓜",
    price: 30,
    weight: 2,
    origin: "海南省",
    color: false,
    nut: {
        name: "我是甜瓜的种子",
        price: 40
    },
    printPrice: function () {
        console.log("我是价格")
    },
    printOringin: () => {
        console.log("我是原产地")
    }
}
var melon3 = new Object()
var melon4 = new Object({})
var melon5 = new Object({
    name: "我是甜瓜",
    price: 30,
    weight: 2,
    origin: "海南省",
    color: false,
    nut: {
        name: "我是甜瓜的种子",
        price: 40
    },
    printPrice: function () {
        console.log("我是价格")
    },
    printOringin: () => {
        console.log("我是原产地")
    }
})
var melon6 = new Object(666)

function Person(name, sex, age, address) {
    this.name = name,
        this.sex = sex,
        this.age = age,
        this.address = address,
        this.sayName = function () {
            console.log("this is my " + this.name)
        }
}

Person.prototype.sayName2 = function () {
    console.log("this is say name2")
}

var p1 = new Person("张三", "男", 20, "上海")
console.log(p1)
console.log(p1.__proto__)
p1.sayName()
p1.sayName2()