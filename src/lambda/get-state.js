// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
const sumpin = [{
    title: 'Something',
    id: 1,
    done: false
  },
  {
    title: 'Sumpin else',
    id: 2,
    done: false
  },
  {
    title: 'Even more',
    id: 3,
    done: false
  }
]

export const handler = async () => ({
  statusCode: 200, // http status code
  body: JSON.stringify(sumpin)
})

