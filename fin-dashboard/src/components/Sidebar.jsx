function Sidebar(){//first letter caps , react assumes that small letters are html tags
    const navItems=['Overview', 'Watchlist','Markets','News','Portfolio', ]
    return(//returns jsx (without return ntg is displayed)
        <aside className="w-56 bg-neutral-900 border-r border-neutral-800 p-4 flex flex-col gap-1">
            <div className="text-xl font-bold mb-6 px-2">FinDash</div>
            {navItems.map((item) => (//updates the array, curly braces as we r telling that its the start og js
                <button
                key={item}//react requires each element to have a key
                    className="text-left px-3 py-2 rounded-lg hover:bg-neutral-800 text-sm text-neutral-300"
                >
                {item} 
            </button>
        ))}
        </aside>

    )
}

export default Sidebar

//{item} Inserts the current array value into the JSX