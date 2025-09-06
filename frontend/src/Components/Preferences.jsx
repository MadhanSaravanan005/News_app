import React, { useEffect, useState } from "react";
import { savePreferences, getPreferences } from "../api";

const Preferences = ({ userId }) => {
  const [categories, setCategories] = useState([]);
  const allCategories = ["Technology", "Sports", "Health", "Business", "Entertainment"];

  useEffect(() => {
    const fetchPreferences = async () => {
      const prefs = await getPreferences(userId);
      setCategories(prefs);
    };
    fetchPreferences();
  }, [userId]);

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSave = async () => {
    await savePreferences(userId, categories);
    alert("Preferences saved!");
  };

  return (
    <div>
      <h2>User Preferences</h2>
      {allCategories.map((cat) => (
        <label key={cat} style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={categories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
          {cat}
        </label>
      ))}
      <br />
      <button onClick={handleSave}>Save Preferences</button>
    </div>
  );
};

export default Preferences;
