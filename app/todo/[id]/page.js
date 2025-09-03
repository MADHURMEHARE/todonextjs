"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export default function TodoDetails() {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const time = searchParams.get("time");

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo ID</h1>
            <p><b>ID:</b> {id}</p>
            <button
                onClick={() => router.push("/")}
                style={{
                    marginTop: "20px",
                    padding: "8px 16px",
                    border: "1px solid black",
                    borderRadius: "4px",
                    background: "#d81313ff",
                    cursor: "pointer",
                }}
            >
                Back to home
            </button>
        </div>
    );
}
