// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export const handler = async ({body}) => {

  console.log(JSON.parse(body))

  return {
    statusCode: 200
  }
}

