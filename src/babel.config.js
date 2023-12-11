// eslint-disable-next-line no-undef
module.exports = {
  presets: ["react-app"],
  plugins: [
    "@babel/plugin-proposal-private-property-in-object",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: { "@src": "./src" },
      },
    ],
  ],
};
