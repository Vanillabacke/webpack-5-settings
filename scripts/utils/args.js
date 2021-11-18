// https://github.com/WordPress/gutenberg/blob/e7dfdd59ad60f71e96bb9ac913a5c0a6ea9476ef/packages/scripts/utils/cli.js

const getArgsFromCLI = ( excludePrefixes ) => {
	const args = process.argv.slice( 2 );
	if ( excludePrefixes ) {
		return args.filter( ( arg ) => {
			return ! excludePrefixes.some( ( prefix ) =>
				arg.startsWith( prefix )
			);
		} );
	}
	return args;
};

const getArgFromCLI = ( arg ) => {
	for ( const cliArg of getArgsFromCLI() ) {
		const [ name, value ] = cliArg.split( '=' );
		if ( name === arg ) {
			return value || null;
		}
	}
};



module.exports = {
	getArgFromCLI,
	getArgsFromCLI,
};