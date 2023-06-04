import React, { useState, useContext } from 'react';
import PageContext from '../../PageContext';
import music from '../../images/music.png';
import movie from '../../images/movie.png';

const InstagramPosts = () => {
  const { instagramPosts } = useContext(PageContext);
  const [activePosts, setActivePosts] = useState([]);

  const handlePostClick = (post) => {
    const isActive = activePosts.includes(post.id);
    if (isActive) {
      setActivePosts(activePosts.filter((id) => id !== post.id));
    } else {
      setActivePosts([...activePosts, post.id]);
    }
  };

  const getHashtags = (caption) => {
    const regex = /#[a-zA-Z0-9_]+/g;
    const hashtags = caption.match(regex) || [];
    return hashtags.map((tag) => (
      <button key={tag} className="hashtag-button">{tag}</button>
    ));
  };

  const filterDescription = (description) => {
    const index = description.indexOf('#');
    return index !== -1 ? description.substring(0, index) : description;
  };

  const getImageForDescription = (description) => {
    if (description.includes('#music')) {
      return music;
    } else if (description.includes('#movie')) {
      return movie;
    }
    return null;
  };

  return (
    <div className="instagram-posts">
      {instagramPosts.map((post, index) => (
        <div
          key={post.id}
          className={`post-container ${activePosts.includes(post.id) ? 'active' : ''}`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="post-image-container" onClick={() => handlePostClick(post)}>
            {activePosts.includes(post.id) ? (
              <div className="image-overlay">
                <div className="image-description">
                  <img src={getImageForDescription(post.caption)} alt="Category" />
                  {filterDescription(post.caption)}
                </div>
                {getHashtags(post.caption)}
              </div>
            ) : (
              <>
                <img src={post.media_url} alt="Instagram Post" className="post-image" />
                <div className="image-description">
                  <img src={getImageForDescription(post.caption)} alt="Category" />
                  {filterDescription(post.caption)}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
