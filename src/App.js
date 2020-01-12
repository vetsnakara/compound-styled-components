import React from "react";
import { Card } from "./components";
import movies from "./data";
import "./App.scss";

function App() {
  return (
    <main>
      {movies.map(movie => (
        <Card key={movie.id} className="mr">
          {movie.title}
        </Card>
      ))}
    </main>
  );
}

export default App;
