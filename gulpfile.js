'use strict';

// Generic
const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );

// Process stylesheets
gulp.task( 'stylesheets', function() {
    return gulp.src( './scss/examples.scss' )
        .pipe( sass( {
			includePaths: [ './scss/' ],
			outputStyle: 'compressed'
        } ).on( 'error', sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( './css' ) );
} );

gulp.task( 'watch', function() {
	gulp.watch( './scss/**/*', [ 'stylesheets' ] );
} );

// Gulp default process
gulp.task( 'default', [ 'stylesheets' ] );
