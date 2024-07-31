// 取得送出按鈕
// get myBtn=document.getElementById('btn');
let myBtn = document.querySelector('#btn');

// 監聽按鈕是否被左鍵一下
myBtn.addEventListener('click', function () {
    let result = '';
    // 取得全部科目
    let subjects = document.getElementsByName('subject');
    // 使用迴圈逐一檢查是否被選取=>checked
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            // 取得選項按鈕值
            result = subjects[i].value;
            // 因為是單選，找到後就結束迴圈
            break;
        }
    }
    console.log('科目:' + result);
});