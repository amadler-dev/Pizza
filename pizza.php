<?php
/**
 * Plugin Name:       Pizza
 * Description:       Pizza Block for Gutenberg.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Amaztia Adler
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pizza
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Add image link to Rest API
 * URL: /wp-json/wp/v2/pizza
 */
function register_rest_images(){
    register_rest_field( array('pizza'),
        'image',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}
add_action('rest_api_init', 'register_rest_images' );


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function pizza_init() {

	wp_enqueue_script('cookies', '/wp-content/plugins/pizza/cookies.js');

	add_theme_support( 'post-thumbnails' ); 
	add_post_type_support( 'pizza', 'thumbnail' );    

	register_block_type( __DIR__ . '/build' );

	/**
	 * Create custom post type for PIZZA with title, image and link to every PIZZA.
	 */
	register_post_type (
		'pizza',
	array (
		'labels' => array(
			'name'          =>  'Pizzas',
			'singular_name' =>  'Pizza',
			'menu_name'     =>  'Pizza',
			'all_items'     =>  'All Pizza Posts',
			'add_new'       =>  'Add A Pizza',
			),
		'public'   		 => true,
		'publicly_queryable' => true,
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-food',
		'menu_position'  => 4,
		'supports' => array(
			'post-formats',
			'title',
			'thumbnail',
			'excerpt',
		),
		'show_in_admin_bar' =>  true,
		)
	);
}
add_action( 'init', 'pizza_init' );
