/**
 * GET /
 * Compete page.
 */
exports.compete = function(req, res) {
	res.render('compete', {
		title: 'Compete'
	}); 
};