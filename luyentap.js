let tendangnhap=prompt("Nhap ten dang nhap");
let matkhau;
if(tendangnhap=="Admin"){
    matkhau=prompt("Nhap mat khau");
    if(matkhau=="TheMaster"){
        alert("Welcome!");
    }else if(matkhau==""){
        alert("Cancel!");
    }else{
        alert("Wrong password!");
    }
}else if(tendangnhap==""){
    alert("Cancel!");
}else{
    alert("I don't khow!");
}