import { useSelector, useDispatch } from "react-redux"

export const Form = () => {
    const loading = useSelector(state => state.loading)
    return (

            <form className="flex flex-col gap-y-2 py-4 sm:flex-row sm: gap-x-3" >
                <input
                    className="w-full sm:w-72 px-2 border-2 rounded-full h-11"
                    type="text"
                    placeholder="Ingresa un nombre"
                />
                <input
                    className="w-full sm:w-56 h-11 border cursor-pointer rounded-full text-green-100 bg-green-500"
                    type="submit"
                    value={ loading ? "loading.." : "Search"}
                />
            </form>

    )
}
