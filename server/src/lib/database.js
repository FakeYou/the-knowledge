import { MongoClient } from 'mongodb';

export default class Database {
	connection = null;

	async connect() {
		console.log(`Connecting to database at ${process.env.DATABASE_URL}`);
		this.connection = await MongoClient.connect(process.env.DATABASE_URL);
	}

	collection(name) {
		return this.connection.collection(name);
	}

	close() {
		this.connection.close();
	}
}
