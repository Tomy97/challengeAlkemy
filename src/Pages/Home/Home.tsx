import { Suspense, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useHeroesSearch } from "../../hooks/useHeroSearch";
import { HeroList } from "../../components/HeroList";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { heroes } = useHeroesSearch(searchTerm);

  return (
    <>
      <div className="flex flex-column align-items-center w-full p-3">
        <h3 className="mb-3">
          Vas a poder seleccionar 3 heroes buenos y 3 anti heroes, y no se
          pueden repetir. Para poder visualizar tus heroes seleccionados tenes
          que ir a 'Mis Equipo'
        </h3>
        <div className="p-inputgroup flex-1">
          <InputText
            placeholder="Buscar héroe"
            value={searchTerm}
            onChange={({ target: { value } }) => setSearchTerm(value)}
          />
          <Button
            icon="pi pi-search"
            className="p-button"
            disabled={searchTerm.length < 3}
          />
        </div>
        <Suspense fallback={<p>Cargando héroes...</p>}>
          {heroes.length ? <HeroList heroes={heroes} /> : null}
        </Suspense>
      </div>
    </>
  );
};
