const message = require("../model/messaje");
const { Vonage } = require('@vonage/server-sdk')

const message_all = async (req, res) => {
    console.log('hhhhhh')
      try {
          const mes = await message.find();
          res.json(mes);
        } catch (error) {
          res.json({ message: error });
        }
  };



 
  const message_create = async (req, res) => {
   
    const vonage = new Vonage({
        apiKey: "f82118d5",
        apiSecret: "P9lutHEDPq6EZ2i9"
      })
    const from = "Testing project"
    const to = req.body.phone
    const text = req.body.message

    async function sendSMS() {
        await vonage.sms.send({to, from, text})
            .then(resp => { console.log('Message sent successfully'); console.log(resp); })
            .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
    }

    sendSMS();
    const messa = new message({
        Message: req.body.message,
        phone:req.body.phone,
        email: req.body.email,
        name: req.body.name,

      });
    
      try {
        const me = await messa.save();
        res.send(me);
      } catch (error) {
        res.status(400).send(error);
      }
};

module.exports = {
    message_create,
    message_all
    }