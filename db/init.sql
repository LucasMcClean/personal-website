DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  post_id text PRIMARY KEY,
  title text NOT NULL,
  publish_date text NOT NULL,
  tags text[] NOT NULL
);