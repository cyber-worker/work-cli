const inquirer = require("inquirer");


module.exports = async () => {
  try {
    const { action } = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "选择要执行的git命令",
      choices: [{
        name: "快速提交",
        value: require("./actions/fast-commit")
      }, {
        name: "生成.gitignore文件",
        value: require("./actions/create-ignore")
      }, {
        name: "重置.gitignore",
        value: require("./actions/reset-ignore")
      }, {
        name: "更新远程仓库(origin)",
        value: require("./actions/update-remote")
      }]
    });
    await action();
    process.exit(0);
  } catch (error) {
    throw error;
  };
};