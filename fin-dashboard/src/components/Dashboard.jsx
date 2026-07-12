import {useState} from "react"
import { initialStocks } from '../data/mockStocks'
import StockCard from './StockCard'

function Dashboard(){
  const [stocks, setStocks]=useState(initialStocks);
  return(
  <div className="grid grid-cols-3 gap-4">
    {stocks.map((stock)=>(
      <StockCard key={stock.id} stock={stock}/>
    ))
    }
  </div>
)
}

export default Dashboard