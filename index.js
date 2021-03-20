const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    min:1,
    max:10},
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating:7,
  review:"I think it is okay"
});

const nayaFruit = new Fruit({
  name:"MastFruit",
  rating:77,
  review:"I think it is okay"
});
 nayaFruit.save();

const personSchema = new mongoose.Schema({
  name:String,
  age:Number
});

const Person = mongoose.model("Person",personSchema);

const John=new Person({
  name:"John",
  age:37
});

// John.save();
Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log(fruits[0].name);
  }
});
