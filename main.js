var index = 0;   //이미지에 접근하는 인덱스
const bankBaek = document.getElementById("bank-num-baek");
const bankKang = document.getElementById("bank-num-kang");
const message = document.querySelector('.message');

window.onload = function(){
    getDday();
}

function getDday() {
    const today = new Date();
    const anniversary = new Date(2023, 11, 11);
    let count = today.getTime() - anniversary.getTime();
    count = Math.ceil(count / (24 * 60 * 60 * 1000));
    const anni = document.getElementById('anni');
    anni.innerHTML = `<FONT size='5' face='FB NEO GOTHIC' color='pink'>앞으로 ${count}♥ 남았습니다</font>` 
}

// button 클릭 이벤트
document.getElementById("bank-num-baek-btn").onclick = () => {
    // textarea의 내용을 복사한다.
    window.navigator.clipboard.writeText(bankBaek.innerHTML).then(() => {

        message.style.visibility = 'visible';

        setTimeout(() => {
            message.style.visibility = "hidden";
        }, 300);
    });
};

  // button 클릭 이벤트
document.getElementById("bank-num-kang-btn").onclick = () => {
    // textarea의 내용을 복사한다.
    window.navigator.clipboard.writeText(bankKang.innerHTML).then(() => {
        message.style.visibility = 'visible';

        setTimeout(() => {
            message.style.visibility = "hidden";
        }, 300);

    });
};

function onClickOpenKoza(num) {

    const targetBank = document.querySelector(`.koza${num}`);

    if (targetBank.classList.contains('bank-open')) {
        targetBank.classList.remove("bank-open");
    } else {
        targetBank.classList.add('bank-open');
    };
}