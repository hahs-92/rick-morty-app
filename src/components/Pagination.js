// libraries and hooks
import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions creator
import { setPage } from '../actions'

const AMOUNT_OF_BUTTONS = 4;

export const Pagination = ({totalPages}) => {
    const currentPage = useSelector(state => state.page)
    const dispatch = useDispatch()

	let allPages = [];

	for (let i = 1; i <= (totalPages || AMOUNT_OF_BUTTONS); i++) {
		allPages.push(i);
	}

	// const [currentPage, setCurrentPage] = useState(page -1 || 0);
	const [lowerLimit, setLowerLimit] = useState(
		currentPage > allPages.length - AMOUNT_OF_BUTTONS
			? allPages.length - AMOUNT_OF_BUTTONS
			: currentPage -1
	) // if the current page is equal to the last page, then the lower limit should be (allPages.length - AMOUNT_OF_BUTTONS), so that 4 buttons always show up.

	const [upperLimit, setUpperLimit] = useState(lowerLimit + AMOUNT_OF_BUTTONS);
	const currentPages = allPages.slice(lowerLimit, upperLimit);

	const goToPreviousPage = () => {
        dispatch(setPage(currentPage - 1))

        if (currentPage < lowerLimit) {
            //if true, the current pages should be updated.
            setLowerLimit((currentLowerLimit) => {
                let newLowerLimit = currentLowerLimit - AMOUNT_OF_BUTTONS;
                if (newLowerLimit < 0) {
                    newLowerLimit = 0;
                }
                return newLowerLimit;
            });
            setUpperLimit((currentUpperLimit) => {
                let newUpperLimit = currentUpperLimit - AMOUNT_OF_BUTTONS;
                if (newUpperLimit < AMOUNT_OF_BUTTONS) {
                    newUpperLimit = AMOUNT_OF_BUTTONS;
                }
                return newUpperLimit;
            });
        }
	}

	const goToNextPage = () => {
        dispatch(setPage(currentPage + 1))

        if (currentPage >= upperLimit) {
            //if true, the current pages should be updated.
            setLowerLimit((currentLowerLimit) => currentLowerLimit + AMOUNT_OF_BUTTONS);
            setUpperLimit((currentUpperLimit) => {
                let newUpperLimit = currentUpperLimit + AMOUNT_OF_BUTTONS;
                if (newUpperLimit >= allPages.length) {
                    //if true, it means the upper limit has already reached the last page, therefore we need to set the upper limit to the last page and the lower limit to (last page - AMOUNT_OF_BUTTONS), this way 4 buttons always show up.
                    newUpperLimit = allPages.length;
                    setLowerLimit(newUpperLimit - AMOUNT_OF_BUTTONS);
                }
                return newUpperLimit;
            });
        }
	}

	const renderPaginationButtons = (pageNumber) => (
		<li
			key={pageNumber}
			className={ `flex justify-center items-center border  cursor-pointer border-green-600 h-8 w-8 rounded-md ${pageNumber === currentPage && "bg-emerald-600 text-emerald-50"}` }
			onClick={() => dispatch(setPage(pageNumber))}
		>
			{ pageNumber }
		</li>
	);

	return (
		<section className="mt-8 w-full max-w-xs flex justify-between">
			<button
				onClick={goToPreviousPage}
				className="p-2 h-12 bg-emerald-600 text-emerald-50 border rounded-2xl"
				disabled={currentPage === allPages[0]} //if the current page is the first page, then this button should be disabled.
			>
				Previous
			</button>
			<ul className="flex justify-between items-center w-full mx-1">
				{currentPages.map(renderPaginationButtons)}
			</ul>
			<button
				onClick={goToNextPage}
				className="p-2 h-12 w-28 bg-emerald-600 text-emerald-50 border rounded-2xl"
				disabled={currentPage === allPages.length } //if the current page is the last page, then this button should be disabled.
			>
				Next
			</button>
		</section>
	);
};