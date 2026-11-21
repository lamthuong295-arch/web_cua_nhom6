/*THANH TÌM KIẾM ĐẦU TRANG*/
document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector(".search-box input");
    const button = document.querySelector(".search-box button");

    function guiDuLieu() {
        const value = input.value.trim();
        if (value.length > 0) {
            window.location.href = "sanpham.html"
        } else {
            alert("Hãy nhập nội dung cần tìm kiếm")
        }
    }
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            guiDuLieu()
        }
    });
    button.addEventListener("click", guiDuLieu)
});




/*LỌC SẢN PHẨM Ở TRANG SẢN PHẨM*/
function locsp(x) {
    let sps = document.querySelectorAll('.sp');
    sps.forEach(function(sp) {
        if (x === 'all') {
            sp.style.display = 'flex'
        } else {
            if (sp.classList.contains(x)) {
                sp.style.display = "flex"
            } else {
                sp.style.display = 'none'
            }
        }
    })
}




/*THÊM SẢN PHẨM GIỎ HÀNG*/
function dencuahang() {
    const hinhsanpham = document.querySelectorAll(".danhmucitem");
    hinhsanpham.forEach(function(item) {
        item.addEventListener("click", function() {
            window.location.href = "sanpham.html"
        })
    })
}
const products = [{
    id: 1,
    ten: "Bình hoa trang trí tài lộc",
    gia: 300000,
    hinh: "images/lohoa/binh-hoa-trang-tri-tai-loc_11052020110347.jfif"
}, {
    id: 2,
    ten: "Lọ hoa Bát Tràng men hỏa biến dáng giỏ cua 4 cạnh",
    gia: 395000,
    hinh: "images/lohoa/lo-hoa-bat-trang-men-hoa-bien-xanh-dai-duong-dang-gio-cua-4-canh_02022021084119.jpg"
}, {
    id: 3,
    ten: "Lọ hoa mộc nâu Bát Tràng trang trí dáng vò cao 29cm",
    gia: 280000,
    hinh: "images/lohoa/lo-hoa-moc-nau-bat-trang-trang-tri-decor-dang-vo-cao-29cm_12052024084158.jpg"
}, {
    id: 4,
    ten: "Lọ hoa gốm Bát Tràng ba cô gái Bắc Trung Nam",
    gia: 480000,
    hinh: "images/lohoa/lo-hoa-gom-bat-trang-ba-co-gai-bac-trung-nam_11042020045818.jpg"
}, {
    id: 5,
    ten: "Bộ bát thắp hương hoa sen trắng cao cấp 7 món",
    gia: 1450000,
    hinh: "images/batdia/set-bat-dia-hoa-sen-bat-trang-cao-cap_16042024035636.jpg"
}, {
    id: 6,
    ten: "Bát đựng gà cúng vẽ hoa sen xanh",
    gia: 450000,
    hinh: "images/batdia/bat-dung-ga-cung-ve-hoa-sen-xanh_12082022082945.jpg"
}, {
    id: 7,
    ten: "Bộ 6 bát ăn cơm Bát Tràng men kèm vẽ hoa anh đào",
    gia: 190000,
    hinh: "images/batdia/bo-6-bat-an-com-bat-trang-men-kem-ve-hoa-anh-dao_05082020021043.jpg"
}, {
    id: 8,
    ten: "Bộ bát đĩa hình chữ S bản đồ Việt Nam",
    gia: 510000,
    hinh: "images/batdia/bo_bat_dia_chu_S.jpg"
}, {
    id: 9,
    ten: "Bộ ấm trà tử sa Bát Tràng Âu Lạc 14 sản phẩm",
    gia: 630000,
    hinh: "images/khaytra/am_tra_tu_sa.jpg"
}, {
    id: 10,
    ten: "Bộ bình uống nước sứ Bát Tràng vẽ hoa sen",
    gia: 800000,
    hinh: "images/khaytra/am_chen_gia_co.jpg"
}, {
    id: 11,
    ten: "Bộ ấm chén men hỏa biến chuồn dáng Giang Tây",
    gia: 1200000,
    hinh: "images/khaytra/am-chen-giang-tay-chuon_22072020042132.jpg"
}, {
    id: 12,
    ten: "Bộ Ấm Chén Bát Tràng Phú Quý đào hồng",
    gia: 416000,
    hinh: "images/khaytra/am_chen_Bat_Trang.jpg"
}, {
    id: 13,
    ten: "Bình hút lộc màu vàng vẽ Phúc Đức Tài Lộc 25cm",
    gia: 1290000,
    hinh: "images/phongthuy/binh-hut-loc-mau-vang-ve-vang-phuc-duc-tai-loc-28cm_02112022083735.jpg"
}, {
    id: 14,
    ten: "Trứng phong thủy tài lộc Thuận Buồm Xuôi Gió",
    gia: 2500000,
    hinh: "images/phongthuy/trung_phong_thuy.jpg"
}, {
    id: 15,
    ten: "Bát tụ bảo ngọc cao cấp màu xanh ngọc cỡ to",
    gia: 1350000,
    hinh: "images/phongthuy/bat-tu-bao-ngoc-cao-cap-mau-xanh-ngoc-co-to-1_15082022072841.jpg"
}, {
    id: 16,
    ten: "Đĩa trang trí Bát Tràng Trúc Lâm Thất Hiền 35cm",
    gia: 450000,
    hinh: "images/phongthuy/dia-trang-tri-bat-trang-truc-lam-that-hien-35cm_11082022025623.jpg"
}, {
    id: 17,
    ten: "Tượng sứ Khổng Minh Gia Cát Lượng men rạn",
    gia: 1360000,
    hinh: "images/tuonggom/tuong-su-khong-minh-gia-cat-luong-men-ran-cao-60cm_28052020100551.jpg"
}, {
    id: 18,
    ten: "Tượng sứ Di lặc ngồi bệ đá men rạn cao 60cm",
    gia: 4700000,
    hinh: "images/tuonggom/tuong-su-di-lac-ngoi-be-da-men-ran-cao-60cm-rong-70cm_27052020093512.jpg"
}, {
    id: 19,
    ten: "Tượng sứ Tài Phát Lộc men rạn cao 35cm",
    gia: 1200000,
    hinh: "images/tuonggom/tuong-su-tai-phat-loc-cao-36cm-1_27052020035455.jpg"
}, {
    id: 20,
    ten: "Tượng sứ Phúc Lộc Thọ men rạn cao 30cm",
    gia: 1870000,
    hinh: "images/tuonggom/tuong-su-phuc-loc-tho-men-ran-no-du-cao-30cm-1_27052020111544.jpg"
}];
document.addEventListener("DOMContentLoaded", function() {
    capnhatslsp();
    dencuahang();
    let cacnut = document.querySelectorAll('.addgiohang');
    cacnut.forEach(function(button) {
        button.addEventListener("click", function(event) {
            const productId = event.target.dataset.id;
            if (productId) {
                themvaogio(productId)
            }
        })
    })
});

