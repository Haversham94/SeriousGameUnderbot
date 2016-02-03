//var ls = require('list-directory-contents');
var fs = require('fs');
// Gets a list of levels
export function index(req, res) {
    //var path = req.params.path;

    /*  fs.realpath('server/api/level/map', function (err, path) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Path is : ' + path);
    });
    fs.readdir('server/api/level/map', function (err, files) {
        if (err) return;
        files.forEach(function (f) {
            console.log('Files: ' + f);
        });
    });*/

    fs.readdir('client/assets/images/game_assets', function (err, files) {
        if (err) return;
        files.forEach(function (f) {
            console.log('Files: ' + f);
        });
    });



    /* ls(path, function (err, tree) {

         // NOTE: 
         // everything ending in `/` in the output below is a path to a directory 
         // all other paths are to files 

         if (!err) {
             res.send(tree);
         } else {

             res.send('Something went wrong !! Check the path ');

         }

     });*/
}
