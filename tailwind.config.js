module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "accept": "url('../public/img/accept.png')",
                "deny": "url('../public/img/deny.png')"
            }

        },
    },
    plugins: [],
}