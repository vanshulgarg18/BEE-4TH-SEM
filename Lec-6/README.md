
test> show db

MongoshInvalidInputError: [COMMON-10001] 'db' is not a valid argument for "show".

test> show dbs

admin        40.00 KiB
config       72.00 KiB
local        72.00 KiB
patientdata  80.00 KiB
test          8.00 KiB
uber-clone    8.00 KiB

test> use g13
switched to db g13

g13> use g13
already on db g13

g13> show collections

g13> use collections
switched to db collections

collections> show collections

collections> use g13
switched to db g13

g13> show collections
collection_name

g13> db.users.insertOne({ _id: 2, name: "Jojo"})
{ acknowledged: true, insertedId: 2 }

g13>


g13> db.users.insertOne({ _id: 1, name: "kojo"})
{ acknowledged: true, insertedId: 1 }


g13> show dds
MongoshInvalidInputError: [COMMON-10001] 'dds' is not a valid argument for "show".


g13> show dbs
admin         40.00 KiB
config        96.00 KiB
g13          112.00 KiB
local         72.00 KiB
patientdata   80.00 KiB
test           8.00 KiB
uber-clone     8.00 KiB


g13> use g13
already on db g13

g13> show collections
collection_name
users


g13> show users
[]


g13>
