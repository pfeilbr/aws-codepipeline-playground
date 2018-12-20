const AWS = require('aws-sdk')

const exec = async () => {
    const pipeline = new AWS.CodePipeline()
    const resp = await pipeline.getPipeline({name: "pipeline-01"}).promise()
    console.log(JSON.stringify(resp, null, 2))
}

exec()


