test> show databases
admin     40.00 KiB
config    72.00 KiB
local     72.00 KiB
students  72.00 KiB

test> use g13
switched to db g13

g13> db.students.insertMany([
...   { name: "Alice", age: 22, city: "New York" },
...   { name: "Bob", age: 25, city: "Los Angeles" },
...   { name: "Charlie", age: 30, city: "Chicago" }
... ])
... 
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67c06c004a2d47a05ccb3a8d'),
    '1': ObjectId('67c06c004a2d47a05ccb3a8e'),
    '2': ObjectId('67c06c004a2d47a05ccb3a8f')
  }
}

g13> db.students.updateOne(
...   { name: "Alice" },  // Filter
...   { $set: { age: 23 } } // Update operation
... )
... 
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

g13> db.students.updateMany(
...   {},  // Empty filter updates all documents
...   { $inc: { age: 1 } } // Increment age by 1
... )
... 
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}

g13> db.students.replaceOne(
...   { name: "Bob" }, // Filter
...   { name: "Robert", age: 28, city: "San Francisco" } // New document (entire replacement)
... )
... 
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

g13> db.students.find().pretty()
... 
[
  {
    _id: ObjectId('67c06c004a2d47a05ccb3a8d'),
    name: 'Alice',
    age: 24,
    city: 'New York'
  },
  {
    _id: ObjectId('67c06c004a2d47a05ccb3a8e'),
    name: 'Robert',
    age: 28,
    city: 'San Francisco'
  },
  {
    _id: ObjectId('67c06c004a2d47a05ccb3a8f'),
    name: 'Charlie',
    age: 31,
    city: 'Chicago'
  }
]

g13> db.students.deleteOne({ name: "Charlie" })
... 
{ acknowledged: true, deletedCount: 1 }

g13> db.students.find().pretty()
[
  {
    _id: ObjectId('67c06c004a2d47a05ccb3a8d'),
    name: 'Alice',
    age: 24,
    city: 'New York'
  },
  {
    _id: ObjectId('67c06c004a2d47a05ccb3a8e'),
    name: 'Robert',
    age: 28,
    city: 'San Francisco'
  }
]
