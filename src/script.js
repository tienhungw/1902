//import {router} from './main.js';
function Trangchu() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <h2 class="text-2xl font-bold">Chế độ lưu danh sách video đã xem đang tắt</h2>
        `;
    }
}

function Shorts() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <h2 class="text-2xl font-bold">Short của bạn</h2>
        `;
    }
}

function Kenhdangky() {
    const content = document.querySelector("#content");
    if (content) {
        content.innerHTML = `
            <h2 class="text-2xl font-bold">Đây là danh sách các kênh đăng ký</h2>
        `;
    }
}

// Xuất các function để sử dụng trong main.js
export default Trangchu;
export { Shorts, Kenhdangky };
