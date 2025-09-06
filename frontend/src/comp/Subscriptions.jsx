import React, { useEffect, useState } from "react";
import { addSubscription, getSubscriptions } from "../api";

const Subscriptions = ({ userId }) => {
  const [keywords, setKeywords] = useState("");
  const [categories, setCategories] = useState("");
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchSubs = async () => {
      const res = await getSubscriptions(userId);
      setSubs(res);
    };
    fetchSubs();
  }, [userId]);

  const handleAdd = async () => {
    const newSub = await addSubscription(
      userId,
      keywords.split(",").map((k) => k.trim()),
      categories.split(",").map((c) => c.trim())
    );
    setSubs([...subs, newSub]);
    setKeywords("");
    setCategories("");
  };

  return (
    <div>
      <h2>Subscriptions</h2>
      <input
        type="text"
        placeholder="Keywords (comma separated)"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categories (comma separated)"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      />
      <button onClick={handleAdd}>Add Subscription</button>

      <ul>
        {subs.map((s) => (
          <li key={s._id}>
            <b>Keywords:</b> {s.keywords.join(", ")} | <b>Categories:</b>{" "}
            {s.categories.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscriptions;
