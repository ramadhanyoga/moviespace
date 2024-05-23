import Header from "@/components/AnimeList/header"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=10")
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
    recommendedAnime = reproduce(recommendedAnime, 5)

  return (
    <>
    {/* Anime Terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua"  linkHref="/populer"/>
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page