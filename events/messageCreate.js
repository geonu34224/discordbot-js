module.exports = {
    name: "messageCreate",
    once: false,
    execute(message) {
      if (message.content == "!s 천안시") {
        message.reply({ content: `> **{user.mention}님, 안녕하세요.새로운 천안, 행복한 시민. 천안시입니다.**` });
      }
    },
  };