const Discord = require("discord.js")
const { PermissionsBitField } = require('discord.js');
const {SlashCommandBuilder , EmbedBuilder } = require ('@discordjs/builders')
module.exports = {
data : new  SlashCommandBuilder ()
.setName('automode-bad-words')
.setDescription('create an automod rule to protect your server from bad words')
.addStringOption(option => option.setName('word').setDescription('remove messages suspected from re !! 🤦‍♂️').setRequired(true)),

async execute (interaction , client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: " <:1059649999086030938:1060645619292721225>  You dont have permissions (Manage messages) Or you dont have role that named (Deletes)", ephemeral: true }) }
const {options , guild} = interaction ;

const word = options.getString('word')



        const rule = await guild.autoModerationRules.create(
            {
                name: `Prevent  bad word by AutoMod Bot`,
                creatorId: `1169990814533963788`,
                enabled: true,
                eventType: 1,
                triggerType: 1,
                triggerMetadata:
                {
                    keywordFilter : [`${word}`]
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

            }).catch(async err => {
                
console.log(err)
               
            })

        const embed = new EmbedBuilder()
            
            .setDescription(`**<a:emoji_186:1058153224051363910> your Automod Rule (preventing bad words) has been created successfully ** `)
            .setTimestamp();

   await interaction.deferReply({ fetchReply : true  })
          
           return await interaction.editReply({ embeds: [embed] })
     















    }


}
