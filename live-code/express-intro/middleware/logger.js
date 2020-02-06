const logger = (req, res, next) => {
	console.log("Boom!");
	next();
};

module.exports = logger;