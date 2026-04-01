import { useEffect, useState } from "react";

interface Stats {
    total_questions: number;
    questions_today: number;
    top_keywords: { word: string; count: number }[];
}

export default function ChatStats() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/stats")
            .then((res) => res.json())
            .then((data) => setStats(data))
            .catch(() => setError(true));
    }, []);

    if (error) return <p>Could not load stats.</p>;
    if (!stats) return <p>Loading stats...</p>;

    return (
        <div className="chat-stats">
            <h2>Usage Statistics</h2>
            <ul className="chat-stats-list">
                <li><span>Total questions asked</span><strong>{stats.total_questions}</strong></li>
                <li><span>Questions today</span><strong>{stats.questions_today}</strong></li>
            </ul>
            {stats.top_keywords.length > 0 && (
                <>
                    <h3>Top keywords</h3>
                    <ul className="chat-stats-keywords">
                        {stats.top_keywords.map((k) => (
                            <li key={k.word}>
                                <span>{k.word}</span>
                                <strong>{k.count}</strong>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
