import React, { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";


export default function ApiNavbar() {
    const [chapter, setChapter] = useState(null);
    const [selectedVerse, setSelectedVerse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showVerse, setShowVerse] = useState(true);

    useEffect(() => {
        let mounted = true;
        async function fetchChapter() {
            try {
                setLoading(true);
                const res = await fetch("https://bible-api.com/data/web/JHN/3");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                if (!mounted) return;
                setChapter(data);
                // default to verse 16 if present, otherwise first verse
                const defaultVerse =
                    (data.verses && data.verses.find((v) => v.verse === 16)) ||
                    (data.verses && data.verses[0]);
                setSelectedVerse(defaultVerse || null);
            } catch (err) {
                if (!mounted) return;
                setError(err.message || "Failed to fetch");
            } finally {
                if (mounted) setLoading(false);
            }
        }
        fetchChapter();
        return () => {
            mounted = false;
        };
    }, []);

    // toggle verse visibility every 5 seconds (appear / disappear)
    useEffect(() => {
        if (!selectedVerse) return;
        const id = setInterval(() => setShowVerse((s) => !s), 5000);
        return () => clearInterval(id);
    }, [selectedVerse]);

    if (loading) {
        return (
            <nav style={styles.nav}>
                <div style={styles.left}>Loading chapter...</div>
            </nav>
        );
    }

    if (error) {
        return (
            <nav style={styles.nav}>
                <div style={styles.left}>Error: {error}</div>
            </nav>
        );
    }

    if (!chapter) {
        return (
            <nav style={styles.nav}>
                <div style={styles.left}>No chapter data</div>
            </nav>
        );
    }

    // compute a safe title to avoid "undefined undefined"
    const bookName = chapter?.book_name ?? chapter?.book ?? "";
    const chapterNum = chapter?.chapter ?? "";
    const title =
        (chapter?.reference ? chapter.reference : `${bookName} ${chapterNum}`).trim() || "";

    return (
        <nav style={styles.nav}>
            <div style={styles.left}>
                {title ? <strong>{title}</strong> : null}
            </div>

            <div style={styles.right}>
                <AnimatePresence mode="wait">
                    {selectedVerse && showVerse ? (
                        <Motion.div
                            key={selectedVerse.verse}
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.6 }}
                            style={{ display: "inline-block", maxWidth: "100%" }}
                        >
                            <span style={styles.verseText}>
                                {selectedVerse.text.trim()}
                                <sup style={styles.sup}>{selectedVerse.verse}</sup>
                            </span>
                        </Motion.div>
                    ) : (
                        // keep a small placeholder so layout doesn't jump too much
                        <Motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.0 }}
                            exit={{ opacity: 0 }}
                            style={{ minHeight: 20 }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 16px",
       
        color: "white",
        fontFamily: "system-ui, Arial, sans-serif",
    },
    left: { minWidth: 180 },
    right: { flex: 1, textAlign: "right", maxWidth: "60%" },
    verseText: { fontSize: 14, lineHeight: 1.2 },
    sup: { marginLeft: 6, fontSize: 11, verticalAlign: "super", opacity: 0.85 },
};