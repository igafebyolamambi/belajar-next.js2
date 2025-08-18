'use client'


export default function CreateForm(){

    
    return(
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className= "text-xl font-semibold mb-4 ">Create Note</h2>
             <form className="space-y-4" action={}>
                <div>
                    <label 
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                    type="text"
                    name="title"
                    value={payLoad.title}
                    onChange={(event)=>
                        setPayLoad({
                            ...payLoad, 
                            title: event.target.value
                        })
                    }
                    placeholder="Input title ..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                    />
                    {/*error && typeof error === 'object' && error.errors &&  (
                        <small className="text-red-500">{error.errors.title}</small>
                    )*/} 
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                        >
                            Description
                    </label>
                    <textarea
                        name="decription"
                        value={payLoad.description}
                        onChange={(event)=>
                             setPayLoad({
                            ...payLoad, 
                            description: event.target.value
                        })
                        }
                        placeholder="Input description ..."
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                        />
                         {/*error && typeof error === 'object' && error.errors &&  (
                        <small className="text-red-500">{error.errors.description}</small>
                    )*/}
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
                    disabled={isLoading}
                    >
                        Submit
                    </button>
             </form>
        </div>
    )
}