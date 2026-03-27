import { useEffect, useState } from "react";

interface DocumentItem {
    name: string;
    size: string;
}

export default function DocumentList() {
    const [documents, setDocuments] = useState<DocumentItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/documents")
            .then((res) => res.json())
            .then((data) => {
                setDocuments(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className="document-list">
            <h2>Documents</h2>

            {loading && <p>Loading...</p>}
            {error && <p>Could not load documents.</p>}

            <ul>
                {documents.map((doc, index) => (
                    <li key={index} className="document-item">
                        <div>
                            <strong>{doc.name}</strong>
                            <p>PDF Document</p>
                        </div>
                        <span className="document-size">{doc.size}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
