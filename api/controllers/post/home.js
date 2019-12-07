module.exports = async function(req, res) {
    console.log('This route shows homepage of post')

    //load from pages.home
    //pass objects to the homepage

    const userId = req.session.userid
    const allPosts = await Post.find({user: userId})
    res.view('pages/home', 
        {allPosts}
    )
}