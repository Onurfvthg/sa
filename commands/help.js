const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Size bir yardım menüsü gösterir!'),
  async execute(interaction, client) {
    let embed = new MessageEmbed()
      .setColor('GREEN')
      .setAuthor("MuzikLord'in Yardım Menüsü", client.user.displayAvatarURL())
      .setDescription("Kullanılabilir komutlar aşağıda verilmiştir. Komut açıklamasını görüntülemek için yazmanız yeterlidir `/` sembolü ve komut adı, açıklaması görünecektir.\n\n**Kullanılabilir Komutlar:**\n`forceplay`, `yardım`, `play`, `radyo`, `durdur`\n*")
      .setFooter('MuzikLord')
      .setTimestamp()
    await interaction.reply({ embeds: [embed], components: [await client.func.rowMaker()] });
  },
};