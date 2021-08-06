

const Blog = require('./..//model/blogSchema');    

exports.getAllBlog=  async (req,res)=>{
    try{
        const blogs = await  Blog.find().sort({_id:'desc'})
        res.render('blogs.ejs',{blogs: blogs})
    }catch(err)
    {
        res.status(404).send(`Unfortunatelly error occured${err}`)
    }
}


exports.createBlog= (req,res)=>{
    try{
        res.render('newBlog.ejs')
    }catch(err)
    {
        res.send(`Unfortunately Error Occured ${err}`)
    }

}

exports.createNewBlog = async (req,res)=>{
    try{
        const blog  = new Blog({
            title: req.body.title,
            description: req.body.description

        })
        const newBlog = await blog.save();
        res.redirect('/')
    }catch(err)
    {
        res.send(`Unfortunately Error Occured ${err}`)
    }
}

exports.deleteBlog= async(req,res)=>{
    try{
        await Blog.findByIdAndDelete(req.params.id)
       res.redirect('/')
    }catch(err)
    {
        res.send(`Unfortunately Error Occured ${err}`)
    }
}
exports.editBlog =async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id);
        res.render('editBlog.ejs', { blog:blog})
    }catch(err)
    {
        res.send(`Unfortunately Error Occured ${err}`)
    }   
}

exports.editBlogById = async (req,res)=>{
    const blog = await Blog.findById(req.params.id);
}