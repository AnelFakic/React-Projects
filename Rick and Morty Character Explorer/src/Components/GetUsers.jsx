import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CHARACTERS } from "../GraphQL/Queries";
import DisplayCharacters from "./DisplayCharacters";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

export function GetUsers({ onLoadingChange }) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const { error, loading, data, refetch } = useQuery(LOAD_CHARACTERS, {
    variables: { page, filter: { status: statusFilter } },
  });

  useEffect(() => {
    refetch({ page, filter: { status: statusFilter } });
  }, [page, statusFilter, refetch]);

  useEffect(() => {
    onLoadingChange(loading);
  }, [loading, onLoadingChange]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
    setPage(1);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = data?.characters?.info?.pages || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-2">
          <Form.Group>
            <Form.Label>{t("filters.status")}</Form.Label>
            <Form.Control as="select" value={statusFilter} onChange={handleStatusChange}>
              <option value="">{t("filters.all")}</option>
              <option value="Alive">{t("filters.alive")}</option>
              <option value="Dead">{t("filters.dead")}</option>
              <option value="unknown">{t("filters.unknown")}</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col-md-2">
          <Form.Group>
            <Form.Label>{t("filters.species")}</Form.Label>
            <Form.Control as="select" value={speciesFilter} onChange={handleSpeciesChange}>
              <option value="">{t("filters.all")}</option>
              <option value="Human">{t("filters.human")}</option>
              <option value="Alien">{t("filters.alien")}</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col-md-2">
          <Form.Group>
            <Form.Label>{t("filters.sortBy")}</Form.Label>
            <Form.Control as="select" value={sortBy} onChange={handleSortChange}>
              <option value="name">{t("filters.name")}</option>
              <option value="origin">{t("filters.origin")}</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>

      <DisplayCharacters
        characters={
          data?.characters?.results.filter((character) => !speciesFilter || character.species === speciesFilter) || []
        }
        sortBy={sortBy}
      />

      <div className="pagination-container">
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} disabled={page === 1} />
          <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
          {page > 2 && <Pagination.Ellipsis />}
          {Array.from({ length: Math.min(4, totalPages - page + 1) }, (_, i) => page + i).map((p) => (
            <Pagination.Item key={p} active={p === page} onClick={() => handlePageChange(p)}>
              {p}
            </Pagination.Item>
          ))}
          {page + 3 < totalPages && <Pagination.Ellipsis />}
          {page < totalPages && (
            <Pagination.Item onClick={() => handlePageChange(totalPages)}>{totalPages}</Pagination.Item>
          )}
          <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={page === totalPages} />
        </Pagination>
      </div>
    </div>
  );
}

export default GetUsers;
