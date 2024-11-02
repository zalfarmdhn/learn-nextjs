async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch albums");

  const albums = await response.json();

  return (
    <>
      <h1 className="text-2xl">Albums</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {albums.map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition-all">
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              {album.title}
            </h3>
            <p className="text-gray-600">Album ID : {album.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
