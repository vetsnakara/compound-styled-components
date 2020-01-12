import React from "react";
import { Card } from "./components";
import movies from "./data";
import "./App.scss";

function App() {
  return (
    <main>
      {movies.map(movie => (
        <Card key={movie.id} className="mr">
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Button className="111">{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default App;
