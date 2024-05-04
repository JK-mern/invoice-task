import { useState } from "react";
import { MyContext } from "./Context";
import AddInvoice from "./components/AddInvoice";
import Navbar from "./components/Navbar";
import ShowInvoice from "./components/ShowInvoice";

function App() {
  const [showAddInvoice, setAddInvoice] = useState(false);
  const [items, setItems] = useState([]);
  const [invoice, setInvoice] = useState({});
  const [showAddItem, setShowAddItem] = useState(false);
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
