/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('aplikasiBarang')
        .factory('barangService',function ($http) {
            return {
                getBarang: function() {
                    return $http.get("/barang");
                },
                getListBarang: function() {
                    return $http.get("/listBarang");
                },
                save: function (data) {
                    return $http.post("/api/barang",data);
                },
                getBarangFromDb: function () {
                    return $http.get("/api/barang");
                },
                delete: function(id) {
                    return $http.delete("/api/barang/"+id);
                },
                update: function(id,data) {
                    return $http.put("/api/barang/"+id,data);
                }
            };
});