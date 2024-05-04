import { useState } from "react";
import { MyContext } from "./Context";
import AddInvoice from "./components/AddInvoice";
import Navbar from "./components/Navbar";
import ShowInvoice from "./components/ShowInvoice";
import { invoices } from "./invoices";

function App() {
  const [showAddInvoice, setAddInvoice] = useState(false);
  const [items, setItems] = useState([]);
  const [invoice, setInvoice] = useState({});
  const [allInvoice, setAllInvoice] = useState(invoices);
  const [showAddItem, setShowAddItem] = useState(false);
  const [filteredItems, setFilteredItems] = useState(allInvoice);
  return (
    <>
      <MyContext.Provider
        value={{
          showAddInvoice,
          setAddInvoice,
          items,
          setItems,
          showAddItem,
          setShowAddItem,
          invoice,
          setInvoice,
          allInvoice,
          setAllInvoice,
          filteredItems,
          setFilteredItems,
        }}
      >
        <Navbar />
        <ShowInvoice />
        <AddInvoice />
      </MyContext.Provider>
    </>
  );
}

export default App;
