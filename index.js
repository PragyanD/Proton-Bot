
const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const token = ''; //Discord.js API key
const welcomeChannel = ""; //set the id of the channel where welcome messages are to be sent
const PREFIX = 'n'; //prefix for bot commands 

var servers = {};
var bannedwords = ["Proton is bad"]; //add blacklisted words/phrases here
bot.on('ready', () => {
    console.log('Proton is online!');
    
});
//Executed on n
bot.on('guildMemberAdd',  member => {
    const channel = bot.channels.cache.get(welcomeChannel); //gets the welcome channel ID
    if(!channel) return;
    channel.send(`Welcome to the server ${member}`); //customizable welcome message
})
bot.on('message', message => {
    if(message.author.bot){return;}
    for(let j = 0; j<bannedwords.length;j++){
        if (message.content.includes(bannedwords[j])) {
            message.delete();
            if(message.tts){
                message.reply("Please don't use the tts feature"); //feature to elminate TTS messages from being sent
            }
            message.author.send("Please refrain from using such language");//warning message
    }

    }
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        //MUSIC FUNCTIONS
        case 'play':
        case 'p':
            function play(connection,message){//main play function
                var server = servers[message.guild.id];
                server.dispatcher = connection.play(ytdl(server.queue[0],{filter:"audioonly"})); //using YTDL to get the audio
                server.queue.shift();
                server.dispatcher.on("finish",function(){
                    if(server.queue[0]){
                        play(connection,message);
                    }else{
                        connection.disconnect();
                    }
                })
            }
            //TO-DO: Add message parsing for URLs
            function playWord(connection,message){
                console.log("test");
                let videos = res.videos.slice(0,10);

            }
            if(!args[1]){
                message.channel.send("Please include a link");
                return;
            }
            
            if(!message.member.voice.channel){
                message.channel.send("Join a voice channel please");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }
            let validate = ytdl.validateURL(args[1]);

            var server = servers[message.guild.id];

            
            if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(connection){
                if(validate){
                    //TO-DO create an embed for music 
                    play(connection,message);
                    server.queue.push(args[1]);
                    const embed = new Discord.MessageEmbed();
                    embed.setAuthor(bot.user.username,bot.user.displayAvatarURL);
                    embed.setDescription("");
                    message.channel.send(embed);
                }else{
                    message.channel.send("Please provide a URL");
                    //playWord(connection,message);
                }
                
                
            })
            


        break;
        case 'skip':
            var server =servers[message.guild.id];
            try {
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send("skipped by " +message.member.toString()); //showing who skipped a song
            }catch{
                message.channel.send("Invalid message form");

            }
            
        
            break;
        case 'stop':
            var server = servers[message.guild.id];
            try{
                for(var i = server.queue.length - 1; i >=0;i--){
                    server.queue.splice(i,1);
                }
                server.dispatcher.end();
                message.channel.send("Ending queue");
            
            if(message.guild.connection) message.guild.voiceConnection.disconnect();
            }catch{
                message.channel.send("Invalid message form");

            }
            break;
    }
})
bot.login(token);
