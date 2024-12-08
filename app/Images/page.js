const url = "https://any-anime.p.rapidapi.com/v1/anime/png/10";
const key = "88f62bc687msh289fc8ba43cbba8p18b56fjsn8d2ad75f1744";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": key,
    "x-rapidapi-host": "any-anime.p.rapidapi.com",
  },
};

const fetchImages = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};
const ImagePage = async () => {
  const data = await fetchImages();
  const ANIMEIMAGE = await data.images;
  return (
    <div>
      <h2>Random Image</h2>
      <div className="carousel w-auto h-72 object-contain rounded-3xl my-6 md:h-[35rem]">
        {ANIMEIMAGE.map((img, img_no) => {
          return (
            <div
              id={`slide${img_no}`}
              className="carousel-item relative w-full"
              key={img}
            >
              <img src={img} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={` #slide${
                    img_no === 0 ? ANIMEIMAGE.length - 1 : img_no - 1
                  }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={` #slide${
                    img_no === ANIMEIMAGE.length - 1 ? 0 : img_no + 1
                  }`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePage;
