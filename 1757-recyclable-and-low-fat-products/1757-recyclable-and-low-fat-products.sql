# Write your MySQL query statement below
-- LeetCode 1757: Recyclable and Low Fat Products
 -- LeetCode 1757: Recyclable and Low Fat Products
SELECT product_id
FROM Products
WHERE low_fats = 'Y'
  AND recyclable = 'Y';


