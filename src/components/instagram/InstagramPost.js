import React, { useEffect, useState } from 'react';

const InstagramPost = () => {
  const [postImage, setPostImage] = useState('');

  useEffect(() => {
    const fetchPostImage = async () => {
      try {
        const response = await fetch('https://www.instagram.com/p/CZz_l_EsOQY/media/?size=l');
        const data = await response.json();
        const postUrl = data.graphql.user.edge_owner_to_timeline_media.edges[0].node.display_url;
        setPostImage(postUrl);
      } catch (error) {
        console.error('Error fetching post image:', error);
      }
    };

    fetchPostImage();
  }, []);

  return (
    <div>
        <h1>Fetch:</h1>
        <img src={postImage} alt="Instagram Post" />
        <h1>Code:</h1>
        </div>
  );
};

export default InstagramPost;
