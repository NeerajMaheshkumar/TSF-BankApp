package com.demo.customer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_Customers")
public class CustomerModel {

	private long id;
	private String CustomerCode;	
	private String CustomerName;
	private long PhoneNumber;
	private String EmailId;
	private String AadharNumber;
	private String Gender;
	private int CurrentBalance;
	
	
	public CustomerModel() {
		
	}
	
	public CustomerModel(String CustomerCode, String CustomerName, long PhoneNumber,String EmailId,String AadharNumber,String Gender,int CurrentBalance ) {
		this.CustomerCode = CustomerCode;
		this. CustomerName =  CustomerName;
		this.PhoneNumber = PhoneNumber;
		this.EmailId = EmailId;
		this.AadharNumber = AadharNumber;
		this.Gender = Gender;
		this.CurrentBalance = CurrentBalance;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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

	@Column(name = "CUSTOMERNAME", nullable = false)
	public String getCustomerName() {
		return CustomerName;
	}

	public void setCustomerName(String customerName) {
		CustomerName = customerName;
	}

	@Column(name = "PHONENUMBER", nullable = false)
	public long getPhoneNumber() {
		return PhoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		PhoneNumber = phoneNumber;
	}

	@Column(name = "EMAIL", nullable = false)
	public String getEmailId() {
		return EmailId;
	}

	public void setEmailId(String emailId) {
		EmailId = emailId;
	}

	@Column(name = "AADHARNUMBER", nullable = false)
	public String getAadharNumber() {
		return AadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		AadharNumber = aadharNumber;
	}

	@Column(name = "GENDER", nullable = false)
	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}
	
	@Column(name = "CURRENTBALANCE", nullable = false)
	public int getCurrentBalance() {
		return CurrentBalance;
	}

	public void setCurrentBalance(int currentbalance) {
		CurrentBalance = currentbalance;
	}


	@Override
	public String toString() {
		return "Customer [id=" + id + ", CustomerCode=" + CustomerCode + ", CustomerName=" + CustomerName + ", PhoneNumber=" + PhoneNumber + ", EmailId=" + EmailId + ", AadharNumber =" + AadharNumber + ", Gender=" + Gender + ", CurrentBalance =" + CurrentBalance + "]";
	}
	
}
