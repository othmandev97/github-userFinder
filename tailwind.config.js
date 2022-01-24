module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "cyberpunk", // first one will be the default theme
      // "dark",
      // "forest",
      // "synthwave",
    ],
  },
};
