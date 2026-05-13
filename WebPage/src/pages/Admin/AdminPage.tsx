import { useRef, useState } from "react";
import PageLayoutDocs from "../../components/layout/PageLayout/PageLayoutDocs";
import Header from "../../components/layout/Header/Header";
import { TopNav } from "../../components/layout/TopNav/TopNav";
import Footer from "../../components/layout/Footer/Footer";
import logoSrc from "../../assets/logo.png";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export interface AdminPageProps {
    theme: "light" | "dark";
    onToggleTheme: () => void;
}

export default function AdminPage({ theme, onToggleTheme }: AdminPageProps) {
    const [password, setPassword] = useState("");
    const [authed, setAuthed] = useState(false);
    const [authError, setAuthError] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!password.trim()) return;
        setAuthed(true);
        setAuthError("");
    };

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;
        setUploading(true);
        setStatus(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const endpoint = API_URL ? `${API_URL}/api/admin/upload` : "/api/admin/upload";
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "X-Admin-Password": password },
                body: formData,
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 401) {
                    setAuthed(false);
                    setAuthError("Wrong password.");
                    return;
                }
                setStatus({ kind: "error", message: data.detail ?? "Upload failed." });
            } else {
                setStatus({ kind: "success", message: `"${data.filename}" uploaded and indexed (${data.chunks} chunks).` });
                setFile(null);
                if (inputRef.current) inputRef.current.value = "";
            }
        } catch {
            setStatus({ kind: "error", message: "Could not reach the server." });
        } finally {
            setUploading(false);
        }
    };

    return (
        <PageLayoutDocs
            header={
                <Header
                    logo={{ src: logoSrc, alt: "askKTU logo" }}
                    theme={theme}
                    onToggleTheme={onToggleTheme}
                />
            }
            topNav={<TopNav />}
            rightMain={
                <section className="document-container">
                    <h1>Admin — Upload Document</h1>

                    {!authed ? (
                        <form className="stack" onSubmit={handleLogin} style={{ maxWidth: 360 }}>
                            <p>Enter the admin password to continue.</p>
                            <input
                                className="input"
                                type="password"
                                placeholder="Admin password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {authError && <p className="form-error-text">{authError}</p>}
                            <button type="submit" className="btn btn--primary">Continue</button>
                        </form>
                    ) : (
                        <form className="stack" onSubmit={handleUpload} style={{ maxWidth: 480 }}>
                            <p>Upload a PDF to add it to the chatbot's knowledge base. It will be indexed automatically.</p>
                            <input
                                ref={inputRef}
                                className="input"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                                required
                            />
                            {status && (
                                <p className={status.kind === "success" ? "form-success-text" : "form-error-text"}>
                                    {status.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="btn btn--primary"
                                disabled={!file || uploading}
                            >
                                {uploading ? "Uploading..." : "Upload & Index"}
                            </button>
                        </form>
                    )}
                </section>
            }
            footer={<Footer />}
        />
    );
}
