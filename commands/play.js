const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Lo-fi radyo istasyonunu çalmaya başlar!'),
  async execute(interaction, client) {
    client.func.play(interaction, process.env.LOFI_STREAM, 'Lo-fi Beats')
  },
};