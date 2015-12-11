/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package muhamadalrifki.com.service;

import muhamadalrifki.com.domain.Barang;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author al
 */
public interface BarangDao extends PagingAndSortingRepository<Barang, String>{
    
}
