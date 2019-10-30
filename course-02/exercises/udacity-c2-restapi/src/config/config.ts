export const config = {
  "dev": {
    "username": `${DB_1_USERNAME}`,
    "password": `${DB_1_PASSWORD}`,
    "database": `${DB_1_DB}`,
    "host": `{DB_1_HOST}`,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
