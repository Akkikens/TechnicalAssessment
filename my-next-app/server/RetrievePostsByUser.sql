-- Retrieve posts by a specific user
SELECT * FROM posts WHERE user_id = $1;

-- Count comments on a post
SELECT COUNT(*) FROM comments WHERE post_id = $1;
