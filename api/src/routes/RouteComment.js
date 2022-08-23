const { Router } = require('express');
const {testFunction,getAllComments,createComment} = require('../Controllers/CommentControl.js');

const CommentRouter = Router();

// CommentRouter.get('/',testFunction);
CommentRouter.get('/',getAllComments);
CommentRouter.post('/create',createComment);

module.exports = CommentRouter;