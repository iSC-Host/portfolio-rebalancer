import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';

const NewPortfolioButton = ({createNewPortfolio}) => {

    return (
		<FlatButton
		  label="NEW"
            onClick={createNewPortfolio}
		  labelPosition="before"
		  icon={<ContentCreate />}
		  style={{
			  width: 'auto',
				}}
		/>

    );
};

NewPortfolioButton.propTypes = {
    createNewPortfolio: PropTypes.func.isRequired,
};

export default NewPortfolioButton;