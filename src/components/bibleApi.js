// Simple wrapper to fetch Verse of the Day from OurManna API
// API: https://beta.ourmanna.com/api/v1/get/?format=json

export async function fetchVerseOfTheDay() {
  const url = "https://beta.ourmanna.com/api/v1/get/?format=json";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    // Defensive parsing
    // Expected shape: { verse: { details: { text, reference, verseurl } } }
    const details = data?.verse?.details || data?.verse;
    if (!details) {
      throw new Error("Unexpected API response");
    }
    return {
      text: details.text || details?.content || "",
      reference: details.reference || details?.verse || "",
      verseUrl: details.verseurl || details?.verseUrl || null,
      raw: data,
    };
  } catch (err) {
    throw err;
  }
}
