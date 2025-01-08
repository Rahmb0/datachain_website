const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + "/../dist",
    remoteRoot: "/public_html/",
    include: ["*", "**/*"],
    exclude: [
        "node_modules/**",
        "src/**",
        ".git/**"
    ],
    deleteRemote: false,
    forcePasv: true
};

ftpDeploy.deploy(config)
    .then(res => console.log("Finished deploying:", res))
    .catch(err => console.log("Error deploying:", err)); 