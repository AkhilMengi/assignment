const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true

}).then(()=>{
    console.log('connected successfully');
}).catch(()=>{
    console.log(`OOPS! ${err}`)
})
