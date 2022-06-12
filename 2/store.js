const goods = [];
const goodIndex = [];
const cart = [];

let size;
let goodsSum = 10;
let sizeS = Math.round(0.2 * goodsSum);
let sizeM = Math.round(0.5 * goodsSum);
let sizeL = Math.round(0.8 * goodsSum);
let j = 0;


for (let i = 0; i < goodsSum; i++) {

    // автоматическое присвоние размеров группам эл-ов
    if (i < sizeS) {
        size = 'S';
    } else if (i < sizeM) {
        size = 'M';
    } else if (i < sizeL) {
        size = 'L';
    } else {
        size = 'XL';
    }

    // автоматическое заполнение массива товаров размером goodsSum
    goods[i] = {
        id: i + 1,
        name: `Товар №${i + 1}`,
        description: `Новый товар ${i + 1}, размер ${size}`,
        sizes: size,
        price: (i + 1) * 10,
        available: 'in stock',
    }

    // автоматическое заполнение корзины; условно для трёх размеров S, M и L
    if (i === sizeS || i === sizeM || i === sizeL) {
        cart[j] = {
            good: goods[i].id,
            amount: j + 2,
        }
        j++;
    }
}


// ф-ия добавления n-ого эл-та в корзину
function addToCart(arr, n) {
    let pos = arr.findIndex(item => item.good == n);
    if (pos >= 0) {
        arr[pos].amount++;
    } else {
        arr.push(
            {
                good: goods[n - 1].id,
                amount: 1,
            }
        )
    }
    return arr;
}


// ф-ия удаления n-ого эл-та из корзины
function removeFromCart(arr, n) {
    arr.splice(n - 1, 1);
    return arr;
}


// ф-ия очистки корзины
function delCart(arr) {
    arr.splice(0, arr.length);;
    return arr;
}


// ф-ия подсчёта кол-ва товаров и их стоимости в корзине
function cartPrice(goodsArr, cartArr) {
    const total = {
        totalAmount: 0,
        totalSumm: 0,
    }
    let itemSum = 0;
    let itemPrice = 0;
    cartArr.forEach(item => {
        itemSum += item.amount;

        /* определение индекса элемента в товарах (goodsArr) по ID товара,
        хранящемуся в корзине (good в cartArr)
        */
        goodsArrIndex = goodsArr.findIndex(elmt => elmt.id == item.good);

        itemPrice += goodsArr[goodsArrIndex].price * item.amount;
    });
    total['totalAmount'] = itemSum;
    total['totalSumm'] = itemPrice;
    return total;
}


console.log(cart);

// добавление одного товара в корзину через передачу его позиции (в goods) в качестве аргумента ф-ии
console.log('\nДобавление одного товара');
addToCart(cart, 5);
console.log(cart, '\n--------------------------');

console.log('\nДобавление одного товара');
addToCart(cart, 5);
console.log(cart, '\n--------------------------');

console.log('\nДобавление одного товара');
addToCart(cart, 8);
console.log(cart, '\n--------------------------');

// удаление одного товара из корзины через передачу его позиции (в cart) в качестве аргумента ф-ии
console.log('Удаление одного товара\n');
removeFromCart(cart, 2);
console.log(cart, '\n--------------------------');

console.log('Удаление одного товара\n');
removeFromCart(cart, 2);
console.log(cart, '\n--------------------------');

// всего в корзине
console.log('ИТОГО в корзине');
console.log(cartPrice(goods, cart), '\n--------------------------');

// удаление всех товаров из корзины
console.log('Удаление всех товаров');
delCart(cart);
console.log(cart);
