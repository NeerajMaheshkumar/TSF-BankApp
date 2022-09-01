package com.demo.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.customer.model.CustomerModel;

@Repository
//public interface CustomerRepository extends JpaRepository<CustomerModel, String>{}

public interface CustomerRepository extends JpaRepository<CustomerModel, Long>{}