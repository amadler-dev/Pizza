=== Pizza ===
Contributors:      Amaztia Adler
Tags:              block
Tested up to:      6.1
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Welcome to the Create Pizzas Blocks plugin. CBP is a WordPress plugin used to make blocks of pizzas on your frontend that sent the user the any pizza source.

The plugin is separate to php file called 'custom_filed_pizza' that create CPT (custom post type) of pizzas and let you create as many pizzas as you want. The custom post requires title, image and destination link.
The second file is 'pizza_block' that let you use the custom pizzas as a block for every posts you make. It create headline, image and button to the source page.

the plugin build with node.js and npm.
Most of the code is inside edit.js for now.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/pizza` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Support ==

Contact me on my email: amadler.dev@gmail.com

== TO DO == 

# Handle input pizza post if the attr is null or undefined.
# In edit.js remove data[index], change useState into object data and work directly with object.
# Remove duplicates code.
# Style everything!
# Cleaner code!
 
