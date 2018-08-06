const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "`";

Client.on('ready', ()=> {
    console.log("Asc Bot Online.");
    
});

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;
    
    if(message.content.startsWith(prefix + "hai")){
        message.channel.send("Hai juga. ");

    }

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check di DM yah ^_^");
        message.author.send("Hai Pak ini help command kami yah");
    }
    
    if(message.content.startsWith(prefix + "prune")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name', "Clear");
        if(author.roles.has(role.id)){
            if(!args[0]){
                message.delete();
                message.author.send("Maaf anda tidak bisa menggunakan fitur ini.");
                return;
            }
            if(args[0] > 1000){
                message.delete();
                message.author.send("Maksimal Hapus 1000 message.");
                return;
            }

            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send({embed:{
                color: 0x0099ff,
                description:"Terimah kasi kami telah menghapus " + args[0] + " pesannya."
            }})
            return;
        }


    }





})


Client.login("NDc1NzIxMzk3MTYzNzg2MjUw.DkjbIg.uvb6m69yLxy1jU5CoEKDIy_nDbE");