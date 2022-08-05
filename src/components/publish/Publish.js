import React from 'react'
import './publish.scss'
import Table from '../table/Table'

const Publish = () => {
  const rows = [
    {
      id: 1143155,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    }]
  return (
    <div>
      <Table rows={rows}/>
    </div>
  )
}

export default Publish