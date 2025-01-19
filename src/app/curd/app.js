const express = require('express');
const app = express();

const fs = require('fs');

const path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'upload')))

const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

const formidable = require('formidable');
const { console } = require('inspector/promises');
const { uptime } = require('process');

const DATABASE = "SMS";
const COLLECTION = "students";

const database = client.db(DATABASE);
const collection1 = database.collection(COLLECTION);

async function connectToDatabase(){
    try{
       await client.connect()
       console.log("CONNECTED WITH DATABASE")
    }
    catch(err){
        console.log(err)
    }
}

connectToDatabase();



app.get('/form',(req,res)=>{
    res.render('form');
})

// insert API
app.post('/insert',(req,res)=>{

const form = new formidable.IncomingForm();
form.parse(req,async(err,fields,files)=>{
    if(err){
        console.log(err);
    }

    const name = fields.name[0];
    const originalFileName = files.image[0].originalFilename;

   const result = await collection1.insertOne({
    name,image:originalFileName
   })
   const insertedId = result.insertedId.toString();
   const extension = originalFileName.split('.').pop();
   const newFileName = `${insertedId}.${extension}`;
   const uploaddir = path.join(__dirname,'upload');

   if(!fs.existsSync(uploaddir)){
    fs.mkdirSync(uploaddir);
   }

   const sourcePath = files.image[0].filepath;
   const newFilePath = path.join(uploaddir,newFileName);
   fs.copyFile(sourcePath,newFilePath,(err)=>{
    console.log(err)
   })

   fs.unlink(sourcePath,(err)=>{
    console.log(err)
   })




  res.redirect('form');
})


})


//view API
app.get('/view',async(req,res)=>{
  const data = await collection1.find({}).toArray()

  res.render('view',{data})

})


//delete API
app.post('/delete/:id',async(req,res)=>{
  const id = req.params.id;
  const user = await collection1.findOne({
    _id:new ObjectId(id)
  })
  const extension = user.image.split('.').pop();
  const file = `${id}.${extension}`;
  const uploadPath = path.join(__dirname,'upload',file) 

  fs.unlink(uploadPath,(err)=>{
    console.log(err)
  }) 

  const deleteUser = await collection1.deleteOne({
    _id:new ObjectId(id)
  })
   res.redirect('/view')

})


//edit API
app.get('/edit/:id',async(req,res)=>{
  const id = req.params.id;
  const data = await collection1.findOne({
    _id: new ObjectId(id)
  })
  

  console.log(data)
  res.render('edit',{data})
})

// update API
app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const form = new formidable.IncomingForm();
  form.parse(req,async(err,feilds,files)=>{
   if(err){
    console.log(err)
   }

   const name = feilds.name[0];
   const nameData = {name:name};

   if(files.image && files.image.length > 0 ){
     const newOriginalFileName = files.image[0].originalFilename;
     const newFileExtension = newOriginalFileName.split('.').pop(); 
     const newFileName = `${id}.${newFileExtension}`;
     
     const oldData = await collection1.findOne({
      _id: new ObjectId(id)
     })
     const oldFileExtension = oldData.image.split('.').pop();
     const oldFileName = `${id}.${oldFileExtension}`;

     const sourcePath = files.image[0].filepath;
     const oldPath = path.join(__dirname,'upload',oldFileName);
     const newPath = path.join(__dirname,"upload",newFileName);
     
     fs.unlink(oldPath,(err)=>{
      console.log(err)
     })

     fs.copyFile(sourcePath,newPath,(err)=>{
        console.log(err);
     }) 


      const fileData = {image:newOriginalFileName};
     const updateFile = await collection1.updateOne(
      {_id:new ObjectId(id)},
      {$set:fileData}
     )

     fs.unlink(sourcePath,(err)=>{
      console.log(err)
     })


   }
    
   const updateName = await collection1.updateOne(
    {_id:new ObjectId(id)},
    {$set:nameData}
   )



     res.redirect('/view');
  })



})




app.listen(3000,()=>{
    console.log('app is listening');
})