import React, { FC } from 'react';
import { PostProps } from '../reducer/post';
import { Carousel, Image } from 'antd';

interface PostImagesProps {
  images: PostProps['mainPosts'][0]['images'];
}

export const PostImages: FC<PostImagesProps> = ({ images }) => {
  if (!images) {
    return null;
  }

  return (
    <div>
      <Image.PreviewGroup>
        <Carousel
          autoplay
          infinite={false}>
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              preview={{ getContainer: '#root' }}
            />
          ))}
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
};

export default null;
