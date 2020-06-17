// @flow strict
import React from 'react';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import { Disqus } from 'gatsby-plugin-disqus';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  let disqusConfig = {
    identifier: post.id,
    title: post.title,
  };

  return (
    <div className={styles['post']}>
      <div className={styles['post__tag']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>
      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {/* {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />} */}
      </div>

      <div className={styles['post__comments']}>
        <Disqus config={disqusConfig} />
      </div>
    </div>
  );
};

export default Post;
