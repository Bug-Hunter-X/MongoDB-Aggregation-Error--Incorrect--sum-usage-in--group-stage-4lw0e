```javascript
db.collection.aggregate([
  {$match: { /*some query*/ }},
  {$addFields: {anotherField: {$toDouble: "$anotherField"}}}, //Convert to number
  {$group: {_id: "$fieldName", total: {$sum: "$anotherField"}}}, //Correct aggregation
  {$sort: {total: -1}}
]);
```