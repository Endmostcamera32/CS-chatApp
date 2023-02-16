using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CS_chatApp.Models
{
    public class Channel
    {
        public Channel(int channelId, string channelName, DateTime createdAt) {
            ChannelId = channelId;
            ChannelName = channelName;
            CreatedAt = createdAt;
            Messages = new List<Message>();
        }
        public int ChannelId {get; set;}
        public string ChannelName {get; set;}
        public DateTime CreatedAt { get; set; }

        public List<Message> Messages {get; set;}
    }
}