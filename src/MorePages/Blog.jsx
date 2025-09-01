// src/pages/Blog.jsx
import React, { useState } from "react";

export default function Blog() {
  const allPostsData = [
    {
      id: 1,
      title: "5 Healthy Breakfast Ideas",
      category: "Healthy",
      date: "Aug 20, 2025",
      author: "Rahul Mishra",
      image: "https://imageirl.imageresizer.io/UIhJ5iJVl2-s895x715-q90.jpg",
      video: "", // No video
      excerpt:
        "Start your day with these nutritious and tasty breakfast ideas...",
      content:
        "Full blog content for Healthy Breakfast Ideas goes here. Add tips, images, and detailed instructions.",
      readTime: "5 min read",
      tags: ["Breakfast", "Healthy", "Tips"],
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Top 10 Summer Beverages",
      category: "Beverages",
      date: "Aug 15, 2025",
      author: "Sneha Verma",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*Q0TYj6W9O_hdFjv3",
      video: "", // autoplay video
      excerpt: "Beat the heat with these refreshing and healthy drinks...",
      content:
        "Full blog content for Summer Beverages. Include recipes and tips for making refreshing drinks.",
      readTime: "4 min read",
      tags: ["Beverages", "Summer", "Recipes"],
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      title: "How to Host a Perfect Dinner Party",
      category: "Events",
      date: "Aug 10, 2025",
      author: "Amit Sharma",
      image:
        "https://www.decasacollections.com/wp-content/uploads/2022/04/Perfect-Dinner-Party-Top-Image-1.jpg",

      excerpt:
        "Tips and tricks to impress your guests with an unforgettable dinner...",
      content:
        "Full blog content for Hosting Dinner Party. Share menu planning, decoration ideas, and tips.",
      readTime: "6 min read",
      tags: ["Dinner", "Party", "Events"],
      likes: 0,
      comments: [],
    },
    {
      id: 4,
      title: "5 Healthy Breakfast Ideas",
      category: "Healthy",
      date: "Aug 20, 2025",
      author: "Rahul Mishra",
      image:
        "https://sunnyhealthfitness.com/cdn/shop/articles/8-best-easy-healthy-breakfast-recipes-01.jpg?v=1613080982",
      excerpt:
        "Start your day with these nutritious and tasty breakfast ideas...",
      content:
        "Full blog content for Healthy Breakfast Ideas goes here. Add tips, images, and detailed instructions.",
      readTime: "5 min read",
      tags: ["Breakfast", "Healthy", "Tips"],
      likes: 0,
      comments: [],
    },
    {
      id: 5,
      title: "Top 10 Summer Beverages",
      category: "Beverages",
      date: "Aug 15, 2025",
      author: "Sneha Verma",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/peach-iced-tea-c5aa1bb.jpg?quality=90&resize=500,454",
      excerpt: "Beat the heat with these refreshing and healthy drinks...",
      content:
        "Full blog content for Summer Beverages. Include recipes and tips for making refreshing drinks.",
      readTime: "4 min read",
      tags: ["Beverages", "Summer", "Recipes"],
      likes: 0,
      comments: [],
    },
    {
      id: 6,
      title: "How to Host a Perfect Dinner Party",
      category: "Events",
      date: "Aug 10, 2025",
      author: "Amit Sharma",
      image:
        "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/how-to-host-your-first-dinner-party-phpgWUQHX",
      excerpt:
        "Tips and tricks to impress your guests with an unforgettable dinner...",
      content:
        "Full blog content for Hosting Dinner Party. Share menu planning, decoration ideas, and tips.",
      readTime: "6 min read",
      tags: ["Dinner", "Party", "Events"],
      likes: 0,
      comments: [],
    },
    {
      id: 7,
      title: "Seasonal Ingredients for Delicious Meals",
      category: "Recipes",
      date: "Aug 5, 2025",
      author: "Pooja Singh",
      image:
        "https://lirp.cdn-website.com/1fc1b1e8/dms3rep/multi/opt/Restaurant+Blog+Images+Nov+2022-1920w.jpg",
      excerpt:
        "Use seasonal ingredients to create meals that are fresh and tasty...",
      content:
        "Full blog content for Seasonal Ingredients. Explain best vegetables, fruits, and proteins.",
      readTime: "5 min read",
      tags: ["Recipes", "Seasonal", "Cooking"],
      likes: 0,
      comments: [],
    },
    {
      id: 8,
      title: "5 Quick & Easy Lunch Recipes",
      category: "Recipes",
      date: "Aug 2, 2025",
      author: "Rahul Mishra",
      image:
        "https://www.chefonline.co.uk/blog/public/storage/image/post_image/post_image_21659433690.jpg",
      excerpt: "Quick recipes for busy days, perfect for a nutritious lunch...",
      content:
        "Full blog content for Quick Lunch Recipes. Provide step-by-step recipes and tips.",
      readTime: "4 min read",
      tags: ["Lunch", "Quick", "Recipes"],
      likes: 0,
      comments: [],
    },
  ];

  const [allPosts, setAllPosts] = useState(allPostsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalPost, setModalPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentInput, setCommentInput] = useState("");

  const postsPerPage = 3;
  const categories = ["All", "Healthy", "Beverages", "Events", "Recipes"];

  const filteredPosts = allPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleLike = (postId) => {
    const updatedPosts = allPosts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setAllPosts(updatedPosts);
  };

  const handleAddComment = (postId) => {
    if (!commentInput) return;
    const updatedPosts = allPosts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, commentInput] }
        : post
    );
    setAllPosts(updatedPosts);
    setCommentInput("");
  };

  return (
    <div className="min-h-screen bg-indigo-50 py-10 px-5 py-40">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        Our Blog
      </h1>

      {/* Featured Post */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">
          Featured Post
        </h2>
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:scale-105 transform transition duration-300 cursor-pointer"
          onClick={() => setModalPost(allPosts[0])}
        >
          {allPosts[0].video ? (
            <video
              src={allPosts[0].video}
              className="w-full md:w-1/2 h-64 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={allPosts[0].image}
              alt={allPosts[0].title}
              className="w-full md:w-1/2 h-64 object-cover"
            />
          )}
          <div className="p-6 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
              {allPosts[0].title}
            </h3>
            <p className="text-indigo-700 mb-2">{allPosts[0].excerpt}</p>
            <div className="flex justify-between text-sm text-indigo-600">
              <span>{allPosts[0].author}</span>
              <span>{allPosts[0].readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <input
          type="text"
          placeholder="Search blog..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-2/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => setModalPost(post)}
          >
            {post.video ? (
              <video
                src={post.video}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex flex-col justify-between h-60">
              <div>
                <h2 className="text-xl font-semibold text-indigo-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-indigo-700 text-sm mb-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-indigo-600">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(post.id);
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  ❤️ Like {post.likes}
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-center col-span-full text-indigo-700">
            No posts found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 rounded ${
                currentPage === idx + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-white border text-indigo-600"
              }`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal: Full Post with Video, Likes, Comments, Social, Tags */}
      {modalPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setModalPost(null)}
              className="absolute top-3 right-3 text-indigo-800 font-bold text-xl"
            >
              &times;
            </button>

            {modalPost.video ? (
              <video
                src={modalPost.video}
                className="w-full h-64 object-cover rounded-lg mb-4"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={modalPost.image}
                alt={modalPost.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}

            <h2 className="text-2xl font-bold text-indigo-900 mb-2">
              {modalPost.title}
            </h2>
            <p className="text-indigo-700 mb-4">{modalPost.content}</p>

            {/* Likes */}
            <button
              onClick={() => handleLike(modalPost.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition mb-4"
            >
              ❤️ Like {modalPost.likes}
            </button>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {modalPost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Comments */}
            <div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                Comments
              </h3>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button
                  onClick={() => handleAddComment(modalPost.id)}
                  className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
                >
                  Add
                </button>
              </div>
              <div className="max-h-40 overflow-y-auto">
                {modalPost.comments.length > 0 ? (
                  modalPost.comments.map((comment, idx) => (
                    <p
                      key={idx}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded mb-1 text-sm"
                    >
                      {comment}
                    </p>
                  ))
                ) : (
                  <p className="text-indigo-600 text-sm">No comments yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
