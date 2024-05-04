import React, { useContext, useEffect, useMemo } from "react";
import { MyContext } from "../Context";

function Calculate() {
  const { items, invoice, setInvoice } = useContext(MyContext);

  const totalPrice = useMemo(() => {
    let finalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      finalPrice += items[i].price;
    }
    return finalPrice;
  }, [items]);

  const totalTax = useMemo(() => {
    let finalTax = 0;
    if (items.length === 0) {
      return 0;
    }
    for (let i = 0; i < items.length; i++) {
      finalTax += items[i].tax;
    }
    if (items.length === 1) {
      return finalTax;
    }
    return (finalTax / items.length).toFixed(2);
  }, [items]);

  const subTotal = useMemo(() => {
    let finalTotal = 0;
    for (let i = 0; i < items.length; i++) {
      finalTotal += items[i].subTotal;
    }
    return finalTotal;
  }, [items]);

  useEffect(() => {
    setInvoice({
      ...invoice,
      total: totalPrice,
      tax: totalTax,
      grandTotal: subTotal
    });
  }, [items, totalPrice, totalTax, subTotal, setInvoice]);

  return (
    <>
      <div className="bg-red-300 p-3">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center justify-end mr-10">
            <label className="block text-black font-normal md:text-right mb-1 md:mb-0 pr-4">
              Total Price
            </label>
            <p className="w-28 text-right bg-white  rounded py-2 px-4 text-black leading-tight">{totalPrice}</p>
          </div>
          <div className="flex gap-3 items-center justify-end mr-10">
            <label className="block text-black font-normal md:text-right mb-1 md:mb-0 pr-4">
              Total Tax
            </label>
            <p className="w-28 text-right bg-white  rounded py-2 px-4 text-black leading-tight">{totalTax}</p>
          </div>
          <div className="flex gap-3 items-center justify-end mr-10">
            <label className="block text-black font-normal md:text-right mb-1 md:mb-0 pr-4">
              Grand Total
            </label>
            <p className="w-28 text-right bg-white  rounded py-2 px-4 text-black leading-tight">{subTotal}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculate;
