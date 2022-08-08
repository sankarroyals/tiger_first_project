import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const List = () => {
  const [rows,setRows] = useState( [
    {
      id: 1143155,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143156,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "canceled",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143157,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "pending",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143158,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "canceled",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143159,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    
  ]);
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell head">Model Name</TableCell>
            <TableCell className="tableCell head">Parent Project</TableCell>
            <TableCell className="tableCell head">Status</TableCell>
            <TableCell className="tableCell head">Pipeline Health</TableCell>
            <TableCell className="tableCell head">Performance Drift</TableCell>
            <TableCell className="tableCell head">Left Run Status</TableCell>
            <TableCell className="tableCell head">Left Run Status</TableCell>
            <TableCell className="tableCell head">Devloper</TableCell>
            <TableCell className="tableCell head">Control Panel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.name}</TableCell>

              <TableCell className="tableCell">{row.parent_project_name}</TableCell>

              <TableCell className="tableCell">
                {row.status === 'approved' ?
                  <span className={`status ${row.status}`}>
                    <i class="fas fa-check"></i>
                  </span>
                  :

                  (row.status === 'pending' ?


                    <span className={`status ${row.status}`}><i class="fas fa-exclamation"></i></span>

                    :
                    <span className={`status ${row.status}`}><i class="fa-solid fa-xmark"></i></span>

                  )

                }
              </TableCell>
              <TableCell className="tableCell">
                {row.pipeline_status === 'approved' ?
                  <span className={`status ${row.pipeline_status}`}>
                    <i class="fas fa-check"></i>
                  </span>
                  :

                  (row.status === 'pending' ?


                    <span className={`status ${row.pipeline_status}`}><i class="fas fa-exclamation"></i></span>

                    :
                    <span className={`status ${row.pipeline_status}`}><i class="fa-solid fa-xmark"></i></span>

                  )

                }
              </TableCell>
              <TableCell className="tableCell">
                {row.performance_status === 'approved' ?
                  <span className={`status ${row.performance_status}`}>
                    <i class="fas fa-check"></i>
                  </span>
                  :

                  (row.status === 'pending' ?


                    <span className={`status ${row.performance_status}`}><i class="fas fa-exclamation"></i></span>

                    :
                    <span className={`status ${row.performance_status}`}><i class="fa-solid fa-xmark"></i></span>

                  )

                }
              </TableCell>
              <TableCell className="tableCell">{row.last_run_status}</TableCell>

              <TableCell className="tableCell">
                <div className="boxC">

                  <Checkbox className="box" defaultChecked
                    onClick={(e) => {
                      if (e.target.checked) {
                        console.log('checked')
                      }
                      else {
                        console.log("unchecked")
                      }
                    }}
                  ></Checkbox>
                  <Checkbox className="box"
                   onClick={(e) => {
                      if (e.target.checked) {
                        console.log('checked')
                      }
                      else {
                        console.log("unchecked")
                      }
                    }}
                  
                  ></Checkbox>
                  <Checkbox className="box"
                   onClick={(e) => {
                      if (e.target.checked) {
                        console.log('checked')
                      }
                      else {
                        console.log("unchecked")
                      }
                    }}
                  
                  ></Checkbox>
                  <Checkbox className="box"
                   onClick={(e) => {
                      if (e.target.checked) {
                        console.log('checked')
                      }
                      else {
                        console.log("unchecked")
                      }
                    }}
                  
                  ></Checkbox>
                  <Checkbox className="box"
                   onClick={(e) => {
                      if (e.target.checked) {
                        console.log('checked')
                      }
                      else {
                        console.log("unchecked")
                      }
                    }}
                  
                  ></Checkbox>
                 
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.developer}</TableCell>
              <TableCell className="tableCell">
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
