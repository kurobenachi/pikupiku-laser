"use strict";

// BGM�̍Đ���Ԃ�ێ�����ϐ�
let isBgmPlaying = false;

// BGM�I�u�W�F�N�g�̏�����
const BGM = new Audio('sound/BGM/FC/FC_pikupikuTheme.mp3');

BGM.loop = true;

// BGM�𐧌䂷��֐�
function toggleBGM() {
    if (isBgmPlaying) {
        BGM.pause();
        // UI�̍X�V�Ȃ�
    } else {
        BGM.volume = 0.1;
        BGM.play();
        // UI�̍X�V�Ȃ�
    }
    isBgmPlaying = !isBgmPlaying; // BGM�̍Đ���Ԃ�؂�ւ�
}

// HTML�̃{�^���Ɗ֐����֘A�t��
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("buttonToggleBGM");
    button.addEventListener('click', toggleBGM);
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("initializeEvent");
    button.addEventListener('click', InitializeEvent);
});