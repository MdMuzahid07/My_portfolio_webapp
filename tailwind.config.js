module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#176F6B",
          "secondary": "#FFC000",
          "accent": "#4B4B4B",
          "neutral": "#FFFFFF",
          "base-100": "#FFFFFF",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
      {
        dark: {
          "primary": "#D9F99D",
          "secondary": "#FDE68A",
          "accent": "#fff",
          "neutral": "#FFFFFF",
          "base-100": "#000521",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#F59E0B",
          "error": "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
