```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {$match: { /*some query*/ }},
  {$group: {_id: "$fieldName", total: {$sum: "$anotherField"}}}, //Error is here
  {$sort: {total: -1}}
]);
```