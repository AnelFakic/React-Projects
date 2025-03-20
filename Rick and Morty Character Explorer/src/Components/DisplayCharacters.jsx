import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

function DisplayCharacters({ characters = [], sortBy }) {
  const { t } = useTranslation();

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "origin") {
      return a.origin.name.localeCompare(b.origin.name);
    }
    return 0;
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{t("characters.title")}</h1>
      {sortedCharacters.length > 0 ? (
        <div className="row">
          {sortedCharacters.map((character, index) => {
            const statusVariant =
              character.status === "Alive"
                ? "success"
                : character.status === "Dead"
                ? "danger"
                : "secondary";

            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                      <strong>{t("characters.gender")}:</strong> {character.gender} <br />
                      <strong>{t("characters.species")}:</strong> {character.species} <br />
                      <strong>{t("characters.status")}:</strong> {character.status} <br />
                      <strong>{t("characters.origin")}:</strong> {character.origin.name}
                    </Card.Text>
                    <Button variant={statusVariant}>{character.status}</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center">{t("characters.noCharacters")}</p>
      )}
    </div>
  );
}

export default DisplayCharacters;
