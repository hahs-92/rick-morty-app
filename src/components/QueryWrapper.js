import { useDispatch, useSelector } from "react-redux"
//actions creator
import { setQuery } from '../actions'


export const QueryWrapper = () => {
    const dispatch = useDispatch()
    const { key, value } = useSelector(state => state.query)

    return (
        <section
        className="flex flex-wrap items-center justify-center w-full gap-5 md:justify-between lg:justify-start"
        >
            <div
                className="relative mt-4 mb-1  w-full h-20 border border-dotted max-w-xs shadow-lg"
            >
                <h3 className="absolute -top-6 text-xl">Status</h3>
                <div className="flex justify-between items-center px-2 h-full sm:max-w-xs">
                    <input
                        className={
                            `h-9 w-20 border border-green-800 rounded-md cursor-pointer hover:bg-green-800
                            ${value === "alive" && "bg-green-500"}`
                        }
                        type="button"
                        value="Alive"
                        onClick={() => dispatch(setQuery({key: "status",value: "alive" }))}
                    />
                    <input
                        className={
                            `h-9 w-20 border border-red-500 rounded-md cursor-pointer hover:bg-red-500
                            ${value === "dead" && "bg-red-500"}`
                        }
                        type="button"
                        value="Dead"
                        onClick={() => dispatch(setQuery({key: "status",value: "dead" }))}
                    />
                    <input
                        className={
                            `h-9 w-20 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-500
                            ${ (key=== "status" && value === "unknown" )&& "bg-gray-500"}`
                        }
                        type="button"
                        value="Unknown"
                        onClick={() => dispatch(setQuery({key: "status",value: "unknown" }))}
                    />
                </div>
            </div>

            <div className="relative mt-4 w-full h-20 border border-dotted max-w-xs shadow-lg">
                <h3 className="absolute -top-6 text-xl">Gender</h3>
                <div className="flex justify-between items-center px-2 h-full ">
                    <input
                        className={
                            `h-9 w-20 border border-blue-500 rounded-md cursor-pointer hover:bg-blue-500
                             ${value === "male" && "bg-blue-500"}`
                        }
                        type="button"
                        value="Male"
                        onClick={() => dispatch(setQuery({key: "gender",value: "male" }))}
                    />
                    <input
                        className={
                            `h-9 w-20 border border-purple-400 rounded-md cursor-pointer hover:bg-purple-400
                            ${value === "female" && "bg-purple-500"}`
                        }
                        type="button"
                        value="Female"
                        onClick={() => dispatch(setQuery({key: "gender",value: "female" }))}
                    />
                    <input
                        className={
                            `h-9 w-24 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-500
                            ${ (key=== "gender" && value === "unknown" )&& "bg-gray-500"}`
                        }
                        type="button"
                        value="Unknown"
                        onClick={() => dispatch(setQuery({key: "gender",value: "unknown" }))}
                    />
                </div>
            </div>
        </section>
    )
}
