const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {

  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)

}

const favBlog = (blogs) =>{

  let maxLike = -1
  let favoriteBlog = {}

  blogs.forEach(blog => {
    
    if(blog.likes > maxLike)
    {
      maxLike = blog.likes
      favoriteBlog = {
        title : blog.title,
        author : blog.author,
        likes : blog.likes
      }
    }

  });

  return favoriteBlog
}

const mostBlog = (blogs) => {

  if (blogs.length === 0) {
    return null; // Handle case where input array is empty
  }

  const blogCounts = {};

  blogs.forEach(blog => {

    if(blog.author in blogCounts)
      blogCounts[blog.author]++;
    else
      blogCounts[blog.author] = 1
  
  })

  maxBlog = -1
  topAuthor = ''

  for (let author  in blogCounts) {
    if(blogCounts[author] > maxBlog)
    {
      maxBlog = blogCounts[author]
      topAuthor = author
    }

  }

  return {author : topAuthor,
          blog : maxBlog
  }

}

  
module.exports = {
    dummy, totalLikes, favBlog, mostBlog
}