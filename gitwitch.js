class GitWitch {
	constructor(
       object
	){
    
		this.parser = object.parser;
		this.runner = object.runner;
		this.formatter = object.formatter;




	}

	process(input) {return new Promise((resolve,reject)=>
		resolve(input)


		) }


}

module.exports = GitWitch