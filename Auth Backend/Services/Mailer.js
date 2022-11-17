const nodemailer = require("nodemailer");

const Mailer = (data) => {
  nodemailer.createTestAccount((err, account) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass  // generated ethereal password
        }
    });

    console.log(account);
    const mailOptions = {
      from: account.user,
      to: data.email,
      subject: `Password Reset`,
      text: `Your Password: ${data.password}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email Sent: ${info.response}`);
      }
    });
  });
};

module.exports = Mailer;
