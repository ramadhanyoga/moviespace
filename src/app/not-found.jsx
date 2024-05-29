"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const PageNotFound = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
            <FileSearch size={32} className="text-color-accent"/>
            <h1 className="text-2xl text-color-accent font-bold">404 Not-Found</h1>
            <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent transition-all underline ">Kembali</button>
            </div>
        </div>
    )
}

export default PageNotFound