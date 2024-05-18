import { getAnimeResponse } from "@/libs/api-libs"

const Page = async ({ params: {id}} ) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-color-primary text-2xl">{anime.data.title}</h3>
        </div>
        </>
    )
}

export default Page