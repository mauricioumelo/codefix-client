export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black"></div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text7xl">
            The Witcher
          </h1>
          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black hover:shadow-md">
          Watch Now
        </button>
        <button className="bg-white text-black py-2 px-4 rounded-md">
          More Info
        </button>
      </main>
    </div>
  );
}
