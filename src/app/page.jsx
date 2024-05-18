import Header from "@/components/AnimeList/header"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse } from "../libs/api-libs"

const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=10")

  return (
    <>
    {/* Anime Terpopuler */}
      <div>
        <Header title="Paling Populer" linkTitle="Lihat Semua"  linkHref="/populer"/>
        <AnimeList api={topAnime} />
      </div>
    </>
  )
}

export default Page