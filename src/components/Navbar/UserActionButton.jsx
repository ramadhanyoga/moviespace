import Link from "next/link"
import {authUserSession} from "@/libs/auth.libs"

const UserActionButton = async () => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign out" : "Sign in"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
            {
                user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 inline-block rounded-lg">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton