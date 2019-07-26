const { registerBlockType } = wp.blocks;

const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { InnerBlocks } = wp.editor;
const { PanelBody, SelectControl } = wp.components;

registerBlockType( 'block-restrict-content/block-restrict-content', {
	title: 'Restrict Content',
	icon: 'lock',
	category: 'layout',
	edit: ({ attributes, setAttributes } ) => {
        const { rolesSelected, roles } = attributes;
        const template = [ 'core/paragraph', { placeholder: 'Enter the content...' } ];
        
        return (
            <Fragment> 
                <InspectorControls>
                    <PanelBody>
                    <SelectControl
                        multiple
                        label='Roles:' 
                        value={ rolesSelected } 
                        onChange={ ( rolesSelected ) => { 
                            setAttributes( { rolesSelected } )
                        } }
                        options={ roles.map( role => {
                            return {
                                value: role,
                                label: role
                            }
                        } ) }
                    />
                    </PanelBody>
                </InspectorControls>
                <div style={ { padding: "20px 20px 2px", backgroundColor: "#f4f4f4" }}>
                        <div style={{ textTransform: "uppercase", marginBottom: "10px", fontSize: "12px"}}>
                            Available to { rolesSelected.join(", ") }
                        </div>
                    <InnerBlocks template={ [template] } />
                </div>
            </Fragment>
        )
    },
	save: () => <InnerBlocks.Content />
} );
