import { useState, useEffect } from 'react'
import { initialStocks } from '../data/mockStocks'
import StockCard from './StockCard'

function Dashboard() {
  const [stocks, setStocks] = useState(initialStocks)

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((s) => {
          const wiggle = (Math.random() - 0.5) * 2 // random number between -1 and 1
          const newPrice = Math.max(0, s.price + wiggle)
          const newChange = s.change + (Math.random() - 0.5) * 0.3
          return { ...s, price: newPrice, change: newChange }
        })
      )
    }, 1500) // every 1.5 seconds

    return () => clearInterval(interval)
  }, []) // empty array: set up the interval once, clean it up on unmount

  const bumpPrice = (id) => {
    setStocks((prevStocks) =>
      prevStocks.map((s) =>
        s.id === id ? { ...s, price: s.price + 1 } : s
      )
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {stocks.map((stock) => (
        <StockCard key={stock.id} stock={stock} onBump={bumpPrice} />
      ))}
    </div>
  )
}

export default Dashboard