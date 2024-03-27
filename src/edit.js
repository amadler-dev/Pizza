import React from 'react';
import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
 

export default function Edit( { attributes, setAttributes } ) {

	// get json data 
	const { useSelect } = wp.data;
	const [ selectedPizza, setSelectedPizza ] = useState([]);

	// get any published post from CPT Pizza
	const pizzaIds = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'pizza', { status : 'publish' } );
	} )

	// populate options for <SelectControl>
	let options = [];
	if( pizzaIds ) {
		options.push( { value: 0, label: 'Select a pizza' } )
		pizzaIds.forEach( ( pizza ) => {
			options.push( 
				{ value : [pizza.title.rendered, pizza.image, pizza.excerpt.rendered], label : pizza.title.rendered } // get the three attributes for the user
			)
		})
	} else {
		options.push( { value: 0, label: 'Loading...' } )
	}

	
	// spilt selectedPizza to attributes in array.
	// update attributes in block.json.
	let data = ["","",""];
	if (typeof selectedPizza === 'string') {
		selectedPizza.split(/\s*,\s*/).forEach((string, index) => {
			if(string == 0 || string == null || string == undefined) 
				data[index] = "";
			if(index == 2)
				data[index] = string.replace(/<[^>]*>?/gm, '');
			else 
				data[index] = string;
		});

		// update attributes
		setAttributes({ title: data && data[0] });
		setAttributes({ image: data && data[1] });
		setAttributes({ link: data && data[2] });
	}


	// create select control
	const MySelectControl = () => (
		<SelectControl
			label="Pick a pizza recipe"
			value={ selectedPizza }
			options={ options }
			onChange={(selected) => { 
				// update the selected pizza 
				setSelectedPizza(selected);
			}}
		/>
	);

	
	return (
		<div { ...useBlockProps() }>
			<MySelectControl value={ selectedPizza } />
			<div className='container'>
				<p>{ data && data[0] }</p>
				<img src={ data && data[1] } />
				<button role="button" className="btn"><a href={ data && data[2] }>Visit Site</a></button>
			</div>
		</div>
	);
}

