/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('aplikasiBarang')
        .controller('barangController',function ($scope,barangService){
            $scope.hallo = "Hello";
            $scope.nama = "Alrifki";
            $scope.model = {};
            $scope.isEdit = false;
            
            $scope.tampilkanData = function() {
                barangService.getListBarang().success(function (data){
                    $scope.dataServer = data;
                })
            };
            
            $scope.data = [
                {"nama": "Alrifki","alamat": "Jakarta"},{"nama": "Someone","alamat": "Jakarta"}
            ];
            
            $scope.hapus = function (index){
                $scope.data.splice(index,1);
            };
            
            $scope.simpan = function(data){
                if ($scope.isEdit==true){
                    $scope.data[$scope.indexEdit] = data;
                }
                else{
                    $scope.data.push(data);
                }
                $scope.clear();
            }
            
            $scope.clear = function () {
                $scope.model = {};
                $scope.isEdit = false;
            }
            
            $scope.edit = function (data,index) {
                $scope.model.nama = data.nama;
                $scope.model.alamat = data.alamat;
                $scope.indexEdit = index;
                $scope.isEdit = true;
            }
            
            $scope.tampilkanData = function () {
                barangService.getBarangFromDb().success(function (data){
                   $scope.dataServer = data.content; 
                });
            };
            
            $scope.isDataEdit = false;
            $scope.currentBarang = {};
            $scope.simpanData = function (data){
                if ($scope.isDataEdit==true){
                    barangService.update(data.id,data).success(function (data){
                       alert("data berhasil dirubah")
                       $scope.clearData();
                    }).error(function (){
                        alert("terjadi kesalahan dalam penyimpanan data")
                    })
                }
                else{
                    barangService.save(data).success(function (data){
                        alert("data berhasil disimpan")
                        $scope.clearData();
                    }).error(function (){
                        alert("Terjadi kesalahan dalam menyimpan data")
                    })
                }
            }
            
            $scope.hapusData = function(id) {
                barangService.delete(id).success(function (data){
                    alert("data berhasil dihapus");
                    $scope.clearData();
                }).error(function (){
                    alert("terjadi kesalahan dalam penghapusan data");
                })
            }
            
            $scope.editData = function (data){
                $scope.isDataEdit = true;
                $scope.currentBarang = {};
                $scope.currentBarang.nama = data.nama;
                $scope.currentBarang.kode = data.kode;
                $scope.currentBarang.id = data.id;
            };
            
            $scope.clearData = function (){
                $scope.isDataEdit = false;
                $scope.currentBarang = {};
                $scope.reloadData();
            }
            
            $scope.reloadData = function (){
                barangService.getBarangFromDb().success(function (data){
                    $scope.dataServer = data.content;
                })
            }
});