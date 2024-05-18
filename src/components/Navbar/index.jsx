import Link from "next/link"
import Navcomp from "./navcomp"
import InputSearch from "./inputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-2 gap-2">
                <Link href="/" className="font-bold text-2xl text-color-dark">Movies Space</Link>
                <Navcomp />
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar