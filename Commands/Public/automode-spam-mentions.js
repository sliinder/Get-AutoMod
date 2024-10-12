const {SlashCommandBuilder , EmbedBuilder } = require ('@discordjs/builders')
const { PermissionsBitField } = require('discord.js');
module.exports = {
data : new  SlashCommandBuilder ()
.setName('automode-spam-mentions')
.setDescription('create an automod rule to protect your server from spam mentions')
.addIntegerOption(option => option.setName('spam-mention').setDescription('remove messages suspected from spam !! 🤦‍♂️').setRequired(true)),

async execute (interaction , client) {



        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: " <:1059649999086030938:1060645619292721225>  You dont have permissions (Manage messages) Or you dont have role that named (Deletes)", ephemeral: true }) }



const {guild , options} = interaction ;


       

        const number = options.getInteger('spam-mention')

        const rule = await guild.autoModerationRules.create(
            {
                name: `Prevent Spam mentions by Reward Bot`,
                creatorId: `1080118608451096666`,
                enabled: true,
                eventType: 1,
                triggerType: 5,
                triggerMetadata:
                {
                    mentionTotalLimit: number
                },
                actions: [
                    {
                        type: 1,
                        metadata: {
                            channel: interaction.channel,
                            durationSeconds: 10,
                            customMessage: `** This message prevented by Reward Bot auto moderation**`
                        }
                    }
                ]

            }).catch(async err => {
            
console.log(err)
       
            })

        const embed = new EmbedBuilder()
           
            .setDescription(`**<a:emoji_186:1058153224051363910> your Automod Rule (spam mentions) has been created successfully ** `)
            .setTimestamp();

        
            if (!rule) return;
 await interaction.deferReply({ fetchReply : true  })
         return   await interaction.editReply({ embeds: [embed] })
       















    }


}