const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

// const reverse = require('../utils/for_testing').reverse

// test('reverse of a', () => {
//   const result = reverse('a')

//   assert.strictEqual(result, 'a')
// })

// test('reverse of react', () => {
//   const result = reverse('react')

//   assert.strictEqual(result, 'tcaer')
// })

// test('reverse of saippuakauppias', () => {
//   const result = reverse('saippuakauppias')

//   assert.strictEqual(result, 'saippuakauppias')
// })

// const average = require('../utils/for_testing').average

// describe('average', () => {
//   test('of one value is the value itself', () => {
//     assert.strictEqual(average([1]), 1)
//   })

//   test('of many is calculated right', () => {
//     assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
//   })

//   test('of empty array is zero', () => {
//     assert.strictEqual(average([]), 0)
//   })
// })

test("dummy returns one" , () =>{
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
      }
    ]


    const listWithTwoBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 7,
            __v: 0
          }
      ]


    test('of empty list is zero', () => {
        const result = listHelper.totalLikes([])
        assert.strictEqual(result, 0)
      })
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      assert.strictEqual(result, 5)
    })

    test('of a bigger list calculated right', () => {
        const result = listHelper.totalLikes(listWithTwoBlog)
        assert.strictEqual(result, 12)
    })


})

describe("favorite blog" , () =>{
    const listWithTwoBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12,
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            __v: 0
          }
      ]


    test("favorite blog", () => {
        const result = {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        }
        favBlog = listHelper.favBlog(listWithTwoBlog)

        assert.deepStrictEqual(favBlog, result)
    })
})


describe("top" , () =>{
    const listWithTwoBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12,
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            __v: 0
          }
      ]


    test("top Blog", () => {
        const result = {
            author: "Edsger W. Dijkstra",
            blogs: 2
        }

        topBlog = listHelper.mostBlog(listWithTwoBlog)

        assert.deepStrictEqual(topBlog, result)
    })
})