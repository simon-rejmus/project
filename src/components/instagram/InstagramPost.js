import React, { useState, useContext, useEffect } from 'react';
import PageContext from '../../PageContext';
import music from '../../images/music.png';
import movie from '../../images/movie.png';
import { RiLoader5Fill } from 'react-icons/ri';

const InstagramPosts = () => {
  const { filteredInstagramPosts, setFilteredInstagramPosts, instagramPosts } = useContext(PageContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [originalInstagramPosts, setOriginalInstagramPosts] = useState(instagramPosts);

  //LOADING IMAGES
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [originalInstagramPosts]);

  //CREATING BUTTONS FOM HASHTAGS
  const getHashtags = (caption) => {
    const regex = /#[a-zA-Z0-9_]+/g;
    const hashtags = caption.match(regex) || [];
    return hashtags.map((tag) => (
      <button
        key={tag}
        className="hashtag-button"
        onClick={() => handleHashtagClick(tag)}
      >
        {tag}
      </button>
    ));
  };

  //CUTTING OUT THE TITLE
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

  const getThirdImage = (post) => {
    if (post.media_type === 'CAROUSEL_ALBUM' && post.children?.data.length >= 2) {
      return post.children.data[2].media_url;
    }
    return null;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleHashtagClick = (hashtag) => {
    setIsLoading(true);

    setTimeout(() => {
      const filteredPosts = instagramPosts.filter((post) =>
        post.caption.toLowerCase().includes(hashtag.toLowerCase()) && !post.caption.toLowerCase().includes('reels')
      );
      setOriginalInstagramPosts(instagramPosts);
      setFilteredInstagramPosts([...filteredPosts]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="instagram-posts">
      {isLoading ? (
        <div className="loading">
          <RiLoader5Fill />
        </div>
      ) : (
        <>
          {filteredInstagramPosts.length > 0 ? (
            filteredInstagramPosts.map((post, index) => {
              if (
                post.media_type === "REEL" ||
                (post.media_type === "CAROUSEL_ALBUM" && (!post.children || post.children.data.length <= 1))
              ) {
                return null;
              }
              const thirdImage = getThirdImage(post);

              return (
                <div
                  key={post.id}
                  className={`post-container`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="post-container">
                    <img
                      src={thirdImage || post.media_url}
                      alt="Instagram Post"
                      className="post-image"
                      onClick={() => handleImageClick(thirdImage || post.media_url)}
                    />
                    <div className="image-description">
                      <img src={getImageForDescription(post.caption)} alt="Category" />
                      {filterDescription(post.caption)}
                    </div>
                    <div className="hashtags">
                      {getHashtags(post.caption)}
                      <div className="empty-gap" />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-images">
              <h2>No images found</h2>
            </div>
          )}

          {selectedImage && (
            <div className="overlay" onClick={handleCloseClick}>
              <img src={selectedImage} alt="Full-screen" className="fullscreen-image" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InstagramPosts;