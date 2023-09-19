import Image from "next/image";

import { Hero, CustomFilter, SearchBar } from "@/components";

export default function Home() {
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
      </div>
    </main>
  );
}
