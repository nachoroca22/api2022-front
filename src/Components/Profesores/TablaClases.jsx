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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import {Grid, Modal} from "@mui/material";
import ModalClases from "./ModalClases.jsx";
import ModalEditClases from "./ModalEditClases.jsx";
import ModalConfirmarBorrarClase from "./ModalConfirmarBorrarClase";
import ModalNewClases from "./ModalNewClases.jsx";
import { LoadingButton } from '@mui/lab'
import { obtenerClasesProfesor } from "../../Services/clases";


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


export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [isOpenModalNewClases, setIsOpenModalNewClases] = useState(false);
  const openModalNewClases = () => setIsOpenModalNewClases(true);
  const closeModalNewClases = () => {
    setIsOpenModalNewClases(false) ;
    setSubmitted(false)
  };

  const [isOpenModalInfoClases, setIsOpenModalInfoClases] = useState(false);
  const openModalInfoClases = () => setIsOpenModalInfoClases(true);
  const closeModalInfoClases = () => setIsOpenModalInfoClases(false);
  
  const [isOpenModalEditClases, setIsOpenModalEditClases] = useState(false);
  const openModalEditClases = () => setIsOpenModalEditClases(true);
  const closeModalEditClases = () => {setIsOpenModalEditClases(false);setSubmitted(false)};
  
  const [isOpenModalBorrarClases, setIsOpenModalBorrarClases] = useState(false);
  const openModalBorrarClases = () => setIsOpenModalBorrarClases(true);
  const closeModalBorrarClases = () => {
    setIsOpenModalBorrarClases(false);
    setSubmitted(false)
  }
  
  const [claseSeleccionada,setClaseSeleccionada] = useState({
    id_clase: '',
    id_profesor: '',
    materia: '',
    tipoClase: '',
    costo: '',
    frecuencia: '',
    duracion: '',
    descripcion: '',
    calificacion: '',
    contrataciones: '',

  });

  const viewClaseSeleccionada =(clase) => {
    setClaseSeleccionada({
      id_clase: clase.id_clase,
      id_profesor: clase.id_profesor,
      materia: clase.materia,
      tipoClase: clase.tipoClase,
      costo: clase.costo,
      frecuencia: clase.frecuencia,
      duracion: clase.duracion,
      descripcion: clase.descripcion,
      calificacion: clase.calificacion,
      contrataciones: clase.contrataciones,

    })
    openModalInfoClases(clase)
  }

  const editClaseSeleccionada =(clase) => {
    setClaseSeleccionada({
      id_clase: clase.id_clase,
      id_profesor: clase.id_profesor,
      materia: clase.materia,
      tipoClase: clase.tipoClase,
      costo: clase.costo,
      frecuencia: clase.frecuencia,
      duracion: clase.duracion,
      descripcion: clase.descripcion,
      calificacion: clase.calificacion,
      contrataciones: clase.contrataciones,
    })
    openModalEditClases()
  }

  const borrarClaseSeleccionada =(clase) => {
    setClaseSeleccionada({
      id_clase: clase.id_clase,
      id_profesor: clase.id_profesor,
      materia: clase.materia,
      tipoClase: clase.tipoClase,
      costo: clase.costo,
      frecuencia: clase.frecuencia,
      duracion: clase.duracion,
      descripcion: clase.descripcion,
      calificacion: clase.calificacion,
      contrataciones: clase.contrataciones,   
    })
    openModalBorrarClases()
  }

  const [rows, setClasesPofesor]=React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const id_profesor = localStorage.getItem("id")

  const recargarClasesPofesor = () => {
    obtenerClasesProfesor(id_profesor)
    .then((response) => {
      setClasesPofesor(response.data.docs)
    })
  }
  if (submitted === false){
    setSubmitted(true)
    recargarClasesPofesor(); 
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
       <Grid item sx={{backgroundColor:"#F2EDDB"}} xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
            <LoadingButton 
              onClick={openModalNewClases}
              variant="contained" 
              size='large' 
              sx={{borderRadius:"10px",marginBottom:"20px",marginTop:"10px" }}
              > Nueva Clase
            </LoadingButton> 
            
            <Modal
                open={isOpenModalNewClases}
                onClose={closeModalNewClases}
              >
              <ModalNewClases
                open={isOpenModalNewClases}
                onClose={closeModalNewClases}
              >
              </ModalNewClases>
            </Modal>
        </Grid>
      <Table  sx={{minWidth: 450, minHeight: "70vh", backgroundColor:"#F2EDDB"}} aria-label="simple table">
        <TableHead sticky sx={{backgroundColor:"#10223D"}}>
          <TableRow>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Materia</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Tipo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Frecuencia</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Costo</TableCell>
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
              <TableCell sx={{color:"#10223D"}} align="center">{row.tipoClase}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.frecuencia}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">${row.costo}</TableCell>
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
                //sx={{opacity:"0.7"}}
                open={isOpenModalInfoClases}
                onClose={closeModalInfoClases}
              >
              <ModalClases
              clase={claseSeleccionada}
              onClose={closeModalInfoClases}
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
                //sx={{opacity:"1"}}
                open={isOpenModalEditClases}
                onClose={closeModalEditClases}
              >
                <ModalEditClases
                clase={claseSeleccionada}
                onClose={closeModalEditClases}
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
                  clase={claseSeleccionada}
                  sx={{opacity:"0.7"}}
                  open={isOpenModalBorrarClases}
                  onClose={closeModalBorrarClases}
                >
                  <ModalConfirmarBorrarClase
                    mensaje="¿Esta seuro que quiere borrar la clase "
                    close={closeModalBorrarClases}
                    clase={claseSeleccionada}
                  ></ModalConfirmarBorrarClase>
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
