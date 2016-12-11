module.exports = {
    initializeAdmin: function () {

        var http = require("http");
        var options = {
            "method": "POST",
            "hostname": "localhost",
            "port": "3000",
            "path": "/user",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache"
            }
        };

        var req = http.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });
        });

        req.write(JSON.stringify({
            "firstName": "Adm",
            "lastName": "Adm",
            "password": "admin",
            "email": "admin@teste.com",
            "role": "adm"
        }));
        req.end();

    }

}
