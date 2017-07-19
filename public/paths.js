// load modules
const Path = require('path')

// location of build folders
module.exports = {
    actorApp:     Path.join(__dirname, 'productions/actorApp/build'),
    blog:         Path.join(__dirname, 'blog/build'),
    campaignApp:  Path.join(__dirname, 'productions/campaignApp/build'),
    construction: Path.join(__dirname, 'construction/build'),
    education:    Path.join(__dirname, 'education/build'),
    fashion:      Path.join(__dirname, 'fashion/build'),
    food:         Path.join(__dirname, 'food/build'),
    industries:   Path.join(__dirname, 'industries/build'),
    journalism:   Path.join(__dirname, 'journalism/build'),
    pageNotFound: Path.join(__dirname, 'page-not-found/build'),
    productions:  Path.join(__dirname, 'productions/build'),
    software:     Path.join(__dirname, 'software/build'),
    writerApp:    Path.join(__dirname, 'productions/writerApp/build'),
}
