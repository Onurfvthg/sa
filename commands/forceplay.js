const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('forceplay')
    .setDescription('Verilen istasyonu oynatmaya zorlamanızı sağlar')
    .addStringOption((option) =>
      option.setName('station')
        .setDescription('Radyo istasyonunun adı')
        .setRequired(false),
    ),
  async execute(interaction, client) {
    if (!interaction.member.voice.channelId) return await interaction.reply({ content: "Bir ses kanalında değilsiniz!", ephemeral: true });

    else if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "Ses kanalımda değilsin!", ephemeral: true });
    else if (!interaction.guild.me.voice.channelId) return await interaction.reply({ content: "Ben hiçbir şey oynamıyorum!", ephemeral: true });

    const vc = interaction.member.voice
    if (interaction.member.roles.cache.some(role => role.name.toLowerCase() === 'dj') || vc.channel.permissionsFor(interaction.member).has("MANAGE_CHANNELS")) {
      if (interaction.options.getString('station') === null) {
        client.func.play(process.env.LOFI_STREAM)
      } else {
        axios.get(
          `http://all.api.radio-browser.info/json/stations/byname/${encodeURIComponent(interaction.options._hoistedOptions[0].value)}`
        ).then(function(response) {
          let data = response.data;
          if (data.length < 1) return interaction.reply('No radio station found with that name')
          else client.func.play(interaction, data[0].url, data[0].name)
        })
      }
    }

  },
};