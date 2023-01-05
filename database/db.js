import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

const connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-iuxxiv0-shard-00-00.9fm9zse.mongodb.net:27017,ac-iuxxiv0-shard-00-01.9fm9zse.mongodb.net:27017,ac-iuxxiv0-shard-00-02.9fm9zse.mongodb.net:27017/?ssl=true&replicaSet=atlas-12nmtj-shard-0&authSource=admin&retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('DatabAse connection sucessfully')
  } catch (error) {
    console.log('Eroor while connecting with database', error)
  }
}

export default connection
