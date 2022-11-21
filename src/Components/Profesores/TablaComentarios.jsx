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
import StarIcon from '@mui/icons-material/Star';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Modal} from "@mui/material";
import ModalAprobarComentario from "./ModalAprobarComentario";
import ModalRechazarComentario from "./ModalReachazarComentario";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {comentariosPendientes} from "../../Services/contrataciones"


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
  tipo: string,
  alumno: string,
  calificacion: string,
  comentarios: String
) {
  return { clase_id, tipo, alumno, calificacion, comentarios };
}

export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const id_user = localStorage.getItem("id")
  const [cargarComentarios, setCargarComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  const [isOpenModalAceptarComentario, setIsOpenModalAceptarComentario] = useState();
  const openModalAceptarComentario = () =>{setIsOpenModalAceptarComentario(true)};
  const closeModalAceptarComentario = () =>{setIsOpenModalAceptarComentario(false)};

  const [isOpenModalBorrarComentario, setIsOpenModalBorrarComentario] = useState();
  const openModalBorrarComentario = () =>{setIsOpenModalBorrarComentario(true)};
  const closeModalBorrarComentario = () =>{setIsOpenModalBorrarComentario(false)};

  if(cargarComentarios === false) {
    setCargarComentarios(true)
    comentariosPendientes(id_user)
    .then((response) => {
      setComentarios(response.data.docs)})
  }
  const [comentarioSeleccionado,setComentarioSeleccionado] = useState({
    id_contratacion:'',
    tipoClase:'',
    alumno:'',
    calificacion_alumno:'',
    comentario:'',
  });

  const viewAceptarComentarioSeleccionado =(comentario) => {
    setComentarioSeleccionado({
      id_contratacion: comentario.id_contratacion,
      tipoClase: comentario.tipoClase,
      alumno: comentario.alumno,
      calificacion_alumno: comentario.calificacion_alumno,
      comentario: comentario.comentario,  
    })
    openModalAceptarComentario(comentario)
  }

  const viewBorrarComentarioSeleccionado =(comentario) => {
    setComentarioSeleccionado({
      id_contratacion: comentario.id_contratacion,
      tipoClase: comentario.tipoClase,
      alumno: comentario.alumno,
      calificacion_alumno: comentario.calificacion_alumno,
      comentario: comentario.comentario,  
    })
    openModalBorrarComentario(comentario)
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - comentarios.length) : 0;

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
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Alumno</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Calificacion</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Comentario</TableCell>
            <TableCell sx={{color:"#F2EDDB", fontSize:"18px"}} align="center">Gestionar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{justifyContent:"center", alignContent:"center"}}>
        {(rowsPerPage > 0
            ? comentarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : comentarios
          ).map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >
              <TableCell sx={{color:"#10223D"}} align="center" component="th" scope="row">{row.materia}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.tipoClase}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center">{row.alumno}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center"><StarIcon sx={{color:'#d6533c'}}></StarIcon>{row.calificacion_alumno}</TableCell>
              <TableCell sx={{color:"#10223D"}} align="center"  style={{width: '40%',}}>{row.comentario}</TableCell>
              <TableCell align="center">
              <CheckCircleIcon 
                      onClick={()=>viewAceptarComentarioSeleccionado(row)}
                      variant="contained"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                        cursor: "pointer",
                        color: "#d6533c",
                      }}
                    >
              </CheckCircleIcon>
              <Modal
                reloadcomentarios={setCargarComentarios}
                comentario={comentarioSeleccionado}
                open={isOpenModalAceptarComentario}
                onClose={closeModalAceptarComentario}
              >
                <ModalAprobarComentario
                  comentario={comentarioSeleccionado}
                  mensaje="¿Esta seguro que quiere APROBAR el comentario"
                  close={closeModalAceptarComentario}
                ></ModalAprobarComentario>
              </Modal>  

              <ThumbDownAltIcon 
                      onClick={()=>viewBorrarComentarioSeleccionado(row)}
                      variant="contained"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                        cursor: "pointer",
                        color: "#d6533c",
                      }}>
              </ThumbDownAltIcon>
              <Modal
                open={isOpenModalBorrarComentario}
                onClose={closeModalBorrarComentario}
              >
                <ModalRechazarComentario
                  mensaje="¿Esta seguro que quiere RECHAZAR el comentario"
                  close={closeModalBorrarComentario}
                  comentario={comentarioSeleccionado}
                ></ModalRechazarComentario>
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
              count={comentarios.length}
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
