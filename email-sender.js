var mail = require('nodemailer');

var tr=mail.createTransport({
    service:'gmail',
    auth:{
        user:"medazizguennichi@gmail.com",
        pass:'mahabesh yekhdem'
    }
});

var opt={
    from:'medazizguennichi@gmail.com',
    to:'ezzoguennichi@gmail.com',
    subject:'testing node mailer',
    text:'Hello Aziz this is Node Mail !!'
};

tr.sendMail(opt,function(err,info) {
    if(err) throw err;
    console.log(info.response)
});