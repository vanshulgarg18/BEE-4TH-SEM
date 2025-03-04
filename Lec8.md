test> show databases
admin      40.00 KiB
config    108.00 KiB
g13        72.00 KiB
local      80.00 KiB
students   72.00 KiB


test> use g13
switched to db g13


g13> show collections
students


g13> db.orders.insertMany( [
...    { _id: 0, name: "Pepperoni", size: "small", price: 19,
...      quantity: 10, date: ISODate( "2021-03-13T08:14:30Z" ) },
...    { _id: 1, name: "Pepperoni", size: "medium", price: 20,
...      quantity: 20, date : ISODate( "2021-03-13T09:13:24Z" ) },
...    { _id: 2, name: "Pepperoni", size: "large", price: 21,
...      quantity: 30, date : ISODate( "2021-03-17T09:22:12Z" ) },
...    { _id: 3, name: "Cheese", size: "small", price: 12,
...      quantity: 15, date : ISODate( "2021-03-13T11:21:39.736Z" ) },
...    { _id: 4, name: "Cheese", size: "medium", price: 13,
...      quantity:50, date : ISODate( "2022-01-12T21:23:13.331Z" ) },
...    { _id: 5, name: "Cheese", size: "large", price: 14,
...      quantity: 10, date : ISODate( "2022-01-12T05:08:13Z" ) },
...    { _id: 6, name: "Vegan", size: "small", price: 17,
...      quantity: 10, date : ISODate( "2021-01-13T05:08:13Z" ) },
...    { _id: 7, name: "Vegan", size: "medium", price: 18,
...      quantity: 10, date : ISODate( "2021-01-13T05:10:13Z" ) }
... ])
{
  acknowledged: true,
  insertedIds: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7 }
}


g13> show collections
orders
students


g13> db.orders.find
[Function: find] AsyncFunction {
  returnsPromise: true,
  apiVersions: [ 1, Infinity ],
  returnType: 'Cursor',
  serverVersions: [ '0.0.0', '999.999.999' ],
  topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
  deprecated: false,
  platforms: [ 'Compass', 'Browser', 'CLI' ],
  isDirectShellCommand: false,
  acceptsRawInput: false,
  shellCommandCompleter: undefined,
  help: [Function (anonymous)] Help
}


g13> db.orders.find()
[
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 2,
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: ISODate('2021-03-17T09:22:12.000Z')
  },
  {
    _id: 3,
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: ISODate('2021-03-13T11:21:39.736Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  }
]


g13> db.orders.aggregate([{$match:{name:"Cheese"}}])
[
  {
    _id: 3,
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: ISODate('2021-03-13T11:21:39.736Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  }
]


g13> db.orders.aggregate([{$match:{name:"Cheese"},{$project:{name:1,price:1}}}])
Uncaught:
SyntaxError: Unexpected token (1:45)

> 1 | db.orders.aggregate([{$match:{name:"Cheese"},{$project:{name:1,price:1}}}])
    |                                              ^
  2 |

g13> db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{name:1,price:1}}}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:73)

> 1 | db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{name:1,price:1}}}])
    |                                                                          ^
  2 |


g13> db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{name:1,price:1}}])
[
  { _id: 3, name: 'Cheese', price: 12 },
  { _id: 4, name: 'Cheese', price: 13 },
  { _id: 5, name: 'Cheese', price: 14 }
]


g13> db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{_id:0,name:1,price:1}}])
[
  { name: 'Cheese', price: 12 },
  { name: 'Cheese', price: 13 },
  { name: 'Cheese', price: 14 }
]


g13> db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{_id:0,name:1,price:1}},totalpizza:{}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:90)

> 1 | db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{_id:0,name:1,price:1}},totalpizza:{}])
    |                                                                                           ^
  2 |


g13> db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{_id:0,name:1,price:1}},totalpizza:{$sum:1}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:90)

> 1 | db.orders.aggregate([{$match:{name:"Cheese"}},{$project:{_id:0,name:1,price:1}},totalpizza:{$sum:1}])
    |                                                                                           ^
  2 |


g13> db.orders.aggregate([ { $group: {_id:"$name"} } ])
[ { _id: 'Pepperoni' }, { _id: 'Vegan' }, { _id: 'Cheese' } ]
g13> db.orders.aggregate([ { $group: {_id:"$name",totalcount:{$sum:1}} } ])
[
  { _id: 'Pepperoni', totalcount: 3 },
  { _id: 'Cheese', totalcount: 3 },
  { _id: 'Vegan', totalcount: 2 }
]


g13> db.orders.aggregate([ { $group: {_id:"$name",pricet:{$sum:1}} } ])
[
  { _id: 'Pepperoni', pricet: 3 },
  { _id: 'Vegan', pricet: 2 },
  { _id: 'Cheese', pricet: 3 }
]


g13> db.orders.aggregate([ { $group: {_id:"$name",price:{$sum:1}} } ])
[
  { _id: 'Pepperoni', price: 3 },
  { _id: 'Vegan', price: 2 },
  { _id: 'Cheese', price: 3 }
]


g13> db.orders.aggregate([ { $group: {_id:"$name",totalcount:{$sum:"$price"}} } ])
[
  { _id: 'Pepperoni', totalcount: 60 },
  { _id: 'Cheese', totalcount: 39 },
  { _id: 'Vegan', totalcount: 35 }
]


g13> 
