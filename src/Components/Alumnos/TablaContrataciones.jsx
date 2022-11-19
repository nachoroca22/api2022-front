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
import CommentIcon from '@mui/icons-material/Comment';
import ModalContrataciones from '../Common/ModalContrataciones/ModalContrataciones.jsx'
import ModalEditarContratacionesAlumno from '../Common/ModalContrataciones/ModalEditarContratacionesAlumno'
import ModalComentar from './ModalComentar.jsx'
import {Modal} from "@mui/material";
import { obtenerContratacionesAlumno } from '../../Services/contrataciones.js';


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
  const id_alumno = localStorage.getItem("id")
  const [contrataciones, cargarContrataciones] = useState(false);
  const [contratacionesAlumno, setContratacionesAumno] = useState([]);

  const [isOpenModalInfoContratacion, setIsOpenModalInfoContratacion] = useState(false);
  const openModalInfoContratacion = () =>{setIsOpenModalInfoContratacion(true)};
  const closeModalInfoContratacion = () =>{setIsOpenModalInfoContratacion(false)};

  const [isOpenModalEditarContratacion, setIsOpenModalEditarContratacion] = useState(false);
  const openModalEditarContratacion = () =>{setIsOpenModalEditarContratacion(true)};
  const closeModalEditarContratacion = () =>{setIsOpenModalEditarContratacion(false);cargarContrataciones(false)};

  const [isOpenModalComentar, setIsOpenModalComentar] = useState(false);
  const openModalComentar = () =>{setIsOpenModalComentar(true)};
  const closeModalComentar = () =>{setIsOpenModalComentar(false)};

  const [contracionSeleccionada,setContratacionSeleccionada] = useState({
    id_alumno: null,
    id_user: null,
    id_clase: null,
    costo: null,
    mensaje: null,
    horario: null,
    profesor: null,
    usuario: null,
    tipoClase: null,
    duracion: null,
    frecuencia: null,
    materia: null,
    alumno: null,
    telefono_alumno: null,
    usuario_alumno: null,
    calificacion_alumno: null,
    estado: null,
    comentario: null,
    estado_comentario: null,
    id_contratacion: null,
  });

  if(contrataciones === false) {
    cargarContrataciones(true)
    obtenerContratacionesAlumno(id_alumno)
    .then((response) => {
      setContratacionesAumno(response.data.docs)})
  }
  const viewInfoContratacionSeleccionada =(contratacion) => {
    setContratacionSeleccionada({
      id_alumno: contratacion.id_alumno,
      id_user: contratacion.id_user,
      id_clase: contratacion.id_clase,
      costo: contratacion.costo,
      mensaje: contratacion.mensaje,
      horario: contratacion.horario,
      profesor: contratacion.profesor,
      usuario: contratacion.usuario,
      tipoClase: contratacion.tipoClase,
      duracion: contratacion.duracion,
      frecuencia: contratacion.frecuencia,
      materia: contratacion.materia,
      alumno: contratacion.alumno,
      telefono_alumno: contratacion.telefono_alumno,
      usuario_alumno: contratacion.usuario_alumno,
      calificacion_alumno: contratacion.calificacion_alumno,
      estado: contratacion.estado,
      comentario: contratacion.comentario,
      estado_comentario: contratacion.estado_comentario,
      id_contratacion: contratacion.id_contratacion,

    })
    openModalInfoContratacion()
  } 

  const editInfoContratacionSeleccionada =(contratacion) => {
    setContratacionSeleccionada({
      id_alumno: contratacion.id_alumno,
      id_user: contratacion.id_user,
      id_clase: contratacion.id_clase,
      costo: contratacion.costo,
      mensaje: contratacion.mensaje,
      horario: contratacion.horario,
      profesor: contratacion.profesor,
      usuario: contratacion.usuario,
      tipoClase: contratacion.tipoClase,
      duracion: contratacion.duracion,
      frecuencia: contratacion.frecuencia,
      materia: contratacion.materia,
      alumno: contratacion.alumno,
      telefono_alumno: contratacion.telefono_alumno,
      usuario_alumno: contratacion.usuario_alumno,
      calificacion_alumno: contratacion.calificacion_alumno,
      estado: contratacion.estado,
      comentario: contratacion.comentario,
      estado_comentario: contratacion.estado_comentario,
      id_contratacion: contratacion.id_contratacion,
    })
    
    openModalEditarContratacion()
  }

  const comentarContratacionSeleccionada =(contratacion) => {
    setContratacionSeleccionada({
      id_alumno: contratacion.id_alumno,
      id_user: contratacion.id_user,
      id_clase: contratacion.id_clase,
      costo: contratacion.costo,
      mensaje: contratacion.mensaje,
      horario: contratacion.horario,
      profesor: contratacion.profesor,
      usuario: contratacion.usuario,
      tipoClase: contratacion.tipoClase,
      duracion: contratacion.duracion,
      frecuencia: contratacion.frecuencia,
      materia: contratacion.materia,
      alumno: contratacion.alumno,
      telefono_alumno: contratacion.telefono_alumno,
      usuario_alumno: contratacion.usuario_alumno,
      calificacion_alumno: contratacion.calificacion_alumno,
      estado: contratacion.estado,
      comentario: contratacion.comentario,
      estado_comentario: contratacion.estado_comentario,
      id_contratacion: contratacion.id_contratacion,
    })
    openModalComentar()
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contratacionesAlumno.length) : 0;

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
      <Table  sx={{minWidth: 450, minHeight: "70vh", backgroundColor:"#F2EDDB"}} aria-label="simple table">
        <TableHead sticky sx={{backgroundColor:"#10223D"}}>
          <TableRow> 
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Clase</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Tipo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Frecuencia</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Profesor</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Costo</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Gestionar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{justifyContent:"center", alignContent:"center"}}>
        {(rowsPerPage > 0
            ? contratacionesAlumno.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : contratacionesAlumno
          ).map((row) => (
            <TableRow
              key={row.id_contratacion}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >

              <TableCell sx={{color:"#10223D"}} align="center" component="th" scope="row">{row.materia}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.tipoClase}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.frecuencia}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.profesor}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">${row.costo}</TableCell>
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
                contratacion={contracionSeleccionada}
                //sx={{opacity:"0.5"}}
                open={isOpenModalEditarContratacion}
                onClose={closeModalEditarContratacion}
              > 
                <ModalEditarContratacionesAlumno
                  open={isOpenModalEditarContratacion}
                  contratacion={contracionSeleccionada}
                  mensaje="¿Esta seuro que quiere APROBAR el comentario"
                  close={closeModalEditarContratacion}
                ></ModalEditarContratacionesAlumno>
              </Modal>  
   
              <CommentIcon 
                onClick={() => comentarContratacionSeleccionada(row)}
                variant="contained"
                sx={{
                  alignItems: "center",
                  justifyItems: "center",
                  cursor: "pointer",
                  color: "#d6533c",
                }}>
              </CommentIcon>
              <Modal
                open={isOpenModalComentar}
                onClose={closeModalComentar}
              >
                <ModalComentar
                  mensaje="¿Esta seuro que quiere APROBAR el comentario"
                  close={closeModalComentar}
                  contratacion={contracionSeleccionada}
                ></ModalComentar>
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
              count={contratacionesAlumno.length}
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
