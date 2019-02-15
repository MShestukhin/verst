var nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
    console.log('We are live on port 4444');
});

app.get('/', (req, res) => {
    res.send('Welcome to my api');
    var data = req.body;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'sibtrade.tech@gmail.com',
            clientId: '\n' +
            '402746975408-85b07irii3k85c826knqnhn2l0c78b7i.apps.googleusercontent.com\n',
            clientSecret: '\n' +
            'aqO80v6G4n884x7w5oxZ3-UC\n',
            refreshToken: '1/nCjTNLJBMdk1qn7u_z95xYxZ6gGP-K9ACLkGQB-CCGCVYxsEUTuc0O04MiYXMA5g',
            accessToken: 'ya29.GluxBmOJLzbC6GofmS54GINSyGxU9RyzQRrdJ5YP43hDNqtJnXU_mDndLwiRAJRb7Moha4SFHQjB_ZS5M0zyKUWYG3QBqZu7xCSylzHRaiLYmgsHTD2ohOhbzQA5'
        }
    });

    var mailOptions = {
        from: 'sibtrade.tech <sibtrade.tech@gmail.com>',
        to: 'shist95@mail.ru',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('try send '+error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

app.post('/api/v1', (req,res) => {
    res.send('Welcome to my api');
    var data = req.body;
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    secureConnection: false,
    auth: {
        user: 'sibtrade.tech@gmail.com',
        pass: 'wz2egnb9'
    }
});

var mailOptions = {
    from: 'from@gmail.com',
    to: 'to@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

})