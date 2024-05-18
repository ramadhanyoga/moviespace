import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-semibold text-color-primary hover:text-color-accent">{title}</h1>
            {
                linkHref && linkTitle ?
                <Link href={linkHref} className="md:text-base text-md underline text-color-primary hover:text-color-accent transition-all">{linkTitle}</Link>
                : null
            }
        </div>
    )
}

export default Header