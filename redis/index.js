const redis = require("redis");
const bluebird = require("bluebird");

/**
 * Redis class to working with redis.
 * @class
 */

class Redis {
    /**
     * Constructor conected with Redis client
     * @constructor
     */
    constructor() {
        bluebird.promisifyAll(redis.RedisClient.prototype);
        bluebird.promisifyAll(redis.Multi.prototype);

        this.client = redis.createClient();

        this.client.on('error', (err) => {
            console.log(err)
        });
    }

    /**
     * set function save data to redis
     * @param {string} key - Redis key.
     * @param {Object} value - Redis value.
     * @return {Object} data.
     */
    set(key, value) {
        return this.client.setAsync(key, JSON.stringify(value))
    }

    /**
     * set function save data to redis
     * @param {string} key - Redis key.
     * @param {Object} value - Redis value.
     * @return {Object} data.
     */
    async setex(key, ttlseconds = 1, value = 0) {
        return this.client.setexAsync(key, ttlseconds, JSON.stringify(value));
    }

    /**
     * delete function delete key from redis
     * @param {string} key - Redis key.
     * @return {Object} data.
     */
    async delete(key) {
        return this.client.delAsync(key)
    }

    /**
     * update function updated redis event data
     * @param {string} key - Redis key.
     * @param {Object} value - Redis value.
     * @return {Object} data.
     */
    async update(key, value) {
        try {
            const redisData = await this.get(key) || {};
            return this.set(key, Object.assign({ redisData }, value));
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * get function get data to redis
     * @param {string} key - Redis key.
     * @return {Object} data.
     */
    async get(key) {
        const event = await this.client.getAsync(key);
        try {
            return JSON.parse(event)
        } catch (e) {
            return
        }
    }

    /**
     * sadd function set in array unique values;
     * @param {string} key - Redis key.
     * @param {string} value - Redis value.
     * @return {Object} data.
     */
    async sadd(key, value) {
        return this.client.saddAsync(key, value);
    }

    /**
     * sadd function set in array unique values;
     * @param {string} key - Redis key.
     * @return {Object} data.
     */
    async smembers(key) {
        return this.client.smembersAsync(key.toString());
    }

    /**
     * Sets expiration time of key;
     * @param {string} key - Redis key.
     * @param {integer} TTL - Expiration time in seconds.
     * @return {Boolean}.
     */
    async expire(key, seconds) {
        return this.client.expireAsync(key, seconds);
    }

    /**
     * srem function delete key in object;
     * @param {string} key - Redis key.
     * @param {string} value - Redis value.
     * @return {Object} data.
     */
    async srem(key, value) {
        return this.client.sremAsync(key.toString(), value.toString());
    }
}

module.exports = new Redis();
