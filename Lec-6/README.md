#sem4repo
# lec-6

Microsoft Windows [Version 10.0.26100.3194]
(c) Microsoft Corporation. All rights reserved.

C:\Users\prabh>mongosh
Current Mongosh Log ID: 67b72f785bf866f49d79a1b5
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.6
Using MongoDB:          8.0.4
Using Mongosh:          2.3.6

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/




To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.




------
   The server generated these startup warnings when booting
   2025-02-15T10:02:14.254+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

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
