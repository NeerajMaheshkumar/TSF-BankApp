package com.demo.customer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "t_Transactions")
public class TransactionModel {

	
	private String CustomerCode;
	private int AmountTransferred;
	private Date DateofTransfer = new Date();
	private String Remarks;
	private long id;
	
	public TransactionModel() {}
	
	public TransactionModel(String CustomerCode, int AmountTransferred, Date DateofTransfer,String Remarks) {
		this.CustomerCode = CustomerCode;
		this.AmountTransferred =  AmountTransferred;
		this.DateofTransfer = DateofTransfer;
		this.Remarks = Remarks;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "CUSTOMERCODE", nullable = false)
	public String getCustomerCode() {
		return CustomerCode;
	}

	public void setCustomerCode(String customerCode) {
		CustomerCode = customerCode;
	}

	@Column(name = "AMOUNTTRANSFERRED", nullable = false)
	public int getAmountTransferred() {
		return AmountTransferred;
	}

	public void setAmountTransferred(int amountTransferred) {
		AmountTransferred = amountTransferred;
	}

	@Column(name = "DATEOFTRANSFER", nullable = true)
	public Date getDateofTransfer() {
		return DateofTransfer;
	}

	public void setDateofTransfer(Date dateofTransfer) {
		DateofTransfer = dateofTransfer;
	}

	@Column(name = "REMARKS", nullable = false)
	public String getRemarks() {
		return Remarks;
	}

	public void setRemarks(String remarks) {
		Remarks = remarks;
	}

	
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", CustomerCode=" + CustomerCode + ", AmountTransferred=" + AmountTransferred + ", DateofTransfer=" + DateofTransfer + ", Remarks=" + Remarks + "]";
	}
	
}



