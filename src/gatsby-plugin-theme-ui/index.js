import carbontheme from "@carbonplan/theme";

const theme = {
  ...carbontheme,
  colors: {
    primary: "#00ffaa",
    secondary: "#00183d",
  },
  images: {
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 99999,
    },
  },
  /*   buttons: {
    secondary: {
      backgroundColor: "red",
      fontWeight: "bold",
      color: "green",
      bg: "primary",
      "&:hover": {
        bg: "dark",
      },
    },
  }, */
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: ".2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      // extends the text.heading styles
      variant: "text.heading",
      fontSize: [6, 7, 8],
      fontWeight: "display",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
    },
  },
};

export default theme;
