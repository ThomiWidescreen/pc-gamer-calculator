export default function NavBar() {
  return (
    <header className="bg-red-500 py-5 mb-5">
      <section className="w-3/4 md:w-2/3 mx-auto flex justify-center">
        <img
          src="/pcgamer.png"
          alt="PC Gamer"
          className="h-44 hover:rotate-3 hover:scale-110 transition"
        />
        <div className="text-white my-auto">
          <h1 className="text-4xl lg:text-6xl bebas whitespace-nowrap">
            Calculadora de PC Gamer
          </h1>
          <p className="text-xl lg:text-2xl ebgaramond whitespace-nowrap">
            ¿Cuantas PC's Gamer vale tu novia?
          </p>
        </div>
      </section>
    </header>
  );
}
