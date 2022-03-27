import { useDispatch } from "react-redux"
//actions creator
import { setPage } from '../actions'

export const PageButton = ({ pageNumber, currentPage}) => {
    const dispatch = useDispatch()
    return (
        <li
			className={
                `flex justify-center items-center border  cursor-pointer border-green-600 h-8 w-8 rounded-md
                ${pageNumber === currentPage && "bg-emerald-600 text-emerald-50"}`
            }
			onClick={() => dispatch(setPage(pageNumber))}
		>
			{ pageNumber }
		</li>
    )
}
