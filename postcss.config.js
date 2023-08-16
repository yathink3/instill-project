export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(import.meta.env.PROD ? { cssnano: {} } : {})
  },
}
