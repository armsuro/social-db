class QueryBuilder {

	constructor(initialState = {limit: 10, offset: 0}) {
		if (typeof initialState == "string") initialState = JSON.parse(initialState);
		this.query = initialState;
	}

	static fromProps(props) {
		const qb = new QueryBuilder();

		if (props.limit) qb.setLimit(props.limit);
		if (props.offset) qb.setOffset(props.offset);
		if (props.where) qb.where(props.where);
		if (props.order) qb.order(props.order);
		
		return qb;
	}
	
	setLimit(value) {
		this.query.limit = parseInt(value);

		return this;
	}

	setOffset(value) {
		this.query.offset = parseInt(value);

		return this;
	}

	where(condition) {
		if (typeof condition != "object") throw new Error("Unacceptable value in where condition");
		if (!this.query.where) return this.query.where = condition;

		this.query.where = Object.assign(this.query.where, condition);

		return this;
	}

	order(conditions) {
		let orders = [];

		for (let i in conditions) {
			orders.push([conditions[i].field, conditions[i].direction]);
		}

		this.query.order = orders;

		return this;
	}

	getQuery() {
		return this.query;
	}

	toJSON() {
		return this.query;
	}

	toString() {
		return JSON.stringify(this.query);
	}
}

module.exports = QueryBuilder;