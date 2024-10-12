const {SlashCommandBuilder , EmbedBuilder  } = require ('@discordjs/builders')
const { PermissionsBitField } = require('discord.js');
module.exports = {
data : new  SlashCommandBuilder ()
.setName('automode-flagged-words')
.setDescription('create an automod rule to protect your server from profanity and slurs'),

// Programmed by SLinder
async execute (interaction , client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: " <:1059649999086030938:1060645619292721225>  You dont have permissions (Manage messages) Or you dont have role that named (Deletes)", ephemeral: true }) }
const {  guild} = interaction ;



        const rule = await guild.autoModerationRules.create(
            {
                name: `Prevent  profanity and sexual content , slurs by AutoMod Bot`,
                creatorId: `1169990814533963788`,
                enabled: true,
                eventType: 1,
                triggerType: 4,
                triggerMetadata:
                {
                   presets : [1 , 2 , 3]
                },
                actions: [
                    {
                        type: 1,
                        metadata: {
                            channel: interaction.channel,
                            durationSeconds: 10,
                            customMessage: `This message prevented by Bot auto moderation`
                        }
                    }
                ]
// Programmed by SLinder
            }).catch(async err => {
console.log(err)
            })

        const embed = new EmbedBuilder()
         
            .setDescription(`**✔ your Automod Rule (preventing Flagged words) has been created successfully ** `)
            .setTimestamp();

            if (!rule) return;
await interaction.deferReply({fetchReply : true})
          return  await interaction.editReply({ embeds: [embed] })
 
// Programmed by SLinder














    }


}
