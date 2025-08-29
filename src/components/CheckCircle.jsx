// components/CheckCircle.jsx
export default function CheckCircle() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="url(#gradient)"
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0BBF6A" />
                    <stop offset="100%" stopColor="#0CABC8" />
                </linearGradient>
            </defs>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 
               1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z" />
        </svg>
    );
}
