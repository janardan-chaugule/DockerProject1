CREATE TABLE contacts(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE
);


INSERT INTO contacts(first_name, last_name, email) 
VALUES('Janardan', 'Chaugule', 'jchaugule1990@gmail.com'),
      ('Bhupendrakumar', 'Tiwari', 'bhupendrakumartiwari@live.com'),
      ('Vinay', 'Gandhi', 'vinaygandhi@live.com'),;
