package com.demo.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.customer.model.TransactionModel;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionModel, Long>{

}



