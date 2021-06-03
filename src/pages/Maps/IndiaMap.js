import * as React from 'react'
 
import DatamapsIndia from 'react-datamaps-india'
 
const IndiaMap = () => {
  return (
    <div style={{height:"100px"}}>
        <DatamapsIndia
      regionData={{
        Maharashtra: {
          value: 10
        }
      }}
      mapLayout={{
        title: '',
        legendTitle: 'Legend Title',
        startColor: '#FFDAB9',
        endColor: '#FF6347',
        // hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverBorderColor: '#8D8D8D',
        hoverColor: 'green'
      }}
    />
    </div>
  )
}
export default IndiaMap;