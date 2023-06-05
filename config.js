module.exports = {
  // Name of the container file excluding the file extension (e.g. "name" yields "name.js" when published)
  containerName: "splittestdist",
  // Development S3 container
  s3BucketDev: "splittestdist/jsdev",
  // Production S3 container
  s3BucketPRD: "splittestdist/js",
  // S3 Region
  s3Region: "us-east-1",
};
