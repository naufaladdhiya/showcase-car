import Image from "next/image";

import { Hero, CustomFilter, SearchBar, CardCars } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-14 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Cars Catalogue</h1>
          <p>Explore Cars</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CardCars car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h1 className="text-3xl font-bold">Opps no result</h1>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
