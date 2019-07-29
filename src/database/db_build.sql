BEGIN ;
DROP TABLE IF EXISTS cities CASCADE;
CREATE TABLE cities(
   id SERIAL PRIMARY KEY ,
   city_name VARCHAR (255) NOT NULL,
   country VARCHAR (255) NOT NULL 
);

INSERT INTO cities (city_name , country) VALUES 
('AlBera','Palestine'),
('Jerusalem','Palestine'),
('Amman','Jordan'),
('Dubai','UAE'),
('Barselona','Spain'),
('Venice','Italy'),
('Damascus','Syria'),
('Cairo','Egypt'),
('Rio de Janeiro','Brazil'),
('Lisbon','Portugal') ;

COMMIT;