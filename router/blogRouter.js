const express = require('express');
const blogController = require('./../controllers/blogController')
const router = express.Router();

router.route('/').get(blogController.getAllBlog).post(blogController.createNewBlog);
router.route('/new').get(blogController.createBlog)
router.route('/:id').delete(blogController.deleteBlog).put(blogController.editBlogById)
router.route('/edit/:id').get(blogController.editBlog)



 module.exports = router;