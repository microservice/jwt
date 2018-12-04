# jwt
An OMG service to build and validate JWT tokens

## Usage

### sign

#### storyscript
```coffee
# Storyscript
encoded = jwt sign data:"hello world" secret:"abc" expiresIn:"2h"
```
#### encoded value
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiaGVsbG8gd29ybGQiLCJpYXQiOjE1NDM5MjMyMTAsImV4cCI6MTU0MzkzMDQxMH0.FCsstg1m01goffz0cFYxZIUe0uPybUAqzGRnZPJgGBw
```

### verify

#### storyscript
```coffee
# Storyscript
decoded = jwt verify token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiaGVsbG8gd29ybGQiLCJpYXQiOjE1NDM5MjMyMTAsImV4cCI6MTU0MzkzMDQxMH0.FCsstg1m01goffz0cFYxZIUe0uPybUAqzGRnZPJgGBw" secret: "abc"
```
#### decoded value
```json
{
  "data": "hello world",
  "iat": 1543923210,
  "exp": 1543930410
}
```
