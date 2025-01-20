import "./authors.css";
import { authors } from "../../data/authors";
import { useState } from "react";
export default function Authors() {
  const [search, setSearch] = useState("");
  let filterAuthors = authors
    .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))
    .map((author, index) => (
      <div className="author" key={index}>
        <img src={author.image} alt={author.name} />
        <h2>{author.name}</h2>
      </div>
    ));

  return (
    <section className="authors">
      <div className="search">
        <input
          type="search"
          placeholder="Search in authors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="authors-wrapper">
        {filterAuthors.length === 0 ? (
          <div>The autor you are looking for is not available.</div>
        ) : (
          filterAuthors
        )}
      </div>
    </section>
  );
}
