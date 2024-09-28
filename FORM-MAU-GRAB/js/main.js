/**
 * input:
 *  +bangGiaCuoc
 *  +loaiXe
 *  +soKM
 *  +time
 * 
 * Step:
 *  B1: lấy giá trị từ form
 *  B2: xác định loại xe
 *  B3: ktra số km đi dc
 *  B4: ktra tgian chờ
 *  B4: ứng dụng công thức tính phù hợp => thành tiền
 * 
 * output: thanhTien
 */

// Bảng giá cước
// global: toàn cục
// khai bao loại const (hằng số) => không bị gán lại giá trị

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


function tinhTienGrab() {
    let radioCar = document.getElementById("grabCar");
    let radioSUV = document.getElementById("grabSUV");
    let radioBlack = document.getElementById("grabBlack");

    let soKM = document.getElementById("inputKM").value;
    let time = document.getElementById("inputTime").value;

    console.log(radioCar, radioSUV, radioBlack, soKM, time)


    //kiểm tra loại xe (checked: radio, checkbox)
    let loaiXe = "";
    if (radioCar.checked) {
        loaiXe = "Car";
    } else if (radioSUV.checked) {
        loaiXe = "SUV";
    } else if (radioBlack.checked) {
        loaiXe = "Black"
    } else {
        console.log("Hãy chọn loại xe")
    }

    console.log(loaiXe)


    //tính tiền KM theo loại xe
    //chỉ nên dùng khi cần so sánh ==
    let thanhTien = 0;
    switch (loaiXe) {
        case "Car":
            console.log("Tính tiền Car")
            if(0 < soKM && soKM <= 1){
                // console.log("chặn 1")
                thanhTien = soKM * KM_DAU_CAR
            }else if(1 < soKM && soKM <= 19){
                // console.log("chặn 2")
                thanhTien = KM_DAU_CAR + (soKM - 1) * KM_1_19_CAR
            }else if(19 < soKM){
                // console.log("chặn 3")
                thanhTien = KM_DAU_CAR + 18 * KM_1_19_CAR + (soKM - 19)*KM_TREN_19_CAR
            }else {
                console.log("Hãy nhập km")
            }

            // tiền phạt 
            let tienPhat = 0;
            if(time >= 3){
                // phạt
                let soLanPhat = Math.floor(time/3);
                tienPhat = soLanPhat + TIME_CAR;
            }
            let tongTien = thanhTien + tienPhat;
            console.log(tongTien, tienPhat)


            break; //lệnh dừng của switch...case
        case "SUV":
            console.log("Tính tiền SUV")
            break;
        case "Black":
            console.log("Tính tiền Black")
            break;
        default:
            console.log("Hãy chọn loại xe")
            break;
    }
    document.getElementById("divThanhTien").innerHTML = "thanhTien"
}


