import mongoose from 'mongoose'

import autoIncriments from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  country: String,
  team: String,
})

autoIncriments.initialize(mongoose.connection)
userSchema.plugin(autoIncriments.plugin, 'playerList')

const user = mongoose.model('playerList', userSchema)
export default user
