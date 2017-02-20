import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames/bind';
import styles from '../../../css/components/portfolio-table/delete-model-portfolio-button';

const cx = classNames.bind(styles);

const DeleteModelPortfolioButton = ({id, deleteModelPortfolio, visibility}) => {
  const handleOnClick = () => {
    deleteModelPortfolio(id);
  };

  const getDeleteModelPortfolioButton = (visibility) => {
    switch (visibility) {
      case 'visible':
        return (<div>
          <IconButton
                              className={cx('DeleteModelPortfolioButton')}
                              touch
                              onTouchTap={handleOnClick}>
            <ActionDeleteForever />
          </IconButton>
          <ReactTooltip id="deleteModelPortfolioButtonTooltip">
            <p>
                      Delete model portfolio
                    </p>
          </ReactTooltip>
        </div>);
      case 'disabled':
        return (<div>
          <IconButton
                              disabled
                              className={cx('DeleteModelPortfolioButton')}
                              touch
                              onTouchTap={handleOnClick}>
            <ActionDeleteForever />
          </IconButton>
          <ReactTooltip id="deleteModelPortfolioButtonTooltip">
            <p>
                      Delete model portfolio
                    </p>
          </ReactTooltip>
        </div>);
      case 'hidden':
      default:
        return null;
    }
  };

  const deleteModelPortfolioButton = getDeleteModelPortfolioButton(visibility);

  return (
    <div
       className={cx('DeleteModelPortfolioDiv')}
       data-tip
       data-for="deleteModelPortfolioButtonTooltip">
      { deleteModelPortfolioButton }
    </div>
  );
};

DeleteModelPortfolioButton.propTypes = {
  visibility: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteModelPortfolio: PropTypes.func.isRequired,
};

export default DeleteModelPortfolioButton;
