import { useContext, useState } from "react";
import Items from "./Items";
import { MyContext } from "../Context";
import AddItems from "./AddItems";
import Calculate from "./Calculate";
import { invoices } from "../invoices";
import toast, { Toaster } from "react-hot-toast";
import Model from "./Model";

function AddInvoice() {
  const { showAddInvoice, setShowAddItem, showAddItem,invoice,setInvoice,setAddInvoice,setItems, items  } = useContext(MyContext);
  

  const handleAddTask = () => {
    setShowAddItem(!showAddItem);
  };

  const handleChange = (e) =>{
    setInvoice ({...invoice, [e.target.id] : e.target.value})
  }



  const handleSave = () =>{

    if(!invoice.invoiceNo || !invoice.customerName || !invoice.date)
      {
        toast.error("Please fill out all fields")
        return
      }
    invoices.push(invoice)
    setAddInvoice(!showAddInvoice);
    setItems([])
    

  }



  const handleCancel = () =>{
    setAddInvoice(!showAddInvoice);
  }



  return (
    <>
      {showAddInvoice && (
     <Model width="1000px">
          <Toaster />
          <div className="flex justify-between  bg-red-600  py-3  items-center">
          <h4 className="text-whitepy-3 pl-3 text-white">Create Invoice</h4>
          <button onClick={handleCancel} className="mr-3 p-3 btn bg-red-300">cancel</button>
          </div>
         
          <div className="bg-red-300  ">
            <div className="flex gap-10">
              <div className="flex justify-between pt-5 ml-2 pb-5 ">
                <h3>Invoice No</h3>
                <input
                  type="text"
                  name=""
                  id="invoiceNo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-3 pt-5 ml-3 pb-5">
                <h3>Date</h3>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="date"
                  min="2000-01-01"
                  max="2030-12-31"
                  id="date"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4 pt-5 ml-3 pb-5 mr-3">
                <h3>Cutomer Name</h3>
                <input
                  type="text"
                  name=""
                  id="customerName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}

                />
              </div>
            </div>
            <div className="flex justify-end mr-3">
              <button
                className="py-2 px-3 rounded-md m-2 bg-red-600  text-white hover:bg-red-400"
                onClick={handleAddTask}
              >
                Add Items
              </button>
            </div>
          </div>
          <Items />
          <Calculate />
          <div className="flex justify-end   bg-red-300 ">
          <button className="mr-10 py-3 px-5 btn bg-red-600 text-white mb-4 hover:text-red-700" onClick={handleSave}>Save</button>
          </div>
     </Model>
   
      )}
      <AddItems />

    </>
  );
}

export default AddInvoice;
