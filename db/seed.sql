create table product (
    product_id serial primary key,
    name varchar(40),
    description varchar(80),
    price int,
    image_url text
);

insert into product 
(name, description, price, image_url)
values 
('milk', '2%', 3, 'https://lh3.googleusercontent.com/proxy/nGjcCYGU2Gdkkyaa8PL_w85HO64zSR1bD74iqP7kK4wULHrEvEZdojniuk2H2yHxo-JpJhv2y3JIDZ5wvLxtmpvaA9ttgCsOsmCwpq0YRfSTEiQN5DcaRVUbAFvmv7PjBomDC20GihNoCWPd0xWRf1hC-Q'),
('string cheese', 'mozzerella', 5, 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/products/salsify-product-packaging/00715_RFS_Strng_Mzzrll_12oz_12pk_Frnt.png'),
('eggs', 'large', 2, 'https://m.wic.ca.gov/images/WAFL-HeaderGraphics/Icon/Eggs-HeaderIcon2.png'),
('apples', 'organic granny', 4, 'https://www.stemilt.com/wp-content/uploads/2016/07/GrannySmith-packaging-Organic-640x541.png');