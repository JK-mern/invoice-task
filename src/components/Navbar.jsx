import { useContext } from "react";
import { MyContext } from "../Context";


function Navbar() {
 
  const {showAddInvoice,setAddInvoice} = useContext(MyContext)

  const handleClick = () =>{
    setAddInvoice(!showAddInvoice)
  }

  return (
    <div>
      <div className="bg-red-600 m-b-5 p-3 items-center ">
        <h2 className="text-white">Invoice</h2>
      </div>
      <div className="flex  justify-between p-2 bg-red-100">
        <button
          className="py-2 px-4  bg-red-600 text-white rounded-md hover:bg-red-300"
          onClick={handleClick}
        >
          Create
        </button>
        <div className="flex gap-3">
          <input className="w-96 h-11 outline-gray-700 px-3" type="text" placeholder="Enter customer name"  />
          <button className="py-2 px-4  bg-red-600 text-white rounded-md hover:bg-red-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
