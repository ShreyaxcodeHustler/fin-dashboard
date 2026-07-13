import { useState, useEffect } from 'react'
import { initialStocks } from '../data/mockStocks'
import StockCard from './StockCard'

function Dashboard({ searchTerm }) {
  const [stocks, setStocks] = useState(initialStocks)
  const [watchlist, setWatchlist] = useState([])
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const toggleWatchlist = (id) => {
    setWatchlist((prev) =>
      prev.includes(id)
        ? prev.filter((wid) => wid !== id)
        : [...prev, id]
    )
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((s) => {
          const wiggle = (Math.random() - 0.5) * 2
          const newPrice = Math.max(0, s.price + wiggle)
          const newChange = s.change + (Math.random() - 0.5) * 0.3
          const newHistory = [...s.history, newPrice].slice(-30)

          return { ...s, price: newPrice, change: newChange, history: newHistory }
        })
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 300)

    return () => clearTimeout(timeout)
  }, [searchTerm])

  const bumpPrice = (id) => {
    setStocks((prevStocks) =>
      prevStocks.map((s) =>
        s.id === id ? { ...s, price: s.price + 1 } : s
      )
    )
  }

  const watchedStocks = stocks.filter((s) => watchlist.includes(s.id))

  const filteredStocks = stocks.filter(
    (s) =>
      s.ticker.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      s.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <div className="mb-2 h-4 w-24 rounded bg-neutral-800 animate-pulse" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-4"
              >
                <div className="mb-3 h-4 w-24 rounded bg-neutral-800 animate-pulse" />
                <div className="mb-4 h-3 w-32 rounded bg-neutral-800/70 animate-pulse" />
                <div className="mb-4 h-8 w-20 rounded bg-neutral-800 animate-pulse" />
                <div className="h-16 rounded-lg bg-neutral-800/70 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4].map((card) => (
            <div
              key={card}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-4"
            >
              <div className="mb-3 h-4 w-24 rounded bg-neutral-800 animate-pulse" />
              <div className="h-16 rounded-lg bg-neutral-800/70 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-2 text-sm text-neutral-400">Watchlist</h2>
        {watchedStocks.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {watchedStocks.map((stock) => (
              <StockCard
                key={`watch-${stock.id}`}
                stock={stock}
                onBump={bumpPrice}
                isWatched
                onToggleWatch={toggleWatchlist}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-400">
            <p className="font-medium text-neutral-200">No starred stocks yet.</p>
            <p className="mt-1">Tap the star on any card to keep an eye on it here.</p>
          </div>
        )}
      </div>

      {filteredStocks.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStocks.map((stock) => (
            <StockCard
              key={stock.id}
              stock={stock}
              onBump={bumpPrice}
              isWatched={watchlist.includes(stock.id)}
              onToggleWatch={toggleWatchlist}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center text-sm text-neutral-400">
          <p className="text-base font-medium text-neutral-200">No results for "{debouncedSearch}"</p>
          <p className="mt-1">Try a different ticker or company name.</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard