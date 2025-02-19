import Navigo from "navigo";
const router = new Navigo("/");


const content = document.getElementById("content");

const Trangchu = () =>{
    return `
    <h2 class="text-2xl font-bold">Chế độ lưu danh sách video đã xem đang tắt</h2>
    `;
};

const Shorts = () =>{
    return `
    <h2 class="text-2xl font-bold">Short của bạn</h2>
    `;
};

const Kenhdangky = () =>{
    return `
    <h2 class="text-2xl font-bold">Đây là danh sách các kênh đăng ký</h2>
    `;
};


router.on("/",() => {
    content.innerHTML = Trangchu();
});

router.on("/shorts",() => {
    content.innerHTML = Shorts();
});

router.on("/feed",() => {
    content.innerHTML = Kenhdangky();
});

router.resolve();

document.addEventListener("click", (event) => {
    const button = event.target.closest("button, a");
    if (button) {
        const link = button.getAttribute("href") || button.dataset.link;
        if (link) {
            event.preventDefault();
            router.navigate(link);
        }
    }
});