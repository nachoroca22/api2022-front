import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Table from '@mui/material/Table';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import ModalContrataciones from '../Common/ModalContrataciones/ModalContrataciones.jsx'
import ModalEditarContrataciones from '../Common/ModalContrataciones/ModalEditarContrataciones.jsx'
import {Modal} from "@mui/material";
import data from '../../data/contrataciones.json';

const rows = data


interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(
  clase_id: string,
  profesor: string,
  profesorEmail: string,
  tipo: string,
  alumno: string,
  alumno_nombre: string,
  alumno_telefono: string,
  costo: string,
  estado: string,
  msjContacto: string,
  horaContacto: string,
  comentarios: string,
) {
  return { clase_id, profesor, profesorEmail, tipo, alumno, alumno_nombre, alumno_telefono, costo, estado,msjContacto,horaContacto,comentarios };
}

export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [isOpenModalInfoContratacion, setIsOpenModalInfoContratacion] = useState();
  const openModalInfoContratacion = () =>{setIsOpenModalInfoContratacion(true)};
  const closeModalInfoContratacion = () =>{setIsOpenModalInfoContratacion(false)};

  const [isOpenModalEditarContratacion, setIsOpenModalEditarContratacion] = useState();
  const openModalEditarContratacion = () =>{setIsOpenModalEditarContratacion(true)};
  const closeModalEditarContratacion = () =>{setIsOpenModalEditarContratacion(false)};

  const [contracionSeleccionada,setContratacionSeleccionada] = useState({
    clase_id: "",
    profesor: "",
    profesorEmail: "",
    tipo: "",
    alumno: "",
    alumno_nombre: "",
    alumno_telefono: "",
    costo: "",
    estado: "",
    msjContacto: "",
    horaContacto: "",
    comentarios: "",
  });

  const viewInfoContratacionSeleccionada =(contratacion) => {
    setContratacionSeleccionada({
      clase_id: contratacion.clase_id,
      profesor: contratacion.profesor,
      profesorEmail: contratacion.profesorEmail,
      tipo: contratacion.tipo,
      alumno: contratacion.alumno,
      alumno_nombre: contratacion.alumno_nombre,  
      alumno_telefono: contratacion.alumno_telefono,  
      costo: contratacion.costo,  
      estado: contratacion.estado,  
      msjContacto: contratacion.msjContacto,
      horaContacto: contratacion.horaContacto,
      comentarios: contratacion.comentarios,
    })
    openModalInfoContratacion(contratacion)
  }

  const editInfoContratacionSeleccionada =(contratacion) => {
    setContratacionSeleccionada({
      clase_id: contratacion.clase_id,
      profesor: contratacion.profesor,
      profesorEmail: contratacion.profesorEmail,
      tipo: contratacion.tipo,
      alumno: contratacion.alumno,
      alumno_nombre: contratacion.alumno_nombre,  
      alumno_telefono: contratacion.alumno_telefono,  
      costo: contratacion.costo,  
      estado: contratacion.estado,  
      msjContacto: contratacion.msjContacto,
      horaContacto: contratacion.horaContacto,
      comentarios: contratacion.comentarios,
    })
    openModalEditarContratacion(contratacion)
  }
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  
  return (
    <TableContainer 
    component={Paper} >
      <Table  sx={{minWidth: 450, minHeight: 500, backgroundColor:"#F2EDDB"}} aria-label="simple table">
        <TableHead sticky sx={{backgroundColor:"#10223D"}}>
          <TableRow> 
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Clase</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Tipo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Alumno</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Costo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Estado</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Gestionar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{justifyContent:"center", alignContent:"center"}}>
        {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >

              <TableCell sx={{color:"#10223D"}} align="center" component="th" scope="row">{row.clase_id}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.tipo}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.alumno}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">${row.costo}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.estado}</TableCell>
              <TableCell align="center">
              <InfoIcon 
                      onClick={() => viewInfoContratacionSeleccionada(row)}
                      variant="contained"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                        cursor: "pointer",
                        color: "#d6533c",
                      }}>      
              </InfoIcon>
              <Modal
                sx={{opacity:"0.5"}}
                open={isOpenModalInfoContratacion}
                onClose={closeModalInfoContratacion}
              >
                <ModalContrataciones
                  mensaje="¿Esta seuro que quiere APROBAR el comentario"
                  close={closeModalInfoContratacion}
                  contratacion={contracionSeleccionada}
                ></ModalContrataciones>
              </Modal>  


              <EditIcon 
                onClick={() => editInfoContratacionSeleccionada(row)}
                variant="contained"
                sx={{
                  alignItems: "center",
                  justifyItems: "center",
                  cursor: "pointer",
                  color: "#d6533c",
                }}>

              </EditIcon>

              <Modal
                sx={{opacity:"0.5"}}
                open={isOpenModalEditarContratacion}
                onClose={closeModalEditarContratacion}
              >
                <ModalEditarContrataciones
                  mensaje="¿Esta seuro que quiere APROBAR el comentario"
                  close={closeModalEditarContratacion}
                  contratacion={contracionSeleccionada}
                ></ModalEditarContrataciones>
              </Modal> 

             </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
