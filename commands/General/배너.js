const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("배너")
    .setDescription("배너를 봅니다")
    .addUserOption((option) =>
      option
        .setName("유저")
        .setDescription("배너를 볼 유저를 선택 또는 아이디를 입력해 주세요")
        .setRequired(false)
    ),
  async execute(interaction) {
    const _user = interaction.options.getUser("유저") || interaction.user;
    const user = await interaction.client.users.fetch(_user.id, {
      force: true,
    });

    const user_banner = user.bannerURL({
      size: 512,
    });

    if (!user_banner) {
      return await interaction.reply({
        content: "배너가 존재하지 않습니다.",
        ephemeral: true,
      });
    }

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(user.tag + "의 배너")
          .setColor("Blurple")
          .setImage(user_banner),
      ],
    });
  },
};