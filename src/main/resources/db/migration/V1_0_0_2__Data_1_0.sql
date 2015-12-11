/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  al
 * Created: Nov 27, 2015
 */
INSERT INTO barang (id,nama,kode) VALUES
('1','Lorem Ipsum Dolor Sit Amet','Ini kode'),
('2','Lorem Ipsum Dolor Sit Amett','Ini kode');

INSERT INTO `c_security_role` (`id`,`nama`,`description`) VALUES
('admin','admin','Application Admin'),
('user','user','Application User');

INSERT INTO `c_security_permission` (`id`,`permission_label`,`permission_value`) VALUES
('barang_update','Edit Barang','ROLE_BARANG_UPDATE'),
('barang_view','View Barang','ROLE_BARANG_VIEW'),
('barang_create','Create Barang','ROLE_BARANG_CREATE'),
('barang_delete','Delete Barang','ROLE_BARANG_DELETE'),
('user_view','View User','ROLE_USER_VIEW');

INSERT INTO `c_security_role_permission` (`id_role`,`id_permission`) VALUES
('admin','barang_update'),
('admin','barang_view'),
('admin','barang_create'),
('admin','barang_delete'),
('user','barang_view'),
('user','user_view'),
('admin','user_view');

INSERT INTO `c_security_user` (`id`,`username`,`password`,`active`,`id_role`) VALUES
('1','admin','admin',true,'admin'),
('2','user','user',true,'user');