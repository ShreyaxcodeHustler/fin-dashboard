const createHistory = (startPrice, drift = 0) =>
  Array.from({ length: 8 }, (_, index) =>
    Number((startPrice + index * 0.9 + Math.sin(index / 2) * 1.2 + drift).toFixed(2))
  )

export const initialStocks = [
  { id: 1, ticker: 'AAPL', name: 'Apple Inc.', price: 213.45, change: 1.32, history: createHistory(213.45) },
  { id: 2, ticker: 'TSLA', name: 'Tesla Inc.', price: 245.10, change: -2.8, history: createHistory(245.1, -1.4) },
  { id: 3, ticker: 'NVDA', name: 'NVIDIA Corp.', price: 138.72, change: 4.15, history: createHistory(138.72, 0.6) },
]

//Real IDs matter here — this is the "proper unique key" I mentioned back in Phase 1. id won't change even if price does, so React can reliably track "this card is still NVDA" across re-renders.