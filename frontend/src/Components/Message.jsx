export default function Message(props){

    return <>
    <div className="flex flex-row items-center">
                  
    <img className="flex items-center justify-center h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"  />
                    <div
                      className="ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      <div className="" >{props.text}</div>
            </div>
    </div>
    </>
}
