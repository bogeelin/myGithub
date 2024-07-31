// 使用name屬性取得元素內容
// let myDrinks=document.getElementsByName('drinks');
// console.log(myDrinks);

// for(let i=0;i<myDrinks.length;i++){
//     console.log(myDrinks.item(i).value);
//     console.log(myDrinks[i].value);
// }

// 取得勾選的項目內容
// 1.找到按鈕
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否被按(click =>左鍵按一下之事件)
myBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];
    let myDrinks = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選 => checked
    for (i = 0; i < myDrinks.length; i++) {
        // 有被勾選的項目
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value)
        }
        // 沒被勾選的項目 =>使用not反向!
        if (!myDrinks[i].checked) {
            arrResultNot.push(myDrinks[i].value)
        }
    }
    console.log('被勾選項目:' + arrResult);
    console.log('沒被勾選項目:' + arrResultNot);
});

