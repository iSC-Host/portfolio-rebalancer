import React, { Component, PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import SymbolTextField from './SymbolTextField';
import AllocationTextField from './AllocationTextField';
import PriceTextField from './PriceTextField';
import PriceProgress from './PriceProgress';
import UnitsTextField from './UnitsTextField';
import RemoveSecurityButton from './RemoveSecurityButton';
import classNames from 'classnames/bind';
import styles from '../../../css/components/portfolio-table/security-row';

const cx = classNames.bind(styles);

const SecurityRow = ({security, securitySelect, removeSecurity, securityTextFieldChange}) => {
  return (<TableRow
                    id={'securityRow' + security.symbol}
                    className={cx('TableRow')}>
    <TableRowColumn className={cx('TableRowColumn')}>
      <SymbolTextField
                               index={security.index}
                               symbol={security.symbol}
                               symbolSelect={securitySelect.symbolSelect}
                               securityTextFieldChange={securityTextFieldChange} />
    </TableRowColumn>
    <TableRowColumn className={cx('TableRowColumn')}>
      <AllocationTextField
                                   index={security.index}
                                   allocation={security.allocation}
                                   allocationSelect={securitySelect.allocationSelect}
                                   securityTextFieldChange={securityTextFieldChange} />
    </TableRowColumn>
    <TableRowColumn className={cx('TableRowColumn')}>
      <PriceTextField
                              index={security.index}
                              price={security.price}
                              priceSelect={securitySelect.priceSelect}
                              securityTextFieldChange={securityTextFieldChange} />
    </TableRowColumn>
    <TableRowColumn className={cx('TableRowColumn')}>
      <UnitsTextField
                              index={security.index}
                              units={security.units}
                              unitsSelect={securitySelect.unitsSelect}
                              securityTextFieldChange={securityTextFieldChange} />
    </TableRowColumn>
    <TableRowColumn className={cx('TableRowColumnRemoveLast')}>
      <RemoveSecurityButton
                                    index={security.index}
                                    removeSecurity={removeSecurity} />
    </TableRowColumn>
  </TableRow>);
};

SecurityRow.propTypes = {
  security: PropTypes.object.isRequired,
  securitySelect: PropTypes.object.isRequired,
  removeSecurity: PropTypes.func.isRequired,
  securityTextFieldChange: PropTypes.func.isRequired
};

export default SecurityRow;
