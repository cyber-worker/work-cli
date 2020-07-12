const simpleGit = require("simple-git");
const toast = require("@/utils/toast");
const popComfirm = require("@/utils/pop-comfirm");

const git = simpleGit();

module.exports = async () => {
  try {
    if (await popComfirm("是否推送到远程仓库?")) {
      toast.start("正在推送,请稍后...");
      await git.push();
      toast.succeed("推送成功!");
    };
  } catch (error) {
    throw error;
  }
};