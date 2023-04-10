# Instaragm 💩


## `Project Objective`
To create a functional social media platform similar to Instagram, allowing users 
to share photos and videos and interact with each other's posts utlizing React as our front-end framework and Python, Django, and PostgreSQL for our back-end. 

### `MVP`
Re-create two essential Instagram pages: the homepage aka "the feed" and the user profile aka "the grid". Implement functional user authorization using the built-in Django authorization, which will allow users to create accounts, log in to the accounts, create posts on their own page and intereact with other users content with likes and comments. Practice using Tailwind to style our components and integrate Headless UI components for streamlined development. Successfully deploy the frontend using Vercel and the backend using Heroku. 

### `Post MVP`
Create individual post pages as part of a user feed; implement a "dislike" feature that will replace any post with enough dislikes with a random picture.

### `Division of Labor`
In general, Miguel will be leading the charge for frontend component design and Jasmine/Joe will be handling the backend architecture. We plan to all collaborate on visual design and learn to use Tailwind and Headless UI together. For a more in depth breakdown of the division of labor, please see our [Notion Board](https://www.notion.so/b7987fb8ec134acb8f88fe8920586b35?v=787ef2ffb9b94130ad2a35d453afbe32&pvs=4).

## `Backend`
We will be using Python and Django for our backend architecture, Postgresql for our data storage and retrieval and Heroku for deployment.

### `Schema`
Our database will be comprised of User, Post, and Comment models with keys linking these three models to track the interactions between them.

```python
class Profile(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=100, blank=True, null=True)
    username = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.CharField(max_length=1000, blank=True, null=True)
    posts = ArrayField(models.IntegerField(), blank=True, null=True)
    likes = ArrayField(models.IntegerField(), blank=True, null=True)
    dislikes = ArrayField(models.IntegerField(), blank=True, null=True)

    def __str__(self):
        return f'{self.username}'


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.CharField(max_length=100, blank=True, null=True)
    caption = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    liked_by = ArrayField(models.IntegerField(), blank=True, null=True, default=list)
    dislike_by = ArrayField(models.IntegerField(), blank=True, null=True, default=list)

    def __str__(self):
        return f'{self.caption} by {self.author}'


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.text} by {self.user} on {self.post}'
```
### `Routes`
Our backend routes will allow for users to create profiles, log in to existing profiles and consequently create image posts with captions, comment on existing posts, and like/dislike posts. We have implemented the built-in admin functionality of Django to administer our database with the Django GUI. Additionally we are using the authorization and authentication native to Django's Rest Framework package.

```python
# Homepage
urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    # Client Side
    path('', defaultView, name="default"),
    path('api/', apiOverview, name="api-endpoints"),
    path('api/create-comment/', createComment, name="create-comment"),
    path('api/create-post/', CreatePost, name="create-post"),
    path('api/create-profile/', CreateProfile, name="create-profile"),
    path('api/dislike/', dislike, name="dislike-post"),
    path('api/home/', mainFeed, name="main-feed"),
    path('api/like/', like, name="like-post"),
    path('api/sign-up/', SignUp.as_view(), name="sign-up"),
    path('api/users/<str:user_id>', GetUser, name="user-profile"),
    # Authentication
    path('api/login/', AuthenticateUser.as_view(),  name='create-token'),
    path('api/verify/', VerifyAuthentication.as_view(), name='my-view'),
]
```
## `Frontend`
The frontend of our application will be built using React. Miguel will spearhead client-side development, using the below diagrams to sketch the skeleton of the application while the backend is still in development. Once the backend API is able to reliably supsupply data to the client, we will utilize the Axious library to make all of our API calls. 

### `Application Overview`
We intend to use Routes from react-router-dom to structure the overall architecture of our site. In order to reach our stated MVP, we will only need to create routes for three individual pages while all other functionality will be handled by the page components themselves.

```javascript
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}
```
### `Whimsical`

[<img src="whimsical.png" />]

### `Component Tree`

<img src="components.jpg" />







