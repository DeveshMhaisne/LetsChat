const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/LetsChat');
}

let allChats = [
    {
        from: "Ram",
        to: "Sham",
        msg: "send me your notes",
        created_at: new Date()
    },
    {
        from: "Ramesh",
        to: "Suresh",
        msg: "send me your books",
        created_at: new Date()
    },
    {
        from: "Dhananjay",
        to: "Sanjay",
        msg: "Let play cricket",
        created_at: new Date()
    },  
    {
        from: "Avni",
        to: "Tanmay",
        msg: "Lets go swimming",
        created_at: new Date()
    },
    {
        from: "Reeva",
        to: "Krisha",
        msg: "Lets go to movie ",
        created_at: new Date()
    },  
];

Chat.insertMany(allChats);


