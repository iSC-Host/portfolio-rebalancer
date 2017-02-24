import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames/bind';
import styles from '../../../css/components/portfolio/portfolio-table/delete-model-portfolio-button';

const cx = classNames.bind( styles );

const DeleteModelPortfolioButton = ({id, deleteModelPortfolio, visibility}) => {
  const handleOnClick = function handleOnClickFunc() {
    deleteModelPortfolio( id );
  };

  const getDeleteModelPortfolioButton = function getDeleteModelPortfolioButtonFunc( givenVisbility, onClickFunction ) {
    switch (givenVisbility) {
      case 'visible':
        return (<IconButton
                    onTouchTap={ onClickFunction }
                    touch
                    className={ cx( 'delete-model-portfolio-button' ) }>
          <ActionDeleteForever />
        </IconButton>);
      case 'disabled':
        return (<IconButton
                    disabled
                    onTouchTap={ onClickFunction }
                    touch
                    className={ cx( 'delete-model-portfolio-button' ) }>
          <ActionDeleteForever />
        </IconButton>
        );
      case 'hidden':
      default:
        return null;
    }
  };

  const deleteModelPortfolioButton = getDeleteModelPortfolioButton( visibility, handleOnClick );

  return (
  <div
       data-tip
       data-for="deleteModelPortfolioButtonTooltip"
       className={ cx( 'delete-model-portfolio-button-container' ) }>
    { deleteModelPortfolioButton }
    <ReactTooltip id="deleteModelPortfolioButtonTooltip">
      <p>
        Delete
      </p>
    </ReactTooltip>
  </div>
  );
};

DeleteModelPortfolioButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteModelPortfolio: PropTypes.func.isRequired,
  visibility: PropTypes.string.isRequired
};

export default DeleteModelPortfolioButton;
