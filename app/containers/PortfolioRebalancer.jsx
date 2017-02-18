import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ModelPortfoliosAutoComplete from '../components/portfolioselection/ModelPortfoliosAutoComplete';
import NewPortfolioButton from '../components/portfolioselection/NewPortfolioButton';
import Portfolio from '../components/portfolio/Portfolio';
import InvestmentAmount from '../components/investmentamount/InvestmentAmount';
import GenerateStepsButton from '../components/investmentsteps/GenerateStepsButton';
import StepsList from '../components/investmentsteps/StepsList';
import { createModelPortfolio, typing, incrementCount, decrementCount, destroyModelPortfolio, selectModelPortfolio, createNewPortfolio, selectedModelPortfolioTextFieldChange, addSecurity, removeSecurity, securityTextFieldChange, saveModelPortfolio, deleteModelPortfolio } from '../actions/modelPortfolios';
import { investmentAmountTextFieldChange, investmentAmountTextFieldValid, investmentAmountTextFieldError } from '../actions/investmentAmount';
import { generateSteps, setScrolledToBttom } from '../actions/rebalancings';
import classNames from 'classnames/bind';
import styles from '../css/containers/portfolio-rebalancer';
import { getPortfolioSelect } from '../selectors/index';
import Scroll from 'react-scroll';

const cx = classNames.bind(styles);

class PortfolioRebalancer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {view, setScrolledToBttom} = this.props;
    if (view.justGeneratedSteps) {
      const scroll = Scroll.animateScroll;
      scroll.scrollToBottom();
      setScrolledToBttom();
    }
  }

  render() {
    const {newModelPortfolio, modelPortfolios, selectedModelPortfolio, portfolio, investmentAmount, rebalancingSteps, view, email, createModelPortfolio, destroyModelPortfolio, incrementCount, decrementCount, selectModelPortfolio, createNewPortfolio, selectedModelPortfolioTextFieldChange, addSecurity, removeSecurity, securityTextFieldChange, investmentAmountTextFieldChange, investmentAmountTextFieldValid, investmentAmountTextFieldError, generateSteps, saveModelPortfolio, portfolioSelect, deleteModelPortfolio} = this.props;
    if (!view.displayPortfolio) {
      return (
        <div className={cx('model-portfolio-selector-container')}>
          <ModelPortfoliosAutoComplete
                                              selectModelPortfolio={selectModelPortfolio}
                                              modelPortfolios={modelPortfolios}
                                              email={email} />
          <NewPortfolioButton createNewPortfolio={createNewPortfolio} />
        </div>
      );
    } else {
      return (
        <div>
          <div className={cx('model-portfolio-selector-container')}>
            <ModelPortfoliosAutoComplete
                                                selectModelPortfolio={selectModelPortfolio}
                                                modelPortfolios={modelPortfolios}
                                                email={email} />
            <NewPortfolioButton createNewPortfolio={createNewPortfolio} />
          </div>
          <Portfolio
                   portfolioSelect={portfolioSelect}
                   selectedModelPortfolio={selectedModelPortfolio}
                   selectedModelPortfolioTextFieldChange={selectedModelPortfolioTextFieldChange}
                   portfolio={portfolio}
                   addSecurity={addSecurity}
                   removeSecurity={removeSecurity}
                   securityTextFieldChange={securityTextFieldChange}
                   addSecurity={addSecurity}
                   saveModelPortfolio={saveModelPortfolio}
                   deleteModelPortfolio={deleteModelPortfolio} />
          <InvestmentAmount
                          investmentAmount={investmentAmount}
                          investmentAmountSelect={portfolioSelect.investmentAmountSelect}
                          investmentAmountTextFieldChange={investmentAmountTextFieldChange} />
          <GenerateStepsButton
                             visibility={portfolioSelect.generateStepsButtonVisibility}
                             generateSteps={generateSteps}
                             investmentAmount={investmentAmount}
                             portfolio={portfolio} />
          <StepsList rebalancingSteps={rebalancingSteps} />
        </div>
      );
    }
  }
}

PortfolioRebalancer.propTypes = {
  newModelPortfolio: PropTypes.string,
  modelPortfolios: PropTypes.array.isRequired,
  selectedModelPortfolio: PropTypes.object.isRequired,
  portfolio: PropTypes.array.isRequired,
  investmentAmount: PropTypes.object.isRequired,
  rebalancingSteps: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  typing: PropTypes.func.isRequired,
  createModelPortfolio: PropTypes.func.isRequired,
  destroyModelPortfolio: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  selectModelPortfolio: PropTypes.func.isRequired,
  createNewPortfolio: PropTypes.func.isRequired,
  selectedModelPortfolioTextFieldChange: PropTypes.func.isRequired,
  addSecurity: PropTypes.func.isRequired,
  removeSecurity: PropTypes.func.isRequired,
  investmentAmountTextFieldChange: PropTypes.func.isRequired,
  securityTextFieldChange: PropTypes.func.isRequired,
  generateSteps: PropTypes.func.isRequired,
  setScrolledToBttom: PropTypes.func.isRequired,
  saveModelPortfolio: PropTypes.func.isRequired,
  deleteModelPortfolio: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    modelPortfolios: state.modelPortfolio.modelPortfolios,
    newModelPortfolio: state.modelPortfolio.newModelPortfolio,
    selectedModelPortfolio: state.modelPortfolio.selectedModelPortfolio,
    portfolio: state.modelPortfolio.portfolio,
    investmentAmount: state.investmentAmount.investmentAmount,
    rebalancingSteps: state.rebalancing.rebalancingSteps,
    view: state.view.view,
    email: state.user.email,
    portfolioSelect: getPortfolioSelect(state)
  };
}

export default connect(mapStateToProps, {
  createModelPortfolio,
  typing,
  incrementCount,
  decrementCount,
  destroyModelPortfolio,
  selectModelPortfolio,
  createNewPortfolio,
  selectedModelPortfolioTextFieldChange,
  addSecurity,
  removeSecurity,
  securityTextFieldChange,
  investmentAmountTextFieldChange,
  generateSteps,
  setScrolledToBttom,
  saveModelPortfolio,
  deleteModelPortfolio
})(PortfolioRebalancer);
