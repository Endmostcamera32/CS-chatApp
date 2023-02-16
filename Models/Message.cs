using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CS_chatApp.Models
{
    public class Message
    {
        public Message(int messageId, string text, DateTime createdAt, Channel channel) {
            MessageId = messageId;
            Text = text;
            CreatedAt = createdAt;
            Channel = channel;
            ChannelId = channel.ChannelId;
        }
        public int MessageId {get; set;}
        public string Text {get; set;}
        public DateTime CreatedAt {get; set;}
        public int ChannelId {get; set;}
        public Channel Channel {get; set;}
    }
}