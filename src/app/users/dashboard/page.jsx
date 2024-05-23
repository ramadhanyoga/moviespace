import {authUserSession} from "@/libs/auth.libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()

    return (
        <div className="text-color-primary mt-10 gap-4 flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250}/>
            <dix className=" flex flex-wrap gap-2 mt-3">
                <Link href="/users/dashboard/collection" className="py-3 px-3 font-semibold bg-color-accent text-color-dark rounded-lg">My Colection</Link>
                <Link href="/users/dashboard/commentar" className="py-3 px-3 font-semibold bg-color-accent text-color-dark rounded-lg">My Commentar</Link>
            </dix>
        </div>
    )
}

export default Page