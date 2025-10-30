import React, { useEffect, useState } from "react";
import { fetchVerseOfTheDay } from "./bibleApi";

export default function VerseOfTheDay({ className = "", showSourceLink = true }) {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const v = await fetchVerseOfTheDay();
      setVerse(v);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className={`rounded-xl p-4 bg-white/10 backdrop-blur-sm border border-gray-700 text-white ${className}`}>
      <h3 className="text-lg font-semibold mb-2">Verse of the Day</h3>

      {loading && <p className="text-sm text-gray-300">Loading...</p>}

      {error && (
        <div className="text-sm text-rose-300">
          <p>Unable to load verse: {error}</p>
          <button
            onClick={load}
            className="mt-2 inline-block px-3 py-1 bg-blue-600 rounded text-white text-sm"
          >
            Retry
          </button>
        </div>
      )}

      {verse && !loading && (
        <div>
          <p className="text-sm sm:text-base leading-relaxed mb-2">"{verse.text}"</p>
          <p className="text-xs text-gray-300 font-medium">{verse.reference}</p>
          {showSourceLink && verse.verseUrl && (
            <p className="mt-3">
              <a
                href={verse.verseUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-300 underline"
              >
                Read on OurManna
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
