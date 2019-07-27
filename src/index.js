const { registerBlockType } = wp.blocks;

registerBlockType( 'block-restrict-content/block-restrict-content', {
	title: 'Restrict Content',
	icon: 'lock',
	category: 'layout',
	edit: ( ) => {
        return ( 
            <div>Hola Editor!</div>
        )
    },
	save: ( ) => {
        return ( 
            <div>Hola Frontend!</div>
        )
    }
} );
