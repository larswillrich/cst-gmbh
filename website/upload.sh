aws s3 sync ./cst-gmbh/build s3://larswillrich.com/cst-gmbh

aws cloudfront create-invalidation --distribution-id EEQPMKT383BNR --paths "/cst-gmbh/*"