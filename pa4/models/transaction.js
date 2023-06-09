'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var TransactionSchema = Schema({
  description: String,
  amount: Number,
  category: String,
  date: Date,
  userId: {type:ObjectId, ref:'user' },
  reconciled: { type: Boolean, default: false }, // New "reconciled" field

} );

module.exports = mongoose.model( 'TransactionItem', TransactionSchema );
