module.exports = (app)=>{
	app.get('/', (req, res)=>{
		app.app.controllers.index.controllerIndex(app,req,res)
	});

	app.post('/autenticar', (req,res) => {
		app.app.controllers.index.controllerAutenticar(app,req,res)
	})
}