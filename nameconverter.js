
const fs = require( 'fs' );
const path = require( 'path' );

fs.readdir( './', ( err, folders ) => {

	if( err ) {

		console.error( err );

		return;

	}

	folders.forEach( ( folder ) => {

		if( !fs.lStatSync( `./${ folder }` ).isDirectory( ) ) return;

		fs.readdir( `./${ folder }/` ).readdir( ( err, files ) => {

			if( err ) {

				console.error( err );

				return;

			}

			files.forEach( ( file ) => {

				const regEx = file.match( /\d+/ );

				if( regEx ) {

					const ext = path.extname( file );

					fs.rename( `./${ folder }/${ file }`, `${ match[ 0 ] }.${ ext }`, ( err ) => console.log( err ) );

				} else {

					const split = file.split( '_' );

					if( split.length != 2 ) return;

					fs.rename( `./${ folder }/${ file }`, `./${ split[ 1 ] }` );

				}

			} );

		} );

	} );

} );