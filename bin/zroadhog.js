#!/usr/bin/env node
const spawn = require("cross-spawn"); // 跨平台spawn
const chalk = require("chalk"); // 终端彩色输出
const script = process.argv[2];
switch (script) {
	case "-v":
	case "--version":
		return console.log(require("../package.json").version);
	case "build":
	case "server":
		//spawn.sync同步开启一个子进程去执行另外一个脚本
		let result = spawn.sync(
			"node", // command
			[require.resolve(`../lib/${script}.js`)], // args
			{ stdio: "inherit" }, // options 挂载到标准输入输出
		);
		process.exit(result.status);
	default:
		// 未知命令通过chalk报错提示
		return console.log(`Unknown script ${chalk.cyan(script)}`);
}
