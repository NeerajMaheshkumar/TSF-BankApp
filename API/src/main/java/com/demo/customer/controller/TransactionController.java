
package com.demo.customer.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.customer.model.TransactionModel;
import com.demo.customer.repository.TransactionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bank")

public class TransactionController
{
	@Autowired
	private TransactionRepository transactionRepository;
	
	@GetMapping("/Transaction") 
	public String getTranactions() 
	{
		 return "Hi Transaction";
	}
		 
	
	@GetMapping("/Transactionlist") 
	public List<TransactionModel> getAllTranactions() throws Exception
	{
		return transactionRepository.findAll();		
	}
	
	@PostMapping("/SaveTransaction")
    public TransactionModel createTransaction(@RequestBody TransactionModel transactionModel)
	{
		System.out.println("Customer Code :" + transactionModel.getCustomerCode());
		System.out.println("Amt :"+ transactionModel.getAmountTransferred());
        return transactionRepository.save(transactionModel);
    }
	
	
}