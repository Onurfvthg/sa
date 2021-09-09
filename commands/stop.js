const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('durdur')
    .setDescription('Geçerli Ses oturumunu durdurur'),
  async execute(interaction, client) {
    client.func.stop(interaction);
  },
};