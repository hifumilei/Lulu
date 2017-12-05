const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong!");
    } else
    if (message.content.startsWith(prefix + "hola")) {
      message.channel.send("Hola que tal?");
    }
    if (message.content.startsWith(prefix + "ping")) {
        
            let mensajes = Date.now() - message.createdTimestamp;
            let ping = Math.floor(message.client.ping);
            
            message.channel.send(":ping_pong: Pong!")
              .then(m => {
        
                  m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(mensajes/100)} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
              
              });
            
          }
    if(message.content.startsWith(prefix + 'avatar')){
            
                  let img = message.mentions.users.first()
                  if (!img) {
            
                      const embed = new Discord.RichEmbed()
                      .setImage(`${message.author.avatarURL}`)
                      .setColor(0x66b3ff)
                      .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
                      message.channel.send({ embed });
            
                  } else if (img.avatarURL === null) {
            
                      message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");
            
                  } else {
            
                      const embed = new Discord.RichEmbed()
                      .setImage(`${img.avatarURL}`)
                      .setColor(0x66b3ff)
                      .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
                      message.channel.send({ embed });
            
                  };
            
              }
              if(message.content.startsWith(prefix + 'server')){
                
                    var server = message.guild;
                  
                    const embed = new Discord.RichEmbed()
                    .setThumbnail(server.iconURL)
                    .setAuthor(server.name, server.iconURL)
                    .addField('ID', server.id, true)
                    .addField('Region', server.region, true)
                    .addField('Creado el', server.joinedAt.toDateString(), true)
                    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
                    .addField('Miembros', server.memberCount, true)
                    .addField('Roles', server.roles.size, true)
                    .setColor(0x66b3ff)
                    
                   message.channel.send({ embed });
                
                  }
                  if(message.content.startsWith(prefix + 'user')){
                    let userm = message.mentions.users.first()
        if(!userm){
                      var user = message.author;
                      
                        const embed = new Discord.RichEmbed()
                        .setThumbnail(user.avatarURL)
                        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
                        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
                        .addField('ID', user.id, true)
                        .addField('Estado', user.presence.status, true)
                        .addField('Apodo', message.member.nickname, true)
                        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
                        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
                        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
                        .setColor(0x66b3ff)
                        
                       message.channel.send({ embed });
                    }else{
                      const embed = new Discord.RichEmbed()
                      .setThumbnail(userm.avatarURL)
                      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
                      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
                      .addField('ID', userm.id, true)
                      .addField('Estado', userm.presence.status, true)
                      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
                      .setColor(0x66b3ff)
                      
                     message.channel.send({ embed });
                    }
                    
                  }

                  if(message.content.startsWith(prefix + 'ban' )){
                    
                        let user = message.mentions.users.first();
                        let razon = args.split(' ').slice(1).join(' ');
                    
                        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
                        if(!razon) return message.channel.send('Escriba un razón, `pixban @username [razón]`');
                        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
                        
                    
                        message.guild.member(user).ban(razon);
                        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
                    
                  }

                  if(message.content.startsWith(prefix + 'di')){
                    const content = message.content.split(' ').slice(1);
                    const args = content.join(' ');
                    
                    if(!args) return message.channel.send(`Escriba un contenido pára decir.`);
                    message.channel.send(`${args}`);
                    
                }
              
                if(message.content.startsWith(prefix + '8ball')){
                    const content = message.content.split(' ').slice(1);
                    const args = content.join(' ');
                    
                        var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
                        if (!args) return message.reply(`Escriba una pregunta.`);
                        message.channel.send(message.member.user+' a su pregunta `'+args+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
                    
                    }
                    client.on("guildMemberAdd", (member) => {
                        console.log(`Un nuevo enano:  ${member.user.username} se ha unido a ${member.guild.name}.`);
                        var canal = client.channels.get('387035881564930077'); 
                        canal.send(`${member.user}, bienvenido al servidor pasala bien.`);
                        
                    
                     });
                     
                     if (message.content. startsWith(prefix + 'join')) { 
                        let Canalvoz = message.member.voiceChannel;
                        if (!Canalvoz || Canalvoz.type !== 'voice') {
                        message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
                        } else if (message.guild.voiceConnection) {
                        message.channel.send('Ya estoy conectado en un canal de voz.');
                        } else {
                         message.channel.send('Conectando...').then(m => {
                              Canalvoz.join().then(() => {
                                   m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
                             }).catch(error => message.channel.send(error));
                         }).catch(error => message.channel.send(error));
                        }
                    }
                    if (message.content.startsWith(prefix + 'leave')) { 
                        let Canalvoz = message.member.voiceChannel;
                        if (!Canalvoz) {
                            message.channel.send('No estoy en un canal de voz.');
                        } else {
                            message.channel.send('Dejando el canal de voz.').then(() => {
                            Canalvoz.leave();
                            }).catch(error => message.channel.send(error));
                        }   
                    }
                    if (message.content.startsWith(prefix + 'ytplay')) {
                        const ytdl = require('ytdl-core');
                        const content = message.content.split(' ').slice(1);
                        const args = content.join(' ');
                    
                        let voiceChannel = message.member.voiceChannel;
                        if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
                        if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
                        voiceChannel.join()
                          .then(connection => {
                            const url = ytdl(args, { filter : 'audioonly' });
                            const dispatcher = connection.playStream(url);
                            message.channel.send('Reproduciendo ahora: '+ args);
                            message.delete();
                          })
                          .catch(console.error);
                      }
                      if (message.content.startsWith(prefix + 'radio')) {
                        let voiceChannel = message.member.voiceChannel;
                        if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
                            voiceChannel.join().then(conexion =>{
                            conexion.playStream('http://stream.electroradio.fm:80/192k/;');
                            message.channel.send('Radio electro activado.')
                            return;
                          })
                          .catch(console.error);
                      }

                      client.user.setGame(prefix+'help | solo una pisquita 7w7');
                        
                        if(message.content.startsWith(prefix + 'help')){
                            
                                message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
                                message.author.send('**COMANDOS DE LULU**\n```\n'+
                                                    '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                                                    '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                                                    '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                                                    '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencionado.\n'+
                                                    '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                                                    '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                                                    '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                                                    '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n'+
                                                    '¡Con todos los colores! una recomendacion: Revisa las reglas de nuestro servidor para no tener problemas **\nTe ha hablado Lulu la bot preferida del server y te deseo un buen día/noche/tarde**');
                                
                              }
                             
                              process.setMaxListeners(100);
  });
  client.login(process.env.BOT_TOKEN);     
