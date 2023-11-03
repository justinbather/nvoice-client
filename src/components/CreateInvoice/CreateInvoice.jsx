import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/constants";



const CreateInvoice = () => {

  return (
    <>
      <div className="invoice-container">
        <div className="invoice-container__row">
          <div className="invoice-container__info-cont">
            <h3 className="invoice-container__company">Company Name</h3>
            <p className="invoice-container__meta-info">company@email.com</p>
            <p className="invoice-container__meta-info">123 test st</p>
            <p className="invoice-container__meta-info">+122345584834</p>
          </div>
          <div className="invoice-container__info-cont">
            <h3 className="invoice-container__company">Customer Info</h3>
            <input className="invoice-container__meta-info" placeholder='email@customer.com'></input>
            
          </div>
        </div>

        <h2 className="invoice-container__details-title">Summary</h2>

        <div className="invoice-container__details-cont">
          <div className="invoice-container__line-item--heading">
            <p>Item</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Cost/unit</p>
          </div>
          <div className="invoice-container__line-item">
            <input type="text" className='item__name'/>
            <input type="text" className='description'/>
            <input type="number" className='quantity'/>
            <input type="number" className='cost'/>
          </div>

        </div>
        <div className="invoice-container__payment">
          <p>Tax: %</p>
          <p>Total: $</p>
          <button className="invoice-container__payment-btn">
            Send Invoice
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateInvoice;