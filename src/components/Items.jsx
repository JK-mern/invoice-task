import { useContext, useState } from "react"
import { MyContext } from "../Context"


function Items() {
   const {items, setItems} = useContext(MyContext)
  return (
    <div>
      <table className="table">
        <thead  className="bg-rose-400 text-base">
            <tr className="text-black">
                <th>Itemd Id</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Tax</th>
                <th>Sub Total</th>
            </tr>
        </thead>
        <tbody >
            {Items && items.map( (item,index) =>  {
               
                return (
                    <tr className="bg-pink-200" key={index}>
                        <td>{item.itemId}</td>
                        <td>{item.itemName}</td>
                        <td>{item.price}</td>
                        <td>{item.tax}.00%</td>
                        <td>{item.subTotal}.0</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Items
