/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-primary": "#006340",
        "tw-white": "#FFFFFF",
        "tw-darkGreen": "#2D473E",
        "tw-text": "#293632",
        "tw-gray": "#808080",
        "tw-border": "#ADADAD",
        "tw-bg-gray": "#F5F5F5",
      },
      fontSize: {
        "tw-xxl": "3.25rem", // 52px
        "tw-xl": "3rem", // 48px
        "tw-lg-plus": "2.625rem", // 42px
        "tw-lg": "2.375rem", // 38px
        "tw-md": "2rem", // 32px
        "tw-sm-plus": "1.375rem", // 22px
        "tw-sm": "1.25rem", // 20px
        "tw-base": "1rem", // 16px
        "tw-xs-plus": "0.875rem", // 14px
        "tw-xs": "0.75rem", // 12px
        "tw-xxs": "0.625rem", // 10px
      },
      fontWeight: {
        "tw-800": "800",
        "tw-700": "700",
        "tw-600": "600",
        "tw-500": "500",
        "tw-400": "400",
      },
      borderRadius: {
        "tw-sm": "0.625rem", // 10px
        "tw-md": "0.875rem", // 14px
        "tw-lg": "1.25rem", // 20px
        "tw-xl": "1.875rem", // 30px
        "tw-full": "50%",
      },
      gap: {
        xxl: "3rem", // 48px
        xl: "2rem", // 32px
        lg: "1.875rem", // 30px
        md: "1.5rem", // 24px
      },
    },
  },
  plugins: [],
};
