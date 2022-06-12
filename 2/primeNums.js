function primeNums(n) {
    if (n < 1 || isNaN(n)) {
        return 'Данные введены не верно!';
    }

    let arr = [2];
    let i = 1;
    let num = 2;
    let divNum, flag;

    /* алгоритм поиска простых чисел путём перебора делителей,
    в качестве которых выступают уже найденные простые числа
    */
    while (i < n) {
        flag = 0;
        for (let j = 0; j < arr.length; j++) {
            divNum = num % arr[j];
            if (divNum === 0) {
                num++;
                break;
            }
            flag++;
        }
        if (flag === arr.length) {
            arr[i] = num;
            num += 2;
            i++;
        }
    }
    return arr;
}


console.log(primeNums(process.argv[2]));
