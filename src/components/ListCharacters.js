export const ListCharacters = ({children}) => {
    return (
        <section className="grid sm:grid-cols-2 gap-2 mt-6 md:grid-cols-3 xl:grid-cols-5 xl:gap-4 ">
            { children}
        </section>
    )
}
