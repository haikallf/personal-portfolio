/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "cursive"],
    },
    extend: {
      fontSize: {
        display: "4.5rem", // 72px
        heading: "4rem", // 64px
        heading2: "3rem", // 48px
        heading3: "2.5rem", // 40px
        heading4: "2rem", // 32px
        heading5: "1.5rem", // 24px
        headline: "1.25rem", // 20px
        base: "1rem", // 16px
        paragraph: "1rem", // 16px
        label: "1rem", // 16px
        subheadline: "0.9375rem", // 15px
        footnote: "0.875rem", // 14px
        caption: "0.75rem", // 12px
      },
      lineHeight: {
        display: "5.375rem", // 86px
        heading: "4.75rem", // 76px
        heading2: "3.625rem", // 58px
        heading3: "3rem", // 48px
        heading4: "2.375rem", // 38px
        heading5: "1.75rem", // 28px
        headline: "1.5rem", // 24px
        base: "1.25rem", // 20px
        paragraph: "1.625rem", // 26px
        label: "1.25rem", // 20px
        subheadline: "1.125rem", // 18px
        footnote: "1rem", // 16px
        caption: "0.875rem", // 14px
      },
    },
  },
  plugins: [],
};
