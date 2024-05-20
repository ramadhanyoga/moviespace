import VideoPlayer from "@/components/utilities/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: {id}} ) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
        </div>
        <div className="pt-6 px-4 flex sm:flex-nowrap flex-wrap gap-6 text-color-primary">
            <Image 
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"
            />
            <div className="pt-4 px-1 flex-col sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <div className="flex gap-3 overflow-x-auto">
                    <div className="w-32 flex flex-col justify-center items-center rounded border bg-color-dark">
                        <h3>PERINGKAT</h3>
                        <p>{anime.data.rank}</p>
                    </div>
                    <div className="w-32 flex flex-col justify-center items-center rounded border bg-color-dark">
                        <h3>SKOR</h3>
                        <p>{anime.data.score}</p>
                    </div>
                    <div className="w-32 flex flex-col justify-center items-center rounded border bg-color-dark">
                        <h3>EPISODE</h3>
                        <p>{anime.data.episodes}</p>
                    </div>
                </div>
                <p className="pt-3 text-justify text-xl">{anime.data.synopsis}</p>
            </div>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default Page