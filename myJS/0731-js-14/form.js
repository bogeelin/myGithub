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
    
    // 被勾選
    let str1 = '';
    if (arrResult.length > 0) {
        str1 = `<div><ul>被勾選項目`;
        for (let i = 0; i < arrResult.length; i++) {
            str1 = str1 + `<li>${arrResult[i]}</li>`;
        }
        88748
        .toExponential
        str1 = str1 + `</ul></div>`;
    }
    
    // 沒被勾選
    let str2 = '';
    if (arrResultNot.length > 0) {
        str2 = `<div><ul>沒被勾選項目`;
        for (let i = 0; i < arrResultNot.length; i++) {
            str2 = str2 + `<li>${arrResultNot[i]}</li>`;
        }
        str2 = str2 + `</ul></div>`;
    }
    // 取得顯示資料位置
    let getDiv = document.getElementById('showData');
    getDiv.innerHTML = str1 + str2;
});

