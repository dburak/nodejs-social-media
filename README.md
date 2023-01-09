# NodeJS Social Media REST API with MongoDB Atlas

## Example Endpoints

### POST - REGISTER A USER
    http://localhost:8800/api/auth/register HTTP/1.1
    content-type: application/json

    {
    "username": "burak",
    "email": "burak@gmail.com",
    "password": "123456"
    }

### POST - LOGIN USER

    http://localhost:8800/api/auth/login HTTP/1.1
    content-type: application/json

    {
    "email": "burak@gmail.com",
    "password": "123456"
    }
    
### GET - GET A USER
    http://localhost:8800/api/users/63bad28ff3678bf28ea9a1ea HTTP/1.1
    content-type: application/json
    
### PUT - UPDATE A USER
    http://localhost:8800/api/users/63bad28ff3678bf28ea9a1ea HTTP/1.1
    content-type: application/json

    {
    "userId": "63bad28ff3678bf28ea9a1ea",
    "email": "updated_burak@gmail.com"
    }
    
### DELETE - DELETE A USER
    http://localhost:8800/api/users/63bad28ff3678bf28ea9a1ea HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63bad28ff3678bf28ea9a1ea"
    }
    
### PUT - FOLLOW A USER
    http://localhost:8800/api/users/63b88528a3274340bcc637d8/follow HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735"
    }
    
### PUT - UNFOLLOW A USER
    http://localhost:8800/api/users/63b88528a3274340bcc637d8/unfollow HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735"
    }
    
### POST - CREATE A POST
    http://localhost:8800/api/posts HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735",
    "desc": "this is my first post",
    "img": "image.png"
    }
    
### PUT - UPDATE A POST
    http://localhost:8800/api/posts/63bc2fbb95abd27c7757dca6 HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735",
    "desc": "this is a updated post"
    }
    
 ### GET - GET A POST
    http://localhost:8800/api/posts/63bc2fbb95abd27c7757dca6 HTTP/1.1
    content-type: application/json
    
 ### DELETE - DELETE A POST
    http://localhost:8800/api/posts/63bc2fbb95abd27c7757dca6 HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735"
    }
    
 ### PUT - LIKE AND DISLIKE A POST
    http://localhost:8800/api/posts/63b9cbd6766c2e2822d2c86e/like HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735"
    }
        
 ### GET - GET A POST
    http://localhost:8800/api/posts/63b9bdaceeece9f42be8c3c3 HTTP/1.1
    content-type: application/json
    
### GET - GET TIMELINE POSTS
    http://localhost:8800/api/posts/timeline/all HTTP/1.1
    content-type: application/json
    
    {
    "userId": "63b817dda457e7dc75d76735"
    }
