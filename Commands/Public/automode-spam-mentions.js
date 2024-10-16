const {SlashCommandBuilder , EmbedBuilder } = require ('@discordjs/builders')
const { PermissionsBitField } = require('discord.js');
module.exports = {
data : new  SlashCommandBuilder ()
.setName('automode-spam-mentions')
.setDescription('create an automod rule to protect your server from spam mentions')
.addIntegerOption(option => option.setName('spam-mention').setDescription('remove messages suspected from spam !! 🤦‍♂️').setRequired(true)),

async execute (interaction , client) {

// Programmed by SLinder

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: " <:1059649999086030938:1060645619292721225>  You dont have permissions (Manage messages) Or you dont have role that named (Deletes)", ephemeral: true }) }



const {guild , options} = interaction ;


   // Programmed by SLinder    

        const number = options.getInteger('spam-mention')

        const rule = await guild.autoModerationRules.create(
            {
                name: `Prevent Spam mentions by AutoMod Bot`,
                creatorId: `1169990814533963788`,
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
                            customMessage: `** This message prevented by Bot auto moderation**`
                        }
                    }
                ]

            }).catch(async err => {
            
console.log(err)
       
            })
// Programmed by SLinder
        const embed = new EmbedBuilder()
           
            .setDescription(`**✔ your Automod Rule (spam mentions) has been created successfully ** `)
            .setTimestamp();

        
            if (!rule) return;
 await interaction.deferReply({ fetchReply : true  })
         return   await interaction.editReply({ embeds: [embed] })
       


// Programmed by SLinder












    }


}
