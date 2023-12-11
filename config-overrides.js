// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { override, addBabelPlugin } = require("customize-cra");

// eslint-disable-next-line no-undef
module.exports = override(
	addBabelPlugin([
		"module-resolver",
		{
			root: ["./src"],
			alias: {
				"@src": "./src"
			}
		}
	])
);
