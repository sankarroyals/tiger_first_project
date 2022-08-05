import React from 'react';
import './publish.scss';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Checkbox } from "@mui/material";
import { useNavigate } from 'react-router';


const Publish = () => {

  const navigate = useNavigate()


  const rows = [
    {
      id: 1143155,
      name: "My Report",
      
     
      created_at: "04-Apr-2022 11:03 AM",
      created_by: "Smith White"

    }]
    
  return (
    <div>
    <Button style={{position:"absolute",right:"10px",top:"100px"}}
    onClick={()=>{
      navigate('/add')
    }}
    
    >Add New Report</Button>
      <TableContainer component={Paper} className="table" style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell head">Report Id</TableCell>
            <TableCell className="tableCell head">Report Name</TableCell>
            <TableCell className="tableCell head">Created At</TableCell>
            <TableCell className="tableCell head">Created By</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>

              <TableCell className="tableCell">{row.name}</TableCell>

              
           
              
              <TableCell className="tableCell">{row.created_at}</TableCell>
              <TableCell className="tableCell">
                {row.created_by}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Publish