<?php
/**
 * @author      Jesús Olazagoitia (@goiblas)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Block Restrict Content
 * Version:     1.0.0
 * Author:      Jesús Olazagoitia
 * Author URI:  https://goiblas.com
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') || exit;

function block_restrict_content_register_asset() {

	wp_register_script(
		'block_restrict_content',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	global $wp_roles;

	$all_roles = array_values($wp_roles->get_names());

	register_block_type( 'block-restrict-content/block-restrict-content', array(
		'editor_script' => 'block_restrict_content'
	 ) );
}

add_action( 'init', 'block_restrict_content_register_asset' );
