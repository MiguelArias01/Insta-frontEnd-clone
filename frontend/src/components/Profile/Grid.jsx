import GridPost from './GridPost.jsx'

export default function Grid(posts) {
  return (
    <div className="grid grid-cols-3 gap-1 mb-[49px]">
      {posts.posts.length != undefined ?
        posts.posts.map(post => (
          <GridPost key={post.id} url={post} />
        ))
        : "No Posts Yet."}
    </div>
  )
}