const Pagination = ({ page, lastPage, setPage }) => {
    
    const scrollTop = () => { //berfungsi untuk scrol ke atas
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:'smooth'
        })
    }

    const handleNextPage = () => {
        setPage((PrevState) => PrevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((PrevState) => PrevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            
            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination