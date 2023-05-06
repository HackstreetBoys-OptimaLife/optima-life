export default function Answer(){
    return<>
    
      <div className="flex items-center justify-start flex-row-reverse">
                    <img className="flex items-center justify-center h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"  />
                  <div
                      className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
         <div className="flex space-x-5">
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-10 px-24 border-b-4 border-green-700 hover:border-green-500 rounded-full">
                    Sure Why not
                </button>
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-10 px-24 border-b-4 border-red-700 hover:border-red-500 rounded-full">
                    I&apos;ll Pass
                </button>
                </div>
                    </div>
                  </div>
        </>
}

