import { LineChart, Line, ResponsiveContainer } from 'recharts'

function StockCard({ stock, onBump, isWatched, onToggleWatch }) {
  const isUp = stock.change >= 0
  const chartData = stock.history.map((price, i) => ({ i, price }))

  return (
    <div className="flex flex-col gap-1 rounded-xl border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{stock.ticker}</div>
          <div className="text-xs text-neutral-500">{stock.name}</div>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            isUp ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}
        >
          {isUp ? '+' : ''}{stock.change.toFixed(2)}%
        </span>
      </div>

      <div className="mt-2 text-2xl font-bold">${stock.price.toFixed(2)}</div>

      <div className="-mx-2 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="price"
              stroke={isUp ? '#4ade80' : '#f87171'}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-neutral-800 pt-3">
        <button
          onClick={() => onBump(stock.id)}
          className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400 transition hover:bg-emerald-500/25"
        >
          Buy
        </button>
        <button
          onClick={() => onToggleWatch(stock.id)}
          className={`text-sm ${isWatched ? 'text-yellow-400' : 'text-neutral-600'} hover:text-yellow-300`}
          aria-label={isWatched ? 'Remove from watchlist' : 'Add to watchlist'}
        >
          {isWatched ? '★' : '☆'}
        </button>
      </div>
    </div>
  )
}

export default StockCard