import React, { useEffect, useState } from "react";

export default function VerseOfDay() {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_VERSE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!apiUrl) {
      setError("VITE_VERSE_API is not set in your .env");
      return;
    }
    let cancelled = false;

    fetch(apiUrl, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
    })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setVerse(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [apiUrl, apiKey]);

  if (error) return <div className="text-red-400">Error: {error}</div>;
  if (!verse) return <div>Loading verse...</div>;

  const text = verse.text || verse.verse || verse.content || JSON.stringify(verse);
  const title = verse.title || verse.reference || "Verse of the Day";

  return (
    <div className="verse text-sm text-gray-200">
      <h4 className="font-semibold">{title}</h4>
      <p>{text}</p>
    </div>
  );
}
