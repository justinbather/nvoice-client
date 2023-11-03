import "./Invoice.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const UserInvoice = ({ isUser, invoice, total }) => {
  console.log(invoice);
  return (
    <>
      <div className="invoice-container">
        <div className="invoice-container__row">
          <div className="invoice-container__info-cont">
            <h3 className="invoice-container__company">
              {invoice.company.name}
            </h3>
            <p className="invoice-container__meta-info">
              {invoice.company.email}
            </p>
            <p className="invoice-container__meta-info">
              {invoice.company.address}
            </p>
            <p className="invoice-container__meta-info">
              {invoice.company.phoneNum}
            </p>
          </div>
          <div className="invoice-container__info-cont">
            <h3 className="invoice-container__company">{invoice.user.name}</h3>
            <p className="invoice-container__meta-info">{invoice.user.email}</p>
            <p className="invoice-container__meta-info">
              {invoice.user.address}
            </p>
            <p className="invoice-container__meta-info">
              {invoice.user.phoneNum}
            </p>
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
          {invoice.lineItems &&
            invoice.lineItems.map((item) => (
              <div className="invoice-container__line-item">
                <p>{item.itemName}</p>
                <p>{item.description}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
              </div>
            ))}
        </div>
        <div className="invoice-container__payment">
          <p>Tax: {invoice.tax}%</p>
          <p>Total: ${total}</p>
          {isUser && (
            <button className="invoice-container__payment-btn">
              Pay Invoice
            </button>
          )}
        </div>
      </div>
    </>
  );
};
