import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/constants";
import CompanySideNav from '../../components/CompanySideNav/CompanySideNav';
import CreateInvoice from '../../components/CreateInvoice/CreateInvoice';


const CreateInvoicePage = () => {
  
    return (
      <>
        <div className="homepage">
          <CompanySideNav />
          <CreateInvoice />
        </div>
      </>
    );
};

export default CreateInvoicePage;