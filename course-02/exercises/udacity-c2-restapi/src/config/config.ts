export const config = {
  "dev": {
    "username": process.env.DB_1_USERNAME,
    "password": process.env.DB_1_PASSWORD,
    "database": process.env.DB_1_DB,
    "host": process.env.DB_1_HOST,

    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_S3_BUCKET,

    "jwt_secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
