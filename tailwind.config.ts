import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundImage: {
          'login_ill': "url('./public/login_ill.png')"
        },
        foreground: "var(--foreground)",
        primary: {
          50: '#fef9ee',
          100: '#fdf1d7',
          200: '#fadfae',
          300: '#f7c67a',
          400: '#f3a444',
          500: '#ef8619',
          600: '#e16f15',
          700: '#ba5514',
          800: '#944318',
          900: '#783916',
          950: '#01a0a',
        },
        green: '#00c247',
        info: '#004ce8',
        warning: '#ffe16a',
        error: '#ba1a1a',
        neutral: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',  
          800: '#424242',
          900: '#212121',
        }
      },
    },
  },
  plugins: [],
};
export default config;
