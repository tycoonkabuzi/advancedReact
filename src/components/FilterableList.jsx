import { useMemo, useState } from "react";

const FilterableList = () => {
  const [filter, setFilter] = useState("");
  console.log(filter);
  const [favorites, setFavorites] = useState([]);
  const [items] = useState(["Apple", "Banana", "Mango", "Orange", "Blueberry"]);

  const [clicked, setClicked] = useState(false);
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const addToFavorite = (item) => {
    setFavorites((prev) =>
      prev.includes(item) ? prev.filter((fav) => fav !== item) : [...prev, item]
    );
    setClicked(!clicked);
  };

  return (
    <>
      <h2>FilterableList</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter the list"
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => addToFavorite(item)}>
              {!favorites.includes(item)
                ? "Add to favorite"
                : "Remove to favorite"}
            </button>
          </li>
        ))}
      </ul>

      <ul>
        <h2>Favorites</h2>
        {favorites.length > 0
          ? favorites.map((favorite) => <p>{favorite}</p>)
          : "You don't have any favorite"}
      </ul>
    </>
  );
};

export default FilterableList;
