const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log("Connected successfully to MongoDB");

        // Database and collection
        const database = client.db('testdb'); // Replace with your database name
        const collection = database.collection('testcollection'); // Replace with your collection name

        // Insert a document
        const result = await collection.insertOne({ name: 'John Doe', age: 30 });
        console.log(`Inserted document with _id: ${result.insertedId}`);

        // Find documents
        const documents = await collection.find({}).toArray();
        console.log('Documents:', documents);

        // Update a document
        const updateResult = await collection.updateOne(
            { name: 'John Doe' },
            { $set: { age: 31 } }
        );
        console.log(`Matched ${updateResult.matchedCount} document(s) and modified ${updateResult.modifiedCount} document(s)`);

        // Delete a document
        const deleteResult = await collection.deleteOne({ name: 'John Doe' });
        console.log(`Deleted ${deleteResult.deletedCount} document(s)`);
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