function themvaogio(productId) {
    const masp = "sp" + productId;
    let sphienco = parseInt(localStorage.getItem(masp)) || 0;
    sphienco++;
    localStorage.setItem(masp, sphienco);
    capnhatslsp();
    alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công!!!")
}

function capnhatslsp() {
    let tongsl = 0;
    for (let product of products) {
        const masp = "sp" + product.id;
        const sphienco = parseInt(localStorage.getItem(masp)) || 0;
        tongsl = tongsl + sphienco
    }
    const slspelement = document.querySelector('.slsp');
    if (slspelement) {
        slspelement.textContent = tongsl
    }
}

function thaydoislsp(masp, thaydoi) {
    let soluonghientai = parseInt(localStorage.getItem(masp)) || 0;
    soluonghientai = soluonghientai + thaydoi;
    if (soluonghientai < 1) {
        localStorage.removeItem(masp)
    } else {
        localStorage.setItem(masp, soluonghientai)
    }
    capnhatslsp();
    hienthisp()
}

function hienthisp() {
    const tbody = document.querySelector(".bangcart tbody");
    tbody.innerHTML = "";
    let tongtienall = 0;
    for (let product of products) {
        const masp = "sp" + product.id;
        const sphienco = parseInt(localStorage.getItem(masp)) || 0;
        if (sphienco <= 0) continue;
        const tongtientp = product.gia * sphienco;
        tongtienall = tongtienall + tongtientp;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${product.hinh}" width="150px"></td>
            <td>${product.ten}</td>
            <td>
                <button id="thaydoi" onclick="thaydoislsp('${masp}', -1)">−</button>
                <span class="soluong">${sphienco}</span>
                <button id="thaydoi" onclick="thaydoislsp('${masp}', 1)">+</button>
            </td>
            <td>${formatCurrency(product.gia)}</td>
            <td>${formatCurrency(tongtientp)}</td>
            <td><a href="#" data-code="${masp}" onclick="xoasp('${masp}')"><button class="xoa">Xóa</button></a></td>
        `;
        tbody.appendChild(tr)
    }
    document.getElementById("tongtienall").innerText = formatCurrency(tongtienall)
}

function xoasp(masp) {
    localStorage.removeItem(masp);
    hienthisp();
    location.reload("giohang.html")
}

function formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(amount)
}

function xacnhan() {
    let tongsp = 0;
    for (let product of products) {
        const masp = "sp" + product.id;
        const sphienco = parseInt(localStorage.getItem(masp)) || 0;
        tongsp = tongsp + sphienco
    }
    if (tongsp > 0) {
        if (confirm("Bạn có chắc muốn thanh toán?")) {
            alert("Thanh toán thành công " + tongsp + " sản phẩm!");
            localStorage.clear();
            capnhatslsp();
            hienthisp();
            window.location.href = 'giohang.html'
        }
    } else {
        alert("Giỏ hàng của bạn đang trống!")
    }
}




/*NÚT THÔNG BÁO CUỐI*/
function thongbao() {
    alert("Đại Việt Gốm Sứ đã thông báo bộ công thương!!!")
}






/*TRANG ĐĂNG KÝ*/
function dang_ky() {
    const hoten = document.getElementById("hoten").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const mk = document.getElementById("mk").value.trim();

    // KIỂM TRA RỖNG
    if (hoten === "" || email === "" || phone === "" || mk === "") {
        alert("Hãy nhập đầy đủ thông tin!");
        return false;
    }

    // KIỂM TRA EMAIL
    const ktemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!ktemail.test(email)) {
        alert("Vui lòng nhập đúng định dạng E-mail!");
        return false;
    }

    // KIỂM TRA SỐ ĐIỆN THOẠI
    const ktsdt = /^[0-9]{10}$/;
    if (!ktsdt.test(phone)) {
        alert("Số điện thoại phải có đúng 10 chữ số!");
        return false;
    }

    // KIỂM TRA MẬT KHẨU
    const ktmk = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;
    if (!ktmk.test(mk)) {
        alert("Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt!");
        document.getElementById("mk").focus();
        return false;
    }

    // LƯU TÀI KHOẢN BẰNG JSON
    const userData = {
        hoten: hoten,
        email: email,
        phone: phone,
        mk: mk
    };

    localStorage.setItem("account", JSON.stringify(userData));

    alert("Bạn đã đăng ký tài khoản thành công!");

    setTimeout(() => {
        window.location.href = "dangnhap.html";
    }, 1000);

    return false;
}






// TRANG ĐĂNG NHẬP
function dang_nhap() {
    const email = document.getElementById("email").value.trim();
    const matkhau = document.getElementById("mk").value;

    const data = localStorage.getItem("account");

    if (!data) {
        alert("Bạn chưa đăng ký tài khoản!");
        return false;
    }

    const account = JSON.parse(data);

    if (email === account.email && matkhau === account.mk) {
        alert("Đăng nhập thành công!");
        window.location.href = "trangchu.html";
    } else {
        alert("Email hoặc mật khẩu không chính xác!");
    }

    return false;
}






/*TRANG LIÊN HỆ*/
function gui_lien_he() {
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const noidung = document.getElementById("noidung").value.trim();
    if (fullname === "" || email === "" || phone === "" || noidung === "") {
        alert("Hãy nhập thông tin");
        return !1
    }
    const kiemtraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!kiemtraEmail.test(email)) {
        alert("Email không hợp lệ");
        return !1
    }
    const kiemtraPhone = /^[0-9]{10}$/;
    if (!kiemtraPhone.test(phone)) {
        alert("Số điện thoại có 10 số và chỉ được chứa số");
        return !1
    }
    alert("Đã nhận thông tin");
    return !1
}