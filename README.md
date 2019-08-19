# aws-codepipeline-playground

learn [AWS CodePipeline](https://aws.amazon.com/codepipeline/)

### Using CodeBuild for a "custom" CodePipeline deploy phase

CodeBuild gives you a amz linux server and you can run whatever you want.  This is an example using it for the "deployment" phase.

> During the "build" phase in `buildspec.yml`, the `post_build` command runs `mv deploy-buildspec.yml buildspec.yml`.  The newly renamed `buildspec.yml` is what gets used in the "deploy" phase.

![](https://www.evernote.com/l/AAEkOojbyctN75VbQiLP8fFMkUGDRHzdSXoB/image.png)

![](https://www.evernote.com/l/AAFU2st8OqlCRKXxHsA7YuWmwGmo1OXtvAYB/image.png)

### Exporting Pipeline Definition/Metadata

> via [`CodePipeline.getPipeline`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CodePipeline.html#getPipeline-property) method

```js
node scripts/get-pipeline.js > /pipeline-definition-export.json
```