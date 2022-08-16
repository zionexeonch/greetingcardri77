/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope"],
                notoserifjp: ["Noto+Serif+JP"],
                poppins: ["Poppins"],
            },
            backgroundImage: {
                "id-background": "url('/img/flag.png')",
            },
        },
    },
    plugins: [],
}
