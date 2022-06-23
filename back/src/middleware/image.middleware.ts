import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as AWS from "aws-sdk";
import * as dotenv from "dotenv";
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION,
});

@Injectable()
export class ImageMiddleware {
  constructor(private configService: ConfigService) {}
  s3 = new AWS.S3();

  async uploadImage(file: Express.Multer.File) {
    console.log(`file: ${file}`);
    const AWS_S3_BUCKET = this.configService.get("AWS_BUCKET_NAME");
    const params = {
      Bucket: AWS_S3_BUCKET,
      Key: String(Date.now() + "_" + file.originalname),
      Body: file.buffer,
      ACL: "public-read",
    };
    try {
      const response = await this.s3.upload(params).promise();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteImage(key: string) {
    const response = await this.s3
      .deleteObject({
        Bucket: this.configService.get("AWS_BUCKET_NAME"),
        Key: key,
      })
      .promise();
    return response;
  }
  catch() {
    return `삭제에 실패했습니다`;
  }
}