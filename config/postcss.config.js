module.exports = {
	// "parser": "sugarss",
	"map": false,
	"plugins": [
		require("postcss-import"),
		require("postcss-preset-env"),
		require("cssnano")
	]
};