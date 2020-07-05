module.exports = (app)=>{
	app.get('/', (req, res)=>{
		app.app.controllers.index.controllerIndex(app,req,res)
	});
}