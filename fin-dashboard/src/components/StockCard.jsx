import { LineChart, Line, ResponsiveContainer } from 'recharts'

function StockCard({ stock, onBump }) {
  const isUp = stock.change >= 0
  const chartData = stock.history.map((price, i) => ({ i, price }))

  return (
    <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 flex flex-col gap-1">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold">{stock.ticker}</div>
          <div className="text-xs text-neutral-500">{stock.name}</div>
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            isUp ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}
        >
          {isUp ? '+' : ''}{stock.change.toFixed(2)}%
        </span>
      </div>

      <div className="text-2xl font-bold mt-2">
        ${stock.price.toFixed(2)}
      </div>

      <div className="h-16 -mx-2">
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

      <button
        onClick={() => onBump(stock.id)}
        className="text-xs text-neutral-500 hover:text-neutral-300 mt-1"
      >
        +$1 (test)
      </button>
    </div>
  )
}

export default StockCard