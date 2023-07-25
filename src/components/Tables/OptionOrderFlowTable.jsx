import utils from "@/Utils/Utils";
import mainTheme from "@/styles/MainTheme";
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import { format } from "date-fns";
import PropTypes from "prop-types";
import * as React from "react";
import TableLoading from "../TableLoading/TableLoading";

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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, columns } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell, index) => (
          <TableCell
            key={index}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontWeight: "bold",
              fontSize: "12px",
              letterSpacing: "2px",
              color: "white",
              width: "100%",
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                color: "white !important",
                opacity: "0.4",
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar(props) {
  const { title } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        backgroundColor: mainTheme.palette.info.main,
        color: "white",
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%", textAlign: "center" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
    </Toolbar>
  );
}

const OptionOrderFlowTable = ({ columns, rows, loading }) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("tradeTime");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          mb: 2,
        }}
      >
        <EnhancedTableToolbar title={"Options Order Flow"} />
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              backgroundColor: mainTheme.palette.info.main,
              color: "white",
            }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              columns={columns}
            />
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3}>
                    <TableLoading />
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {visibleRows.length > 0 ? (
                  visibleRows.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {format(new Date(row.tradeTime), "MM/dd/yyyy")}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {row.ticker}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {row.expirationDate}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {utils.getDollarPrice(row.strikePriceInCents)}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {row.contractType === "CALL" ? (
                            <Chip
                              fontWeight={600}
                              label={row.contractType}
                              color="success"
                              sx={{
                                backgroundColor: "rgba(46, 125, 50, 0.1)",
                                fontWeight: "bold",
                              }}
                              variant="outlined"
                            />
                          ) : (
                            <Chip
                              fontWeight={600}
                              label={row.contractType}
                            color="error"
                              sx={{
                                backgroundColor: "rgba(216, 160, 158, 0.2)",
                                fontWeight: "bold",
                                color: "rgb(216 160 158)",
                                border: "solid rgb(216 160 158) 1px",
                              }}
                              variant="outlined"
                            />
                          )}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          <Chip
                            fontWeight={600}
                            label={"Bullish"}
                            color="error"
                            variant="outlined"
                            sx={{
                              backgroundColor: "rgba(216, 160, 158, 0.2)",
                              fontWeight: "bold",
                              color: "rgb(216 160 158)",
                              border: "solid rgb(216 160 158) 1px",
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                          align="left"
                        >
                          {row.referencePriceInCents}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                            minWidth: "200px",
                          }}
                          align="left"
                        >
                          {`${row.size} @ ${utils.getDollarPrice(
                            row.fairPriceInCents
                          )}`}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                            minWidth: "200px",
                          }}
                          align="left"
                        >
                          {`${utils.getDollarPrice(
                            row.bidPriceInCents
                          )} @ ${utils.getDollarPrice(row.askPriceInCents)}`}
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      <Typography variant="body1">No Records Found</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default OptionOrderFlowTable;
