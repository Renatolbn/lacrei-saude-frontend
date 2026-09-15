"use client";
import React from "react";
import { useState } from "react";
import ProfessionalCard from "./components/ProfessionalCard";
import { professionals } from "./data/professionals";

export default function Home() {
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState({
    specialty: "",
    location: "",
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch({
      specialty,
      location,
    });
  };

  const filteredProfessionals = professionals.filter((professional) => {
    return (
      professional.specialty.toLowerCase().includes(search.specialty.toLowerCase()) &&
      professional.location.toLowerCase().includes(search.location.toLowerCase())
    );
  });

  return (
    <main>
      <h1>Encontre um profissional</h1>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="search-form"
          placeholder="Especialidade"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-form"
          placeholder="Localização"
          required
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
      {filteredProfessionals.length === 0 && (
        <p>Nenhum profissional encontrado.</p>
      )}

      <div>
        {filteredProfessionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            name={professional.name}
            specialty={professional.specialty}
            location={professional.location}
            online={professional.online}
            image={professional.image}
          />
        ))}
      </div>
    </main>
  );
}
