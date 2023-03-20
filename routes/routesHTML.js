const fs = require('fs')
const path = require('path');

let routesHtml = {
    "/": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/index.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/index.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/index.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/indexStyle.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")

        fs.readFile(dirname + '/view/indexStyle.css', function (err, data) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(data)
                res.end("\n")
            }
          })
    },
    "/image_slider/image_slider.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")

        fs.readFile(dirname + '/view/image_slider/image_slider.css', function (err, data) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(data)
                res.end("\n")
            }
          })
    },
    "/image_slider/image_slider_uber.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/image_slider/image_slider_uber.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/image_slider/image_slider_fitness.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/image_slider/image_slider_fitness.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/image_slider/image_slider_delivery.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/image_slider/image_slider_delivery.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/image_slider/image_slider_massage.png": function(res, dirname) {
        var mime = {
            html: 'text/html',
            txt: 'text/plain',
            css: 'text/css',
            gif: 'image/gif',
            jpg: 'image/jpeg',
            png: 'image/png',
            svg: 'image/svg+xml',
            js: 'application/javascript'
        }
        var s = fs.createReadStream(dirname + '/view/image_slider/image_slider_massage.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/image_slider/image_slider_restaurant.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/image_slider/image_slider_restaurant.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/rss.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/rss.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/index.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")

        fs.readFile(dirname + '/view/index.js', function (err, data) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(data)
                res.end("\n")
            }
          })
    },
    "/style.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")

        fs.readFile(dirname + '/view//style.css', function (err, data) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(data)
                res.end("\n")
            }
          })
    },
    "/uber/html/uberHomePage.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/uber/html/uberHomePage.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/uber/css/uberHomePage.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/uber/css/uberHomePage.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/uber/js/uberHomePage.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/uber/js/uberHomePage.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/images/incercare.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/incercare.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/masaj/html/masajHomepage.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/html/masajHomepage.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/css/masajHomepage.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view//masaj/css/masajHomepage.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/js/masajHomepage.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/js/masajHomepage.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/images/arrow.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/arrow.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/masaj.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/masaj.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/aromatic.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/aromatic.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/stone.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/stone.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/fitness/html/fitness.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/html/fitness.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/css/fitness.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/css/fitness.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/js/fitness.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/js/fitness.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/pics/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/fitness/pics/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/fitness/pics/MakeGymWorkoutsPartOfYourRoutineSWEAT_enf89e42d9f6346ab1accf553c8459f6a1.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/fitness/pics/MakeGymWorkoutsPartOfYourRoutineSWEAT_enf89e42d9f6346ab1accf553c8459f6a1.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/fitness/pics/CRuKD9.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/fitness/pics/CRuKD9.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/fitness/pics/3-Fitness-Girl-da-seguire-su-Youtube-1300x865.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/fitness/pics/3-Fitness-Girl-da-seguire-su-Youtube-1300x865.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/uber/html/confirmaCursaUber.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view//uber/html/confirmaCursaUber.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/uber/css/confirmaCursaUber.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/uber/css/confirmaCursaUber.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/uber/js/confirmaCursaUber.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/uber/js/confirmaCursaUber.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/images/comanda-confirmata.jpg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/comanda-confirmata.jpg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/view/angajat-uber/angajat-uber.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-uber/angajat-uber.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/angajat-uber/angajat-uber.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-uber/angajat-uber.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/angajat-uber/angajat-uber.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-uber/angajat-uber.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/login/login.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/login/login.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/login/login.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/login/login.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/login/login.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/login/login.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/login/login.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/login/login.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/login/login.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/login/login.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/login/login.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/login/login.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/html/rezervaMasaj.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/html/rezervaMasaj.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/css/rezervaMasaj.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/css/rezervaMasaj.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/js/rezervaMasaj.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/js/rezervaMasaj.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/html/masajTerapii.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/html/masajTerapii.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/css/masajTerapii.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/css/masajTerapii.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/js/masajTerapii.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/js/masajTerapii.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/images/indian-scalp.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/indian-scalp.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/back-neck.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/back-neck.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/aromatic-masaj.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/aromatic-masaj.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/images/stone-massage.jpeg": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/stone-massage.jpeg');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/jpeg');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/masaj/html/masajConfirmareRezervare.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/html/masajConfirmareRezervare.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/css/masajConfirmareRezervare.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/css/masajConfirmareRezervare.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/masaj/js/masajConfirmareRezervare.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/masaj/js/masajConfirmareRezervare.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/images/small-arrow.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/small-arrow.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    "/view/angajat-masaj/angajat-masaj.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-masaj/angajat-masaj.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/angajat-masaj/angajat-masaj.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-masaj/angajat-masaj.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/angajat-masaj/angajat-masaj.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-masaj/angajat-masaj.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/view/style.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/style.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/html/Ia-tiAbonament.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/html/Ia-tiAbonament.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/css/Ia-tiAbonament.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/css/Ia-tiAbonament.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/js/Ia-tiAbonament.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/js/Ia-tiAbonament.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/html/confirmare.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/html/confirmare.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/css/confirmare.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/css/confirmare.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/fitness/js/confirmare.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/fitness/js/confirmare.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/adminIndex.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/adminIndex.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/adminStyle.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/adminStyle.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/adminIndex.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/adminIndex.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/rssXML.xml": function(res, dirname) {
        res.setHeader("Content-Type", "application/xml")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/rssXML.xml', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/statistics_page.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/statistics_page.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/statistics_page_text.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/statistics_page_text.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/statistics_page_navbar.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/statistics_page_navbar.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/statistics_page_small_button.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/statistics_page_small_button.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/statistics_page_medium_button.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/statistics_page_medium_button.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/google-charts/charts.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/google-charts/charts.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/google-charts/charts.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/google-charts/charts.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/statistics_page/statistics_page.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/statistics_page/statistics_page.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/feedback/feedback.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/feedback/feedback.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/feedback/feedback.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/feedback/feedback.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/feedback/feedback.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/feedback/feedback.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/html/addAngajat.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/addAngajat/html/addAngajat.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/addAngajat.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/addAngajat/addAngajat.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/addAngajat.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/addAngajat/addAngajat.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/html/rssXML.xml": function(res, dirname) {
        res.setHeader("Content-Type", "application/xml")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/rssXML.xml', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-fitness/angajat-fitness.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-fitness/angajat-fitness.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-fitness/angajat-fitness.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-fitness/angajat-fitness.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-fitness/angajatFitness.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-fitness/angajatFitness.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-masaj/angajat-masaj.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-masaj/angajat-masaj.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-masaj/angajat-masaj.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-masaj/angajat-masaj.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-masaj/angajat-masaj.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-masaj/angajat-masaj.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-uber/angajat-uber.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-uber/angajat-uber.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-uber/angajat-uber.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-uber/angajat-uber.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/angajat-uber/angajat-uber.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/angajat-uber/angajat-uber.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/html/confirmareAddAngajat.html": function(res, dirname) {
        res.setHeader("Content-Type", "text/html")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/addAngajat/html/confirmareAddAngajat.html', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/confirmareAddAngajat.css": function(res, dirname) {
        res.setHeader("Content-Type", "text/css")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/addAngajat/confirmareAddAngajat.css', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/addAngajat/confirmareAddAngajat.js": function(res, dirname) {
        res.setHeader("Content-Type", "text/javascript")
        res.setHeader("Access-Control-Allow-Origin", "*")
        
        fs.readFile(dirname + '/view/adminView/addAngajat/confirmareAddAngajat.js', function(err, pagina) {
            if(err) {
                res.writeHead(404)
                res.write('File not found')
                res.end("\n")
            } else {
                res.writeHead(200)
                res.write(pagina)
                res.end("\n")
            }
        })
    },
    "/adminView/images/rss.png": function(res, dirname) {
        var s = fs.createReadStream(dirname + '/view/images/rss.png');
        s.on('open', function () {
            res.setHeader('Content-Type', 'image/png');
            s.pipe(res);
        });
        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    },
    notFound: function(res, dirname) {
        let payload = {
            message: "Fille Not Found",
            code: 404
        }
        let payloadStr = JSON.stringify(payload)
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.writeHead(404)
        res.write(payloadStr)
        res.end("\n")
    }
}

module.exports = routesHtml