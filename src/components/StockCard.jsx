function StockCard ({stock}){
    const isUp=stock.change>=0
    return(
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
                >{isUp ? '+' : ''}{stock.change}%</span>
            </div>
                <div className="text-2xl font-bold mt-2">
            ${stock.price.toFixed(2)}
        </div>
        
        </div>
    )
}

export default StockCard