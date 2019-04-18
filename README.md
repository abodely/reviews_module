# reviews_module
Displays reviews for any given abode and allows users to search within reviews

# CRUD API Routes
|Endpoint                                     |Type    |Operation                          |
|---------------------------------------------|--------|-----------------------------------|
|/home/:homeID/reviews                        |GET     |Get all reviews for listing        |
|/home/:homeID/reviews                        |POST    |Add review for listing             |
|/home/:homeID/reviews/:reviewID/updateReview |PATCH   |Update existing review for listing |
|/home/:homeID/reviews/:reviewID/deleteReview |DELETE  |Delete existing review on listing  |

## Related Projects:


## Installing dependencies
From within the root directory

```sh
npm install -g webpack
npm install
npm run execute
```