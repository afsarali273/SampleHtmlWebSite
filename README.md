- How to run

```
make sure mysql is up and running on localhost with port 3306
then run DBQuery.sql queries into the mysql workbench to create Tables

npm install

npm run local
```

- from postman you can create new person details by using `POST http://localhost:3300/addPerson`
- You can validate persons data added to DB by using `GET http://localhost:3300/persons` api call from postman
