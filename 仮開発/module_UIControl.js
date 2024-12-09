"use strict";

// BGMの再生状態を保持する変数
let isBgmPlaying = false;

// BGMオブジェクトの初期化
const BGM = new Audio('sound/BGM/FC/FC_pikupikuTheme.mp3');

BGM.loop = true;

// BGMを制御する関数
function toggleBGM() {
    if (isBgmPlaying) {
        BGM.pause();
        // UIの更新など
    } else {
        BGM.volume = 0.1;
        BGM.play();
        // UIの更新など
    }
    isBgmPlaying = !isBgmPlaying; // BGMの再生状態を切り替え
}

// HTMLのボタンと関数を関連付け
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("buttonToggleBGM");
    button.addEventListener('click', toggleBGM);
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("initializeEvent");
    button.addEventListener('click', InitializeEvent);
});