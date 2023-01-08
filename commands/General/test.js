const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("그룹링크")
    .setDescription("그룹링크를 받을 수 있습니다."),
  /**
   *
   * @param {import("discord.js").CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply({ content: `**유저님이 찾으시는 https://web.roblox.com/groups/16548083/KR-RP#!/about 천안시 그룹 찾아드렸습니다!**` });
  },
};
