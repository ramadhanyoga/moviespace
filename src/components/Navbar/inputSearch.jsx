"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    /* Untuk hendle inputan button*/
    const heandleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword) return;
        /*validasi untuk tombol enter*/
        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input placeholder="cari anime..." className="p-1 pl-4 w-full rounded-lg" ref={searchRef} onKeyDown={heandleSearch}/>
            <button className="absolute top-1 end-1" onClick={heandleSearch}>
                <MagnifyingGlass size={27} />
            </button>
        </div>
    )
}

export default InputSearch