import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function createData(
  id,
  status,
  shipperName,
  consignee,
  invoiceNo,
  switchInvoiceNumber,
  gaalApprovedDate,
  pol,
  pod,
  shippingMode,
  term,
  mawbMbl,
  hawbHbl,
  etd,
  eta,
  etaPpgForLclShipment,
  noOfPkg,
  grsWt,
  cWt,
  statusFinal,
  remarks
) {
  return {
    id,
    status,
    shipperName,
    consignee,
    invoiceNo,
    switchInvoiceNumber,
    gaalApprovedDate,
    pol,
    pod,
    shippingMode,
    term,
    mawbMbl,
    hawbHbl,
    etd,
    eta,
    etaPpgForLclShipment,
    noOfPkg,
    grsWt,
    cWt,
    statusFinal,
    remarks
  };
}

const rows = [
  createData(1, 'MOVED', 'LE CHAMP', 'NALUX', '491209', 'GI20230217-5-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', 'OGCSESIN2409015', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 0.6, '', 'CFS WAREHOUSE', ''),
  createData(2, 'MOVED', 'LE CHAMP', 'NALUX', '491210', 'GI20230217-5-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 0.6, '', 'CFS WAREHOUSE', ''),
  createData(3, 'MOVED', 'LE CHAMP', 'NALUX', '491211', 'GI20230217-5-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 1.2, '', 'CFS WAREHOUSE', ''),
  createData(4, 'MOVED', 'LE CHAMP', 'NALUX', '491212', 'GI20230217-5-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 6.4, '', 'CFS WAREHOUSE', ''),
  createData(5, 'MOVED', 'RABYTE', 'NALUX', 'RPIN2425002511', 'GI20240073-3-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 3.08, '', 'CFS WAREHOUSE', ''),
  createData(6, 'MOVED', 'RABYTE', 'NALUX', 'RPIN2425002939', 'GI20240073-5-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 5.6, '', 'CFS WAREHOUSE', ''),
  createData(7, 'MOVED', 'RABYTE', 'NALUX', 'RPIN2425002963', 'GI20240073-5-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 3.04, '', 'CFS WAREHOUSE', ''),
  createData(8, 'MOVED', 'ARROW', 'NALUX', '13372702', 'GI20230049-30-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 3.5, '', 'CFS WAREHOUSE', ''),
  createData(9, 'MOVED', 'ARROW', 'NALUX', '13372704', 'GI20230049-30-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 13.1, '', 'CFS WAREHOUSE', ''),
  createData(10, 'MOVED', 'WPG', 'NALUX', 'Y024090329 / 23752446-67890213', 'GI20240060-7-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 1.48, '', 'CFS WAREHOUSE', ''),
  createData(11, 'MOVED', 'WPG', 'NALUX', 'Y024090328 / 23752258-67883656', 'GI20240060-7-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 1, 2.17, '', 'CFS WAREHOUSE', ''),
  createData(12, 'MOVED', 'ARROW', 'NALUX', '13243485', 'GI20240063-2-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 2, 15.7, '', 'CFS WAREHOUSE', ''),
  createData(13, 'MOVED', 'Dynamic', 'NALUX', 'SS215978', 'GI20230223-4-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 2, 33.8, '', 'CFS WAREHOUSE', ''),
  createData(14, 'MOVED', 'Dynamic', 'NALUX', 'SS215982', 'GI20230223-4-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 2, 18, '', 'CFS WAREHOUSE', ''),
  createData(15, 'MOVED', 'Dynamic', 'NALUX', 'SS216068', 'GI20230223-4-N', '2024-09-16 00:00:00', 'SIN', 'NSA', 'LCL', 'CFR', 'YLSNSA2926NF', '', '2024-09-26 00:00:00', '2024-10-07 00:00:00', '', 15, 276, '', 'CFS WAREHOUSE', ''),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Status',
  },
  {
    id: 'shipperName',
    numeric: false,
    disablePadding: false,
    label: 'Shipper Name',
  },
  {
    id: 'consignee',
    numeric: false,
    disablePadding: false,
    label: 'Consignee',
  },
  {
    id: 'invoiceNo',
    numeric: false,
    disablePadding: false,
    label: 'Invoice No',
  },
  {
    id: 'switchInvoiceNumber',
    numeric: false,
    disablePadding: false,
    label: 'Switch Invoice',
  },
  {
    id: 'gaalApprovedDate',
    numeric: false,
    disablePadding: false,
    label: 'GAAL Approved Date',
  },
  {
    id: 'pol',
    numeric: false,
    disablePadding: false,
    label: 'POL',
  },
  {
    id: 'pod',
    numeric: false,
    disablePadding: false,
    label: 'POD',
  },
  {
    id: 'shippingMode',
    numeric: false,
    disablePadding: false,
    label: 'Shipping Mode',
  },
  {
    id: 'term',
    numeric: false,
    disablePadding: false,
    label: 'Term',
  },
  {
    id: 'mawbMbl',
    numeric: false,
    disablePadding: false,
    label: 'MAWB/MBL',
  },
  {
    id: 'hawbHbl',
    numeric: false,
    disablePadding: false,
    label: 'HAWB/HBL',
  },
  {
    id: 'etd',
    numeric: false,
    disablePadding: false,
    label: 'ETD',
  },
  {
    id: 'eta',
    numeric: false,
    disablePadding: false,
    label: 'ETA',
  },
  {
    id: 'noOfPkg',
    numeric: true,
    disablePadding: false,
    label: 'No of Pkg',
  },
  {
    id: 'grsWt',
    numeric: true,
    disablePadding: false,
    label: 'GRS WT',
  },
  {
    id: 'statusFinal',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const theme = useTheme();
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{
          backgroundColor: theme.palette.primary.main,
        }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all shipments',
            }}
            sx={{
              color: theme.palette.primary.contrastText,
              '&.Mui-checked': {
                color: theme.palette.primary.contrastText,
              },
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '& .MuiTableSortLabel-root': {
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  color: theme.palette.primary.light,
                },
                '&.Mui-active': {
                  color: theme.palette.primary.contrastText,
                },
              },
              '& .MuiTableSortLabel-icon': {
                color: `${theme.palette.primary.contrastText} !important`,
              },
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const theme = useTheme();
  const { numSelected } = props;
  
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Shipment Records
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton sx={{ color: theme.palette.primary.contrastText }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton sx={{ color: theme.palette.primary.contrastText }}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function DSRTable() {
  const theme = useTheme();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('shipperName');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ 
        width: '100%', 
        mb: 2,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        boxShadow: theme.shadows[2],
        '&:hover': {
          boxShadow: theme.shadows[4],
        },
      }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                      '&.Mui-selected': {
                        backgroundColor: theme.palette.action.selected,
                        '&:hover': {
                          backgroundColor: theme.palette.action.selected,
                        },
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.status}
                    </TableCell>
                    <TableCell align="left">{row.shipperName}</TableCell>
                    <TableCell align="left">{row.consignee}</TableCell>
                    <TableCell align="left">{row.invoiceNo}</TableCell>
                    <TableCell align="left">{row.switchInvoiceNumber}</TableCell>
                    <TableCell align="left">{row.gaalApprovedDate}</TableCell>
                    <TableCell align="left">{row.pol}</TableCell>
                    <TableCell align="left">{row.pod}</TableCell>
                    <TableCell align="left">{row.shippingMode}</TableCell>
                    <TableCell align="left">{row.term}</TableCell>
                    <TableCell align="left">{row.mawbMbl}</TableCell>
                    <TableCell align="left">{row.hawbHbl}</TableCell>
                    <TableCell align="left">{row.etd}</TableCell>
                    <TableCell align="left">{row.eta}</TableCell>
                    <TableCell align="right">{row.noOfPkg}</TableCell>
                    <TableCell align="right">{row.grsWt}</TableCell>
                    <TableCell align="left">{row.statusFinal}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={headCells.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}