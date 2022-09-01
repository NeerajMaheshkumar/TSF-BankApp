package com.demo.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.customer.model.CustomerModel;
import com.demo.customer.repository.CustomerRepository;
@CrossOrigin(origins = "http://13.76.152.190")
@RestController
@RequestMapping("/bank")

public class CustomerController
{
	@Autowired
	private CustomerRepository customerRepository;
	
	@GetMapping("/Customers") 
	public String getCustomers() 
	{
		 return "Hi Customer";
	}
		 
	
	@GetMapping("/Customerlist") 
	public List<CustomerModel> getAllCustomers() throws Exception
	{
		return customerRepository.findAll();		
	}

	
	@GetMapping("/customers/{ID}")
	public ResponseEntity<CustomerModel> getCustomerById(@PathVariable(value = "ID") Long ID)
	throws Exception 
	{
		CustomerModel customer = customerRepository.findById(ID)
				.orElseThrow(() -> new Exception());
		return ResponseEntity.ok().body(customer);
	}
}
