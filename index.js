var express = require('express');
var multer = require('multer');
var cloudinary = require('cloudinary');

var app = express();

app.set('view engine','ejs');

app.use(multer({dest: __dirname+'/uploads'}));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/showPicture',function(req,res){

    // db.piece.find({where:{type:'shirts'}}).then(function(piece){
    //     var imgId = 'piece_'+piece.id;
    // })

    var imgId='user_1';
    var imgThumb1 = cloudinary.url(imgId+'.jpg', {
      width: 90,
      height: 98, 
      crop: 'fill',
      gravity: 'face',
      radius: 'max',
      effect: 'sepia' 
    });
    res.render('show',{myPicture:imgThumb1})
});

app.post('/tacosAndBurritos',function(req,res){

    var myImgPath = req.files.tacoPicture.path;

    // db.user.create({...}).then(function(user){
    //     cloudinary.uploader.upload(myImgPath,function(result){
    //         //result.public_id
    //         res.send(result);
    //     },{'public_id':'user_'+user.id});        
    // });

    cloudinary.uploader.upload(myImgPath,function(result){
        //result.public_id
        res.send(result);
    },{'public_id':'user_1'});

    //public_id
});


app.listen(3000);