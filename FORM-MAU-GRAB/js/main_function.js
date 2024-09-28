// Bảng giá cước

const KM_DAU_CAR = 8000;
const KM_1_19_CAR = 7500;
const KM_TREN_19_CAR = 7000;
const TIME_CAR = 2000;

const KM_DAU_SUV = 9000;
const KM_1_19_SUV = 8500;
const KM_TREN_19_SUV = 8000;
const TIME_SUV = 3000;

const KM_DAU_BLACK = 10000;
const KM_1_19_BLACK = 9500;
const KM_TREN_19_BLACK = 9000;
const TIME_BLACK = 3500;

function main() {
    //lấy dữ liệu từ form 
    let radioCar = document.getElementById("grabCar");
    let radioSUV = document.getElementById("grabSUV");
    let radioBlack = document.getElementById("grabBlack");

    let soKM = document.getElementById("inputKM").value;
    let time = document.getElementById("inputTime").value;

    //gọi các hàm tính năng nhỏ
    let loaiXe = xacDinhLoaiXe(radioCar, radioSUV, radioBlack)
    console.log(loaiXe)


    let thanhTien = 0;
    switch (loaiXe) {
        case "Car":
        thanhTien = tinhTienTheoKM(soKM, KM_DAU_CAR, KM_1_19_CAR, KM_TREN_19_CAR) + tinhTienPhat(time, TIME_CAR);
        console.log("thanhTien", thanhTien)
            break;
        case "SUV":
        thanhTien = tinhTienTheoKM(soKM, KM_DAU_SUV, KM_1_19_SUV, KM_TREN_19_SUV) + tinhTienPhat(time, TIME_SUV);
            break;
        case "Black":
        thanhTien = tinhTienTheoKM(soKM, KM_DAU_BLACK, KM_1_19_BLACK, KM_TREN_19_BLACK) + tinhTienPhat(time, TIME_BLACK);
            break;
        default:
            console.log("Hãy chọn loại xe")
            break;
    }
    console.log(thanhTien)
    document.getElementById("xuatTien").innerHTML = thanhTien.toLocaleString();
    document.getElementById("divThanhTien").style.display = "block";
}


//input: radioCar, radioSUV, radioBlack => params
//output: có dùng ở các hàm khác khong => return
function xacDinhLoaiXe(radioCar, radioSUV, radioBlack) {
    if (radioCar.checked) {
        // loaiXe = "Car";
        return "Car"
    } else if (radioSUV.checked) {
        // loaiXe = "SUV";
        return "SUV"
    } else if (radioBlack.checked) {
        // loaiXe = "Black"
        return "Black"
    } else {
        console.log("Hãy chọn loại xe")
        return ""  //tránh trả về kq undifined
    }

    //trả kq ngoài hàm
    //lệnh dừng hàm
    // return loaiXe; //các hàm khác có thể sử dụng kết quả
}


//input: soKM, tien_dau, tien1_19, tien_tren19 => params
//output: tienKM => return
function tinhTienTheoKM(soKM, tien_dau, tien1_19, tien_tren19){
    if(0 < soKM && soKM <= 1){
        // console.log("chặn 1")
        return soKM * tien_dau
    }else if(1 < soKM && soKM <= 19){
        // console.log("chặn 2")
        return tien_dau + (soKM - 1) * tien1_19
    }else if(19 < soKM){
        // console.log("chặn 3")
        return tien_dau + 18 * tien1_19 + (soKM - 19)*tien_tren19
    }else {
        alert("Hãy nhập km")
        return 0; //nếu kh return thì sẽ là kiểu undefined
    }
}


// input: time, tien_cho
// output: tienPhat
function tinhTienPhat(time, tien_cho){
    if(time >= 3){
        // phạt
        let soLanPhat = Math.floor(time/3);
        return soLanPhat * tien_cho;
    }
    return 0;
}