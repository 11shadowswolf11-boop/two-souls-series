import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void:   "#04060E",
        abyss:  "#07090F",
        deep:   "#0C1020",
        pearl:  "#F0ECE6",
        mist:   "#B0A898",
        fog:    "#706860",
        amber: {
          DEFAULT: "#D4924C",
          warm:    "#D4924C",
          glow:    "#E8A855",
          light:   "#F5C878",
          pale:    "#FAE4B0",
        },
        ocean: {
          deep:  "#0A2A3A",
          mid:   "#0D3A52",
          shine: "#1E8CAA",
        },
        cyan:   "#28D8E8",
        purple: "#B450DC",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        mono:    ["var(--font-cinzel)", "Georgia", "serif"],
        body:    ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      animation: {
        "float":    "float 6s ease-in-out infinite",
        "shimmer":  "shimmer 2.5s ease-in-out infinite",
        "grain":    "grain 0.4s steps(2) infinite",
      },
      keyframes: {
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%,100%": { opacity: "0.3" }, "50%": { opacity: "1" } },
        grain:   { "0%": { transform: "translate(0,0)" }, "25%": { transform: "translate(-2%,-2%)" }, "75%": { transform: "translate(2%,1%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
