import React from "react";

const Filter = ({
  titleFilter,
  ratingFilter,
  onTitleChange,
  onRatingChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "250px",
        }}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Note min (0-5)"
        value={ratingFilter || ""}
        onChange={(e) => onRatingChange(Number(e.target.value))}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "130px",
        }}
      />
    </div>
  );
};

export default Filter;
