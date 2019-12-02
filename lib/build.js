const webpack = require("webpack");
const chalk = require("chalk");
const log = console.log;
function doneHandler(err, stats) {
	if (err) log(`${chalk.red(err)}`);
	log(`${chalk.green("success!")} assets: `, stats.toJson().assets);
}
function build() {
	const config = require("../config/webpack.prod");
	const compiler = webpack(config);
	compiler.run(doneHandler);
}
build();
