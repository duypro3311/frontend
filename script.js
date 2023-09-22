// Lấy tham chiếu đến các phần tử
const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menuButton');

// Sự kiện khi di chuột vào nút menu
menuButton.addEventListener('mouseenter', () => {
    sidebar.style.right = '0'; // Hiển thị thanh bên khi rê chuột vào nút menu
    menuButton.classList.add('menu-visible'); // Thêm lớp để di chuyển nút menu
});
// Sự kiện khi di chuột ra khỏi nút menu
menuButton.addEventListener('mouseleave', () => {
    sidebar.style.right = '-450px'; // Ẩn thanh bên khi di chuột ra khỏi nút menu
    menuButton.classList.remove('menu-visible'); // Loại bỏ lớp để di chuyển nút menu
});
// Hàm di chuyển nút menu

sidebar.addEventListener('mouseenter', () => {
    sidebar.style.right = '0'; // Hiển thị thanh bên khi rê chuột vào sidebar
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.style.right = '-450px'; // Ẩn thanh bên khi di chuột ra khỏi sidebar
});


