import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/constants";

const CreateInvoice = () => {
  const [custEmail, setCustEmail] = useState("");
  const [numLines, setNumLines] = useState(1);

  let defaultLineItems = [
    {
      itemName: "hi",
      description: "",
      quantity: 1,
      price: 1,
    },
    {
      itemName: "hi",
      description: "",
      quantity: 1,
      price: 1,
    },
    {
      itemName: "hi",
      description: "",
      quantity: 1,
      price: 1,
    },
  ];

  const handleItemChange = (idx, type, e) => {
    console.log(idx, type, e.target.value);
    defaultLineItems[idx][type] = e.target.value;
    console.log(defaultLineItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/invoices`,
        {
          lineItems: defaultLineItems,
          invoiceData: { email: custEmail },
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

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
            <input
              className="invoice-container__meta-info"
              placeholder="email@customer.com"
              onChange={(e) => {
                console.log(e.target.value);
                setCustEmail(e.target.value);
              }}
            ></input>
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
            <input
              type="text"
              className="item__name"
              onChange={(e) => {
                handleItemChange(0, "itemName", e);
              }}
            />
            <input
              type="text"
              className="description"
              onChange={(e) => {
                handleItemChange(0, "description", e);
              }}
            />
            <input
              type="number"
              className="quantity"
              onChange={(e) => {
                handleItemChange(0, "quantity", e);
              }}
            />
            <input
              type="number"
              className="cost"
              onChange={(e) => {
                handleItemChange(0, "price", e);
              }}
            />
          </div>
          <div className="invoice-container__line-item">
            <input
              type="text"
              className="item__name"
              onChange={(e) => {
                handleItemChange(1, "itemName", e);
              }}
            />
            <input
              type="text"
              className="description"
              onChange={(e) => {
                handleItemChange(1, "description", e);
              }}
            />
            <input
              type="number"
              className="quantity"
              onChange={(e) => {
                handleItemChange(1, "quantity", e);
              }}
            />
            <input
              type="number"
              className="cost"
              onChange={(e) => {
                handleItemChange(1, "price", e);
              }}
            />
          </div>
          <div className="invoice-container__line-item">
            <input
              type="text"
              className="item__name"
              onChange={(e) => {
                handleItemChange(2, "itemName", e);
              }}
            />
            <input
              type="text"
              className="description"
              onChange={(e) => {
                handleItemChange(2, "description", e);
              }}
            />
            <input
              type="number"
              className="quantity"
              onChange={(e) => {
                handleItemChange(2, "quantity", e);
              }}
            />
            <input
              type="number"
              className="cost"
              onChange={(e) => {
                handleItemChange(2, "price", e);
              }}
            />
          </div>
          {Array.from({ length: numLines }, (_, i) => (
            <div key={i} className="invoice-container__line-item">
              <input type="text" className="item__name" />
              <input type="text" className="description" />
              <input type="number" className="quantity" />
              <input type="number" className="cost" />
            </div>
          ))}
        </div>

        <div className="invoice-container__payment">
          <button
            className="invoice-container__line-btn"
            onClick={() => {
              console.log(numLines);
              setNumLines(numLines + 1);
            }}
          >
            New line item
          </button>
          <p>Tax: %</p>
          <p>Total: $</p>
          <button
            className="invoice-container__payment-btn"
            onClick={handleSubmit}
          >
            Send Invoice
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateInvoice;
