
import React from "react";
import './printButton.css';
import printer from '../assets/images/printer.svg';
import { Link } from 'react-router-dom';

const PrintButton = () => {
    return (
        <div className="print-button-container">
            <Link to="/crimeChart">
                <button className="py-2 px-4 inline-flex items-center">
                    <img src={printer} alt="Print"></img>
                    <span className="print-text">Print</span>
                </button>
            </Link>
        </div>
    );
};

export default PrintButton;