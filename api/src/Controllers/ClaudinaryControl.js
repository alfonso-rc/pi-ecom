function prob(req,res,next){
    try {
        return res.send('Hello claudinary');
      } catch (error) {
        next(error);
      };
}

module.exports = {
    prob
}