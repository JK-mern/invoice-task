import { useContext, useState } from "react";
import { MyContext } from "../Context";
import toast, { Toaster } from "react-hot-toast";
import Model from "./Model";

function AddItems() {
  const { showAddItem, setShowAddItem, setItems, items } =
    useContext(MyContext);

  const handleCancel = () => {
    setShowAddItem(!showAddItem);
  };

  const [item, setItem] = useState({});

  const handleChange = (e) => {
    if (
      e.target.id === "price" ||
      e.target.id === "tax" ||
      e.target.id === "subTotal" ||
      e.target.id === "itemId"
    ) {
      setItem({ ...item, [e.target.id]: parseInt(e.target.value) });
    } else {
      setItem({ ...item, [e.target.id]: e.target.value });
    }
  };

  const handleAddItem = () => {
    if (
      !item.itemId ||
      !item.itemName ||
      !item.price ||
      !item.tax ||
      !item.subTotal
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    setItems([...items, item]);
    setShowAddItem(!showAddItem);
   
  };

  return (
    <>
      {showAddItem && (
        <Model >
          <Toaster />

          <div className="flex justify-between px-5 pt-3">
            <h3 className="font-bold">Enter the Item Details</h3>
            <button
              className="btn btn-sm btn-error text-white"
              onClick={handleCancel}
            >
              cancel
            </button>
          </div>

          <div className="flex flex-col  gap-3 my-3 px-5 py-2">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Item Id
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemId"
                type="text"
                placeholder="Enter item id"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Item Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemName"
                type="text"
                placeholder="Enter item Name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                placeholder="Enter item price"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tax
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tax"
                type="text"
                placeholder="Enter item Tax"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                SubTotal
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subTotal"
                type="text"
                placeholder="Enter Subtotal"
                onChange={handleChange}
                required
              />
            </div>
            <button
              onClick={handleAddItem}
              className="py-3 bg-red-600 text-white"
            >
              Add Item
            </button>
          </div>
        </Model>
      )}
    </>
  );
}

export default AddItems;
