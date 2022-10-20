import React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
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
import data from '../../data/clases.json'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import {Modal} from "@mui/material";
import ModalClases from "./ModalClases.jsx";
import ModalEditClases from "./ModalEditClases.jsx";
import ModalConfirmar from "../Common/ModalConfirmar/ModalConfirmar.jsx";

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
  id: string,
  profesor: string,
  materia: string,
  usuario: string,
  tipo: string,
  costo: number,
  frecuencia: string,
  duracion: string,
  descripcion: string,
  calificacion: number,
) {
  return { materia, tipo, costo, frecuencia, descripcion, calificacion, id, profesor, usuario, duracion  };
}


export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [isOpenModalInfoClases, setIsOpenModalInfoClases] = useState();
  const openModalInfoClases = () =>{setIsOpenModalInfoClases(true)};
  const closeModalInfoClases = () =>{setIsOpenModalInfoClases(false)};
  
  const [isOpenModalEditClases, setIsOpenModalEditClases] = useState();
  const openModalEditClases = () =>{setIsOpenModalEditClases(true)};
  const closeModalEditClases = () =>{setIsOpenModalEditClases(false)};
  
  const [isOpenModalBorrarClases, setIsOpenModalBorrarClases] = useState();
  const openModalBorrarClases = () =>{setIsOpenModalBorrarClases(true)};
  const closeModalBorrarClases = () =>{setIsOpenModalBorrarClases(false)};
  
  const [claseSeleccionada,setClaseSeleccionada] = useState({
    id: '',
    profesor: '',
    materia: '',
    usuario: '',
    tipo: '',
    costo: '',
    frecuencia: '',
    duracion: '',
    descripcion: '',
    calificacion: '',
    
    
  });

  const viewClaseSeleccionada =(clase) => {
    setClaseSeleccionada({
      id: clase.id,
      profesor: clase.profesor,
      materia: clase.materia,
      usuario: clase.usuario,
      tipo: clase.tipo,
      costo: clase.costo,
      frecuencia: clase.frecuencia,
      duracion: clase.duracion,
      descripcion: clase.descripcion,
      calificacion: clase.calificacion,
    })
    openModalInfoClases(clase)
  }

  const editClaseSeleccionada =(clase) => {
    setClaseSeleccionada({
      id: clase.id,
      profesor: clase.profesor,
      materia: clase.materia,
      usuario: clase.usuario,
      tipo: clase.tipo,
      costo: clase.costo,
      frecuencia: clase.frecuencia,
      duracion: clase.duracion,
      descripcion: clase.descripcion,
      calificacion: clase.calificacion,
    })
    openModalEditClases(clase)
  }

  const borrarClaseSeleccionada =(clase) => {
    setClaseSeleccionada({
      id: clase.id,
      profesor: clase.profesor,
      materia: clase.materia,
      usuario: clase.usuario,
      tipo: clase.tipo,
      costo: clase.costo,
      frecuencia: clase.frecuencia,
      duracion: clase.duracion,
      descripcion: clase.descripcion,
      calificacion: clase.calificacion,   
    })
    openModalBorrarClases(clase)
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
      <Table  sx={{minWidth: 450, minHeight: 20, backgroundColor:"#F2EDDB"}} aria-label="simple table">
        <TableHead sticky sx={{backgroundColor:"#10223D"}}>
          <TableRow>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Materia</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Tipo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Costo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Frecuencia</TableCell>
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
              <TableCell sx={{color:"#10223D"}} align="center" component="th" scope="row">{row.materia}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.tipo}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">${row.costo}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.frecuencia}</TableCell>
              <TableCell align="center">
              <InfoIcon
                onClick={()=>viewClaseSeleccionada(row)}
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
                open={isOpenModalInfoClases}
                onClose={closeModalInfoClases}
              >
              <ModalClases
              clase={claseSeleccionada}
              ></ModalClases>
              </Modal>
                
              <EditIcon
                      onClick={()=>editClaseSeleccionada(row)}
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
                open={isOpenModalEditClases}
                onClose={closeModalEditClases}
              >
                <ModalEditClases
                clase={claseSeleccionada}
                ></ModalEditClases>
              </Modal>
              
              <DeleteIcon
                      onClick={()=>borrarClaseSeleccionada(row)}
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                        cursor: "pointer",
                        color: "#d6533c",
                      }}>
                </DeleteIcon>
                <Modal
                sx={{opacity:"0.5"}}
                open={isOpenModalBorrarClases}
                onClose={closeModalBorrarClases}
              >
                <ModalConfirmar
                  mensaje="¿Esta seuro que quiere borrar la clase "
                  close={closeModalBorrarClases}
                  clase={claseSeleccionada}
                ></ModalConfirmar>
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