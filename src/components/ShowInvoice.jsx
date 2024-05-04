import React from "react";
import { invoices } from "../invoices";
function ShowInvoice() {
  return (
    <div>
      <table className="table">
        <thead className="bg-rose-400 ">
          <tr className="text-black text-base">
            <th>Invoice No</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Total</th>
            <th>Tax</th>
            <th>Grand Total</th>
          </tr>
        </thead>
        <tbody>
            {invoices && invoices.map ((invoice, index) =>{
                return (
                    <tr className="bg-pink-200" key={index} >
                        <td>{invoice.invoiceNo}</td>
                        <td>{invoice.date}</td>
                        <td>{invoice.customerName}</td>
                        <td>{invoice.grandTotal}</td>
                        <td>{invoice.tax}</td>
                        <td>{invoice.grandTotal}.0</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowInvoice;
