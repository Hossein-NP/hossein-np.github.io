/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      // colors
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      // shadow
      boxShadow: {
        light: "0px 1px 10px rgba(0,0,0,0.05)",
      },
      // borderradius
      borderRadius: {
        "4xl": "2rem",
      },
      // fontFamily
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        " MorabbaLight": "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
    },
  },
  plugins: [],
};
