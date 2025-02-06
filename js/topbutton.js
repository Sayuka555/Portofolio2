// 画面が一定量スクロールされると、TOPボタンが出現
// TOPボタンを指定
const pagetop_btn = document.querySelector(".topbtn");

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.scrollY > 300) {
        // 画面が指定した領域よりも下に下がった時にopacity:1を付与する
        pagetop_btn.style.opacity = "1";
    } else if (window.scrollY < 300) {
        // 画面が指定した領域よりも上に上がった時にopacity:0を付与する
        pagetop_btn.style.opacity = "0";
    }
}

//スクロールイベントがどんな処理を行なっているのかをコンソールで可視化。
window.addEventListener("scroll", function () {
    let scrollData = window.scrollY; //scrollYの値を変数scrollDataに代入。
    console.log(scrollData); //スクロールイベントが発生するたびにコンソールにscrollYの値を表示。
});

//コンソールを見ると、ものすごい速さでイベントが発生して処理が行われていたと思います。
//そこで、スクロール検知の頻度をさげるためにthrottle関数を使うことで改善できます。

//throttle関数について。

//throttle関数。これは個人の方、もしくはAIで作成できますのでこの内容はこのままコピペでOKです。
function throttle(fn, wait) {
    let time = Date.now();
    return function () {
        if (time + wait - Date.now() < 0) {
            fn();
            time = Date.now();
        }
    };
}

// throttle関数を使って、TOPボタンの処理を軽減しつつ、コンソールにスクロールイベントの発生を表示するコードがこちら↓
// 使用例。1行目から20行目までをコメントアウトして、ここから下のコメントを解除してください。

// const pagetop_btn = document.querySelector(".topbtn");
// let throttleScroll = throttle(function () {
//     if (window.scrollY > 300) {
//         pagetop_btn.style.opacity = "1";
//     } else if (window.scrollY < 300) {
//         pagetop_btn.style.opacity = "0";
//     }

//     let throttleScrollData = window.scrollY;
//     console.log(throttleScrollData);
// }, 100);//100 = 100ms = 0.1秒。
// // 0.1秒間隔でこの関数が動くようになります。100の部分の値を変えれば、処理の頻度を増減できます。

// window.addEventListener("scroll", throttleScroll);
