// libraries and hooks
import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/outline'
//actions creator
import { setPage } from '../actions'
//components
import { PageButton } from "./PageButton";

const AMOUNT_OF_BUTTONS = 4;

export const Pagination = ({totalPages}) => {
    const currentPage = useSelector(state => state.page)
    const dispatch = useDispatch()

	let allPages = [];

	for (let i = 1; i <= (totalPages || AMOUNT_OF_BUTTONS); i++) {
		allPages.push(i);
	}

	const [lowerLimit, setLowerLimit] = useState(
		currentPage > allPages.length - AMOUNT_OF_BUTTONS
			? allPages.length - AMOUNT_OF_BUTTONS
			: currentPage -1
	)

	const [upperLimit, setUpperLimit] = useState(lowerLimit + AMOUNT_OF_BUTTONS)
	const currentPages = allPages.slice(lowerLimit, upperLimit)

	const goToPreviousPage = () => {
        dispatch(setPage(currentPage - 1))

        if(currentPage < lowerLimit) {
            setLowerLimit((currentLowerLimit) => {
                return currentLowerLimit - AMOUNT_OF_BUTTONS < 0
                ? 0 : currentLowerLimit - AMOUNT_OF_BUTTONS
            })
            setUpperLimit((currentUpperLimit) => {
                return currentUpperLimit - AMOUNT_OF_BUTTONS < AMOUNT_OF_BUTTONS
                ? AMOUNT_OF_BUTTONS
                : currentUpperLimit - AMOUNT_OF_BUTTONS
            })
        }
	}

	const goToNextPage = () => {
        dispatch(setPage(currentPage + 1))

        if (currentPage >= upperLimit) {
            //if true, the current pages should be updated.
            setLowerLimit((currentLowerLimit) => currentLowerLimit + AMOUNT_OF_BUTTONS)
            setUpperLimit((currentUpperLimit) => {
                let newUpperLimit = currentUpperLimit + AMOUNT_OF_BUTTONS
                if (newUpperLimit >= allPages.length) {
                    setLowerLimit(newUpperLimit - AMOUNT_OF_BUTTONS)
                }
                return newUpperLimit
            })
        }
	}

	return (
		<section className="mt-8 w-full max-w-xs flex justify-between">
			<button
				onClick={goToPreviousPage}
				className="p-2 h-12 w-14 bg-emerald-600 text-emerald-50 border rounded-2xl"
				disabled={currentPage === allPages[0]}
			>
				<ChevronDoubleLeftIcon className="w-full h-full"/>
			</button>
			<ul className="flex justify-between items-center w-full mx-1">
				{
                    currentPages.map(pageNumber => (<PageButton key={pageNumber} pageNumber={pageNumber} currentPage={currentPage}/>))
                }
			</ul>
			<button
				onClick={goToNextPage}
				className="p-2 h-12 w-14 bg-emerald-600 text-emerald-50 border rounded-2xl"
				disabled={currentPage === allPages.length }
			>
				<ChevronDoubleRightIcon className="w-full h-full"/>
			</button>
		</section>
	)
}