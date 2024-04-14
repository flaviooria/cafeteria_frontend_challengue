import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        background_first: "#004643",
        title_first: "#fffffe",
        text_first: "#abd1c6",
        button_background_first: "#f9bc60",
        button_text_first: " #001e1d",
        card_background_first: "#e8e4e6",
        cart_title_first: "#001e1d",
        cart_text_first: "#0f3433",
        background_second: "#abd1c6",
        title_second: "#001e1d",
        text_second: "#0f3433",
        button_background_second: "#f9bc60",
        button_text_second: " #001e1d",
        card_background_second: "#004643",
        cart_title_second: "#fffffe",
        cart_text_second: "#e8e4e6",
        text_links: "#f9bc60",
      },
      fontFamily: {
        title: ["var(--title)"],
        subtitle: ["var(--subtitle)"],
        paragraph: ["var(--text)"],
      },
    },
  },
  plugins: [],
};
