function obj(){
    var mahasiswa = {
        jurusan: "teknik informatika",
        alamat: "tangerang",
        telp: 12345,
    }
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}

obj()